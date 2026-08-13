const orderNumber = document.getElementById('orderNumber');
const requestType = document.getElementById('requestType');
const orderDetails = document.getElementById('orderDetails');
const renderedOrderNumber = document.getElementById('renderedOrderNumber');
const renderedRequestType = document.getElementById('renderedRequestType');
const renderedCustomerName = document.getElementById('renderedCustomerName');
const renderedItems = document.getElementById('renderedItems');
const renderedTotal = document.getElementById('renderedTotal');
const renderedDeliveryStatus = document.getElementById('renderedDeliveryStatus');
const renderedMessage = document.getElementById('renderedMessage');
const customerCare = document.getElementById('customerCare');
const deliveryStatus = document.getElementById('deliveryStatus');
const returnWindow = document.getElementById('returnWindow');
const itemCondition = document.getElementById('itemCondition');
const refundStage = document.getElementById('refundStage');
let lastAppliedOrderNumber = '';

const orders = {
    'ORD-1001': {
        customerName: 'Amina Hassan',
        items: 'Northstar Jacket',
        total: 'KES 8,999',
        deliveryStatus: 'Delivered',
        decisionValues: {
            deliveryStatus: 'delivered', returnWindow: 'yes', itemCondition: 'original', refundStage: 'requested'
        },
        return: {
            message: 'Your return request has started. Pack the jacket with its original tags, include the packing slip, and use the prepaid return label. Once we receive and inspect the item, a KES 8,999 refund will be issued within 5-7 business days.'
        }
    },
    'ORD-1002': {
        customerName: 'David Kimani',
        items: 'Canvas Travel Bag',
        total: 'KES 6,500',
        deliveryStatus: 'Return received - refund completed',
        decisionValues: {
            deliveryStatus: 'delivered', returnWindow: 'yes', itemCondition: 'original', refundStage: 'completed'
        },
        return: {
            message: 'Your return request is complete. We received the item and a KES 6,500 refund has been issued to your original payment method.'
        }
    },
    'ORD-1003': {
        customerName: 'Grace Wanjiku',
        items: 'Northstar Sneakers',
        total: 'KES 12,000',
        deliveryStatus: 'Delivered',
        decisionValues: {
            deliveryStatus: 'delivered', returnWindow: 'no', itemCondition: 'original', refundStage: 'not-requested'
        },
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
        decisionValues: {
            deliveryStatus: 'not-delivered', returnWindow: '', itemCondition: '', refundStage: 'requested'
        },
        refund: {
            message: 'Your refund request has started because this order was not delivered. A KES 5,500 refund will be returned to your original payment method within 5-7 business days.'
        }
    },
    'ORD-2002': {
        customerName: 'Faith Njeri',
        items: 'Insulated Water Bottle',
        total: 'KES 2,500',
        deliveryStatus: 'Delivered - receipt acknowledged',
        decisionValues: {
            deliveryStatus: 'acknowledged', returnWindow: '', itemCondition: '', refundStage: 'not-requested'
        },
        refund: {
            message: 'This order was delivered and receipt was acknowledged, so it is not eligible for a delivery-related refund.',
            contactCustomerCare: true
        }
    }
};

function applyOrderDecisionValues(order) {
    deliveryStatus.value = order.decisionValues.deliveryStatus;
    returnWindow.value = order.decisionValues.returnWindow;
    itemCondition.value = order.decisionValues.itemCondition;
    refundStage.value = order.decisionValues.refundStage;
}

function getDecisionMessage(requestType, order) {
    if (requestType === 'return') {
        if (refundStage.value === 'completed') {
            return 'Your return request is complete. The return was received and a ' + order.total + ' refund has been issued to your original payment method.';
        }
        if (returnWindow.value === 'no') {
            return 'This order is past the 30-day return period and is not eligible for a return.';
        }
        if (itemCondition.value && itemCondition.value !== 'original') {
            return 'This item is not in its original condition with tags and is not eligible for a return.';
        }
        return 'Your return request has started. Pack the item with its original tags, include the packing slip, and use the prepaid return label. Once we receive and inspect the item, a ' + order.total + ' refund will be issued within 5-7 business days.';
    }

    if (deliveryStatus.value === 'not-delivered') {
        return 'Your refund request has started because this order was not delivered. A ' + order.total + ' refund will be returned to your original payment method within 5-7 business days.';
    }
    return 'This order was delivered and receipt was acknowledged, so it is not eligible for a delivery-related refund.';
}

function renderOrderDetails() {
    const enteredOrderNumber = orderNumber.value.trim().toUpperCase();

    if (!enteredOrderNumber || !requestType.value) {
        orderDetails.hidden = true;
        lastAppliedOrderNumber = '';
        return;
    }

    const order = orders[enteredOrderNumber];
    const selectedRequestType = requestType.value;
    const request = order?.[selectedRequestType];

    if (!order || !request) {
        orderDetails.hidden = true;
        return;
    }

    if (enteredOrderNumber !== lastAppliedOrderNumber) {
        applyOrderDecisionValues(order);
        lastAppliedOrderNumber = enteredOrderNumber;
    }

    renderedOrderNumber.textContent = enteredOrderNumber;
    renderedRequestType.textContent = selectedRequestType === 'return' ? 'Return' : 'Refund';
    renderedCustomerName.textContent = order.customerName;
    renderedItems.textContent = order.items;
    renderedTotal.textContent = order.total;
    renderedDeliveryStatus.textContent = order.deliveryStatus;
    renderedMessage.textContent = getDecisionMessage(selectedRequestType, order);
    customerCare.hidden = !(
        (selectedRequestType === 'return' && (returnWindow.value === 'no' || (itemCondition.value && itemCondition.value !== 'original')))
        || (selectedRequestType === 'refund' && deliveryStatus.value !== 'not-delivered')
    );
    orderDetails.hidden = false;
}

orderNumber.addEventListener('input', renderOrderDetails);
requestType.addEventListener('change', renderOrderDetails);
[deliveryStatus, returnWindow, itemCondition, refundStage].forEach((select) => {
    select.addEventListener('change', renderOrderDetails);
});
