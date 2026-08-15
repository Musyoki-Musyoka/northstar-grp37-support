NS-15 – Checkpoint and Final Audit Package
Field	Details
Project	Northstar Support Deflection MVP
Task	NS-15 – Produce checkpoint and final audit package
Owner	Amos Hambulle– GitHub: hambulleson3718-blip
Team size	5 members, 15 assigned tasks (3 per member)
Repository (main branch)	https://github.com/Musyoki-Musyoka/northstar-grp37-support/tree/main
Issue tracker / board items	https://github.com/Musyoki-Musyoka/northstar-grp37-support/issues
Commit history	https://github.com/Musyoki-Musyoka/northstar-grp37-support/commits/main
Pull requests	https://github.com/Musyoki-Musyoka/northstar-grp37-support/pulls
Sprint window	12 August 2026 to 14 August 2026
Document version	v3.0
Date issued	14/08/2026
1. Purpose and scope
This package provides the auditable evidence trail for the Northstar Support Deflection MVP sprint. It maps each team member's visible GitHub and project-board activity to the Northstar tasks (NS-01 to NS-15) assigned to them, and lists the raw exports that support that mapping.
In scope: visible repository activity, project-board items, and the traceability mapping between them. Out of scope: any confidential peer-evaluation material (see Section 8).
2. Definition of Done
•	Commit history for the sprint window reviewed and linked (8 commits on main).
•	All 15 board items reviewed, with assignee and open/closed status recorded.
•	Checkpoint map showing every member's visible activity against their assigned NS tasks.
•	Every NS task (NS-01 to NS-15) has a named owner and at least one evidence link.
•	All evidence links opened and confirmed to resolve to the correct repository or board item.
•	No confidential peer-evaluation forms or Peer Reliability Index responses included.
•	Package reviewed and signed off in the verification log (Section 9).
3. Method
1. Exported the full commit history for the sprint window from the project repository.
2. Exported the project board, including item title, owner, status and last update.
3. Matched each board item to its NS task number, then matched commits and pull requests to that item.
4. Recorded the mapping in the checkpoint map and traceability table below.
5. Flagged any task with no visible evidence as an exception in Section 7 rather than leaving it blank.
4. Team contribution checkpoint map
Member	GitHub handle	NS tasks	Visible GitHub evidence	Board evidence	Status
Anthony	Musyoki-Musyoka	NS-01 to NS-03	/commit/5dbaafa, /commit/108ee73, /commit/76ca93a, /commit/5852d07, /commit/ed21081, PR #21	Issues #1, #2, #3, #4	Verified
Marylene	Marylene-ALC	NS-04 to NS-06	No commits or pull requests on main	Issues #5, #6, #7 (all open)	Not evidenced
Anne	annemutahi	NS-07 to NS-09	/commit/7c94b66 (returns.html, returns.js); branch feat/NS-7-returns-refunds-page; /commit/d393b6e	Issues #8, #9, #10 (all closed)	Partial
Vincent	Tanui-001	NS-10 to NS-12	No commits or pull requests on main	Issues #11, #12, #13 (all open)	Not evidenced
Amos	hambulleson3718-blip	NS-13 to NS-15	/commit/19c3de2 (Doc/GO-LIVE-READINESS.MD); PR #18 (open); Issue #20	Issues #14 (closed), #15, #16	Partial
 

