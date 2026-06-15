import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Icon from '@/shared/primitives/Icon'

export default function BackToGallery() {
  return (
    <Button asChild variant="ghost" size="sm" className="gap-1.5">
      <Link to="/">
        <Icon name="arrow_back" size={16} />
        Все прототипы
      </Link>
    </Button>
  )
}
