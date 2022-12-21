import React from 'react';
import { Constants, quotes } from '../../constants';

import styles from './Card.module.css';

export interface Character {
  id: string,
  sideOfTheForce: boolean,
  name: string,
  addQuote: boolean,
  quote?: string,
  species: string,
  height: string,
  imageUploaded: Blob | MediaSource | null,
  imageStatic?: string;
  hairColor: string,
  eyesColor: string,
}

export class Card extends React.Component<Character> {
  getRandomQuote() {
    if(this.props.quote){
      return this.props.quote;
    }
    if (this.props.addQuote) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    } else {
      return Constants.defaultQuote;
    }
  }

  addImage() {
    if(this.props.imageStatic){
      return this.props.imageStatic;
    }
    if (this.props.imageUploaded) {
      return URL.createObjectURL(this.props.imageUploaded);
    } else {
      return Constants.defaultImg;
    }
  }

  addDarkSideRibbon() {
    if (this.props.sideOfTheForce) {
      return (
        <div
          className={styles['dark-side-ribbon']}
          style={{ backgroundImage: `url(${Constants.darkSideRibbonImg})` }}
        ></div>
      );
    } else {
      return <></>;
    }
  }

  render(){
    return  (<div className={styles['character-card']} id={this.props.id}>
    <h3 className={styles['card__name']}> {this.props.name}</h3>
    <p className={styles['character-card__quote']}>{this.getRandomQuote()}</p>
    <div className={styles['image-container']}>
      <div className={styles['dark-side-ribbon']}>{this.addDarkSideRibbon()}</div>
      <div className={styles['card__img']} style={{ backgroundImage: `url(${this.addImage()})` }}></div>
    </div>
    <div className={styles['card__badges']}>
      <div className={styles['character-card__badge']}>Species: {this.props.species}</div>
      <div className={styles['character-card__badge']}>Height: {this.props.height}</div>
    </div>
    <div className={styles['colors']}>
          <div className={styles['color-group']}>     Hair
            <div
              className={styles['character-card__color']}
              style={{ backgroundColor: this.props.hairColor }}
            ></div>
          </div>
          <div className={styles['color-group']}>        Eyes
            <div
              className={styles['character-card__color']}
              style={{ backgroundColor: this.props.eyesColor }}
            ></div>
          </div>
        </div>
  </div>)
  }
}