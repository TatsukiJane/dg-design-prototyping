import type { ReactNode } from 'react'
import BackToGallery from './BackToGallery'

type AppShellProps = {
  title: string
  sidebar?: ReactNode
  children: ReactNode
}

export default function AppShell({ title, sidebar, children }: AppShellProps) {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="flex h-14 items-center justify-between border-b px-4">
        <div className="flex items-center gap-3">
          <BackToGallery />
          <span className="text-muted-foreground">/</span>
          <h1 className="text-sm font-medium">{title}</h1>
        </div>
      </header>
      <div className="flex flex-1">
        {sidebar ? (
          <aside className="w-60 shrink-0 border-r bg-sidebar p-3 text-sidebar-foreground">
            {sidebar}
          </aside>
        ) : null}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
