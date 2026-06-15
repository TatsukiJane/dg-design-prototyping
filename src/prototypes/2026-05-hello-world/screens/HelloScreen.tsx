import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Icon from '@/shared/primitives/Icon'
import StatusBadge from '@/shared/primitives/StatusBadge'
import { users } from '@/shared/mock/users'
import { documents } from '@/shared/mock/documents'
import { hello } from '../data'

export default function HelloScreen() {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-6 py-8">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="experiment" size={16} />
            Smoke-test
          </div>
          <CardTitle className="text-2xl">{hello.title}</CardTitle>
          <CardDescription>{hello.message}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={() => setClicked(true)} className="gap-2">
            <Icon
              name={clicked ? 'check_circle' : 'ads_click'}
              size={18}
              fill={clicked ? 1 : 0}
              className="text-primary-foreground"
            />
            {clicked ? 'Работает' : 'Нажмите чтобы проверить интерактивность'}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Material Symbols — примеры</CardTitle>
          <CardDescription>
            В прототипах использовать{' '}
            <code>{'<Icon name="..." />'}</code> из{' '}
            <code>@/shared/primitives/Icon</code>. Имена —{' '}
            <a
              href="https://fonts.google.com/icons"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              fonts.google.com/icons
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'home', label: 'home' },
              { name: 'description', label: 'description' },
              { name: 'check_circle', fill: 1, label: 'check_circle fill=1' },
              { name: 'warning', label: 'warning' },
              { name: 'person', label: 'person' },
              { name: 'settings', label: 'settings' },
              { name: 'inbox', label: 'inbox' },
              { name: 'send', label: 'send' },
            ].map(({ name, fill, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 text-center"
              >
                <div className="flex size-10 items-center justify-center rounded-md border bg-muted">
                  <Icon name={name} size={20} fill={fill as 0 | 1 | undefined} />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Пример моков: пользователи</CardTitle>
          <CardDescription>
            Из <code>@/shared/mock/users</code> — доступны в любом прототипе.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {users.slice(0, 5).map((u) => (
              <div
                key={u.id}
                className="flex items-center gap-2 rounded-md border bg-card px-2.5 py-1.5"
              >
                <Avatar className="size-6">
                  <AvatarFallback className="text-[10px]">
                    {u.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm">{u.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Пример моков: документы и статусы</CardTitle>
          <CardDescription>
            <code>StatusBadge</code> из <code>@/shared/primitives</code>.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {documents.map((d) => (
            <div
              key={d.id}
              className="flex items-center justify-between gap-4 border-b py-2 last:border-b-0"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{d.title}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {d.number}
                </p>
              </div>
              <StatusBadge status={d.status} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
