# RETURN_RULES.md

# Return and Refund Rules

## Purpose

This document describes the sample return and refund policy rules used by the Northstar Retail Co. prototype.

These rules are for demonstration purposes only. The prototype displays policy outcomes based on selected decision values and does not process real returns, inspections, approvals, refunds, or payments.



## Return Request Rules

### Rule 1: Eligible Return

If the order was delivered, the request is within the 30-day return window, and the item remains in its original condition with tags attached:

* The return request is started.
* The customer is instructed to package the item with its original tags.
* The packing slip should be included.
* The prepaid return label should be used.
* Once the item is received and inspected, a refund will be issued.
* The prototype displays a sample refund timeline of 5–7 business days.

### Rule 2: Return Completed

If the refund stage indicates that the refund process has been completed:

* The return is considered complete.
* The returned item has been received.
* A refund has been issued to the original payment method.

### Rule 3: Return Outside Policy

If the return request is outside the 30-day return window:

* The order is not eligible for return.
* The customer is advised to contact customer support.

### Rule 4: Item Not in Original Condition

If the item is opened, used, damaged, or otherwise not in its original condition with tags attached:

* The order is not eligible for return.
* The customer is advised to contact customer support.


## Refund Request Rules

### Decision Table

| Delivery Status            | Result                                                |
| -------------------------- | ----------------------------------------------------- |
| Not delivered              | Refund request started.                               |
| Delivered and acknowledged | Refund not eligible. Customer should contact support. |

### Rule 5: Refund Request Started

If the order was not delivered:

* A refund request is started.
* The refund will be returned to the original payment method.
* The prototype displays a sample refund timeline of 5–7 business days.

### Rule 6: Refund Not Eligible

If the order was delivered and receipt was acknowledged:

* The order is not eligible for a delivery-related refund.
* The customer is advised to contact customer support for further assistance.


## Customer Support

Customer support should be offered when:

* A return request is outside the 30-day return window.
* An item is not in its original condition.
* A refund request is made for an order that was delivered and acknowledged.


## Sample Policy Notice

These are sample policy rules used by the prototype.

The prototype only displays informational outcomes and next steps. No real return request, inspection, approval, refund, or payment transaction occurs.
The information displayed is hard-coded.