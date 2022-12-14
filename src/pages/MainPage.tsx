import React from 'react';
import { Card } from '../components/Card';
import { demoData } from '../data/demodata';

export class MainPage extends React.Component {
  render(){
    return <>
    <Card {...demoData[0]}/>
    <button>Create your own SW Character</button>
    <Card {...demoData[1]}/>
     </>

  }
}