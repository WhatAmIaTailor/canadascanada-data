{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // schemas/Event.ts\
// TypeScript schema for CanadaScanada events\
// Copy this into your Lovable project's src/data/schemas/ folder\
\
export interface Event \{\
  id: string; // Format: "ucp-[slug]-[year]"\
  type: "priority" | "appendix" | "historical";\
  date: string; // ISO 8601: "YYYY-MM-DD"\
  title: string;\
  category: EventCategory[];\
  ministry?: string;\
  milestone?: boolean;\
  details: EventDetails;\
  analysis?: EventAnalysis;\
  notwithstandingDetails?: NotwithstandingDetails;\
  metadata: EventMetadata;\
\}\
\
export type EventCategory =\
  | "labor"\
  | "healthcare"\
  | "education"\
  | "environment"\
  | "energy"\
  | "finance"\
  | "rights"\
  | "governance"\
  | "international"\
  | "municipal-interference"\
  | "media"\
  | "indigenous";\
\
export interface EventDetails \{\
  description: string;\
  quote?: string;\
  sources: Source[];\
  financialImpact?: FinancialData;\
  actors: string[];\
  organizations?: string[];\
  jurisdiction: "federal" | "provincial" | "municipal" | "mixed";\
  policyOutcome?: boolean;\
  catalyzingPolicy?: string;\
\}\
\
export interface Source \{\
  url: string;\
  outlet: string;\
  mediaOrgId?: string;\
  publishDate?: string;\
  accessed: string;\
  title?: string;\
  author?: string;\
\}\
\
export interface FinancialData \{\
  amount: number;\
  type: "cut" | "increase" | "expenditure" | "subsidy" | "tax-break";\
  description: string;\
  budgetYear?: string;\
  recipients?: string[];\
\}\
\
export interface EventAnalysis \{\
  rightsImpact: RightsImpact;\
  theoreticalFrameworks?: TheoreticalAnalysis;\
  patterns: string[];\
  connectedEvents: string[];\
  connectionType: ConnectionType[];\
  sayDoComparison?: SayDoComparison;\
\}\
\
export interface RightsImpact \{\
  charterRights?: CharterRight[];\
  otherRights?: string[];\
  legalJustification?: string;\
  scope: "individual" | "group" | "systemic";\
  reversibility: "temporary" | "permanent" | "unclear";\
\}\
\
export interface CharterRight \{\
  section: string;\
  description: string;\
  impactType: "violated" | "restricted" | "threatened" | "supported";\
  governmentJustification?: string;\
  courtChallenge?: CourtChallenge;\
\}\
\
export interface CourtChallenge \{\
  plaintiff: string;\
  status: "filed" | "pending" | "won" | "lost" | "settled";\
  ruling?: string;\
  source?: string;\
\}\
\
export interface TheoreticalAnalysis \{\
  foucault?: FoucaultAnalysis;\
  mcluhan?: McLuhanAnalysis;\
  arendt?: ArendtAnalysis;\
  eco?: EcoAnalysis;\
\}\
\
export interface FoucaultAnalysis \{\
  governmentalityAspect?: string;\
  disciplinaryPower?: string;\
  biopolitics?: string;\
\}\
\
export interface McLuhanAnalysis \{\
  mediumAnalysis: string;\
  messageVsMedium: string;\
\}\
\
export interface ArendtAnalysis \{\
  totalitarianMarkers?: string[];\
  publicPrivateErosion?: string;\
  violence?: string;\
\}\
\
export interface EcoAnalysis \{\
  urfascismMarkers: string[];\
\}\
\
export type ConnectionType =\
  | "sequential"\
  | "financial"\
  | "actor"\
  | "thematic"\
  | "causal";\
\
export interface SayDoComparison \{\
  said: \{\
    quote: string;\
    date: string;\
    source: string;\
    context?: string;\
  \};\
  did: \{\
    action: string;\
    date: string;\
    source: string;\
    contradiction?: string;\
  \};\
\}\
\
export interface NotwithstandingDetails \{\
  invokedSections: string[];\
  affectedRights: CharterRight[];\
  governmentJustification: \{\
    statedReason: string;\
    legalMemo?: string;\
    politicalFraming: string;\
  \};\
  opposition: \{\
    legalChallenges: CourtChallenge[];\
    publicResponse: string;\
    expertOpinions: string[];\
  \};\
  precedent: string;\
  expiryDate: string;\
  renewalStatus?: "renewed" | "allowed_to_expire" | "pending";\
\}\
\
export interface EventMetadata \{\
  addedDate: string;\
  lastUpdated: string;\
  verifiedBy?: string;\
  notes?: string;\
\}\
}