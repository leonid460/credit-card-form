import React from 'react';

export default class Card extends React.Component {
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
      <div className={'card ' + this.props.status}>
        <div className='card__front'>
          <div className='card__front__top-row'>
            <div className='card__front__top-row__chip'></div>
            <div className='card__front__top-row__type'></div>

          </div>

          <div className='card__front__number'>
            {this.cardNumberHandler(this.props.number)}
          </div>

          <div class='card__front__bottom-row'>
            <div class='card__front__bottom-row__card-holder'>
              <div class='card__front__bottom-row__card-holder__label'>Card Holder</div>
              <div class='card__front__bottom-row__card-holder__value'>Leonid Kolchin</div>
            </div>
            
            <div class='card__front__bottom-row__expires-date'>
              <div class='card__front__bottom-row__expires-date__label'>Expires</div>
              <div class='card__front__bottom-row__expires-date__value'>18/11</div>
            </div>
          </div>
        </div>

        <div className='card_cover'></div>

        <div className='card__back'></div>
      </div>
    );
  }
}