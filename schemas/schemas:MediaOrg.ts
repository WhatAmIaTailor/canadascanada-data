{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // schemas/MediaOrg.ts\
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
}