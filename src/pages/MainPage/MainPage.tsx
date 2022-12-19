import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../../components/Card';
import { demoData } from '../../data/demodata';

import styles from './MainPage.module.css';

export class MainPage extends React.Component {
  render(){
    return <div className={styles.cards}>
      <Card {...demoData[0]}/>

      <NavLink to="/create"><button >Create your own <br/>SW Character</button></NavLink>
      <Card {...demoData[1]}/>
    </div>

  }
}