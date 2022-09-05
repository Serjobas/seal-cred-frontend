import { Suspense } from 'react'
import { useSnapshot } from 'valtio'
import { zIndex } from 'classnames/tailwind'
import Card from 'components/ui/Card'
import CardContainer from 'components/proofs/CardContainer'
import ConnectAccount from 'components/badges/ConnectAccount'
import List from 'components/badges/List'
import ListTitle from 'components/badges/ListTitle'
import LoadingCard from 'components/badges/LoadingCard'
import WalletStore from 'stores/WalletStore'

function BadgesSuspended() {
  return (
    <>
      <ListTitle />
      <List />
    </>
  )
}

export default function () {
  const { account } = useSnapshot(WalletStore)

  return (
    <div className={zIndex('z-10')}>
      <CardContainer>
        <Card
          shadow
          paddingType="normal"
          color="secondary"
          useAppStyles
          nospace
        >
          {account ? (
            <Suspense fallback={<LoadingCard />}>
              <BadgesSuspended />
            </Suspense>
          ) : (
            <ConnectAccount />
          )}
        </Card>
      </CardContainer>
    </div>
  )
}
