import React from 'react';
import CardForm from './components/CardForm';
import Card from './components/Card';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStatus: '',
      cardNumber: '',
      cardName: '',
      expirationMonth: 'MM',
      expirationYear: 'YY',
      cvv: '',
    }

    this.cvvFocusHandler = this.cvvFocusHandler.bind(this);
    this.cvvBlurHandler = this.cvvBlurHandler.bind(this);
    this.numberInputHandler = this.numberInputHandler.bind(this);
    this.nameInputHandler = this.nameInputHandler.bind(this);
    this.monthSelectHandler = this.monthSelectHandler.bind(this);
    this.yearSelectHandler = this.yearSelectHandler.bind(this);
    this.cvvInputHandler = this.cvvInputHandler.bind(this);
  }

  numberInputHandler(event) {
    let input = event.target.value;

    if (isNaN(input.split(' ').join('')))
      return;
    
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

  nameInputHandler(event) {
    this.setState({cardName: (event.target.value).toUpperCase()})
  }

  monthSelectHandler(event) {
    let input = event.target.value;
    let month = input > 9 ? ''+input : '0'+input;
    this.setState({expirationMonth: month});
  }

  yearSelectHandler(event) {
    let year = Number(event.target.value) % 100;
    this.setState({expirationYear: year});
  }

  cvvInputHandler(event) {
    if (isNaN(event.target.value.split(' ').join('')))
      return;

    this.setState({cvv: event.target.value});
  }

  render() {
    return (
      <div className='wrapper'>
        <CardForm 
          cvvFocusHandler={this.cvvFocusHandler} 
          cvvBlurHandler={this.cvvBlurHandler}
          numberInputHandler={this.numberInputHandler}
          nameInputHandler={this.nameInputHandler}
          onMonthSelect={this.monthSelectHandler}
          onYearSelect={this.yearSelectHandler}
          onCvvInput={this.cvvInputHandler}

          cvv={this.state.cvv}
          cardNumber={this.state.cardNumber}
          cardName={this.state.cardName}
        />
        <Card 
          status={this.state.cardStatus}
          number={this.state.cardNumber}
          name={this.state.cardName}
          expirationMonth={this.state.expirationMonth}
          expirationYear={this.state.expirationYear}
          cvv={this.state.cvv}
        />
      </div>
    );
  }
}