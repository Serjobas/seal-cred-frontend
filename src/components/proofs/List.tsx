import { useParams } from 'react-router-dom'
import ListTitle from 'components/proofs/ListTitle'
import ProofList from 'components/proofs/ProofList'

export default function () {
  const params = useParams()

  return (
    <>
      <ListTitle />
      <ProofList selectedCategory={params.category} />
    </>
  )
}
