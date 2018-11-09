import React, { Component } from 'react';
import Box from './components/Box';
import Cube from './components/Cube';
import Button from './components/Button';
import cards from './data/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCards: cards,
      accepted: false,
      rejected: false
    };
  }

  nextCard = () => {
    const allCards = this.state.allCards.map((card, index) => {
      if (index === 3) {
        return Object.assign({}, card, {
          colour: this.state.allCards[0].colour,
          id: this.state.allCards[0].id
        });
      }
      return Object.assign({}, card, {
        colour: this.state.allCards[index + 1].colour,
        id: this.state.allCards[index + 1].id
      });
    });

    this.setState({
      allCards,
      accepted: true
    });
  };

  prevCard = () => {
    const allCards = this.state.allCards.map((card, index) => {
      if (index === 0) {
        return Object.assign({}, card, {
          colour: this.state.allCards[3].colour,
          id: this.state.allCards[3].id
        });
      }
      return Object.assign({}, card, {
        colour: this.state.allCards[index - 1].colour,
        id: this.state.allCards[index - 1].id
      });
    });

    this.setState({
      allCards,
      rejected: true
    });
  };

  render() {
    const { accepted, rejected, allCards } = this.state;
    return (
      <div>
        <Cube className="cube">
          {allCards.map(card => (
            <Box
              key={card.id}
              className={card.name}
              accepted={accepted}
              rejected={rejected}
              colour={card.colour}
            />
          ))}
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
