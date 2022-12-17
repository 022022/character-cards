import React from 'react';
import { Card, Character } from '../components/Card';
import Form from '../components/Form';

export interface CreateForm {
  addToCardList: (character: Character) => void;
}

export class Create extends React.Component {
  state = {cards: []};
  addToCardList = (character: Character) => {
    this.setState({cards: [...this.state.cards, character]});
  }
  render() {
    return <>
    <Form addToCardList={this.addToCardList} />
    { this.state.cards.map((character: Character) => <Card {...character} />) }
    </>
  }
}