{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # CanadaScanada - Complete Lovable.dev Build Sequence\
\
**Your GitHub Data Repository**: https://github.com/WhatAmIaTailor/canadascanada-data\
\
**Instructions**: Copy each prompt below and paste into Lovable.dev chat. Wait for completion and verify acceptance criteria before moving to next prompt.\
\
---\
\
## PHASE 1: Foundation Setup\
\
# \uc0\u55357 \u56550  BATCH 5 (FINAL): REMAINING SCHEMAS + LOVABLE PROMPTS + QUICK START\
\
## FILE 15: schemas/MediaOrg.ts\
\
**Location**: `schemas/MediaOrg.ts`\
\
```typescript\
// schemas/MediaOrg.ts\
// TypeScript schema for CanadaScanada media organizations\
// Copy this into your Lovable project's src/data/schemas/ folder\
\
export interface MediaOrganization \{\
  id: string;\
  legalName: string;\
  operatingName: string;\
  domains: string[];\
  legitimacy: MediaLegitimacy;\
  qcjoStatus: QCJOStatus;\
  crtcLicense?: CRTCLicense;\
  ownership: Ownership;\
  political: PoliticalActivity;\
  canadianContentScore: number;\
  metadata: MediaOrgMetadata;\
\}\
\
export type MediaLegitimacy =\
  | "qcjo-designated"\
  | "crtc-licensed"\
  | "independent-verified"\
  | "editorial-opinion"\
  | "foreign-entertainment"\
  | "political-commentary"\
  | "unregistered";\
\
export interface QCJOStatus \{\
  designated: boolean;\
  designationDate?: string;\
  craCertificate?: string;\
  verificationUrl: string;\
\}\
\
export interface CRTCLicense \{\
  licensed: boolean;\
  licenseNumber?: string;\
  type?: "conventional" | "specialty" | "exempt";\
  verificationUrl?: string;\
\}\
\
export interface Ownership \{\
  canadianOwned: boolean;\
  ownershipBreakdown: OwnershipStake[];\
  parentCompany?: string;\
  ultimateBeneficialOwner?: string;\
  publiclyTraded: boolean;\
  ticker?: string;\
\}\
\
export interface OwnershipStake \{\
  entity: string;\
  percentage: number;\
  country: string;\
  type: "corporate" | "individual" | "government" | "trust";\
  notes?: string;\
\}\
\
export interface PoliticalActivity \{\
  endorsements: Endorsement[];\
  ucpConnections?: UCPConnection[];\
  donations?: PoliticalDonation[];\
  collaborations?: string[];\
\}\
\
export interface Endorsement \{\
  election: string;\
  date: string;\
  endorsedParty?: string;\
  endorsedCandidate?: string;\
  source: string;\
\}\
\
export interface UCPConnection \{\
  type: "advertising" | "sponsorship" | "appearance" | "funding" | "collaboration";\
  description: string;\
  date?: string;\
  amount?: number;\
  source: string;\
\}\
\
export interface PoliticalDonation \{\
  recipient: string;\
  amount: number;\
  year: string;\
  source: string;\
\}\
\
export interface MediaOrgMetadata \{\
  foundedYear?: number;\
  headquarters: string;\
  employeeCount?: number;\
  circulation?: number;\
  monthlyVisitors?: number;\
  addedDate: string;\
  lastUpdated: string;\
  notes?: string;\
\}\
```\
\
***\
\
## FILE 16: schemas/CharterRights.ts\
\
**Location**: `schemas/CharterRights.ts`\
\
```typescript\
// schemas/CharterRights.ts\
// Canadian Charter of Rights and Freedoms reference data\
// Copy this into your Lovable project's src/data/schemas/ folder\
\
export interface CharterSection \{\
  section: string;\
  title: string;\
  description: string;\
  fullText: string;\
  canBeOverridden: boolean;\
  caselaw?: Caselaw[];\
\}\
\
export interface Caselaw \{\
  caseName: string;\
  year: number;\
  citation: string;\
  significance: string;\
  url?: string;\
\}\
\
export const CHARTER_SECTIONS: Record<string, CharterSection> = \{\
  "2a": \{\
    section: "Section 2(a)",\
    title: "Freedom of Conscience and Religion",\
    description: "Protects the right to hold and practice religious beliefs",\
    fullText: "freedom of conscience and religion",\
    canBeOverridden: true,\
    caselaw: [\
      \{\
        caseName: "R. v. Big M Drug Mart Ltd.",\
        year: 1985,\
        citation: "[1985] 1 SCR 295",\
        significance: "Established freedom of religion includes freedom from religion"\
      \}\
    ]\
  \},\
  "2b": \{\
    section: "Section 2(b)",\
    title: "Freedom of Expression",\
    description: "Protects freedom of thought, belief, opinion and expression, including freedom of the press",\
    fullText: "freedom of thought, belief, opinion and expression, including freedom of the press and other media of communication",\
    canBeOverridden: true\
  \},\
  "2c": \{\
    section: "Section 2(c)",\
    title: "Freedom of Peaceful Assembly",\
    description: "Protects the right to peaceful assembly and protest",\
    fullText: "freedom of peaceful assembly",\
    canBeOverridden: true\
  \},\
  "2d": \{\
    section: "Section 2(d)",\
    title: "Freedom of Association",\
    description: "Protects the right to form and join unions, engage in collective bargaining",\
    fullText: "freedom of association",\
    canBeOverridden: true,\
    caselaw: [\
      \{\
        caseName: "Saskatchewan Federation of Labour v. Saskatchewan",\
        year: 2015,\
        citation: "2015 SCC 4",\
        significance: "Established constitutional right to strike"\
      \}\
    ]\
  \},\
  "7": \{\
    section: "Section 7",\
    title: "Life, Liberty and Security of the Person",\
    description: "Protects the right to life, liberty and security of the person",\
    fullText: "Everyone has the right to life, liberty and security of the person and the right not to be deprived thereof except in accordance with the principles of fundamental justice",\
    canBeOverridden: true\
  \},\
  "15": \{\
    section: "Section 15",\
    title: "Equality Rights",\
    description: "Protects against discrimination",\
    fullText: "Every individual is equal before and under the law and has the right to the equal protection and equal benefit of the law without discrimination",\
    canBeOverridden: true\
  \},\
  "33": \{\
    section: "Section 33",\
    title: "Notwithstanding Clause",\
    description: "Allows Parliament or provincial legislatures to override certain Charter rights for up to 5 years",\
    fullText: "Parliament or the legislature of a province may expressly declare in an Act of Parliament or of the legislature that the Act or a provision thereof shall operate notwithstanding a provision included in section 2 or sections 7 to 15 of this Charter",\
    canBeOverridden: false\
  \}\
\};\
```\
\
***\
\
## FILE 17: LOVABLE_PROMPTS.md\
\
**Location**: Root of your data repo `LOVABLE_PROMPTS.md`\
\
```markdown\
# CanadaScanada - Complete Lovable.dev Build Sequence\
\
**Your GitHub Data Repository**: https://github.com/WhatAmIaTailor/canadascanada-data\
\
**Instructions**: Copy each prompt below and paste into Lovable.dev chat. Wait for completion and verify acceptance criteria before moving to next prompt.\
\
---\
\
## PHASE 1: Foundation Setup\
\
```\
Create a new React + TypeScript project called "CanadaScanada" - a Canadian media transparency and accountability tool.\
\
PROJECT CONTEXT:\
- Purpose: Help Canadians understand news media ownership, political affiliations, and government policy impacts\
- Case Study: Alberta UCP governance 2019-2025\
- Tech Stack: React 18 + TypeScript + Tailwind CSS + Zustand + Framer Motion + React Router + Recharts\
- Design: Modern, accessible (WCAG 2.1 AA), frosted glass UI, smooth animations\
\
SETUP REQUIREMENTS:\
1. Initialize project with Vite + TypeScript + Tailwind\
2. Install dependencies: zustand, framer-motion, react-router-dom, recharts, react-i18next\
3. Create folder structure:\
   - /src/components (atoms, molecules, organisms, templates)\
   - /src/lib (utility functions)\
   - /src/hooks (custom React hooks)\
   - /src/store (Zustand stores)\
   - /src/pages (route pages)\
   - /src/styles (theme config)\
4. Set up React Router with routes: /, /media-orgs, /learn\
5. Create base Layout component with header, nav, footer\
6. Implement theme system: Light/Dark mode + Canada theme (red #FF0000, white #FFFFFF)\
7. Set up i18n with react-i18next (en_CA default, fr_CA prepared)\
\
DESIGN SYSTEM:\
- Typography: System font stack with Canadian English spelling\
- Frosted glass modals: backdrop-filter: blur(10px), ensure 4.5:1 contrast\
- Animations: Respect prefers-reduced-motion\
- Spacing: Tailwind defaults\
\
ACCEPTANCE CRITERIA:\
- [x] Project builds without errors\
- [x] Routing works between main pages\
- [x] Theme toggle switches between light/dark\
- [x] Layout renders with header/nav/footer\
- [x] Canadian English spelling (colour, centre, labour)\
```\
\
**CHECKPOINT 1**: Verify routing works, theme toggles, basic layout renders.\
\
---\
\
## PHASE 2: Data Fetching from GitHub\
\
```\
Set up data fetching from GitHub and TypeScript schemas for CanadaScanada.\
\
CONTEXT:\
- Data stored in public GitHub repo: https://github.com/WhatAmIaTailor/canadascanada-data\
- Lovable will fetch JSON via raw GitHub URLs at runtime\
\
CONSTANTS FILE - Create /src/lib/constants.ts:\
```typescript\
export const GITHUB_DATA_BASE_URL = "https://raw.githubusercontent.com/WhatAmIaTailor/canadascanada-data/main";\
\
export const EVENT_CATEGORIES = [\
  "labor", "healthcare", "education", "environment", \
  "energy", "finance", "rights", "governance", \
  "international", "municipal-interference", "media", "indigenous"\
] as const;\
\
export const MINISTRIES = [\
  "Health", "Education", "Treasury Board and Finance", \
  "Executive Council", "Advanced Education", "Energy",\
  "Environment and Parks", "Labour and Immigration"\
] as const;\
```\
\
DATA UTILITIES - Create /src/lib/dataUtils.ts:\
```typescript\
const BASE_URL = "https://raw.githubusercontent.com/WhatAmIaTailor/canadascanada-data/main";\
\
export async function fetchPriorityEvents(year: string) \{\
  const response = await fetch(`$\{BASE_URL\}/events/priority/$\{year\}.json`);\
  if (!response.ok) throw new Error(`Failed to fetch events for $\{year\}`);\
  return response.json();\
\}\
\
export async function fetchMediaOrgs(type: 'canadian' | 'international') \{\
  const response = await fetch(`$\{BASE_URL\}/media-orgs/$\{type\}.json`);\
  if (!response.ok) throw new Error(`Failed to fetch $\{type\} media orgs`);\
  return response.json();\
\}\
\
export async function fetchAllPriorityEvents() \{\
  const years = ['2019', '2020', '2021', '2022', '2023-2025'];\
  const results = await Promise.all(years.map(year => fetchPriorityEvents(year)));\
  return results.flatMap(data => data.events);\
\}\
```\
\
ZUSTAND STORES:\
1. /src/store/eventStore.ts - events array, loading states\
2. /src/store/filterStore.ts - category filters, search query, date range\
3. /src/store/uiStore.ts - theme, language, modal states\
\
ACCEPTANCE CRITERIA:\
- [x] Constants file created with GitHub URL\
- [x] dataUtils successfully fetches from GitHub\
- [x] Zustand stores created with proper typing\
- [x] Test fetch works (check browser console)\
```\
\
**CHECKPOINT 2**: Test GitHub fetch with browser console, verify data loads.\
\
---\
\
## PHASE 3: Timeline & Event Cards\
\
```\
Build the horizontal scrollable timeline with event cards for CanadaScanada.\
\
DATA SOURCE:\
- Fetch from: https://raw.githubusercontent.com/WhatAmIaTailor/canadascanada-data/main/events/priority/[year].json\
- Load years: 2019, 2020, 2021, 2022, 2023-2025\
\
COMPONENTS TO BUILD:\
1. Timeline.tsx (page component in /src/pages/)\
   - Horizontal scroll container\
   - Fetch events on mount using fetchAllPriorityEvents()\
   - Display events chronologically\
   - Filter bar at top\
   - Loading skeleton states\
\
2. EventCard.tsx (molecule in /src/components/molecules/)\
   - Compact view: Date, title, category badges, ministry\
   - Hover: Show snippet preview\
   - Click: Expand to show DetailsPanel\
   - Milestone events: Larger card with visual accent\
   - Category colour coding:\
     * labor: Red\
     * healthcare: Pink\
     * education: Blue\
     * environment: Green\
     * finance: Purple\
     * rights: Orange\
     * governance: Gray\
\
3. DetailsPanel.tsx (organism in /src/components/organisms/)\
   - Slides in from right when card clicked\
   - Shows: Description, sources (clickable links), financial impact, actors\
   - "Expand for Analysis" button at bottom (if event has analysis)\
   - Close button (X)\
\
4. FilterBar.tsx (molecule)\
   - Category multi-select checkboxes\
   - Search input (filters by title/description)\
   - "Clear all" button\
\
INTERACTIONS:\
- Horizontal scroll with mouse wheel\
- Keyboard navigation (arrow keys to navigate between cards)\
- Smooth animations with Framer Motion\
\
ACCEPTANCE CRITERIA:\
- [x] Timeline loads events from GitHub successfully\
- [x] Horizontal scroll works smoothly\
- [x] Event cards display with category colours\
- [x] Clicking card opens DetailsPanel\
- [x] Filters update visible events in real-time\
- [x] Keyboard navigation functional\
- [x] Responsive on mobile (vertical scroll fallback)\
```\
\
**CHECKPOINT 3**: Verify timeline loads, cards display, filters work, details panel opens.\
\
---\
\
## PHASE 4: Analysis Layer & Theoretical Frameworks\
\
```\
Add expandable analysis layer to event details with theoretical framework content.\
\
COMPONENTS TO BUILD:\
1. AnalysisPanel.tsx (organism)\
   - Nested expansion within DetailsPanel\
   - Header: "Analysis & Interpretation" with disclaimer\
   - Sections:\
     * Rights Impact (Charter sections, government justification)\
     * Theoretical Frameworks (collapsible accordions)\
     * Patterns & Connections\
     * Say/Do Comparison (if present)\
\
2. CharterRightsCard.tsx (molecule)\
   - Display affected Charter section\
   - Impact type badge (violated/restricted/threatened)\
   - Government justification quote\
   - Court challenge status badge\
\
3. TheoreticalFrameworkAccordion.tsx (molecule)\
   - Collapsible sections: Foucault, McLuhan, Arendt, Eco\
   - Each shows relevant analysis text from event data\
   - Scholar name + brief tooltip explainer\
   - Only show frameworks with content\
\
4. ConnectionVisualization.tsx (molecule)\
   - Show related events as linked mini-cards\
   - Connection type badges (sequential, financial, thematic, causal)\
   - Click navigates to connected event in timeline\
\
DESIGN:\
- Analysis section has subtle border/background tint to distinguish from facts\
- Disclaimer text: "This analysis applies theoretical frameworks to examine patterns. All assertions are sourced."\
- Smooth accordion expand/collapse animations\
\
ACCEPTANCE CRITERIA:\
- [x] Analysis expands within DetailsPanel\
- [x] Charter rights display correctly\
- [x] Theoretical framework accordions work\
- [x] Connected events are clickable and navigate\
- [x] Analysis only shows for events that have it\
- [x] Smooth animations\
```\
\
**CHECKPOINT 4**: Verify analysis expands, frameworks display, connected events work.\
\
---\
\
## PHASE 5: Media Organizations Directory\
\
```\
Create media organizations directory with profiles and URL checker.\
\
DATA SOURCE:\
- Canadian orgs: https://raw.githubusercontent.com/WhatAmIaTailor/canadascanada-data/main/media-orgs/canadian.json\
- International: https://raw.githubusercontent.com/WhatAmIaTailor/canadascanada-data/main/media-orgs/international.json\
\
COMPONENTS TO BUILD:\
1. MediaOrgs.tsx (page in /src/pages/)\
   - Grid of MediaOrgCard components\
   - Filter by legitimacy type, QCJO status, Canadian ownership\
   - Search by name or domain\
   - Sort by Canadian Content Score\
\
2. MediaOrgCard.tsx (molecule)\
   - Compact view: Name, legitimacy badge, QCJO status, Canadian Content Score\
   - Visual indicators: Foreign ownership flag (if <50% Canadian), UCP connections icon\
   - Click opens detailed modal\
\
3. MediaOrgModal.tsx (organism)\
   - Full profile display:\
     * Ownership breakdown (simple text list for MVP)\
     * Political endorsements timeline\
     * UCP connections list\
     * Canadian Content Score explanation\
     * Source verification links\
   - Close button\
\
4. URLCheckerWidget.tsx (organism)\
   - Prominent widget at top of page\
   - Input field: "Paste news article URL to check source"\
   - Extract domain from URL (use URL API)\
   - Check against media orgs domains array\
   - Display result:\
     * If found: Show org profile summary card\
     * If not found: "Not in our database" message\
   - Store checked URLs in LocalStorage\
\
5. LegitimacyBadge.tsx (atom)\
   - Visual badges for legitimacy types:\
     * QCJO: Green checkmark\
     * CRTC: Blue shield\
     * Independent: Gray star\
     * Opinion: Yellow megaphone\
     * Foreign: Red globe\
     * Unregistered: Gray question mark\
\
ACCEPTANCE CRITERIA:\
- [x] Media orgs load from GitHub\
- [x] Grid displays correctly with cards\
- [x] Filters and search work\
- [x] Clicking card opens modal with full details\
- [x] URL checker extracts domain and matches correctly\
- [x] LocalStorage saves checked URLs\
```\
\
**CHECKPOINT 5**: Verify media orgs display, URL checker works, modals open.\
\
---\
\
## PHASE 6: Learn Section & Historical Context\
\
```\
Create Learn section with Canadian media law education and historical context.\
\
DATA SOURCES:\
- Harper events: https://raw.githubusercontent.com/WhatAmIaTailor/canadascanada-data/main/events/historical/harper-era.json\
- Municipal interference: https://raw.githubusercontent.com/WhatAmIaTailor/canadascanada-data/main/events/historical/municipal-interference.json\
- Documentation: https://raw.githubusercontent.com/WhatAmIaTailor/canadascanada-data/main/docs/[TERMS|PRIVACY|METHODOLOGY].md\
\
COMPONENTS TO BUILD:\
1. Learn.tsx (page)\
   - Tabbed interface: Media Law | History | Frameworks | About\
   - Fetch and display markdown documentation\
\
2. MediaLawExplainer.tsx (organism)\
   - Accordion sections:\
     * What is QCJO? (with link to CRA list)\
     * CRTC licensing explained\
     * Online News Act (Bill C-18) summary\
     * Foreign broadcaster requirements\
   - Simple visual diagrams or icons\
\
3. HistoricalTimeline.tsx (organism)\
   - Vertical timeline (different visual from main timeline)\
   - Load Harper era events from JSON\
   - Show: Date, title, brief description, link to sources\
   - Group by theme (media, science, environment, etc.)\
\
4. TheoreticalFrameworksGuide.tsx (organism)\
   - Brief bios/explainers for each scholar:\
     * Foucault: Governmentality, disciplinary power, biopolitics\
     * McLuhan: Medium is the message\
     * Arendt: Totalitarianism markers, political violence\
     * Eco: 14 points of Ur-Fascism\
   - Simple, accessible language\
   - Links to further reading\
\
5. DocumentationDisplay.tsx (molecule)\
   - Fetch and render markdown from docs/ folder\
   - Links to: Terms, Privacy Policy, Methodology\
   - Styled markdown rendering\
\
ACCEPTANCE CRITERIA:\
- [x] Learn page renders with tabs\
- [x] Media law content clear and accessible\
- [x] Historical timeline displays Harper events correctly\
- [x] Framework guides understandable\
- [x] Documentation loads and renders from markdown\
- [x] All external links work\
```\
\
**CHECKPOINT 6**: Verify Learn content displays, links work, historical timeline loads.\
\
---\
\
## PHASE 7: Corrections System\
\
```\
Implement user corrections submission with LocalStorage persistence.\
\
COMPONENTS TO BUILD:\
1. CorrectionModal.tsx (organism)\
   - Triggered by "Report Issue" button on event cards\
   - Form fields:\
     * Report type (radio buttons): Wrong info, Incorrect source, Missing context, Dispute classification\
     * Explanation (textarea, 140 char limit with counter)\
     * Supporting URL (required, validated)\
     * Email (optional)\
   - Form validation\
   - Submit button\
   - Success confirmation message\
\
2. ReportButton.tsx (atom)\
   - Small icon button (flag or alert icon)\
   - Add to EventCard and DetailsPanel components\
   - Opens CorrectionModal when clicked\
   - Accessible label: "Report issue with this event"\
\
3. LocalStorage utilities in /src/lib/storageUtils.ts:\
```typescript\
interface Correction \{\
  eventId: string;\
  reportType: string;\
  explanation: string;\
  supportingUrl: string;\
  email?: string;\
  submittedAt: string;\
\}\
\
export function saveCorrection(correction: Correction): void \{\
  const existing = getCorrections();\
  existing.push(correction);\
  localStorage.setItem('canadascanada-corrections', JSON.stringify(existing));\
\}\
\
export function getCorrections(): Correction[] \{\
  const data = localStorage.getItem('canadascanada-corrections');\
  return data ? JSON.parse(data) : [];\
\}\
\
export function exportCorrections(): string \{\
  return JSON.stringify(getCorrections(), null, 2);\
\}\
```\
\
VALIDATION:\
- URL format check (basic regex or URL constructor)\
- Character limit enforcement on explanation\
- Required field checks\
- User-friendly error messages\
\
USER FEEDBACK:\
- On submit: "Thank you for improving CanadaScanada. Your correction has been submitted for review."\
- For disputes: "We appreciate diverse perspectives. Our classifications use documented theoretical frameworks. If you have additional sources, please submit them."\
\
ACCEPTANCE CRITERIA:\
- [x] Report button appears on event cards\
- [x] Modal opens with form\
- [x] Validation works correctly\
- [x] Submissions save to LocalStorage\
- [x] Success message displays\
- [x] Export function works (for admin review)\
```\
\
**CHECKPOINT 7**: Verify corrections form works, saves to LocalStorage.\
\
---\
\
## PHASE 8: Polish & Accessibility\
\
```\
Final polish, accessibility audit, and deployment preparation.\
\
TASKS:\
1. Accessibility Review:\
   - Add ARIA labels to interactive elements\
   - Ensure keyboard navigation complete (tab order, focus indicators)\
   - Test color contrast ratios (4.5:1 minimum)\
   - Add skip-to-content link\
   - Screen reader friendly alt text\
\
2. Performance Optimization:\
   - Lazy load routes with React.lazy()\
   - Memoize expensive filter/search operations\
   - Virtual scrolling for large lists (if needed)\
\
3. Error Boundaries:\
   - Add error boundary for each page\
   - Graceful fallback UI: "Something went wrong. [Reload Page]"\
\
4. Loading States:\
   - Skeleton screens for data loading\
   - Spinner for search/filter operations\
   - Empty states: "No events found matching filters"\
\
5. Footer Content:\
   - Links: Terms, Privacy, Methodology, GitHub repo, Learn\
   - "Data current as of: November 2025"\
   - Language toggle (en_CA / fr_CA)\
   - Theme toggle\
   - Ko-fi donation button placeholder\
\
6. Mobile Responsiveness:\
   - Test on mobile viewport\
   - Ensure timeline works on touch devices\
   - Adjust layout for small screens\
\
7. Environment Variables:\
   - Create .env file with: VITE_GITHUB_DATA_REPO_URL\
\
ACCEPTANCE CRITERIA:\
- [x] No major accessibility violations\
- [x] All pages load quickly (<3s)\
- [x] Error boundaries catch errors gracefully\
- [x] Loading states display appropriately\
- [x] Footer complete with all links\
- [x] Mobile responsive\
- [x] Keyboard navigation works throughout\
```\
\
**CHECKPOINT 8**: Run full app test, verify all features work.\
\
---\
\
## PHASE 9: Export & Deploy\
\
```\
Prepare project for deployment.\
\
TASKS:\
1. Build for production:\
   - Run build command\
   - Fix any TypeScript errors\
   - Test production build locally\
\
2. README.md in project root:\
```markdown\
# CanadaScanada\
\
Canadian media transparency and accountability tool.\
\
## Data Repository\
https://github.com/WhatAmIaTailor/canadascanada-data\
\
## Development\
```\
npm install\
npm run dev\
```\
\
## Build\
```\
npm run build\
```\
\
## Deploy\
Deploy to Vercel or Netlify:\
1. Connect GitHub repo\
2. Set build command: `npm run build`\
3. Set output directory: `dist`\
4. Deploy!\
\
## License\
MIT\
```\
\
3. Deployment:\
   - Export project from Lovable\
   - Push to new GitHub repo (separate from data repo)\
   - Deploy to Vercel/Netlify\
\
ACCEPTANCE CRITERIA:\
- [x] Project builds without errors\
- [x] README complete\
- [x] Ready for deployment\
```\
\
**CHECKPOINT 9**: Build successful, ready to deploy.\
\
---\
\
## PHASE 10: Documentation & Handoff\
\
```\
Create final documentation for maintenance.\
\
CREATE FILES:\
1. ARCHITECTURE.md - System design overview\
2. UPDATING_DATA.md - Instructions for adding new events\
3. TROUBLESHOOTING.md - Common issues and fixes\
\
UPDATING_DATA.md should explain:\
- How to add events to GitHub data repo\
- JSON schema requirements\
- How Lovable fetches data (caching, refresh)\
- Process for community contributions\
\
ACCEPTANCE CRITERIA:\
- [x] All documentation complete\
- [x] Project fully functional\
- [x] Handoff ready\
```\
\
**FINAL CHECKPOINT**: Complete CanadaScanada MVP ready to launch!\
\
---\
\
## Quick Reference: GitHub Data URLs\
\
**Your Base URL**: `https://raw.githubusercontent.com/WhatAmIaTailor/canadascanada-data/main`\
\
**Event Files**:\
- `/events/priority/2019.json`\
- `/events/priority/2020.json`\
- `/events/priority/2021.json`\
- `/events/priority/2022.json`\
- `/events/priority/2023-2025.json`\
\
**Media Orgs**:\
- `/media-orgs/canadian.json`\
- `/media-orgs/international.json`\
\
**Historical**:\
- `/events/historical/harper-era.json`\
- `/events/historical/municipal-interference.json`\
\
**Documentation**:\
- `/docs/TERMS.md`\
- `/docs/PRIVACY.md`\
- `/docs/METHODOLOGY.md`\
```\
\
***\
\
## FILE 18: QUICK_START_GUIDE.md\
\
**Location**: Root of data repo `QUICK_START_GUIDE.md`\
\
```markdown\
# CanadaScanada - Quick Start Guide\
\
**Complete this in ~2 hours**\
\
## Step 1: Upload Files to GitHub (30 minutes)\
\
You should have these 14 files ready from previous conversation batches:\
\
### Priority Events (5 files)\
1. `events/priority/2019.json`\
2. `events/priority/2020.json`\
3. `events/priority/2021.json`\
4. `events/priority/2022.json`\
5. `events/priority/2023-2025.json`\
\
### Media Organizations (2 files)\
6. `media-orgs/canadian.json`\
7. `media-orgs/international.json`\
\
### Historical Context (2 files)\
8. `events/historical/harper-era.json`\
9. `events/historical/municipal-interference.json`\
\
### Documentation (3 files)\
10. `docs/TERMS.md`\
11. `docs/PRIVACY.md`\
12. `docs/METHODOLOGY.md`\
13. `docs/CONTRIBUTING.md`\
\
### Guides (2 files)\
14. `LOVABLE_PROMPTS.md` (this file's companion)\
15. `QUICK_START_GUIDE.md` (this file)\
\
**Upload Process**:\
1. Open GitHub Desktop\
2. Navigate to your local `canadascanada-data` folder\
3. Create each file in appropriate folder\
4. Copy/paste content from conversation\
5. Save file\
6. GitHub Desktop will show all changes\
7. Type commit message: "Add all data files"\
8. Click "Commit to main"\
9. Click "Push origin"\
\
\uc0\u9989  **Checkpoint**: Visit https://github.com/WhatAmIaTailor/canadascanada-data and verify all files visible\
\
---\
\
## Step 2: Start Lovable Project (10 minutes)\
\
1. Go to: https://lovable.dev\
2. Sign in (or create account)\
3. Click "New Project"\
4. Name: "CanadaScanada"\
5. Description: "Canadian media transparency tool"\
\
\uc0\u9989  **Checkpoint**: Lovable project created, chat interface open\
\
---\
\
## Step 3: Build with Lovable (60 minutes)\
\
Open `LOVABLE_PROMPTS.md` (file #14 above) and follow the 10 phases:\
\
**Execute prompts in order**:\
1. Copy Phase 1 prompt\
2. Paste into Lovable chat\
3. Wait for completion\
4. Verify acceptance criteria\
5. Move to Phase 2\
6. Repeat for all 10 phases\
\
**Important**:\
- Don't skip checkpoints\
- If something doesn't work, tell Lovable: "The [feature] isn't working. Error: [describe issue]"\
- Lovable will fix and iterate\
\
\uc0\u9989  **Checkpoint**: All 10 phases complete, app running in Lovable preview\
\
---\
\
## Step 4: Test Your App (15 minutes)\
\
**Test checklist**:\
- [  ] Timeline loads events\
- [  ] Clicking event card opens details\
- [  ] Filters work\
- [  ] Media orgs page displays\
- [  ] URL checker works\
- [  ] Learn page loads\
- [  ] Theme toggle works\
- [  ] Corrections form submits\
\
\uc0\u9989  **Checkpoint**: All features working\
\
---\
\
## Step 5: Deploy (15 minutes)\
\
**In Lovable**:\
1. Click "Export" button (top right)\
2. Choose "Download as ZIP"\
3. Unzip on your computer\
\
**Deploy to Vercel** (easiest):\
1. Go to: https://vercel.com\
2. Sign up with GitHub\
3. Click "New Project"\
4. Import your CanadaScanada project\
5. Click "Deploy"\
6. Wait 2 minutes\
7. Get live URL!\
\
**Or Deploy to Netlify**:\
1. Go to: https://netlify.com\
2. Drag exported folder onto Netlify\
3. Get live URL!\
\
\uc0\u9989  **Checkpoint**: App live at public URL\
\
---\
\
## Step 6: Share & Iterate (ongoing)\
\
**You now have**:\
- Live CanadaScanada app\
- GitHub data repository (easy to update)\
- Complete documentation\
\
**To add new events later**:\
1. Add JSON to appropriate file in GitHub data repo\
2. Commit & push\
3. App automatically fetches new data (users refresh page)\
\
**To get help**:\
- GitHub Issues in your data repo\
- Lovable community forum\
- Come back to this conversation\
\
---\
\
## Troubleshooting\
\
**"Data not loading"**:\
- Check GitHub repo is public\
- Verify files uploaded correctly\
- Check browser console for errors\
\
**"Lovable won't build X"**:\
- Break request into smaller parts\
- Provide specific example of what you want\
- Reference existing components\
\
**"App looks broken on mobile"**:\
- Tell Lovable: "Make [component] responsive for mobile"\
- Test in browser mobile view (F12, toggle device toolbar)\
\
---\
\
## Next Steps\
\
**Immediate**:\
- Add your email to TERMS.md and PRIVACY.md\
- Set up Ko-fi account for donations\
- Share with friends for feedback\
\
**Week 2**:\
- Add remaining events from 431-decision dataset\
- Expand media org directory\
- Translate UI to French\
\
**Month 2**:\
- Launch publicly\
- Get community contributions\
- Iterate based on feedback\
\
---\
\
**You've got this! \uc0\u55357 \u56960 **\
\
Any questions? Reply to the conversation that generated this guide.\
```}