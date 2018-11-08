import React, { Component } from 'react';
import './App.css';
import Box from './Box';
import Cube from './Cube';
import Button from './Button';
import data from './data/data';
import { slideRight, slideLeft } from './Box';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCards: data.cards,
      accepted: false,
      rejected: false
    };
  }

  componentDidUpdate() {
    if (this.props.accepted) {
      const targetNodeToSlide = document.querySelector('.Box .first');
      targetNodeToSlide.style = `animation: ${slideRight} 5s linear`;
    }
    if (this.props.rejected) {
      const targetNodeToSlide = document.querySelector('.Box .first');
      targetNodeToSlide.style = `animation: ${slideLeft} 5s linear`;
    }
  }

  nextCard = () => {
    let originalCards = data.cards;
    originalCards.push(originalCards.shift());
    console.log('changed cards', originalCards);

    this.setState({
      accepted: true,
      allCards: originalCards
    });
  };

  prevCard = () => {
    let originalCards = data.cards;
    originalCards.splice(0, 0, originalCards.pop());
    // let swappedCards = data.cards;
    // swappedCards.push(swappedCards.shift());
    // let firstCard = swappedCards.indexOf(0);
    // swappedCards[0].index = firstCard;

    this.setState({
      rejected: true,
      allCards: originalCards
    });
  };

  render() {
    const { accepted, rejected, allCards } = this.state;
    console.log('data.cards originally', data.cards);
    const orgCardArray = data.cards;

    return (
      <div>
        <Cube className="cube pers250">
          <Box
            className={accepted ? `first` : `${data.cards[0].name}`}
            accepted={accepted}
            rejected={rejected}
            colour={data.cards[0].colour}
          />
          <Box
            className={accepted ? `second` : `${data.cards[1].name}`}
            accepted={accepted}
            rejected={rejected}
            colour={data.cards[1].colour}
          />
          <Box
            className={accepted ? `third` : `${data.cards[2].name}`}
            accepted={accepted}
            rejected={rejected}
            colour={data.cards[2].colour}
          />
          <Box
            className={accepted ? `fourth` : `${data.cards[3].name}`}
            accepted={accepted}
            rejected={rejected}
            colour={data.cards[3].colour}
          />
          {/* {allCards.map((card, index) => (
            <Box
              key={card.id}
              className={accepted ? `${orgCardArray[0].name}` : `${card.name}`}
              index={index}
              accepted={accepted}
              rejected={rejected}
              colour={card.colour}
            /> 
          ))}*/}
          <div className="action">
            <Button className="reject" onClick={() => this.prevCard()}>
              <span aria-label="reject" role="img">
                ❌
              </span>
            </Button>
            <Button className="accept" onClick={() => this.nextCard()}>
              <span aria-label="accept" role="img">
                ✔️
              </span>
            </Button>
          </div>
        </Cube>
      </div>
    );
  }
}

export default App;
