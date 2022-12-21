import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { demoData } from '../../data/demodata';

import styles from './MainPage.module.css';

export class MainPage extends React.Component {
  render(){
    return <div className={styles.cards}>
      <Card {...demoData[0]}/>

      <div className={styles.teaser}>
        <h1>Create your own Star Wars Character!</h1>
        <NavLink to="/create"><button >Start creating</button></NavLink>
      </div>

      <Card {...demoData[1]}/>
    </div>

  }
}