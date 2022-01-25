import './index.css'

const WinOrLoseCard = props => {
  const {initialScore, onRestartGame, isOver} = props
  const LOSE_IMAGE =
    'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const status = isOver ? 'You Won' : 'You Lose'
  const isBest = isOver ? 'Best Score' : 'Score'
  const WonOrLoseImg = isOver ? WON_IMAGE : LOSE_IMAGE

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{status}</h1>
        <p className="current-score-label">{isBest}</p>
        <p className="current-score-value">{initialScore}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onRestartGame}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img
          src={WonOrLoseImg}
          alt="win or lose"
          className="win-or-lose-image"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
