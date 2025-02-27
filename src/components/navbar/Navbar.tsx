import { Link } from 'react-router-dom'
import { LogoSubText, LogoText } from 'components/ui/Text'
import { Player } from '@lottiefiles/react-lottie-player'
import { displayFrom } from 'helpers/visibilityClassnames'
import { useCallback, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AnimatedLogo from 'icons/AnimatedLogo'
import RightBlock from 'components/navbar/RightBlock'
import classnames, {
  alignItems,
  backgroundColor,
  display,
  flexDirection,
  inset,
  justifyContent,
  margin,
  maxWidth,
  padding,
  position,
  space,
  transitionProperty,
  width,
  zIndex,
} from 'classnames/tailwind'

const navbar = (visible?: boolean, withoutRightBlock?: boolean) =>
  classnames(
    position('sticky'),
    inset('top-0'),
    display('flex'),
    alignItems('items-center'),
    justifyContent(withoutRightBlock ? 'sm:justify-center' : 'justify-between'),
    padding('py-4', 'px-4', 'sm:px-8', '2xl:!px-25'),
    space('xs:space-x-4', 'sm:space-x-9', 'lg:space-x-0'),
    zIndex('z-50'),
    backgroundColor(visible ? 'bg-primary-dark' : 'bg-transparent'),
    transitionProperty('transition-all')
  )

const logoContainer = classnames(
  display('inline-flex'),
  alignItems('items-center'),
  space('sm:space-x-4', 'space-x-1'),
  margin('mt-2')
)

const logoWithVersion = classnames(
  display('flex'),
  flexDirection('flex-col'),
  displayFrom('md')
)

const logoWrapper = classnames(
  display('flex'),
  maxWidth('max-w-14'),
  width('w-full')
)

export default function () {
  const lottieRef = useRef<Player>()
  const { pathname } = useLocation()
  const withoutRightBlock = pathname.split('/').length >= 3

  const [backgroundVisible, setBackgroundVisible] = useState(false)
  const onScroll = useCallback(() => {
    setBackgroundVisible(window.scrollY > 20)
  }, [])
  useMemo(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <nav className={navbar(backgroundVisible, withoutRightBlock)}>
      <Link to="/">
        <div className={logoContainer}>
          <div
            className={logoWrapper}
            onTouchStart={() => {
              lottieRef.current?.play()
            }}
          >
            <Player ref={lottieRef} hover src={AnimatedLogo} />
          </div>
          <div className={logoWithVersion}>
            <LogoText>SealCred</LogoText>
            <LogoSubText>(ALPHA)</LogoSubText>
          </div>
        </div>
      </Link>
      {!withoutRightBlock && <RightBlock />}
    </nav>
  )
}
