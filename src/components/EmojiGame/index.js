import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 

Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
let clickedEmojis = []

class EmojiGame extends Component {
  state = {
    initialScore: 0,
    topScore: 0,
    emojisList: [],
    isGameOver: false,
  }

  componentDidMount() {
    const {emojisList} = this.props
    this.setState({emojisList})
  }

  finishedGameAndSetTopScore = initialScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (initialScore > newTopScore) {
      newTopScore = initialScore
    }
    this.setState({topScore: newTopScore})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickToShuffleEmoji = emojiName => {
    const {initialScore, emojisList} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()
    this.setState({emojisList: shuffledEmojisList})

    if (clickedEmojis.includes(emojiName)) {
      this.finishedGameAndSetTopScore(initialScore)
      this.setState({isGameOver: true})
    } else {
      clickedEmojis.push(emojiName)
      this.setState(prevState => ({
        initialScore: prevState.initialScore + 1,
      }))
    }
    if (initialScore + 1 === emojisList.length) {
      this.finishedGameAndSetTopScore(initialScore + 1)
      this.setState({isGameOver: true})
    }
  }

  onRestartGame = () => {
    clickedEmojis = []
    this.setState({isGameOver: false})
    this.setState({initialScore: 0})
  }

  render() {
    const {initialScore, topScore, isGameOver, emojisList} = this.state
    return (
      <div className="app-container">
        <NavBar
          initialScore={initialScore}
          topScore={topScore}
          isGameOver={isGameOver}
        />
        <div className="emoji-game-body">
          {!isGameOver && (
            <ul className="emojis-list-container">
              {emojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  emojisList={each}
                  onClickToShuffleEmoji={this.onClickToShuffleEmoji}
                />
              ))}
            </ul>
          )}
          {isGameOver && (
            <WinOrLoseCard
              initialScore={initialScore}
              onRestartGame={this.onRestartGame}
              isOver={initialScore === emojisList.length}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
