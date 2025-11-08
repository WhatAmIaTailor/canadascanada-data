{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // schemas/CharterRights.ts\
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
}