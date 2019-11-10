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
          />
        </div>

        <div className='card-form__inner__input-field'>
          <label htmlFor='card-name'>Card Name</label>
          <input id='card-name'/>
        </div>

        <div className='card-form__inner__row'>
          <div className='card-form__inner__row__column'>
            <label htmlFor='expiration-month'>
              Expiration Date
            </label>
            <div className='card-form__inner__row__column__group'>
              <input id='expiration-month'/>
              <input id='expiration-year' />
            </div>
          </div>

          <div className='card-form__inner__row__column'>
            <label htmlFor='cw'>CVV</label>
            <input 
              onFocus={this.props.cvvFocusHandler} 
              onBlur={this.props.cvvBlurHandler}
              id='cw'
            />
          </div>
        </div>
      </form>
    </div>
    );
  }
}