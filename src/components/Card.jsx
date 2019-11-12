import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <div className={'card ' + this.props.status}>
        <div className='card__front'>
          <div className='card__front__top-row'>
            <div className='card__front__top-row__chip'></div>
            <div className='card__front__top-row__type'></div>

          </div>

          <CardNumber number={this.props.number}/>

          <div className='card__front__bottom-row'>
            <CardHolder name={this.props.name}/>
            
            <div className='card__front__bottom-row__expires-date'>
              <div className='card__front__bottom-row__expires-date__label'>Expires</div>
              <div className='card__front__bottom-row__expires-date__value'>
                <div className='expires-date-item'>
                  {this.props.expirationMonth}
                </div>
                /
                <div className='expires-date-item'>
                  {this.props.expirationYear}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='card__back'>
          <div className='card__back__black-line'></div>
          <CvvField cvv={this.props.cvv} />
          <div className='card__back__card-type'></div>
        </div>
      </div>
    );
  }
}

class CardNumber extends React.Component {
  cardNumberHandler(inboundNumber) {
    let hashes = '#### #### #### ####'.split('');

    for (let i = 0; i < inboundNumber.length; i++) {
      if (i > 4 && i < 15 && hashes[i] !==' ') {
        hashes[i] = '*';
      } else {
        hashes[i] = inboundNumber[i];
      }
    }

    return hashes.join('');
  }
  
  render() {
    return (
      <div className='card__front__number'>
        {this.cardNumberHandler(this.props.number).split(' ').map((numGroup) => {
          return (
            <div className='card__front__number__group'>
              {numGroup.split('').map((digit) => {
                return (
                  <div className='card__front__number__group__item'>
                    {digit}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}


class CardHolder extends React.Component {
  render() {
    return (
      <div className='card__front__bottom-row__card-holder'>
        <div className='card__front__bottom-row__card-holder__label'>
          Card Holder
        </div>

        <div className='card__front__bottom-row__card-holder__value'>
          {this.props.name}
        </div>
      </div>
    );
  }
}

const CvvField = (props) => {
  return (
    <div className='card__back__cvv'>
      <label>CVV</label>
      <div className='card__back__cvv__field'>
        {props.cvv.split('').map(() => {
          return '*';
        })}
      </div>
    </div>
  );
}