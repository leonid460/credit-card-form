import React from 'react';
import CardForm from './components/CardForm';
import Card from './components/Card';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStatus: '',
      cardNumber: ''
    }

    this.cvvFocusHandler = this.cvvFocusHandler.bind(this);
    this.cvvBlurHandler = this.cvvBlurHandler.bind(this);
    
    this.numberInputHandler = this.numberInputHandler.bind(this);
  }

  numberInputHandler(event) {
    let input = event.target.value;
    
    if (input.length > 4 && input[4] !== ' ') {
      input = input.slice(0,4) + ' ' + input.slice(4, input.length);
    }
    if (input.length > 9 && input[9] !== ' ') {
      input = input.slice(0,9) + ' ' + input.slice(9, input.length);
    }
    if (input.length > 14 && input[14] !== ' ') {
      input = input.slice(0,14) + ' ' + input.slice(14, input.length);
    }

    this.setState({cardNumber: input});
  }

  cvvFocusHandler = () => {
    this.setState({cardStatus: 'turned'});
  }

  cvvBlurHandler = () => {
    this.setState({cardStatus: ''});
  }

  render() {
    return (
      <div className='wrapper'>
        <CardForm 
          cvvFocusHandler={this.cvvFocusHandler} 
          cvvBlurHandler={this.cvvBlurHandler}

          numberInputHandler={this.numberInputHandler}
          cardNumber={this.state.cardNumber}
        />
        <Card 
          status={this.state.cardStatus}
          number={this.state.cardNumber}
        />
      </div>
    );
  }
}