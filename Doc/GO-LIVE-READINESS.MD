One-Page Go-Live Readiness Note

            Northstar Support Dashboard 
Field	Details
Project	Northstar Support Deflection MVP
Version	1.0 MVP
Prepared by	Amos Lerumben Hambulle
Date	13.08.2026
Repository	https://github.com/Musyoki-Musyoka/northstar-grp37-support.git
 1. Working Scope
The Northstar Support Dashboard is a self-service Minimum Viable Product (MVP) designed to reduce repetitive customer-support requests. The current MVP supports two selected customer-service areas:
•	Order Status – customers can enter a fictional order number and view the corresponding order status.
•	Returns & Refunds – customers can follow defined decision rules to receive guidance on returning an item or checking refund information.
The prototype uses fictional/hard-coded data and demonstrates the proposed approach. It is not intended to operate as a production system in its current form. Has fully accessible HTML/CSS interface optimized for both web browsers and mobile viewports.
2. Observed Defects
During testing, the team identified the following issues:
ID	Defect	                  Severity	            Status
D01	Generic error	              low	                 Fixed 
D02	Mobile layout overflow	    low	                 Fixed 

No critical defects remain in the tested MVP scope. Minor limitations and production gaps are documented below.
3. Run Steps
To demonstrate the MVP:
•	Open the project repository/application.
•	Open the dashboard homepage.
•	Select Track My Order.
•	Enter one of the provided fictional order numbers.
•	Confirm that the appropriate order status is displayed.
•	Return to the homepage.
•	Select Returns & Refunds.
•	Follow the return/refund decision questions.
•	Confirm that the appropriate guidance is displayed.


Run Verification: The team successfully ran the MVP using the steps above. The order status and returns and refunds flows were demonstrated successfully using the defined fictional scenarios.


4. Production Gaps
Before the solution can be used in a live production environment, the following areas require further improvement:
•	Replace hard-coded/fictional order data with Northstar's live order database.
•	Connect the application to real order-status information.
•	Connect the returns/refund process to Northstar's actual systems.
•	Implement appropriate authentication and security controls.
•	Conduct additional accessibility and mobile testing.
•	Perform production-scale testing.
•	Establish monitoring, maintenance and support procedures.


5. Handover Needs
The following items should be handed over to the Northstar technical support team:
•	GitHub repository and source code.
•	README and setup instructions.
•	Description of order-status and returns/refund logic.
•	Test information and known limitations.
•	Project board and relevant audit records.
•	Instructions for replacing fictional data with production data.


Recommendation: Demonstation-ready MVP; not yet production-ready.
The MVP demonstrates the proposed self-service approach for order status and returns/refunds. However,
integration with live Northstar systems, additional testing, security checks and production preparation are required before the solution can be deployed for real customers.


