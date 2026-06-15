import { cn } from '@/lib/utils'

/**
 * Material Symbols Outlined — иконочный компонент.
 * Имена иконок: https://fonts.google.com/icons
 *
 * Примеры:
 *   <Icon name="home" />
 *   <Icon name="check_circle" fill={1} className="text-primary" />
 *   <Icon name="arrow_back" size={16} />
 */
type IconProps = {
  /** Имя иконки из Material Symbols: https://fonts.google.com/icons */
  name: string
  /** Размер в px (opsz + font-size). По умолчанию 20 */
  size?: number
  /** 0 = outlined, 1 = filled (по умолчанию) */
  fill?: 0 | 1
  /** Толщина штриха 100–700 (шаг 100). По умолчанию 400 */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  className?: string
}

export default function Icon({
  name,
  size = 20,
  fill = 1,
  weight = 400,
  className,
}: IconProps) {
  return (
    <span
      className={cn(
        'material-symbols-outlined select-none leading-none',
        className,
      )}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
