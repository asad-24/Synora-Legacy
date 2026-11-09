import { professional } from "./professional";
import type { LucideIcon } from "lucide-react";
import type { ApprovedDocumentKey } from "./approved-content";
import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Home,
  Landmark,
  Library,
  PiggyBank,
  ShieldCheck,
  Sprout,
  Umbrella,
  Users,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  heroTitle?: string;
  heroImage?: string;
  heroImageAlt?: string;
  approvedDocKey?: ApprovedDocumentKey;
  concern: string;
  whyItMatters: string;
  howItWorks: string;
  whoMayBenefit: string[];
  considerations: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type ResourcePage = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  approvedDocKey: ApprovedDocumentKey;
};

export const company = {
  name: "Synora Legacy",
  tagline: "Protect Today. Secure Tomorrow.",
  representative: professional.name || "Synora Legacy",
  role: professional.approvedTitle,
  email: professional.email,
  phone: professional.phone,
  location: professional.address,
  address: professional.address,
  addressLines: professional.address ? [professional.address] : [],
  npn: professional.licenseNumber,
  socialStatus: "",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const philosophy = [
  {
    title: "Protect",
    icon: ShieldCheck,
    description:
      "Help protect the people, income, and assets that matter most.",
  },
  {
    title: "Plan",
    icon: PiggyBank,
    description:
      "Develop thoughtful strategies around individual goals and priorities.",
  },
  {
    title: "Educate",
    icon: BookOpen,
    description:
      "Explain financial concepts and choices in language people understand.",
  },
  {
    title: "Prepare",
    icon: Sprout,
    description: "Help clients think beyond today and prepare for tomorrow.",
  },
];

export const approach = [
  {
    step: "01",
    title: "Understand",
    description:
      "Learn about the client’s goals, priorities, responsibilities, and concerns.",
  },
  {
    step: "02",
    title: "Educate",
    description:
      "Explain available options clearly so decisions feel informed, not rushed.",
  },
  {
    step: "03",
    title: "Strategize",
    description:
      "Help evaluate appropriate strategies based on the client’s life stage and needs.",
  },
  {
    step: "04",
    title: "Move Forward",
    description:
      "Help the client take the next step when they are ready and comfortable.",
  },
];

export const services: Service[] = [
  {
    slug: "life-insurance",
    title: "Term Life Insurance with Living Benefits",
    shortTitle: "Term Life Insurance with Living Benefits",
    icon: Umbrella,
    summary:
      "Life insurance protection for a specified period, with certain policies offering living-benefit features.",
    heroTitle: "Protect today. Prepare for the unexpected.",
    heroImage: "/images/services/life-insurance-hero.png",
    heroImageAlt: "Family reviewing protection options in a calm home setting",
    approvedDocKey: "termLifeLivingBenefits",
    concern:
      "Many families depend on income, care, and shared responsibilities that would be difficult to replace after a loss.",
    whyItMatters:
      "Life insurance can help create a financial cushion for everyday expenses, debts, education plans, and future responsibilities.",
    howItWorks:
      "A policy is selected around coverage needs, budget, health, time horizon, and family priorities. The goal is to match protection with a realistic plan.",
    whoMayBenefit: [
      "Parents and caregivers",
      "Homeowners or borrowers",
      "Business owners",
      "Families with long-term obligations",
    ],
    considerations: [
      "Coverage amount and duration should reflect current responsibilities.",
      "Policy types vary by cost, flexibility, and long-term features.",
      "Health, age, and underwriting can affect availability and pricing.",
    ],
    faqs: [
      {
        question: "How much life insurance should someone consider?",
        answer:
          "A useful starting point is to review income, debts, family expenses, education goals, and the time loved ones may need support.",
      },
      {
        question: "Is life insurance only for families with children?",
        answer:
          "No. It may also support spouses, parents, business partners, or anyone who depends on another person financially.",
      },
    ],
  },
  {
    slug: "indexed-universal-life-living-benefits",
    title: "Indexed Universal Life with Living Benefits",
    shortTitle: "IUL with Living Benefits",
    icon: Umbrella,
    summary:
      "Permanent life insurance with death-benefit protection, cash-value potential, and certain living-benefit features depending on the policy.",
    heroTitle: "Permanent protection with cash-value potential.",
    heroImage: "/images/services/financial-gap-analysis-hero.png",
    heroImageAlt:
      "Family reviewing permanent protection and living-benefit planning options",
    approvedDocKey: "indexedUniversalLifeLivingBenefits",
    concern:
      "Families sometimes need permanent protection while also wanting to understand policy value, access, charges, and long-term flexibility.",
    whyItMatters:
      "Indexed Universal Life can be useful to discuss when permanent protection, living benefits, cash-value potential, and long-term planning goals intersect.",
    howItWorks:
      "An IUL is a life insurance contract. Depending on the policy, interest credited to cash value may be linked in part to an external market index, while the policyholder does not directly invest in that index.",
    whoMayBenefit: [
      "Families considering permanent life insurance protection",
      "People exploring living-benefit provisions",
      "Clients reviewing legacy or long-term planning goals",
      "Households that want to understand policy access and tradeoffs",
    ],
    considerations: [
      "Policy charges, loans, withdrawals, and funding decisions affect values.",
      "Illustrations can include non-guaranteed elements.",
      "Living-benefit availability and requirements vary by contract.",
    ],
    faqs: [
      {
        question: "Is IUL an investment?",
        answer:
          "No. IUL is life insurance with cash-value features. The policyholder does not directly invest in an external market index.",
      },
      {
        question: "Can index-linked crediting remove all risk?",
        answer:
          "No. Certain crediting methods may have a floor on index credits, but policy charges, loans, withdrawals, and funding decisions still matter.",
      },
    ],
  },
  {
    slug: "return-of-premium",
    title: "Return of Premium",
    shortTitle: "Return of Premium",
    icon: PiggyBank,
    summary:
      "Understand what return of premium means, how it can work, and what questions to ask before assuming premiums will simply be returned.",
    heroTitle: "Understand what return of premium really means.",
    approvedDocKey: "returnOfPremium",
    concern:
      "Return of premium can sound simple, but the actual benefit depends on the specific insurance contract and its requirements.",
    whyItMatters:
      "Understanding the difference between premiums, cash value, guarantees, and contractual conditions helps clients ask better questions before deciding.",
    howItWorks:
      "A conversation reviews the policy type, contract language, cost, benefit conditions, time horizon, and alternatives that may be available.",
    whoMayBenefit: [
      "People comparing life insurance policy features",
      "Families weighing cost against long-term value",
      "Clients who want to understand contract details clearly",
      "Households reviewing protection options before applying",
    ],
    considerations: [
      "Return of premium features depend on the specific contract.",
      "Costs, limitations, eligibility, and time requirements may apply.",
      "Policy language should be reviewed carefully before assuming a benefit.",
    ],
    faqs: [
      {
        question: "Does return of premium always mean all premiums come back?",
        answer:
          "No. The exact benefit depends on the contract, eligibility requirements, timing, and policy terms.",
      },
      {
        question: "Is return of premium the same as cash value?",
        answer:
          "Not necessarily. These can be different concepts depending on the type of policy and how the contract is designed.",
      },
    ],
  },
  {
    slug: "mortgage-protection",
    title: "Mortgage Protection",
    shortTitle: "Mortgage Protection",
    icon: Home,
    summary:
      "Review options that may help a household keep its home through difficult transitions.",
    heroImage: "/images/services/mortgage-protection-hero.png",
    heroImageAlt: "Home protection planning conversation with a family",
    concern:
      "A mortgage is often a family’s largest monthly obligation, and unexpected loss or illness can put housing stability under pressure.",
    whyItMatters:
      "Mortgage-focused protection can help families think through how housing costs would be handled if income changed suddenly.",
    howItWorks:
      "Coverage is considered in relation to the mortgage balance, monthly payment, household income, and broader protection strategy.",
    whoMayBenefit: [
      "New homeowners",
      "Families with a single primary income",
      "Households with long-term mortgage obligations",
      "People refinancing or purchasing property",
    ],
    considerations: [
      "Coverage should be reviewed as the mortgage balance changes.",
      "Some strategies are broader than mortgage-only protection.",
      "Budget and underwriting still matter.",
    ],
    faqs: [
      {
        question:
          "Is mortgage protection different from homeowner’s insurance?",
        answer:
          "Yes. Homeowner’s insurance generally protects property; mortgage protection focuses on the household’s ability to manage the mortgage after certain life events.",
      },
      {
        question: "Can coverage be reviewed after refinancing?",
        answer:
          "Yes. Refinancing is a good time to revisit the amount, term, and fit of the strategy.",
      },
    ],
  },
  {
    slug: "income-protection-planning",
    title: "Income Protection",
    shortTitle: "Income Protection",
    icon: ShieldCheck,
    summary:
      "Strategies designed to help address the financial impact of death, disability, or serious illness.",
    heroTitle: "Protect the income that supports your life.",
    heroImage: "/images/services/income-protection-planning-hero.png",
    heroImageAlt: "Professional reviewing income protection planning options",
    approvedDocKey: "incomeProtectionPlanning",
    concern:
      "Income supports everyday responsibilities, family goals, housing costs, and future plans. A sudden interruption can affect more than a monthly budget.",
    whyItMatters:
      "Income protection planning helps identify what would need to continue if work, health, or family circumstances changed.",
    howItWorks:
      "A planning conversation reviews income sources, essential expenses, family responsibilities, emergency savings, and protection options that may fit the household.",
    whoMayBenefit: [
      "Families relying on one or two primary incomes",
      "Self-employed professionals",
      "Homeowners with ongoing monthly obligations",
      "People who want a clearer contingency plan",
    ],
    considerations: [
      "Available options depend on health, age, occupation, and underwriting.",
      "Protection should be coordinated with savings and existing benefits.",
      "Policy terms and exclusions should be reviewed carefully.",
    ],
    faqs: [
      {
        question: "Is income protection only for one-income households?",
        answer:
          "No. Any household that depends on earned income can benefit from reviewing how key expenses would continue if income changed.",
      },
      {
        question: "Does income protection replace emergency savings?",
        answer:
          "No. It should be considered alongside savings, benefits, and broader household planning.",
      },
    ],
  },
  {
    slug: "retirement-income-planning",
    title: "Retirement Planning",
    shortTitle: "Retirement Planning",
    icon: Landmark,
    summary:
      "Preparing for income, longevity, taxes, protection, and the lifestyle you want your resources to support.",
    heroTitle: "Prepare for the life you want to live.",
    heroImage: "/images/services/retirement-income-planning-hero.png",
    heroImageAlt:
      "Retirement income planning discussion with organized documents",
    approvedDocKey: "retirementPlanning",
    concern:
      "Retirement decisions can feel complex because income, taxes, market risk, longevity, and family goals intersect.",
    whyItMatters:
      "A thoughtful retirement conversation can help organize priorities and identify gaps before they become urgent.",
    howItWorks:
      "The process reviews income sources, expenses, timeline, protection needs, legacy goals, and comfort with risk.",
    whoMayBenefit: [
      "Pre-retirees organizing income plans",
      "Families balancing retirement and education goals",
      "Professionals changing careers",
      "People seeking clearer long-term direction",
    ],
    considerations: [
      "Retirement planning should be revisited as life changes.",
      "No strategy removes all risk.",
      "Tax and legal questions should be reviewed with qualified professionals.",
    ],
    faqs: [
      {
        question: "When should retirement planning begin?",
        answer:
          "The earlier the better, but meaningful planning can begin at any stage when goals and available resources are reviewed honestly.",
      },
      {
        question: "Is retirement planning only about investments?",
        answer:
          "No. It also includes income needs, protection, family priorities, healthcare concerns, and legacy intentions.",
      },
    ],
  },
  {
    slug: "fixed-index-annuities",
    title: "Fixed Indexed Annuities",
    shortTitle: "Fixed Indexed Annuities",
    icon: Library,
    summary:
      "Insurance contracts that may combine index-linked interest-crediting potential with contractual guarantees.",
    heroTitle: "An insurance contract designed for long-term planning.",
    heroImage: "/images/services/fixed-index-annuities-hero.png",
    heroImageAlt: "Fixed index annuity education and planning materials",
    approvedDocKey: "fixedIndexedAnnuities",
    concern:
      "Many people want dependable retirement income but are unsure how to balance growth potential, access, and stability.",
    whyItMatters:
      "Annuities may help address certain income or accumulation goals, but they require careful education before any decision.",
    howItWorks:
      "An annuity is a contract with an insurance company. Features vary, including income options, surrender periods, fees, caps, and guarantees.",
    whoMayBenefit: [
      "People seeking retirement income conversations",
      "Clients concerned about outliving assets",
      "Conservative savers evaluating alternatives",
      "Households reviewing income stability",
    ],
    considerations: [
      "Annuities are not appropriate for everyone.",
      "Liquidity limits, fees, and surrender charges may apply.",
      "Guarantees are backed by the issuing insurance company.",
    ],
    faqs: [
      {
        question: "Are all annuities the same?",
        answer:
          "No. Fixed, indexed, and variable structures can differ significantly in risk, fees, access, and income features.",
      },
      {
        question: "Can annuities lose value?",
        answer:
          "It depends on the type and contract terms. Understanding the specific structure is essential before considering one.",
      },
    ],
  },
  {
    slug: "college-planning",
    title: "College Planning",
    shortTitle: "College Planning",
    icon: GraduationCap,
    summary:
      "College planning is about more than saving money. It is about building a strategy that can help you prepare for education costs while considering flexibility, protection, and financial-aid treatment.",
    heroTitle: "College costs are rising. Your plan should be ready.",
    heroImage: "/images/services/college-planning-hero.png",
    heroImageAlt: "College planning conversation for a family",
    approvedDocKey: "collegePlanning",
    concern:
      "Families often want to support education without losing sight of retirement, protection, and daily financial stability.",
    whyItMatters:
      "College planning helps families discuss timing, savings habits, available resources, and the tradeoffs between competing goals.",
    howItWorks:
      "A planning conversation can compare education costs, savings options, time horizon, financial aid considerations, and family commitments.",
    whoMayBenefit: [
      "Parents and grandparents",
      "Families with young children",
      "Students preparing for college decisions",
      "Households balancing education and retirement",
    ],
    considerations: [
      "Education costs can change quickly.",
      "Financial aid rules and account treatment vary.",
      "College planning should not ignore protection or retirement needs.",
    ],
    faqs: [
      {
        question: "Is it too early to plan for college?",
        answer:
          "Starting early can create more options, but families can still benefit from organizing choices later in the process.",
      },
      {
        question: "Should college planning come before retirement planning?",
        answer:
          "Both should be reviewed together so one goal does not unintentionally weaken another.",
      },
    ],
  },
  {
    slug: "tax-efficient-planning",
    title: "Tax-Efficient Planning",
    shortTitle: "Tax-Efficient Planning",
    icon: PiggyBank,
    summary:
      "Making financial decisions with potential tax consequences in mind.",
    heroTitle: "Make financial decisions with taxes in mind.",
    heroImage: "/images/services/tax-efficient-planning-hero.png",
    heroImageAlt: "Tax-efficient planning discussion with financial documents",
    approvedDocKey: "taxEfficientPlanning",
    concern:
      "Taxes can influence income decisions, retirement timing, legacy intentions, and how financial strategies are coordinated.",
    whyItMatters:
      "Tax-efficient planning encourages clients to ask better questions and coordinate decisions with qualified tax professionals.",
    howItWorks:
      "The conversation reviews goals, account types, income timing, protection strategies, and areas where a tax professional should be involved.",
    whoMayBenefit: [
      "Pre-retirees organizing income sources",
      "Families reviewing long-term savings decisions",
      "Business owners and independent professionals",
      "Households coordinating legacy goals",
    ],
    considerations: [
      "Synora Legacy does not provide tax advice.",
      "Tax questions should be reviewed with qualified tax professionals.",
      "Rules and personal circumstances can change over time.",
    ],
    faqs: [
      {
        question: "Is tax-efficient planning the same as tax advice?",
        answer:
          "No. It is an educational planning conversation. Specific tax guidance should come from a qualified tax professional.",
      },
      {
        question: "Why discuss taxes during financial planning?",
        answer:
          "Taxes can affect timing, income, beneficiary decisions, and the way strategies are evaluated.",
      },
    ],
  },
  {
    slug: "legacy-planning",
    title: "Legacy Planning",
    shortTitle: "Legacy Planning",
    icon: BriefcaseBusiness,
    summary:
      "Planning around what you want your financial resources to accomplish for others.",
    heroTitle: "Preserve what you have built. Plan for what comes next.",
    heroImage: "/images/services/legacy-planning-hero.png",
    heroImageAlt: "Legacy planning conversation across generations",
    approvedDocKey: "legacyPlanning",
    concern:
      "Many people want to care for loved ones and causes, but delay organizing the financial pieces that support those intentions.",
    whyItMatters:
      "Legacy planning encourages intentional conversations about beneficiaries, protection, ownership, and long-term family needs.",
    howItWorks:
      "The process reviews goals, current arrangements, protection strategies, beneficiary designations, and coordination with legal professionals.",
    whoMayBenefit: [
      "Families with dependents",
      "Business owners",
      "People with charitable intentions",
      "Households coordinating multigenerational decisions",
    ],
    considerations: [
      "Legal documents should be prepared by qualified legal professionals.",
      "Beneficiary designations should be reviewed regularly.",
      "Financial and legal planning should be coordinated.",
    ],
    faqs: [
      {
        question: "Is legacy planning only for wealthy families?",
        answer:
          "No. Legacy planning is about intention, clarity, and care for the people and responsibilities that matter.",
      },
      {
        question: "Does Synora Legacy provide legal advice?",
        answer:
          "No. Legal questions should be handled by qualified legal professionals, with financial planning coordinated around those decisions.",
      },
    ],
  },
  {
    slug: "estate-probate-planning",
    title: "Estate & Probate Planning",
    shortTitle: "Estate & Probate",
    icon: BriefcaseBusiness,
    summary:
      "Understanding the financial considerations involved in transferring assets and preparing for incapacity or death.",
    heroTitle: "Make your wishes clear.",
    heroImage: "/images/services/estate-probate-planning-hero.png",
    heroImageAlt: "Estate and probate planning documents on a desk",
    approvedDocKey: "estateProbatePlanning",
    concern:
      "Families can face confusion, delays, and added stress when ownership, beneficiaries, and estate intentions are not clearly organized.",
    whyItMatters:
      "Estate and probate planning conversations help clients prepare questions for legal professionals and align financial decisions with family priorities.",
    howItWorks:
      "Synora Legacy can help organize financial topics such as beneficiaries, policy ownership, protection needs, and coordination points for legal review.",
    whoMayBenefit: [
      "Families with dependents",
      "Homeowners and business owners",
      "People coordinating beneficiaries",
      "Clients preparing for legal planning conversations",
    ],
    considerations: [
      "Estate documents should be prepared by qualified legal professionals.",
      "Probate rules vary by state and personal circumstances.",
      "Financial and legal planning should be reviewed together.",
    ],
    faqs: [
      {
        question: "Does Synora Legacy prepare estate documents?",
        answer:
          "No. Legal documents should be prepared by qualified legal professionals. Financial conversations can help organize related questions.",
      },
      {
        question: "Why review beneficiaries?",
        answer:
          "Beneficiary choices can affect how assets or benefits transfer and should be kept current as life changes.",
      },
    ],
  },
  {
    slug: "financial-gap-analysis",
    title: "Financial Gap Analysis",
    shortTitle: "Financial Gap Analysis",
    icon: Landmark,
    summary:
      "Identifying potential differences between where you are today and where you want to be.",
    heroTitle: "Know where you stand before you decide where to go.",
    heroImage: "/images/services/financial-gap-analysis-hero.png",
    heroImageAlt: "Financial gap analysis with planning notes and charts",
    approvedDocKey: "financialGapAnalysis",
    concern:
      "People often make decisions one at a time, which can leave protection, income, retirement, or legacy gaps unnoticed.",
    whyItMatters:
      "A gap analysis creates a clearer picture of what is already in place, what may need review, and which questions deserve priority.",
    howItWorks:
      "The process compares goals, obligations, coverage, savings, debt, and time horizon to help organize next-step conversations.",
    whoMayBenefit: [
      "Families unsure where to begin",
      "Professionals reviewing major life changes",
      "Homeowners and parents",
      "Pre-retirees organizing priorities",
    ],
    considerations: [
      "A gap analysis is educational and should be updated as life changes.",
      "It does not guarantee a specific outcome.",
      "Additional professionals may be needed for tax, legal, or investment questions.",
    ],
    faqs: [
      {
        question: "What information helps with a gap analysis?",
        answer:
          "Helpful starting points include income, major expenses, debts, existing coverage, savings, goals, and family responsibilities.",
      },
      {
        question: "Is a gap analysis a financial plan?",
        answer:
          "It is a starting conversation to organize priorities and identify questions, not a complete individualized financial plan.",
      },
    ],
  },
  {
    slug: "final-expense",
    title: "Final Expense",
    shortTitle: "Final Expense",
    icon: HeartHandshake,
    summary:
      "Life insurance planning focused on helping loved ones address final financial responsibilities.",
    heroTitle: "Plan ahead. Help protect the people you love.",
    heroImage: "/images/services/final-expense-hero.png",
    heroImageAlt: "Family discussing final expense planning with care",
    approvedDocKey: "finalExpense",
    concern:
      "Final expenses can create emotional and financial pressure for loved ones when plans are unclear or resources are limited.",
    whyItMatters:
      "Final expense planning helps families discuss practical costs, available resources, and protection options with dignity and care.",
    howItWorks:
      "A conversation reviews likely expenses, existing coverage, budget, health, and policy options that may be appropriate.",
    whoMayBenefit: [
      "People wanting to reduce burden on loved ones",
      "Families with limited emergency savings",
      "Older adults reviewing coverage options",
      "Clients organizing end-of-life planning conversations",
    ],
    considerations: [
      "Coverage availability and cost can depend on age, health, and underwriting.",
      "Policy terms should be reviewed carefully.",
      "Final expense planning should be coordinated with broader family planning.",
    ],
    faqs: [
      {
        question: "What can final expense coverage help address?",
        answer:
          "It may help loved ones manage funeral, burial, medical, or other end-of-life expenses, depending on policy terms.",
      },
      {
        question: "Is final expense planning only for seniors?",
        answer:
          "No. It can be part of a broader family protection conversation at different life stages.",
      },
    ],
  },
];

const featuredHomeServiceSlugs = [
  "indexed-universal-life-living-benefits",
  "life-insurance",
  "fixed-index-annuities",
  "final-expense",
];

export const featuredHomeServices = featuredHomeServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is Service => Boolean(service));

