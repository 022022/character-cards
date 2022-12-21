import React from 'react';
import { Card, Character } from '../../components/Card/Card';
import Form from '../../components/Form/Form';

import styles from './Create.module.css';

export interface CreateForm {
  addToCardList: (character: Character) => void;
}

export class Create extends React.Component {
  state = {cards: []};
  addToCardList = (character: Character) => {
    this.setState({cards: [...this.state.cards, character]});
  }

  render() {
    return <div className={styles['create-cards']}>
    <Form addToCardList={this.addToCardList} />
    { this.state.cards.map((character: Character) => <Card key={character.id} {...character} />).reverse() }
    </div>
  }
}