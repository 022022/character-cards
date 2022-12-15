import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../components/Card';
import { demoData } from '../data/demodata';

export class MainPage extends React.Component {
  render(){
    return <>
    <Card {...demoData[0]}/>

    <NavLink to="/create"><button >Create your own SW Character</button></NavLink>
    <Card {...demoData[1]}/>
     </>

  }
}