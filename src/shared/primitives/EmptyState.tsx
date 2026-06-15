import type { ReactNode } from 'react'
import Icon from './Icon'

type EmptyStateProps = {
  /** Имя иконки из Material Symbols */
  icon?: string
  title: string
  description?: string
  action?: ReactNode
}

export default function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <div className="rounded-full bg-muted p-3 text-muted-foreground">
        <Icon name={icon} size={24} />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium">{title}</p>
        {description ? (
          <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  )
}
