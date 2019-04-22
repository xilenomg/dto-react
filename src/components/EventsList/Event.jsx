import React from 'react';
import './Event.scss';

import CalendarIcon from '../../../icons/calendar.svg';
import CheckIcon from '../../../icons/check.svg';
import ClockIcon from '../../../icons/clock.svg';
import MoneyIcon from '../../../icons/money.svg';
import PlaceIcon from '../../../icons/place.svg';

const Event = ({
  revenue, store, products, timestamp,
}) => {
  const eventDatetime = new Date(timestamp);
  const dateFormatted = `${eventDatetime.getDate()}/${eventDatetime.getMonth()
    + 1}/${eventDatetime.getFullYear()}`;
  const timeFormatted = `${eventDatetime.getHours()}:${eventDatetime.getMinutes()}`;
  return (
    <div className="Event">
      <div className="EventIcon">
        <img src={CheckIcon} alt="Check Icon" />
      </div>
      <div className="EventInfo">
        <div>
          <img src={CalendarIcon} alt="Calendar Icon" />
          {' '}
          {dateFormatted}
        </div>
        <div>
          <img src={ClockIcon} alt="Clock Icon" />
          {timeFormatted}
        </div>
        <div>
          <img src={PlaceIcon} alt="Place Icon" />
          {store}
        </div>
        <div>
          <img src={MoneyIcon} alt="Money Icon" />
          {`R$ ${revenue.toFixed(2)}`}
        </div>
      </div>

      {products && products.length > 0 && (
        <div className="EventProducts">
          <div className="productRow">
            <div className="productName productListHeader">Produto</div>
            <div className="productPrice productListHeader">Preço</div>
          </div>
          {products.map(product => (
            <div className="productRow" key={`product-${product.productName}`}>
              <div className="productName">{product.productName}</div>
              <div className="productPrice">
                {`R$ ${product.productPrice.toFixed(2)}`}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Event;
