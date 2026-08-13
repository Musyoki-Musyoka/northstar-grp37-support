const orderNumber = document.getElementById('orderNumber');
const requestTypes = document.querySelectorAll('input[name="requestType"]');
const orderDetails = document.getElementById('orderDetails');
const renderedOrderNumber = document.getElementById('renderedOrderNumber');
const renderedRequestType = document.getElementById('renderedRequestType');
const renderedCustomerName = document.getElementById('renderedCustomerName');
const renderedItems = document.getElementById('renderedItems');
const renderedTotal = document.getElementById('renderedTotal');
const renderedDeliveryStatus = document.getElementById('renderedDeliveryStatus');
const renderedMessage = document.getElementById('renderedMessage');
const customerCare = document.getElementById('customerCare');

const orders = {
    'ORD-1001': {
        customerName: 'Amina Hassan',
        items: 'Northstar Jacket',
        total: 'KES 8,999',
        deliveryStatus: 'Delivered',
        return: {
            message: 'Your return request has started. Pack the jacket with its original tags, include the packing slip, and use the prepaid return label. Once we receive and inspect the item, a KES 8,999 refund will be issued within 5-7 business days.'
        }
    },
    'ORD-1002': {
        customerName: 'David Kimani',
        items: 'Canvas Travel Bag',
        total: 'KES 6,500',
        deliveryStatus: 'Return received - refund completed',
        return: {
            message: 'Your return request is complete. We received the item and a KES 6,500 refund has been issued to your original payment method.'
        }
    },
    'ORD-1003': {
        customerName: 'Grace Wanjiku',
        items: 'Northstar Sneakers',
        total: 'KES 12,000',
        deliveryStatus: 'Delivered',
        return: {
            message: 'This order is past the 14-day return period and is not eligible for a return.',
            contactCustomerCare: true
        }
    },
    'ORD-2001': {
        customerName: 'Brian Otieno',
        items: 'Northstar Hoodie',
        total: 'KES 5,500',
        deliveryStatus: 'Not delivered',
        refund: {
            message: 'Your refund request has started because this order was not delivered. A KES 5,500 refund will be returned to your original payment method within 5-7 business days.'
        }
    },
    'ORD-2002': {
        customerName: 'Faith Njeri',
        items: 'Insulated Water Bottle',
        total: 'KES 2,500',
        deliveryStatus: 'Delivered - receipt acknowledged',
        refund: {
            message: 'This order was delivered and receipt was acknowledged, so it is not eligible for a delivery-related refund.',
            contactCustomerCare: true
        }
    }
};

function renderOrderDetails() {
    const selectedRequest = document.querySelector('input[name="requestType"]:checked');
    const enteredOrderNumber = orderNumber.value.trim().toUpperCase();

    if (!enteredOrderNumber || !selectedRequest) {
        orderDetails.hidden = true;
        return;
    }

    const order = orders[enteredOrderNumber];
    const requestType = selectedRequest.value;
    const request = order?.[requestType];

    if (!order || !request) {
        orderDetails.hidden = true;
        return;
    }

    renderedOrderNumber.textContent = enteredOrderNumber;
    renderedRequestType.textContent = requestType === 'return' ? 'Return' : 'Refund';
    renderedCustomerName.textContent = order.customerName;
    renderedItems.textContent = order.items;
    renderedTotal.textContent = order.total;
    renderedDeliveryStatus.textContent = order.deliveryStatus;
    renderedMessage.textContent = request.message;
    customerCare.hidden = !request.contactCustomerCare;
    orderDetails.hidden = false;
}

orderNumber.addEventListener('input', renderOrderDetails);
requestTypes.forEach((requestType) => {
    requestType.addEventListener('change', renderOrderDetails);
});
