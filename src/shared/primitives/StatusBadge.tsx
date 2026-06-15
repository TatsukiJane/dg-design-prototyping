import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export type DocStatus =
  | 'draft'
  | 'in_review'
  | 'approved'
  | 'rejected'
  | 'signed'

const LABELS: Record<DocStatus, string> = {
  draft: 'Черновик',
  in_review: 'На согласовании',
  approved: 'Согласован',
  rejected: 'Отклонён',
  signed: 'Подписан',
}

const STYLES: Record<DocStatus, string> = {
  draft: 'bg-muted text-muted-foreground',
  in_review: 'bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200',
  approved: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200',
  rejected: 'bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-200',
  signed: 'bg-sky-100 text-sky-900 dark:bg-sky-900/30 dark:text-sky-200',
}

export default function StatusBadge({ status }: { status: DocStatus }) {
  return (
    <Badge variant="outline" className={cn('border-transparent', STYLES[status])}>
      {LABELS[status]}
    </Badge>
  )
}
