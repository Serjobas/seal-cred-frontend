import { FooterLink, SocialLink } from 'components/ui/Text'
import { displayTo } from 'helpers/visibilityClassnames'
import Delimiter from 'components/ui/Delimiter'
import Discord from 'icons/Discord'
import FooterLogo from 'icons/FooterLogo'
import Twitter from 'icons/Twitter'
import classnames, {
  alignItems,
  display,
  flex,
  flexDirection,
  justifyContent,
  padding,
  space,
} from 'classnames/tailwind'

const commonClasses = classnames(display('flex'), alignItems('items-center'))
const socialContainerCard = classnames(
  commonClasses,
  flex('flex-1'),
  alignItems('md:items-end'),
  justifyContent('justify-end', 'md:justify-start'),
  flexDirection('flex-col', 'md:flex-row'),
  padding('py-4', 'px-4', 'lg:px-25'),
  space('space-y-4', 'md:space-x-4', 'md:space-y-0')
)

const socialContainer = classnames(
  commonClasses,
  flexDirection('flex-row'),
  space('space-x-4')
)
const linkContainer = classnames(
  commonClasses,
  flexDirection('flex-col', 'md:flex-row'),
  space('space-y-2', 'md:space-y-0', 'md:space-x-4')
)
const footerLogo = classnames(
  commonClasses,
  justifyContent('justify-center'),
  flexDirection('flex-row'),
  space('space-x-4')
)
const socialLinksContainer = classnames(displayTo('md'), socialContainer)

export default function () {
  return (
    <div className={socialContainerCard}>
      <div className={linkContainer}>
        <FooterLink url="https://blog.bigwhalelabs.com/">
          <div className={footerLogo}>
            <FooterLogo />
            <span>Blog</span>
          </div>
        </FooterLink>
        <Delimiter />
        <FooterLink internal url="/terms">
          Terms of service
        </FooterLink>
        <Delimiter />
        <FooterLink internal url="/privacy">
          Privacy policy
        </FooterLink>
      </div>
      <div className={socialLinksContainer}>
        <SocialLink url="https://discord.gg/NHk96pPZUV">
          <Discord />
        </SocialLink>
        <Delimiter />
        <SocialLink url="https://twitter.com/bigwhalelabs">
          <Twitter />
        </SocialLink>
      </div>
    </div>
  )
}