export const resources = [
  {
    category: "Financial Education",
    title: "Frequently Asked Questions",
    description:
      "Clear answers to common questions about protection, retirement, education, legacy planning, insurance, and how we work.",
    href: "/faq",
  },
  {
    category: "Insurance Education",
    title: "Your Contract. Your Protection. Your Decision.",
    description:
      "Understand why the insurance contract, carrier, policy details, and your own questions should guide every protection decision.",
    href: "/resources/your-contract-your-protection",
  },
  {
    category: "Carriers",
    title: "Insurance Carriers and Product Availability",
    description:
      "Learn how insurance carriers, product approval, underwriting, and state availability affect planning conversations.",
    href: "/resources/carriers",
  },
  {
    category: "Educational Notice",
    title: "Educational Content Disclaimer",
    description:
      "Review the important notice that website content is educational and not individualized tax, legal, investment, or insurance advice.",
    href: "/resources/educational-content-disclaimer",
  },
  {
    category: "Privacy",
    title: "National Website Privacy Policy",
    description:
      "Understand how information submitted through the website may be collected, used, protected, and handled.",
    href: "/legal#privacy-policy",
  },
  {
    category: "Terms",
    title: "Website Terms of Use",
    description:
      "Review the terms that govern access to and use of the Synora Legacy website.",
    href: "/legal#terms-of-use",
  },
];

