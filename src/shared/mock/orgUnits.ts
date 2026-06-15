export type OrgUnit = {
  id: string
  name: string
  parentId: string | null
}

export const orgUnits: OrgUnit[] = [
  { id: 'o1', name: 'ТОО «Документолог»', parentId: null },
  { id: 'o2', name: 'Юридический департамент', parentId: 'o1' },
  { id: 'o3', name: 'Финансовый департамент', parentId: 'o1' },
  { id: 'o4', name: 'Канцелярия', parentId: 'o1' },
  { id: 'o5', name: 'HR-департамент', parentId: 'o1' },
  { id: 'o6', name: 'IT-отдел', parentId: 'o1' },
]
