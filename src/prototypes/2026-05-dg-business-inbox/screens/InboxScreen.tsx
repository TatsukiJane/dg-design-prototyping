import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import Icon from '@/shared/primitives/Icon'
import BackToGallery from '@/shared/layout/BackToGallery'
import { folders, inboxDocs } from '../data'

export default function InboxScreen() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="flex min-h-svh flex-col bg-background">
      {/* Mini back-to-gallery strip */}
      <div className="flex h-7 items-center border-b bg-muted/50 px-4 text-xs">
        <BackToGallery />
      </div>

      {/* Top brand bar */}
      <header className="flex h-14 items-center justify-between border-b bg-background px-4">
        <div className="flex items-center gap-8">
          <div className="flex h-8 w-8 items-center justify-center bg-primary text-[10px] font-bold leading-none text-primary-foreground">
            DOC<br />UME<br />NTO
          </div>
          <nav className="flex items-center gap-1">
            <button className="relative px-3 py-4 text-sm font-medium text-foreground">
              Документы
              <span className="absolute inset-x-3 -bottom-px h-0.5 bg-primary" />
            </button>
            <button className="flex items-center gap-1 px-3 py-4 text-sm text-muted-foreground hover:text-foreground">
              Market <Icon name="expand_more" size={16} />
            </button>
            <button className="flex items-center gap-1 px-3 py-4 text-sm text-muted-foreground hover:text-foreground">
              Моя организация <Icon name="expand_more" size={16} />
            </button>
            <button className="flex items-center gap-1 px-3 py-4 text-sm text-muted-foreground hover:text-foreground">
              Интеграции <Icon name="expand_more" size={16} />
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-primary">Тариф до 22.11.2026</span>
          <Button size="sm" className="gap-2">
            <Icon name="add_circle" size={16} />
            Расширить возможности
          </Button>
          <button className="text-muted-foreground hover:text-foreground">
            <Icon name="apps" size={22} />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <Icon name="help" fill={0} size={22} />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <Icon name="notifications" fill={0} size={22} />
          </button>
          <div className="flex items-center gap-2 border-l pl-4">
            <div className="flex h-8 w-8 items-center justify-center bg-primary text-xs font-medium text-primary-foreground">
              ТА
            </div>
            <div className="leading-tight">
              <div className="text-sm font-medium">Төлеген Айбек</div>
              <div className="text-xs text-primary">@dg_ktsoed</div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Left sidebar */}
        <aside className="flex w-60 shrink-0 flex-col border-r bg-background p-3">
          <Button className="mb-4 w-full justify-center gap-2" size="lg">
            <Icon name="add" size={18} />
            Создать документ
          </Button>

          <nav className="flex flex-col gap-px">
            {folders.map((f) => (
              <button
                key={f.label}
                className={`flex items-center justify-between px-3 py-2 text-sm ${
                  f.active
                    ? 'bg-accent text-accent-foreground font-medium border-l-2 border-primary'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon name={f.icon} fill={f.active ? 1 : 0} size={18} />
                  {f.label}
                </span>
                {f.count !== undefined && (
                  <span className="text-xs text-muted-foreground">{f.count}</span>
                )}
              </button>
            ))}

            <button className="flex items-center justify-between px-3 py-2 text-sm text-foreground hover:bg-muted">
              <span className="flex items-center gap-3">
                <Icon name="folder" fill={0} size={18} />
                Папки
              </span>
              <Icon name="expand_more" size={18} className="text-muted-foreground" />
            </button>
            <button className="flex items-center justify-between px-3 py-2 text-sm text-foreground hover:bg-muted">
              <span className="flex items-center gap-3">
                <Icon name="storefront" fill={0} size={18} />
                Market
              </span>
              <Icon name="expand_more" size={18} className="text-muted-foreground" />
            </button>
          </nav>

          <div className="mt-auto pt-4">
            <button className="flex w-full items-center gap-2 bg-amber-400 px-3 py-2.5 text-sm font-medium text-foreground hover:bg-amber-500">
              <Icon name="smartphone" size={18} />
              Загрузить приложение
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4">
          {/* Toolbar */}
          <div className="mb-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 border px-2 py-1.5">
                <Checkbox />
                <button className="text-muted-foreground">
                  <Icon name="expand_more" size={16} />
                </button>
              </div>
              <button className="border p-1.5 text-muted-foreground hover:bg-muted">
                <Icon name="refresh" size={18} />
              </button>
            </div>
            <div className="relative w-[420px]">
              <Icon
                name="search"
                size={18}
                fill={0}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Поиск по документам"
                className="rounded-full pl-10"
              />
            </div>
          </div>

          {/* Table */}
          <div className="border bg-card">
            {/* Header */}
            <div className="grid grid-cols-[40px_minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)] items-center gap-4 border-b px-4 py-3 text-xs font-medium text-muted-foreground">
              <div></div>
              <div>Тема</div>
              <div className="flex items-center gap-1">
                Тип документа
                <Icon name="filter_alt" fill={0} size={14} />
              </div>
              <div className="flex items-center gap-1">
                № и дата
                <Icon name="filter_alt" fill={0} size={14} />
              </div>
              <div>DOC ID</div>
              <div className="flex items-center gap-1">
                Статус
                <Icon name="filter_alt" fill={0} size={14} />
              </div>
            </div>

            {/* Rows */}
            {inboxDocs.map((d) => (
              <div
                key={d.id}
                className="group grid grid-cols-[40px_minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)] items-center gap-4 border-b px-4 py-3 text-sm hover:bg-muted/50"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={selected.has(d.id)}
                    onCheckedChange={() => toggle(d.id)}
                  />
                  {d.unread && (
                    <span className="h-2 w-2 rounded-full bg-amber-400" aria-label="Не прочитано" />
                  )}
                </div>
                <div className="min-w-0">
                  {d.title && (
                    <div className="truncate font-medium text-foreground">{d.title}</div>
                  )}
                  {d.sender && (
                    <div className="truncate text-xs text-muted-foreground">
                      От: {d.sender}
                    </div>
                  )}
                </div>
                <div className="text-foreground">{d.type}</div>
                <div className="leading-tight">
                  <div className="text-foreground">{d.number}</div>
                  <div className="text-xs text-muted-foreground">{d.date}</div>
                </div>
                <div className="truncate font-mono text-xs text-foreground">{d.docId}</div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="text-primary">{d.status}</span>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-end gap-2 px-4 py-3 text-xs text-muted-foreground">
              <button className="p-1 hover:text-foreground" aria-label="Назад">
                <Icon name="chevron_left" size={20} />
              </button>
              <button className="p-1 hover:text-foreground" aria-label="Вперёд">
                <Icon name="chevron_right" size={20} />
              </button>
              <span className="ml-2">1 - 15 из 185</span>
              <button className="ml-2 p-1 hover:text-foreground">
                <Icon name="more_vert" size={18} />
              </button>
            </div>
          </div>
        </main>

        {/* Right rail */}
        <aside className="flex w-16 shrink-0 flex-col items-center gap-2 border-l bg-background py-3">
          <button className="relative flex w-14 flex-col items-center gap-1 bg-primary p-2 text-primary-foreground">
            <Icon name="chat" size={22} />
            <span className="text-[10px]">Чаты</span>
            <Badge className="absolute -right-1 -top-1 h-5 min-w-5 rounded-full bg-primary px-1.5 text-[10px] ring-2 ring-background">
              19
            </Badge>
          </button>
          <button className="flex w-14 flex-col items-center gap-1 border p-2 text-muted-foreground hover:bg-muted">
            <Icon name="storefront" fill={0} size={22} />
            <span className="text-[10px]">Маркет</span>
          </button>
        </aside>
      </div>
    </div>
  )
}
