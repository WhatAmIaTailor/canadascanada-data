{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # Contributing to CanadaScanada\
\
Thank you for your interest in improving CanadaScanada! This guide explains how to contribute events, correct errors, and improve the codebase.\
\
## Ways to Contribute\
\
1. **Submit New Events**: Add UCP decisions or other provincial events\
2. **Correct Errors**: Fix inaccuracies in existing data\
3. **Add Media Organizations**: Expand the media directory\
4. **Translate Content**: Help with French translations\
5. **Documentation**: Clarify instructions or add context\
\
---\
\
## Submitting New Events\
\
### Prerequisites\
- Event must be **verifiable** (news source URL required)\
- Event must have **public interest significance**\
- Event must relate to Canadian governance, media, or rights\
\
### Process\
1. Fork this repository\
2. Create new branch: `git checkout -b add-event-[event-name]`\
3. Add event to appropriate JSON file in `/events/priority/` or `/events/appendix/`\
4. Follow data schema\
5. Include at least one source URL\
6. Commit: `git commit -m "Add event: [title]"`\
7. Push and create Pull Request\
\
### Event Data Requirements\
\{\
"id": "ucp-[slug]-[year]",\
"type": "priority" | "appendix" | "historical",\
"date": "YYYY-MM-DD",\
"title": "Clear, neutral title",\
"category": ["labor", "healthcare", etc.],\
"details": \{\
"description": "2-3 sentences, neutral tone",\
"sources": [\
\{\
"url": "https://...",\
"outlet": "CBC News",\
"publishDate": "YYYY-MM-DD",\
"accessed": "YYYY-MM-DD"\
\}\
]\
\}\
\}\
\
\
**Analysis Layer** (optional for appendix, required for priority):\
- Only add if you can cite evidence for theoretical frameworks\
- Do not editorialize\'97apply frameworks with specific evidence\
- Link to other events where connections exist\
\
---\
\
## Correcting Errors\
\
### Found an Error?\
1. Check if already reported in Issues\
2. If not, open new Issue with:\
   - Event ID\
   - Description of error\
   - Correct information\
   - Supporting source URL\
\
### Submitting Correction via PR\
1. Fork repository\
2. Fix error in JSON file\
3. Add note in commit message: `Fix: [event ID] - [what was corrected]`\
4. Submit PR\
\
**We review all corrections within 7 days.**\
\
---\
\
## Adding Media Organizations\
\
### Criteria\
- Organization must have significant Canadian audience OR\
- Organization must have documented connections to Canadian politics/media\
\
### Required Data\
\{\
"id": "media-[slug]",\
"legalName": "...",\
"operatingName": "...",\
"domains": ["..."],\
"legitimacy": "qcjo-designated" | ...,\
"qcjoStatus": \{\
"designated": true/false,\
"verificationUrl": "..."\
\},\
"ownership": \{\
"canadianOwned": true/false,\
"ownershipBreakdown": [...]\
\}\
\}\
\
\
**Verification**: Provide sources for:\
- QCJO status: Link to CRA QCJO list\
- Ownership: Corporate filings, shareholder reports\
- Political endorsements: Archived editorials\
\
---\
\
## Translation Contributions\
\
### French (fr_CA) Translations\
**Current Status**: UI strings translated, event content pending\
\
**How to Help**:\
1. Check translation needs\
2. Translate event titles/descriptions (maintain neutral tone)\
3. Ensure Canadian French spelling\
4. Submit PR with translations\
\
---\
\
## Community Guidelines\
\
### Be Respectful\
- Assume good faith\
- Constructive criticism only\
- No personal attacks\
- Respect diverse perspectives\
\
### Focus on Facts\
- Evidence-based contributions\
- Cite sources\
- Acknowledge uncertainty\
- Separate opinion from fact\
\
### Transparency\
- Disclose conflicts of interest\
- Explain your reasoning\
- Accept corrections graciously\
\
---\
\
## Recognition\
\
Contributors are credited in:\
- Git commit history (automatic)\
- CONTRIBUTORS.md (for significant contributions)\
- Event metadata (if you added event)\
\
---\
\
## Questions?\
\
- **Data/Events**: Open GitHub Issue\
- **Code**: Open GitHub Discussion\
- **Private**: Email [your-email@example.com]\
\
---\
\
**Thank you for helping make Canadian media more transparent!**\
}