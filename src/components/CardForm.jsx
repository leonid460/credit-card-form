import React from 'react';

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
    }
  }

  render() {
    return (
    <div className='card-form'>
      <form className='card-form__inner'>
        <div className='card-form__inner__input-field'>
          <label htmlFor='card-number'>
              Card Number
          </label>
          <input 
            onChange={this.props.numberInputHandler}
            value={this.props.cardNumber}
            id='card-number'
            type='text'
            data-card-field
            autoComplete='off'
            maxLength='19'
            className='card-form__input'
          />
        </div>

        <div className='card-form__inner__input-field'>
          <label htmlFor='card-name'>Card Name</label>
          <input 
            onChange={this.props.nameInputHandler} 
            id='card-name'
            maxLength='27'
            className='card-form__input'
          />
        </div>

        <div className='card-form__inner__row'>
          <div className='card-form__inner__row__column'>
            <CardExpirationDate
              onMonthSelect={this.props.onMonthSelect}
              onYearSelect={this.props.onYearSelect}
            />
          </div>

          <div className='card-form__inner__row__column'>
            <label htmlFor='cvv'>CVV</label>
            <input
              value={this.props.cvv}
              onFocus={this.props.cvvFocusHandler} 
              onBlur={this.props.cvvBlurHandler}
              onChange={this.props.onCvvInput}
              maxLength='4'
              id='cvv'
              className='card-form__input'
            />
          </div>
        </div>
      </form>
    </div>
    );
  }
}


class CardExpirationDate extends React.Component {
  returnMonthsList() {
    let months = [];

    for (let i = 1; i < 13; i++) {
      months.push(<option key={i} value={i}>{
        i > 9 ? ''+i : '0'+i
      }</option>);
    }

    return months;
  }

  
  returnYearList() {
    let years = [];
    let currentYear = new Date().getFullYear();

    for (let i = currentYear; i <= currentYear+11; i++) {
      years.push(
        <option key={i} value={i}>{i}</option>
      );
    }

    return years;
  }

  render() {
    return (
      <>
      <label htmlFor='expiration-month'>
        Expiration Date
      </label>
      <div className='card-form__inner__row__column__group'>
        <select 
          id='expiration-month' 
          onChange={this.props.onMonthSelect}
          defaultValue={'Month'}
          className='card-form__input'
        >
          <option disabled>Month</option>
          {this.returnMonthsList()}
        </select>
        
        <select 
          id='expiration-year'
          onChange={this.props.onYearSelect}
          defaultValue='Year'
          className='card-form__input'
        >
          <option disabled>Year</option>
          {this.returnYearList()}
        </select>
      </div>
      </>
    );
  }
}