import request from 'axios';
import { get } from 'lodash';
import constants from '../utils/constants';
import serviceUtils from '../utils/services';

const EventsService = {
  requestEvents: () => {
    const sortedEvents = [];
    const finalEvents = {};

    return request
      .get(constants.EVENTS)
      .then((data) => {
        const events = get(data, 'data.events');
        if (events) {
          events.forEach((event) => {
            const transactionId = serviceUtils.getKeyValue(event, 'transaction_id');
            if (!finalEvents[transactionId]) {
              finalEvents[transactionId] = {
                revenue: null,
                store: null,
                transaction_id: null,
                timestamp: null,
                products: [],
              };
            }

            switch (event.event) {
              case 'comprou':
                finalEvents[transactionId].revenue = event.revenue;
                finalEvents[transactionId].timestamp = event.timestamp;
                finalEvents[transactionId].transaction_id = transactionId;
                finalEvents[transactionId].store = serviceUtils.getKeyValue(event, 'store_name');
                sortedEvents.push(transactionId);
                break;

              case 'comprou-produto':
                finalEvents[transactionId].products.push({
                  productName: serviceUtils.getKeyValue(event, 'product_name'),
                  productPrice: serviceUtils.getKeyValue(event, 'product_price'),
                });
                break;

              default:
                break;
            }
          });
        }

        return { sortedEvents, finalEvents };
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default EventsService;
