# NORTHSTAR SUPPORT MVP
## Quality Assurance and Defect Verification Report

### Project Information

- **Project:** Northstar Support MVP
- **Testing Activity:** End-to-End Quality Assurance (QA) and Defect Verification
- **Date:** 15 August 2026
- **Time of Test:** 19:03 hrs
- **Browser:** Google Chrome
- **Testing Environment:** Vercel production deployment
- **Production URL:** https://northstar-grp37-support.vercel.app/
- **Tested Code Commit:** [`d18ad72`](https://github.com/Musyoki-Musyoka/northstar-grp37-support/commit/d18ad72)
- **Application:** Northstar Support MVP

### Purpose of Testing

Testing was conducted to ascertain that the Northstar Support MVP functions correctly and that users can navigate through the system without errors.

Areas checked include:

- Page loading and accessibility
- Navigation between pages
- User interface and visual presentation
- Buttons and interactive elements
- Order/support lookup functionality
- Returns-related functionality
- Error handling
- General usability
- Layout and responsiveness
- Overall system stability

### Test Results

| Area Tested | Test Performed | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| Page Loading | Open the MVP | Application loads correctly | Application loaded correctly | PASS |
| Navigation | Navigate between available pages | Pages open correctly | Pages opened correctly | PASS |
| User Interface | Check layout and visual elements | Elements display correctly | Elements displayed correctly | PASS |
| Buttons | Click available buttons | Buttons perform expected actions | Buttons worked correctly | PASS |
| Order/Support Lookup | Test the lookup functionality | Correct information is displayed | Function worked correctly | PASS |
| Returns | Access the returns functionality | Returns information/functionality is available | Worked correctly | PASS |
| Returns Form Submission | Submit ORD-1001 + Return by button and Enter | Result appears without HTTP POST/405 | Result appeared and no 405 occurred | PASS |
| Error Handling | Test invalid/incorrect input where applicable | Appropriate response is provided | Worked as expected | PASS |
| Responsiveness | Check layout at different screen sizes | Layout remains usable | Layout remained usable | PASS |
| Usability | Navigate through the MVP as a user | System is easy to understand and use | System was usable | PASS |
| Overall Stability | Use the MVP continuously | No crashes or major errors | No errors observed | PASS |

### Defect Log
One production defect was identified and corrected during final verification.

| Defect ID | Description | Severity | Status |
|---|---|---|---|
| D01 | Returns form attempted to POST to static Vercel, producing HTTP 405 | P0 | Fixed in PR #35 and retested successfully |

### Defect Verification

Defect D01 was corrected by removing the static POST behaviour and preventing normal browser form submission. The corrected production form was retested by button and Enter-key submission, and no customer-facing HTTP 405 occurred.

The MVP therefore passed the QA verification performed at **20:14 hrs on 15 August 2026** using **Google Chrome**.

### Final Status

**PASS**

The Northstar Support MVP performed as expected during the QA test. The application's core functionality, navigation, interface, interactive elements, and general usability were verified successfully.

One defect was identified, corrected and successfully retested. No open P0 defect remained in the two demonstrated customer journeys at the end of this QA pass.
