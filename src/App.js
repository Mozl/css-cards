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
      card: data.cards[0],
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
    let swappedCards = data.cards;
    swappedCards.push(swappedCards.shift());

    this.setState({
      accepted: true,
      allCards: swappedCards
    });
  };

  prevCard = () => {
    let swappedCards = data.cards;
    swappedCards.push(swappedCards.shift());

    this.setState({
      rejected: true,
      card: swappedCards
    });
  };

  render() {
    const { accepted, rejected, allCards } = this.state;
    console.log('allCards', allCards);
    return (
      <div>
        <Cube className="cube pers250">
          {allCards.map(i => (
            <Box
              key={i.index}
              className={i.name}
              accepted={accepted}
              rejected={rejected}
            >
              {allCards.indexOf(i)} box
            </Box>
          ))}

          <div className="action">
            <Button className="reject" onClick={() => this.prevCard()}>
              <span aria-label="reject" role="img">
                ❌
              </span>
            </Button>
            <Button className="accept" onClick={() => this.nextCard()}>
              <span aria-label="reject" role="img">
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