5. Task-to-evidence traceability
NS Task	Task description	Owner	Commit / PR evidence	Board evidence
NS-01	Set up repository and access	Anthony	/commit/5dbaafa, /commit/108ee73	Issue #1 – closed
NS-02	Populate the project board	Anthony	No code artefact (board-only task)	Issues #2 (closed), #3 (open)
NS-03	Build homepage and basic README	Anthony	PR #21 (merged) → /commit/ed21081; /commit/76ca93a; /commit/5852d07 (README)	Issue #4 – closed
NS-04	Define fictional order scenarios	Marylene	Not evidenced in repository	Issue #5 – open
NS-05	Build order-status HTML page	Marylene	Not evidenced in repository	Issue #6 – open
NS-06	Implement and test hard-coded order logic	Marylene	Not evidenced in repository	Issue #7 – open
NS-07	Define return and refund decision rules	Anne	Rules recorded in issue thread only	Issue #8 – closed
NS-08	Build return/refund HTML page	Anne	/commit/7c94b66 (returns.html); branch feat/NS-7-returns-refunds-page; reverted on main by /commit/d393b6e	Issue #9 – closed
NS-09	Implement and test return/refund logic	Anne	/commit/7c94b66 (returns.js)	Issue #10 – closed
NS-10	Create shared visual design	Vincent	Not evidenced in repository	Issue #11 – open
NS-11	Mobile and accessibility pass	Vincent	Not evidenced in repository	Issue #12 – open
NS-12	End-to-end quality assurance and defect verification	Vincent	Not evidenced in repository	Issue #13 – open
NS-13	Write one-page go-live readiness note	Amos	/commit/19c3de2 (Doc/GO-LIVE-READINESS.MD); PR #18 (open)	Issue #14 – closed
NS-14	Maintain collaboration and demo documents	Amos	Issue #20 review thread; Issue #17 commit-process note	Issue #15 – open
NS-15	Produce checkpoint and final audit package	Amos	This document (NS-15 audit package v3)	Issue #16 – open
 
6. Audit files
Artefact	Contents	Location (relative to repository)
index.html	Support journey home page (NS-03).	/blob/main/index.html
README.md	Project overview and team member details (NS-03).	/blob/main/README.md
Doc/GO-LIVE-READINESS.MD	One-page go-live readiness note (NS-13).	/blob/main/Doc/GO-LIVE-READINESS.MD
Commit history export	Full commit history for the sprint window (8 commits).	/commits/main
Issue and board items	15 task items plus process issues, with assignees and status.	/issues
Pull requests	PR #21 (merged), PR #19 (closed), PR #18 (open).	/pulls
Branches	main, feat/NS-3-home-page, feat/NS-7-returns-refunds-page, NS-13-GO-LIVE-READINESS.	/branches
7. Exceptions and gaps
Any task without visible evidence is recorded here so the audit trail stays honest and complete.
NS Task	Gap identified	Action or explanation
NS-04 to NS-06	No commits, pull requests or files on main for the order-status stream; all three issues remain open.	Owner to push the work to a feature branch and raise a pull request before final submission.
NS-08 / NS-09	returns.html and returns.js were pushed directly to main in /commit/7c94b66 and removed in /commit/d393b6e, so the files are not present on main. The work survives only on branch feat/NS-7-returns-refunds-page.	Owner to raise a pull request from feat/NS-7-returns-refunds-page into main so the pages are traceable on the main branch.
NS-10 to NS-12	No commits or pull requests for shared visual design, mobile and accessibility, or QA; all three issues remain open.	Owner to record design and QA outputs in the repository (files or issue comments) before sign-off.
NS-13	PR #18 is still open; the readiness note reached main through /commit/19c3de2, committed directly.	Merge or close PR #18 so the branch and main agree.
NS-02	Duplicate board items: Issue #2 (closed) and Issue #3 (open) cover the same task.	Close Issue #3 as a duplicate so the board holds exactly 15 task items.
Hosting	GitHub Pages is not enabled, so no live URL exists for the HTML pages.	Enable GitHub Pages on main if a live demo link is required.
8. Confidentiality statement
This package contains only visible project artefacts: commits, pull requests and project-board items. No confidential Peer Reliability Index responses, peer-evaluation forms or private feedback are included, referenced or summarised. Confidential material remains with the module tutor.
9. Verification log
Verification item	Checked by	Date	Status	Notes
Git activity matches visible team contributions	Anthony	14/08/26	Complete	6 gaps logged in Section 7
Board items have owners and current statuses	Anne	14/08/26	Complete	–
Task-to-commit/PR links resolve correctly	Marylene	14/08/26	Complete	All links opened and checked
Every NS task has a named owner	Vincent	14/08/26	Complete	–
Confidential peer forms excluded	Amos	14/08/26	Complete	–
Package compiled and issued	Amos	14/08/26	Complete	v3.0
Sign-off: this audit package is complete and accurate as at the date of issue.
Name and role	Signature	Date
Amos – NS-15 owner		14/08/26
[Team lead]		[dd/mm/yy]


