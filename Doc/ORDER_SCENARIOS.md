# Order Scenarios (Fictional Demo Data)

This file defines the fictional order data used across the order-status demo
(`order.html` + `order.js`). No real customer names, emails, or data are used
anywhere in this project — every ID, date, and message below is made up for
testing purposes only.

## Purpose

To give the whole team a single source of truth for what each demo order ID
should return, so the HTML page and the JavaScript logic stay in sync.

## Known Orders

| Order ID | Status     | Customer-safe message                                                        

| NS1001   | Shipped    | Your order has shipped and is on its way.             
| NS1002   | Processing | Your order is being prepared and hasn't shipped yet.    
| NS1003   | Delivered  | Your order has already been delivered.                  

## Unknown Order (fallback case)

| Input                          | Status    | Customer-safe message                                                                

| Anything else (blank, typo, unrecognized ID) | Not found | We couldn't find an order with that reference. Please double-check the ID. 

## Notes

- Matching should be **case-insensitive** and should ignore leading/trailing spaces.
- The unknown case must **never** leak any fictional order details.