import { ProofText, TextButton } from 'components/ui/Text'
import { displayFrom } from 'helpers/visibilityClassnames'
import { useEffect, useState } from 'preact/hooks'
import { useSnapshot } from 'valtio'
import Arrow from 'icons/Arrow'
import Button from 'components/ui/Button'
import CharInCircle from 'components/ui/CharInCircle'
import EmailDomainStore from 'stores/EmailDomainStore'
import EmailProofForm from 'components/proofs/EmailProofForm'
import Line from 'components/ui/Line'
import SimpleArrow from 'icons/SimpleArrow'
import Sizes from 'models/MarkSizes'
import ToolTip from 'components/ui/ToolTip'
import classnames, {
  alignItems,
  backgroundClip,
  backgroundImage,
  display,
  flex,
  fontFamily,
  fontSize,
  fontWeight,
  gradientColorStops,
  justifyContent,
  lineHeight,
  opacity,
  space,
  textColor,
  transitionDuration,
  transitionProperty,
  visibility,
  width,
} from 'classnames/tailwind'
import useUrlParams from 'hooks/useUrlParams'

const arrowContainer = classnames(
  display('flex'),
  alignItems('items-center'),
  space('space-x-2')
)

const getStartedText = (open: boolean) =>
  classnames(
    displayFrom('xs'),
    textColor('text-transparent', 'active:text-accent'),
    transitionProperty('transition-colors'),
    backgroundClip('bg-clip-text'),
    backgroundImage('bg-gradient-to-r'),
    gradientColorStops('from-secondary', 'to-accent'),
    fontWeight('font-bold'),
    fontFamily('font-primary'),
    lineHeight('leading-5'),
    fontSize('text-sm'),
    opacity({ 'opacity-0': open }),
    visibility({ invisible: open }),
    transitionDuration('duration-300')
  )

const emailTitleContainer = classnames(
  display('flex'),
  justifyContent('justify-between'),
  alignItems('items-center')
)

const proofLineContainer = classnames(
  space('space-y-2'),
  fontWeight('font-normal'),
  width('w-full')
)

const emailTitleLeft = classnames(
  display('flex'),
  space('space-x-3'),
  alignItems('items-center')
)

const tooltipWrapper = classnames(display('flex'), flex('flex-1'))

export default function () {
  const { urlDomain, urlToken, clearSearchParams } = useUrlParams()
  const { emailDomain } = useSnapshot(EmailDomainStore)

  const [domain, setDomain] = useState('')
  const [token, setToken] = useState(urlToken)
  const [open, setOpen] = useState(!!urlDomain)
  const [error, setError] = useState<string | undefined>()
  const [generationStarted, setGenerationStarted] = useState(false)

  useEffect(() => {
    if (!urlToken || !urlDomain) return

    EmailDomainStore.emailDomain = urlDomain
    setDomain(urlDomain)
  }, [urlDomain, urlToken])

  function onCreate() {
    setOpen(false)
    clearData()
    setGenerationStarted(false)
  }

  function clearData() {
    setToken('')
    setDomain('')
    clearSearchParams()
  }

  function jumpToToken() {
    setError(undefined)
    setDomain(emailDomain)
  }

  const popoverText =
    'When you submit your email, we create a token out of your email’s domain. You can then use that token to create a zk proof. Once made, that zk proof will allow you to mint a zkBadge for your wallet.'

  return (
    <Line breakWords>
      <div className={proofLineContainer}>
        <div className={emailTitleContainer}>
          <div className={emailTitleLeft}>
            {domain && (
              <Button
                disabled={generationStarted}
                type="tertiary"
                onClick={() => setDomain('')}
              >
                <SimpleArrow />
              </Button>
            )}
            <ProofText>Work email</ProofText>
            <div className={tooltipWrapper}>
              <ToolTip position="bottom" text={popoverText} fitContainer>
                <div>
                  <CharInCircle char="?" size={Sizes.Small} />
                </div>
              </ToolTip>
            </div>
          </div>
          <button className={arrowContainer} onClick={() => setOpen(!open)}>
            <span className={getStartedText(open)}>
              <span>{domain ? 'Set token' : 'Get started'}</span>
            </span>
            <div className={width('w-4')}>
              <Arrow pulseDisabled open={open} />
            </div>
          </button>
        </div>
        {open && (
          <EmailProofForm
            domain={domain}
            token={token}
            submitType="secondary"
            afterSendEmail={clearData}
            description={
              <>
                Add your work email and we’ll send you a token for that email
                (check the spam folder). Then, use the token here to create zk
                proof.{' '}
                {!!emailDomain && (
                  <TextButton
                    onClick={jumpToToken}
                    disabled={generationStarted}
                  >
                    Have an existing token?
                  </TextButton>
                )}
              </>
            }
            onCreate={onCreate}
            onChange={setDomain}
            onError={setError}
            onGenerationStarted={setGenerationStarted}
            error={error}
          />
        )}
      </div>
    </Line>
  )
}
