export type InboxDoc = {
  id: string
  unread: boolean
  title?: string
  sender: string
  type: 'Договор' | 'Акт' | 'Счёт на оплату'
  number: string
  date: string
  docId: string
  status: 'Подписание' | 'Поступивший'
}

export const inboxDocs: InboxDoc[] = [
  {
    id: '1',
    unread: true,
    title: 'test',
    sender: 'ТОО "PROJECTS DOCUMENTOLOG"',
    type: 'Договор',
    number: 'ПР-1607',
    date: '20 мая 2026',
    docId: 'KZKO2Z1202610002303FB0F32B',
    status: 'Подписание',
  },
  {
    id: '2',
    unread: false,
    title: 'Тест договор',
    sender: 'ТОО "PROJECTS DOCUMENTOLOG"',
    type: 'Договор',
    number: 'ПР-1265',
    date: '8 апр. 2026',
    docId: 'KZKO2Z1202610002233EDC67A6',
    status: 'Подписание',
  },
  {
    id: '3',
    unread: false,
    title: 'Тест договор',
    sender: 'ТОО "PROJECTS DOCUMENTOLOG"',
    type: 'Договор',
    number: 'ПР-1264',
    date: '8 апр. 2026',
    docId: 'KZKO2Z12026100022325999672',
    status: 'Подписание',
  },
  {
    id: '4',
    unread: false,
    title: 'тест',
    sender: 'ТОО "PROJECTS DOCUMENTOLOG"',
    type: 'Договор',
    number: 'ПР-924',
    date: '11 мар. 2026',
    docId: 'KZKO2Z1202610000217430D3273',
    status: 'Подписание',
  },
  {
    id: '5',
    unread: false,
    title: 'Пример договора.docx',
    sender: 'ИП "ЕРТАЕВ"',
    type: 'Договор',
    number: 'ПР-2026/7',
    date: '2 мар. 2026',
    docId: 'KZBKJS0202600000137E835C49',
    status: 'Подписание',
  },
  {
    id: '6',
    unread: false,
    sender: 'ТОО "DOCUMENTOLOG"',
    type: 'Акт',
    number: '34',
    date: '28 февр. 2026',
    docId: 'KZ0000120261007848562E40F84',
    status: 'Поступивший',
  },
  {
    id: '7',
    unread: true,
    sender: 'ТОО "DOCUMENTOLOG"',
    type: 'Акт',
    number: '123',
    date: '28 февр. 2026',
    docId: 'KZ00001202610078483A5D5BA1',
    status: 'Поступивший',
  },
  {
    id: '8',
    unread: false,
    title: 'тот',
    sender: 'ФЛ Жауыр Әділхан Заманбекұлы',
    type: 'Счёт на оплату',
    number: '1',
    date: '27 февр. 2026',
    docId: 'KZI4Y9L2026000000118C20244',
    status: 'Поступивший',
  },
  {
    id: '9',
    unread: false,
    title: 'Documentolog_API_v2.docx',
    sender: 'ИП "ЕРТАЕВ"',
    type: 'Договор',
    number: 'ПР-2026/3',
    date: '24 февр. 2026',
    docId: 'KZBKJS0202600000087F088582',
    status: 'Подписание',
  },
  {
    id: '10',
    unread: false,
    title: 'Documentolog_API_v2.docx',
    sender: 'ИП "ЕРТАЕВ"',
    type: 'Договор',
    number: 'ПР-2026/2',
    date: '24 февр. 2026',
    docId: 'KZBKJS02026000000850B334B3',
    status: 'Подписание',
  },
  {
    id: '11',
    unread: false,
    title: 'test.pdf',
    sender: '',
    type: 'Договор',
    number: 'ПР-2025/1',
    date: '19 дек. 2025',
    docId: 'IELNABW202500000001EBB5498',
    status: 'Подписание',
  },
  {
    id: '12',
    unread: false,
    title: 'тест',
    sender: 'Филиал Акционерного общества «Bereke Bank» (дочерний банк Lesha Bank L…',
    type: 'Договор',
    number: 'ПР-21494',
    date: '3 дек. 2025',
    docId: 'KZLPWHG20251007626922CA980',
    status: 'Подписание',
  },
]

export type Folder = {
  label: string
  icon: string
  count?: number
  active?: boolean
}

export const folders: Folder[] = [
  { label: 'Входящие', icon: 'inbox', count: 185, active: true },
  { label: 'Отправленные', icon: 'send', count: 57 },
  { label: 'Завершённые', icon: 'mark_email_read', count: 71 },
  { label: 'Черновики', icon: 'edit_note', count: 41 },
  { label: 'Корзина', icon: 'delete' },
]
