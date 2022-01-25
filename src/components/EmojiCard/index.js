import './index.css'

const EmojiCard = props => {
  const {emojisList, onClickToShuffleEmoji} = props
  const {emojiName, emojiUrl, id} = emojisList

  const shuffleEmoji = () => {
    onClickToShuffleEmoji(emojiName, id)
  }
  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={shuffleEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
