import React from 'react';

export default class CardForm extends React.Component {
  render() {
    return (
    <div className='card-form'>
      <form className='card-form__inner'>
        <div className='card-form__inner__input-field'>
          <label htmlFor='card-number'>
              Card Number
          </label>
          <input id='card-number'/>
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
            <label htmlFor='cw'>CW</label>
            <input 
              onFocus={this.props.turnBackHandler} 
              onBlur={this.props.turnFrontHandler}
              id='cw'
            />
          </div>
        </div>
      </form>
    </div>
    );
  }
}