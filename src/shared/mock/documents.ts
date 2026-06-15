import type { DocStatus } from '@/shared/primitives/StatusBadge'
import { users } from './users'

export type Document = {
  id: string
  number: string
  title: string
  status: DocStatus
  authorId: string
  updatedAt: string
}

export const documents: Document[] = [
  {
    id: 'd1',
    number: 'ВХ-2026/0451',
    title: 'Договор поставки оборудования №ОБ-12',
    status: 'in_review',
    authorId: users[1].id,
    updatedAt: '2026-05-20T14:32:00Z',
  },
  {
    id: 'd2',
    number: 'ИСХ-2026/0312',
    title: 'Письмо о продлении срока поставки',
    status: 'draft',
    authorId: users[3].id,
    updatedAt: '2026-05-21T09:05:00Z',
  },
  {
    id: 'd3',
    number: 'ВХ-2026/0398',
    title: 'Акт сверки взаиморасчётов за Q1 2026',
    status: 'approved',
    authorId: users[2].id,
    updatedAt: '2026-05-19T18:11:00Z',
  },
  {
    id: 'd4',
    number: 'ВН-2026/0177',
    title: 'Приказ о назначении ответственного по ОТ',
    status: 'signed',
    authorId: users[4].id,
    updatedAt: '2026-05-18T11:40:00Z',
  },
  {
    id: 'd5',
    number: 'ВХ-2026/0421',
    title: 'Уведомление о расторжении договора аренды',
    status: 'rejected',
    authorId: users[1].id,
    updatedAt: '2026-05-15T16:22:00Z',
  },
]
