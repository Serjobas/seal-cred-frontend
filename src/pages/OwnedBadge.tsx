import { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'components/ui/Card'
import LoadingCard from 'components/proofs/LoadingCard'
import NotFound from 'pages/NotFound'
import OwnerInfo from 'components/owned/OwnerInfo'
import SealCredCTA from 'components/owned/SealCredCTA'
import classnames, {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  padding,
  space,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-4'),
  padding('pb-2')
)
export default function () {
  const { derivativeAddress, tokenId } = useParams()

  if (!derivativeAddress || tokenId === undefined) return <NotFound />

  return (
    <div className={container}>
      <Suspense
        fallback={
          <Card paddingType="normal" color="secondary" shadow onlyWrap>
            <LoadingCard />
          </Card>
        }
      >
        <OwnerInfo derivativeAddress={derivativeAddress} tokenId={tokenId} />
      </Suspense>
      <SealCredCTA />
    </div>
  )
}
