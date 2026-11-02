---
name: issue-to-pr
description: Read an open issue, propose a fix, and open a draft pull request for review. Use when asked to turn an issue into a suggested fix or pull request.
---

# Issue to PR

Turn one open issue into a suggested fix that a person reviews. These are the
same `gh` commands you ran by hand in Section 1.

1. Confirm the learner's fork target and push remote established in this
   session. Inspect `git remote -v`, verify the selected destination with
   `gh repo view <fork-url> --json nameWithOwner,parent`, and confirm ownership or
   write access. Origin may still be the event repository. Use
   `GH_REPO=<verified-owner/repo>` for every GitHub CLI operation and push only to
   the explicitly verified fork remote, never implicitly to origin.
   - If no fork destination is ready, stop before edits or resource creation.
     Offer to prepare it in this same checkout with approval, preserving origin,
     other remotes, and local work. Do not open or switch sessions.
2. Pick the issue. Use the number you were given, or list open issues and ask:
   `gh issue list --state open`
3. Read the issue and the code it mentions: `gh issue view <n>`
4. When a fix needs library, framework, or API documentation, use the
   Context7 connector to look up current, version-relevant guidance. Resolve
   the library ID first, then query one focused documentation topic and include
   the programming language when known.
   - Send only public documentation queries to Context7. Do not include
     repository code, secrets, credentials, personal data, or other private
     information.
   - Cite the relevant documentation source URLs in the draft PR body.
   - If Context7 is unavailable or the lookup fails, say so plainly. Do not
     claim that documentation was checked, and do not substitute a web search.
5. Create a branch: `git switch -c fix/issue-<n>`
6. Make the smallest change that fixes the issue, and run the project's tests
   if it has any.
7. Run the built-in `/security-review` skill on the changes before committing
   or opening the pull request. Fix any HIGH or CRITICAL findings, then rerun
   the review to confirm they are addressed. Include any remaining findings
   below HIGH severity in the draft pull request body.
8. Show the changes and obtain approval before committing, pushing explicitly to
   the verified fork remote, and opening
   a draft pull request that closes the issue. Preserve any learner skill edits
   and include them only with approval:
   `gh pr create --draft --title "Fix #<n>: <issue title>" --body "Closes #<n>"`
9. Ask before commenting on the issue with what changed and how to test it.
   Report the exact issue, PR, and branch. Leave this PR branch checked out so
   the learner can review it in the same session; do not switch branches.

## Rules

- Never merge, approve, or close anything. A person reviews the pull request.
- If the fix is unclear, comment on the issue with your questions instead of guessing.
- Stage only the files you changed for this issue.
