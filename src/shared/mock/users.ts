export type User = {
  id: string
  name: string
  role: string
  initials: string
}

export const users: User[] = [
  { id: 'u1', name: 'Айгерим Сатпаева', role: 'Руководитель отдела', initials: 'АС' },
  { id: 'u2', name: 'Данияр Касенов', role: 'Юрист', initials: 'ДК' },
  { id: 'u3', name: 'Марина Ким', role: 'Главный бухгалтер', initials: 'МК' },
  { id: 'u4', name: 'Бекзат Алимов', role: 'Делопроизводитель', initials: 'БА' },
  { id: 'u5', name: 'Жанна Оспанова', role: 'HR-менеджер', initials: 'ЖО' },
  { id: 'u6', name: 'Сергей Иванов', role: 'Финансовый директор', initials: 'СИ' },
  { id: 'u7', name: 'Гульнара Ержанова', role: 'Секретарь', initials: 'ГЕ' },
  { id: 'u8', name: 'Никита Громов', role: 'Системный администратор', initials: 'НГ' },
]

export const currentUser = users[0]
