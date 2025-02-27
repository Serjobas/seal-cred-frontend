import { useMemo } from 'preact/hooks'
import classnames, {
  borderRadius,
  boxShadow,
  boxShadowColor,
  fill,
  height,
  stroke,
  strokeWidth,
  width,
} from 'classnames/tailwind'

const svgClasses = classnames(
  boxShadow('shadow-lg'),
  boxShadowColor('shadow-secondary'),
  borderRadius('rounded-full'),
  width('w-16'),
  height('h-16')
)
const circleClasses = classnames(
  stroke('stroke-secondary'),
  fill('fill-primary-dark'),
  strokeWidth('stroke-2')
)
const pathClasses = classnames(
  stroke('stroke-secondary'),
  strokeWidth('stroke-2')
)

export default function () {
  const random = useMemo(() => Math.random() > 0.5, [])

  return random ? (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClasses}
    >
      <circle cx="32.5" cy="32" r="31" className={circleClasses} />
      <path
        d="M56.5 51.5V32C56.5 18.7452 45.7548 8 32.5 8C19.2452 8 8.5 18.7452 8.5 32V51.5"
        className={pathClasses}
      />
      <path
        d="M37.4989 27.3158C37.4989 24.3799 39.8147 21.9999 42.6713 21.9999C45.528 21.9999 47.8438 24.3799 47.8438 27.3158C47.8437 30.2516 45.528 27.3158 42.6713 27.3158C39.8147 27.3158 37.4989 30.2516 37.4989 27.3158Z"
        className={pathClasses}
      />
      <path
        d="M17.4989 27.3158C17.4989 24.3799 19.8147 21.9999 22.6713 21.9999C25.528 21.9999 27.8438 24.3799 27.8438 27.3158C27.8437 30.2516 25.528 27.3158 22.6713 27.3158C19.8147 27.3158 17.4989 30.2516 17.4989 27.3158Z"
        className={pathClasses}
      />
      <path
        d="M32.5 37C34.433 37 36 37.2317 36 35.0145C36 32.7973 34.433 30.9999 32.5 30.9999C30.567 30.9999 29 32.7973 29 35.0145C29 37.2317 30.567 37 32.5 37ZM32.5 37C32.5 38.3333 32.5 38.8 32.5 40"
        className={pathClasses}
      />
      <path
        d="M27.4989 46.3161C27.4989 43.3802 29.8147 41.0002 32.6713 41.0002C35.528 41.0002 37.8438 43.3802 37.8438 46.3161C37.8438 49.2519 35.528 51.5005 32.6713 51.5005C29.8147 51.5005 27.4989 49.2519 27.4989 46.3161Z"
        className={pathClasses}
      />
      <path d="M48.5 37L42.5 38" className={pathClasses} />
      <path d="M42.5 41L48.5 42" className={pathClasses} />
      <path d="M16.5 37L22.5 38" className={pathClasses} />
      <path d="M22.5 41L16.5 42" className={pathClasses} />
    </svg>
  ) : (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClasses}
    >
      <circle cx="32" cy="32" r="31" className={circleClasses} />
      <path
        d="M56 51.5V32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32V51.5"
        className={pathClasses}
      />
      <path
        d="M32 37C33.933 37 35.5 37.2317 35.5 35.0145C35.5 32.7973 33.933 30.9999 32 30.9999C30.067 30.9999 28.5 32.7973 28.5 35.0145C28.5 37.2317 30.067 37 32 37ZM32 37C32 38.3333 32 41.3 32 42.5M32 42.5C32 46.5 37 46.5 37 42.5M32 42.5C32 46.5 27 46.5 27 42.5"
        className={pathClasses}
      />
      <path
        d="M28.3439 25.3159C28.3439 22.3801 26.0281 20.0001 23.1714 20.0001C20.3148 20.0001 17.999 22.3801 17.999 25.3159"
        className={pathClasses}
      />
      <path
        d="M46.3439 25.3159C46.3439 22.3801 44.0281 20.0001 41.1714 20.0001C38.3148 20.0001 35.999 22.3801 35.999 25.3159"
        className={pathClasses}
      />
      <path d="M48 37L42 38" className={pathClasses} />
      <path d="M42 41L48 42" className={pathClasses} />
      <path d="M16 37L22 38" className={pathClasses} />
      <path d="M22 41L16 42" className={pathClasses} />
    </svg>
  )
}
