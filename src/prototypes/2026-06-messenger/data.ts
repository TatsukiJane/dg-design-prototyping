export type Chat = {
  id: string
  name: string
  avatar?: string
  initials: string
  avatarColor: string
  isGroup?: boolean
  isBot?: boolean
  isOnline?: boolean
  lastMessage: string
  time: string
  unread?: number
  checked?: boolean
}

export type Message = {
  id: string
  sender: 'user' | 'bot' | 'system'
  text: string
  time: string
  rated?: boolean
  actions?: { label: string; variant: 'primary' | 'outline' }[]
}

export const chats: Chat[] = [
  {
    id: 'support',
    name: 'Техническая поддержка Documentolog',
    initials: 'ТП',
    avatarColor: '#6366f1',
    isBot: true,
    isOnline: true,
    lastMessage: 'Рад был помочь! Если возникнут ещё вопросы — пишите.',
    time: '15 июн.',
    checked: false,
  },
  {
    id: 'support2',
    name: 'Техническая поддержка Documentolog',
    initials: 'ТП',
    avatarColor: '#6366f1',
    isBot: true,
    lastMessage: 'Рад был помочь! Если возникнут ещё вопросы — пишите.',
    time: '12 июн.',
    checked: true,
  },
  {
    id: 'test',
    name: 'тест',
    initials: 'Т',
    avatarColor: '#ec4899',
    lastMessage: 'Батырбек Жуніс назначил Тестдисеса Тестдисеса администратором',
    time: '13:59',
    isGroup: true,
  },
  {
    id: 'impl',
    name: 'Внедрение Documentolog',
    initials: 'BD',
    avatarColor: '#3b82f6',
    isGroup: true,
    lastMessage: 'Как там продвижение по задаче создание каза...',
    time: '12 июн.',
    checked: true,
  },
  {
    id: 'dev',
    name: 'Группа мессенджер разработка',
    initials: 'ГМ',
    avatarColor: '#10b981',
    isGroup: true,
    lastMessage: 'fortnite',
    time: '12:14',
    checked: true,
  },
  {
    id: 'weq',
    name: 'WEQWEQWE',
    initials: 'W',
    avatarColor: '#f59e0b',
    lastMessage: 'Голосовое сообщение',
    time: '12 июн.',
    checked: true,
  },
  {
    id: 'testgroup',
    name: 'Тестовая группа',
    initials: 'ТГ',
    avatarColor: '#1f2937',
    isGroup: true,
    lastMessage: '/',
    time: '12 июн.',
    checked: true,
  },
  {
    id: 'didar',
    name: 'Дидар Жетписбаев',
    initials: 'ДЖ',
    avatarColor: '#6366f1',
    lastMessage: 'asdfsaFASDF',
    time: '12 июн.',
    checked: true,
  },
  {
    id: 'nurdaulet',
    name: 'Нурдаулет Кубайдолла',
    initials: 'НК',
    avatarColor: '#14b8a6',
    lastMessage: 'sfdfsdfsdfsd',
    time: '12 июн.',
    checked: true,
  },
]

export const supportMessages: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: 'Привет! Я — бот поддержки системы электронного документооборота Documentolog. Я не...',
    time: '11:41',
  },
  {
    id: '2',
    sender: 'user',
    text: 'Как создать исходящее письмо?',
    time: '11:42',
  },
  {
    id: '3',
    sender: 'bot',
    text: 'Для создания исходящего письма в Documentolog Business выполните следующие шаги:\n\n1. **Войдите в систему**\n2. **Нажмите на кнопку «Создать документ»** и выберите шаблон документа **«Исходящий»**\n3. **Заполните все поля** и загрузите вложение\n4. **Если хотите направить письмо в Государственный орган:**\n   - В поле «Получатель» нажмите на «+»\n   - Откройте раздел «Гос. органы (Пересылка)»\n   - Найдите нужный вам гос. орган\n5. **Отправка документа:**\n   - Если вы подписывающий сотрудник — нажмите **«Подписать и отправить»**\n   - Если вы автор документа, но не подписант — нажмите **«Отправить на подпись»**\n\nПосле этого документ будет отправлен получателю.',
    time: '11:42',
    actions: [
      { label: 'Решено', variant: 'primary' },
      { label: 'Нужен оператор', variant: 'outline' },
    ],
  },
  {
    id: '4',
    sender: 'user',
    text: 'Решено',
    time: '11:43',
  },
  {
    id: '5',
    sender: 'bot',
    text: 'Рад был помочь! Если возникнут ещё вопросы — пишите.',
    time: '11:43',
  },
]

export const recentChats = [
  'Приветствие',
  'Запрос технической поддерж...',
  'Приветствие',
  'Приветствие',
]
