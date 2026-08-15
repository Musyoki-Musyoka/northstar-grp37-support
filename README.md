# Northstar QuickHelp

Northstar QuickHelp is a support-deflection MVP created for Northstar Retail Co.

The purpose of the prototype is to help customers answer common support questions without immediately opening a support ticket.

## MVP Scope

Our prototype covers two support-ticket categories:

### 1. Order Status

Customers will be able to enter a fictional order number and receive a hard-coded order status.

The demonstration will include:

- a processing order;
- a shipped order;
- a delivered order;
- a safe response for an unknown order number.

### 2. Returns and Refunds

Customers will answer simple questions and receive hard-coded guidance about:

- return eligibility;
- the sample 30-day return window;
- item-condition requirements;
- expected refund-processing stages.

## Prototype Warning

This is a learning prototype, not a production system.

All order numbers, delivery information, return details, and refund information are fictional.

The prototype:

- does not use real customer information;
- does not connect to Northstar's systems;
- does not create a real return;
- does not issue a real refund;
- does not provide production authentication or security.

## Team Members

| Name | Primary responsibility | GitHub username |
|---|---|---|
| Anthony Musyoka | Team leader, repository, board, and integration | Musyoki-Musyoka |
| Marylene Ineza | Order-status flow | Marylene-ALC |
| Anne Mutahi | Returns and refunds flow | annemutahi |
| Vincent Kipkosgei | Visual design, accessibility, and QA | Tanui-001 |
| Amos Hambulle | Documentation, readiness, and audit | @hambulleson3718.blip |

## Working Method

The team will:

- divide the project into tasks of four hours or less;
- assign every task an owner, priority, estimate, and Definition of Done;
- use separate task branches;
- write descriptive commit messages;
- open pull requests for review;
- move Project Board cards on the same day as the work;
- use fictional data only;
- record genuine contribution and review evidence.

## Branch Convention

Branches will use this format:

`<type>/NS-<task-number>-<short-description>`

Example:

`feat/NS-05-order-page`

## Commit Convention

Commits will use this format:

`<type>: <what changed> - <why it matters> (NS-##)`

Example:

`feat: add order lookup form - collect the reference needed for status help (NS-05)`

## Final Status

**Decision:** Ready for a controlled demonstration using fictional data only. Not ready for production use or real customer data.

- **Live prototype:** https://northstar-grp37-support.vercel.app/
- **Public Project Board:** https://github.com/users/Musyoki-Musyoka/projects/3
- **Signed Team Charter:** [Open Team Charter](Doc/TEAM-CHARTER.md)
- **QA report:** [Open QA report](https://github.com/Musyoki-Musyoka/northstar-grp37-support/blob/main/Docs/End-to-end%20Quality%20Assurance%20(QA)%20and%20defect%20verification.md)
- **Go-live readiness note:** [Open go-live note](Doc/GO-LIVE-READINESS.MD)
- **Contribution checkpoint:** [Open checkpoint](checkpoint-map.md)

## Demonstration Inputs

### Order Status

- `NS1001` — Shipped
- `NS1002` — Processing
- `NS1003` — Delivered
- Any other value — Not-found guidance

### Returns

- `ORD-1001` with Return
- `ORD-1002` with Return
- `ORD-1003` with Return

### Refunds

- `ORD-2001` with Refund
- `ORD-2002` with Refund

## Production Limitations

This MVP uses fictional hard-coded data. It does not connect to Northstar’s live order, payment, carrier or return systems. It does not authenticate real customers, create real returns, issue real refunds or provide production monitoring, security, privacy, analytics or rollback controls.

