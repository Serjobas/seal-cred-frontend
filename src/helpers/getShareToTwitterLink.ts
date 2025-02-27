export default function ({
  text,
  hashtags,
}: {
  text: string
  url?: string
  hashtags?: string[]
}) {
  const twitterUrl = 'https://twitter.com/intent/tweet'
  const hashtagsEncoded = hashtags ? `&hashtags=${hashtags.join(',')}` : ''

  return `${twitterUrl}?text=${text}${hashtagsEncoded}`
}
