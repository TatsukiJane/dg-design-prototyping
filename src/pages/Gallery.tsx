import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { prototypes } from '@/prototypes/registry'
import EmptyState from '@/shared/primitives/EmptyState'
import Icon from '@/shared/primitives/Icon'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default function Gallery() {
  const sorted = [...prototypes].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="min-h-svh bg-background">
      <header className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="science" size={16} />
            <span>Песочница прототипов</span>
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            DG Design Prototyping
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Кликабельные disposable-прототипы для согласования флоу. После
            одобрения реализуется prod-командой отдельно — этот код в продакшен
            не идёт.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        {sorted.length === 0 ? (
          <EmptyState
            title="Пока ни одного прототипа"
            description="Скажите Claude «добавь прототип ...» — он создаст папку и зарегистрирует флоу в галерее."
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((p) => (
              <Link
                key={p.slug}
                to={`/p/${p.slug}`}
                className="group block focus:outline-none"
              >
                <Card className="h-full transition group-hover:border-foreground/20 group-hover:shadow-sm group-focus-visible:ring-2 group-focus-visible:ring-ring">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-base">{p.title}</CardTitle>
                      <Icon
                        name="open_in_new"
                        size={16}
                        className="shrink-0 text-muted-foreground transition group-hover:text-foreground"
                      />
                    </div>
                    <Badge variant="secondary" className="w-fit font-mono text-xs">
                      {formatDate(p.date)}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
