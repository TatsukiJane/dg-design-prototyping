import type { ComponentType } from 'react'
import HelloWorld from './2026-05-hello-world'
import DGBusinessInbox from './2026-05-dg-business-inbox'
import Messenger from './2026-06-messenger'

export type PrototypeEntry = {
  slug: string
  title: string
  date: string
  description: string
  Component: ComponentType
}

export const prototypes: PrototypeEntry[] = [
  {
    slug: '2026-06-messenger',
    title: 'Мессенджер — базовый UI',
    date: '2026-06-16',
    description: 'Трёхколоночный layout мессенджера: список чатов, контекстный сайдбар и диалог с ботом технической поддержки.',
    Component: Messenger,
  },
  {
    slug: '2026-05-dg-business-inbox',
    title: 'DG Business — главный экран',
    date: '2026-05-21',
    description:
      'Реплика главного экрана входящих документов: верхняя навигация, папки, таблица, правый рейл «Чаты/Маркет». База для дальнейших UX-экспериментов.',
    Component: DGBusinessInbox,
  },
  {
    slug: '2026-05-hello-world',
    title: 'Hello world',
    date: '2026-05-21',
    description:
      'Smoke-test первого прототипа. Проверяет что роутинг, shadcn и Tailwind собраны корректно.',
    Component: HelloWorld,
  },
]
