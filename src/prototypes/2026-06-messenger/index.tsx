import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Icon from '@/shared/primitives/Icon'
import { chats, supportMessages, recentChats, type Chat, type Message } from './data'

function Avatar({ chat, size = 40 }: { chat: Pick<Chat, 'initials' | 'avatarColor' | 'isGroup'>; size?: number }) {
  return (
    <div
      className="relative shrink-0 flex items-center justify-center rounded-full text-white font-medium select-none"
      style={{ width: size, height: size, backgroundColor: chat.avatarColor, fontSize: size * 0.35 }}
    >
      {chat.isGroup ? (
        <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="white">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ) : (
        chat.initials
      )}
    </div>
  )
}

function ChatItem({ chat, selected, onClick }: { chat: Chat; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 hover:bg-accent/60 transition-colors text-left ${selected ? 'bg-accent' : ''}`}
    >
      <div className="relative">
        <Avatar chat={chat} size={46} />
        {chat.isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium truncate">{chat.name}</span>
          <span className="text-xs text-muted-foreground shrink-0">{chat.time}</span>
        </div>
        <div className="flex items-center justify-between gap-2 mt-0.5">
          <span className="text-xs text-muted-foreground truncate">{chat.lastMessage}</span>
          {chat.checked && <Icon name="done_all" size={14} className="text-primary shrink-0" />}
          {chat.unread && (
            <span className="bg-primary text-primary-foreground text-xs rounded-full px-1.5 py-0.5 leading-none shrink-0">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  )
}

function formatText(text: string) {
  const lines = text.split('\n')
  return lines.map((line, i) => {
    // Bold **text**
    const parts = line.split(/\*\*(.*?)\*\*/g)
    const formatted = parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)

    // Detect bullet
    const trimmed = line.trim()
    if (trimmed.startsWith('- ')) {
      const content = parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p.replace(/^- /, ''))
      return <li key={i} className="ml-4 list-disc">{content}</li>
    }
    // Detect numbered
    const numMatch = trimmed.match(/^(\d+)\.\s(.*)/)
    if (numMatch) {
      return <li key={i} className="ml-4 list-decimal">{formatted.map((p, j) => typeof p === 'string' ? p.replace(/^\d+\.\s/, '') : p)}</li>
    }
    if (line === '') return <br key={i} />
    return <p key={i}>{formatted}</p>
  })
}

function BotMessage({ msg }: { msg: Message }) {
  const [voted, setVoted] = useState<'up' | 'down' | null>(null)
  const lines = msg.text.split('\n')
  const hasLists = lines.some(l => l.trim().match(/^(\d+\.|-\s)/))

  return (
    <div className="flex flex-col items-start gap-1 max-w-[75%]">
      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm text-sm text-foreground leading-relaxed">
        {hasLists ? (
          <div className="space-y-0.5">{formatText(msg.text)}</div>
        ) : (
          <p>{msg.text}</p>
        )}
        {msg.actions && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {msg.actions.map(a => (
              <button
                key={a.label}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  a.variant === 'primary'
                    ? 'bg-primary text-primary-foreground border-primary hover:bg-primary/90'
                    : 'bg-background border-border text-foreground hover:bg-accent'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-1 px-1">
        <button
          onClick={() => setVoted(voted === 'up' ? null : 'up')}
          className={`p-1 rounded hover:bg-accent transition-colors ${voted === 'up' ? 'text-primary' : 'text-muted-foreground'}`}
        >
          <Icon name="thumb_up" size={14} fill={voted === 'up' ? 1 : 0} />
        </button>
        <button
          onClick={() => setVoted(voted === 'down' ? null : 'down')}
          className={`p-1 rounded hover:bg-accent transition-colors ${voted === 'down' ? 'text-destructive' : 'text-muted-foreground'}`}
        >
          <Icon name="thumb_down" size={14} fill={voted === 'down' ? 1 : 0} />
        </button>
        <button className="p-1 rounded hover:bg-accent transition-colors text-muted-foreground">
          <Icon name="content_copy" size={14} fill={0} />
        </button>
        <span className="text-xs text-muted-foreground ml-1">{msg.time}</span>
      </div>
    </div>
  )
}

function UserMessage({ msg }: { msg: Message }) {
  return (
    <div className="flex flex-col items-end gap-1 max-w-[75%] self-end">
      <div className="bg-[#d9eaff] rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-foreground">
        <p>{msg.text}</p>
      </div>
      <div className="flex items-center gap-1 px-1">
        <span className="text-xs text-muted-foreground">{msg.time}</span>
        <Icon name="done_all" size={14} className="text-primary" />
      </div>
    </div>
  )
}

export default function Messenger() {
  const [selectedId, setSelectedId] = useState<string>('support')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>(supportMessages)

  const selectedChat = chats.find(c => c.id === selectedId)!

  function sendMessage() {
    if (!input.trim()) return
    setMessages(prev => [...prev, {
      id: String(Date.now()),
      sender: 'user',
      text: input.trim(),
      time: new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' }),
    }])
    setInput('')
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Chat list */}
      <div className="w-[340px] shrink-0 flex flex-col border-r">
        {/* Header */}
        <div className="flex items-center gap-2 px-3 py-2 border-b">
          <Button variant="ghost" size="icon" className="shrink-0" asChild>
            <Link to="/"><Icon name="arrow_back" size={20} /></Link>
          </Button>
          <div className="flex-1 flex items-center bg-muted rounded-full px-3 h-9 gap-2">
            <Icon name="search" size={16} className="text-muted-foreground" />
            <input
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Поиск"
            />
          </div>
          <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground">
            <Icon name="check_circle" size={20} fill={0} />
          </Button>
          <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground">
            <Icon name="edit_square" size={20} fill={0} />
          </Button>
        </div>

        {/* Mobile app banner */}
        <div className="mx-3 my-2 flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-xl px-3 py-2">
          <Icon name="smartphone" size={28} className="text-primary shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium">Установите мобильное приложение</p>
            <p className="text-xs text-muted-foreground">Будьте на связи в любое время</p>
          </div>
          <Icon name="chevron_right" size={16} className="text-muted-foreground shrink-0" />
        </div>

        {/* Chat list */}
        <div className="flex-1 overflow-y-auto">
          {chats.map(chat => (
            <ChatItem
              key={chat.id}
              chat={chat}
              selected={chat.id === selectedId}
              onClick={() => setSelectedId(chat.id)}
            />
          ))}
        </div>
      </div>

      {/* Chat view */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 h-14 border-b bg-background shrink-0">
          <Avatar chat={selectedChat} size={36} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">{selectedChat.name}</p>
            {selectedChat.isOnline && (
              <p className="text-xs text-green-500">онлайн</p>
            )}
          </div>
          <button
            onClick={() => setSidebarOpen(v => !v)}
            className={`p-2 rounded-lg transition-colors ${sidebarOpen ? 'bg-accent text-foreground' : 'text-muted-foreground hover:bg-accent'}`}
          >
            <Icon name="side_navigation" size={20} fill={0} />
          </button>
          <button className="p-2 rounded-lg text-muted-foreground hover:bg-accent">
            <Icon name="history" size={20} fill={0} />
          </button>
          <button className="p-2 rounded-lg text-muted-foreground hover:bg-accent">
            <Icon name="add" size={20} />
          </button>
          <button className="p-2 rounded-lg text-muted-foreground hover:bg-accent">
            <Icon name="settings" size={20} fill={0} />
          </button>
          <button className="p-2 rounded-lg text-muted-foreground hover:bg-accent">
            <Icon name="search" size={20} fill={0} />
          </button>
        </div>

        {/* Body: sidebar + messages side by side */}
        <div className="flex flex-1 min-h-0">
          {/* Context sidebar */}
          {sidebarOpen && (
            <div className="shrink-0 flex flex-col py-3 pl-3" style={{ backgroundColor: '#f0f4ff', backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            <div className="w-[220px] h-full flex flex-col rounded-xl border bg-background shadow-sm overflow-hidden">
              <div className="p-2 space-y-0.5 pt-3">
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent text-sm">
                  <Icon name="edit" size={18} className="text-muted-foreground" />
                  Новый чат
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent text-sm">
                  <Icon name="search" size={18} className="text-muted-foreground" />
                  Поиск по чатам...
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent text-sm">
                  <Icon name="menu_book" size={18} className="text-muted-foreground" />
                  База знаний
                </button>
              </div>

              <div className="px-3 mt-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Проекты</span>
                  <button className="text-muted-foreground hover:text-foreground">
                    <Icon name="add" size={16} />
                  </button>
                </div>
              </div>

              <div className="px-3 mt-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Недавние</p>
                <p className="text-xs text-muted-foreground mb-2">Последние 7 дней</p>
                <div className="space-y-0.5">
                  {recentChats.map((name, i) => (
                    <button key={i} className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-accent text-sm truncate text-foreground/80">
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            </div>
          )}

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundColor: '#f0f4ff',
            }}
          >
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' ? <BotMessage msg={msg} /> : <UserMessage msg={msg} />}
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t bg-background shrink-0">
          <div className="flex items-end gap-2 bg-muted rounded-2xl px-3 py-2">
            <button className="text-muted-foreground hover:text-foreground p-1 shrink-0">
              <Icon name="attach_file" size={20} fill={0} />
            </button>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
              }}
              placeholder="Сообщение"
              rows={1}
              className="flex-1 bg-transparent text-sm outline-none resize-none placeholder:text-muted-foreground py-1 max-h-32"
            />
            <button className="text-muted-foreground hover:text-foreground p-1 shrink-0">
              <Icon name="sentiment_satisfied" size={20} fill={0} />
            </button>
            {input.trim() ? (
              <button
                onClick={sendMessage}
                className="bg-primary text-primary-foreground rounded-full p-1.5 shrink-0 hover:bg-primary/90 transition-colors"
              >
                <Icon name="send" size={16} />
              </button>
            ) : (
              <button className="text-muted-foreground hover:text-foreground p-1 shrink-0">
                <Icon name="mic" size={20} fill={0} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
