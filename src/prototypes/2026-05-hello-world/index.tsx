import AppShell from '@/shared/layout/AppShell'
import HelloScreen from './screens/HelloScreen'

export default function HelloWorldPrototype() {
  return (
    <AppShell title="Hello world">
      <HelloScreen />
    </AppShell>
  )
}