export const conversationTopics = [
  ...services.map((service) => service.title),
  "Carriers / Product Availability",
  "Join Us / Career Opportunity",
  "General Question",
];

export const resourcePages: ResourcePage[] = [
  {
    slug: "your-contract-your-protection",
    category: "Insurance Education",
    title: "Your Contract. Your Protection. Your Decision.",
    summary:
      "Understand the company behind the policy, the contract you are entering into, and the protection you are putting in place.",
    approvedDocKey: "contractProtection",
  },
  {
    slug: "carriers",
    category: "Carrier Education",
    title: "Insurance Carriers and Product Availability",
    summary:
      "Learn how carrier relationships, product approval, underwriting, and state availability affect insurance conversations.",
    approvedDocKey: "carriers",
  },
  {
    slug: "educational-content-disclaimer",
    category: "Educational Notice",
    title: "Educational Content Disclaimer",
    summary:
      "Review the important notice that website content is educational and not individualized tax, legal, investment, or insurance advice.",
    approvedDocKey: "educationalDisclaimer",
  },
];

export const careerValues = [
  {
    title: "Purpose",
    description:
      "Help families understand meaningful financial decisions with patience and clarity.",
  },
  {
    title: "Education",
    description:
      "Develop the ability to explain concepts simply and serve as a trusted guide.",
  },
  {
    title: "Growth",
    description:
      "Build professional habits, personal discipline, and long-term opportunity.",
  },
  {
    title: "Entrepreneurship",
    description:
      "Pursue a career path that rewards initiative, care, and consistent development.",
  },
];

export const audienceIcons = {
  families: Users,
  education: GraduationCap,
};
