import React from 'react';
import CardForm from './components/CardForm';
import Card from './components/Card';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side: 'front',
    }

    this.turnBackHandler = this.turnBackHandler.bind(this);
    this.turnFrontHandler = this.turnFrontHandler.bind(this);
  }

  turnBackHandler = () => {
    this.setState({side: 'back'});
  }

  turnFrontHandler = () => {
    this.setState({side: 'front'});
  }

  render() {
    return (
      <div className='wrapper'>
        <CardForm 
          turnBackHandler={this.turnBackHandler} 
          turnFrontHandler={this.turnFrontHandler}
        />
        <Card 
          side={this.state.side}
        />
      </div>
    );
  }
}