/* ==========================================================================
   BHOOMI SOLUTIONS - MAIN JAVASCRIPT CONTROLLER
   Handles Navigation, Industry Switcher, Generative AI Demo Studio & Forms
   ========================================================================== */

// 1. Industry Showcase Data for Solutions Section Switcher
const industryData = {
  'bsecure': {
    title: 'Bsecure: Enterprise Autonomous Cybersecurity & Threat Defense Agent',
    badge: 'AI CYBERSECURITY & THREAT SHIELD',
    desc: 'Autonomous AI security agent performing 24/7 continuous vulnerability assessment, real-time zero-day threat containment, automated SOC incident response, and zero-trust identity verification across enterprise infrastructure.',
    metricVal: '99.99%',
    metricLbl: 'Threat Containment',
    img: 'assets/images/about_chip.jpg',
    scenarioKey: 'bsecure',
    checklist: [
      'Continuous 24/7 zero-trust network monitoring',
      'Sub-second autonomous threat isolation & containment',
      'Automated SIEM & SOC incident response playbook execution',
      'Identity access anomaly detection & MFA challenge dispatch',
      'Compliance audit trail logging (SOC2, ISO 27001, NIST)',
      'Zero-day exploit detection & patch orchestration'
    ]
  },
  'customer-service': {
    title: 'Autonomous AI Agent for Customer Service',
    badge: 'FEATURED PROJECT',
    desc: 'An intelligent AI agent that autonomously handles customer inquiries, resolves issues, and escalates complex cases — 24/7, across multiple channels.',
    metricVal: '98%',
    metricLbl: 'Customer Satisfaction',
    img: 'assets/images/featured_bot.jpg',
    scenarioKey: 'customer-service',
    checklist: [
      'Understands customer intent with NLP',
      'Learns from multi-turn interactions',
      'Provides accurate, human-like responses',
      'Integrates with CRM & Helpdesk (Zendesk/Salesforce)',
      'Escalates when human intervention is needed',
      'Multichannel: Web, Email, Chat, WhatsApp'
    ]
  },
  'ecommerce': {
    title: 'Agentic AI Shopping Assistant & Inventory Sync',
    badge: 'E-COMMERCE SOLUTION',
    desc: 'Personalized product recommendation bots that guide shoppers, assist with real-time stock checks, and manage return processing automatically.',
    metricVal: '+34%',
    metricLbl: 'Revenue Uplift',
    img: 'assets/images/featured_bot.jpg',
    scenarioKey: 'ecommerce',
    checklist: [
      'Personalized product recommendations',
      'Cart recovery & real-time inventory query',
      'Automated order tracking & returns',
      'Stripe & Shopify deep integration',
      'Multi-currency conversational AI',
      'Instant 24/7 shopper support'
    ]
  },
  'healthcare': {
    title: 'ABDM-Compliant Patient Care & Triage Agent (Ayushman Bharat Digital Mission)',
    badge: 'HEALTHCARE SOLUTION',
    desc: 'Autonomous clinical triage and appointment scheduling assistant designed to handle patient inquiries with high precision and Ayushman Bharat Digital Mission (ABDM) compliance.',
    metricVal: '100%',
    metricLbl: 'ABDM Compliant',
    img: 'assets/images/featured_bot.jpg',
    scenarioKey: 'healthcare',
    checklist: [
      'Secure patient intake & appointment booking',
      'Symptom checker & preliminary triage',
      'EHR & Telehealth system synchronization',
      'Automated prescription renewal alerts',
      'Multilingual patient communication',
      'Zero-retention data privacy standards'
    ]
  },
  'finance': {
    title: 'Autonomous Fraud Detection & Underwriting Agent',
    badge: 'FINANCE SOLUTION',
    desc: 'Intelligent AI agents performing high-speed financial document parsing, credit risk scoring, and real-time transaction anomaly detection.',
    metricVal: '85%',
    metricLbl: 'Risk Reduction',
    img: 'assets/images/featured_bot.jpg',
    scenarioKey: 'finance',
    checklist: [
      'Automated bank statement & tax audit parsing',
      'Real-time transaction anomaly flags',
      'Instant credit scoring & risk assessment',
      'Regulatory compliance audit trail',
      'Integration with Core Banking APIs',
      'Sub-second fraud evaluation'
    ]
  },
  'manufacturing': {
    title: 'Predictive Maintenance & Supply Chain Agent',
    badge: 'MANUFACTURING SOLUTION',
    desc: 'Monitors IoT sensor telemetry autonomously, predicts machine breakdowns, and orders replacement parts before downtime occurs.',
    metricVal: '45%',
    metricLbl: 'Downtime Prevented',
    img: 'assets/images/featured_bot.jpg',
    scenarioKey: 'devops',
    checklist: [
      'Real-time IoT telemetry monitoring',
      'Predictive part failure detection',
      'Automated ERP purchase order generation',
      'Supply chain vendor routing',
      'Quality assurance image inspection',
      'Safety protocol compliance logging'
    ]
  },
  'realestate': {
    title: 'Instant Property Match & Lead Qualifier Agent',
    badge: 'REAL ESTATE SOLUTION',
    desc: 'Engages prospective buyers and tenants instantly, qualifies budgets, matches listings, and schedules property tours in CRM calendars.',
    metricVal: '< 1 min',
    metricLbl: 'Response Speed',
    img: 'assets/images/featured_bot.jpg',
    scenarioKey: 'customer-service',
    checklist: [
      '24/7 buyer & renter inquiry response',
      'Budget & timeline lead qualification',
      'Automatic MLS listing matching',
      'Agent calendar booking integration',
      'Virtual 360-tour guidance',
      'Automated contract document dispatch'
    ]
  },
  'education': {
    title: 'AI Tutoring & Student Support Agent',
    badge: 'EDUCATION SOLUTION',
    desc: '24/7 personalized learning companion assisting students with course material, answering assignment queries, and tracking academic progress.',
    metricVal: '92%',
    metricLbl: 'Student Engagement',
    img: 'assets/images/featured_bot.jpg',
    scenarioKey: 'customer-service',
    checklist: [
      'Interactive subject-matter Q&A',
      'Adaptive learning pace customization',
      'Automated quiz generation & feedback',
      'LMS (Canvas/Blackboard) sync',
      'Enrollment & fee guidance assistant',
      'Multilingual learning support'
    ]
  },
  'logistics': {
    title: 'Autonomous Dispatch & Fleet Routing Agent',
    badge: 'LOGISTICS SOLUTION',
    desc: 'Dynamically optimizes delivery routes, monitors driver telemetry, and handles real-time customer package ETA updates autonomously.',
    metricVal: '40%',
    metricLbl: 'Speed Gain',
    img: 'assets/images/featured_bot.jpg',
    scenarioKey: 'devops',
    checklist: [
      'Dynamic weather & traffic route optimization',
      'Driver task dispatching & updates',
      'Real-time shipment tracking alerts',
      'Automated customs documentation',
      'Fuel efficiency performance analytics',
      'Driver safety & rest period monitoring'
    ]
  }
};

// 2. Generative AI Demo Showcase Scenarios & Knowledge Models
const demoScenarios = {
  'bsecure': {
    name: 'Bsecure AI Threat Defense & SOC Agent',
    badge: 'ZERO-TRUST CYBERSECURITY SHIELD',
    toolBadge: 'SIEM_SOC_THREAT_ISOLATION_API',
    welcome: 'Hello! I am <strong>Bsecure</strong>, Bhoomi Solutions’ <strong>Autonomous Cybersecurity & Threat Defense Agent</strong>. I perform 24/7 zero-trust network inspection, isolate suspicious IP payloads, execute SOC playbooks, and protect enterprise infrastructure from zero-day exploits.',
    presets: [
      'Detect anomalous outbound and inbound data traffic.',
      'Execute SIEM threat containment playbook for suspected ransomware payload.',
      'Verify suspicious identity access attempt and fix for all locations.'
    ],
    toolOutput: {
      "security_engine": "Bsecure Sentinel v4.0",
      "threat_status": "THREAT_CONTAINED_SUB_SECOND",
      "zero_trust_status": "GLOBAL_ISOLATION_ACTIVE",
      "siem_playbook": "PLAYBOOK_SOC_GLOBAL_CONTAINMENT",
      "audit_log": "SOC2_ISO27001_COMPLIANT_HASH_VERIFIED"
    },
    sampleResponses: {
      'default': {
        reasoning: [
          { step: 'Traffic & Anomaly Inspection', detail: 'Analyzed inbound & outbound packet flows; detected multi-vector data traffic anomaly.' },
          { step: 'Zero-Trust Identity Enforcement', detail: 'Quarantined suspicious identity access sessions across all global regional edge nodes.' },
          { step: 'SOC Playbook Execution', detail: 'Executed SIEM Playbook #994 (Automated Global Threat Isolation & Security Patch).' },
          { step: 'Compliance Logging', detail: 'Logged cryptographically hashed incident audit entry for ISO 27001 & SOC 2 compliance.' }
        ],
        text: `<strong>🛡️ Bsecure Autonomous Threat & Access Control Report:</strong><br><br>
        • <span style="background:rgba(0,198,255,0.2); color:#00C6FF; padding:3px 8px; border-radius:4px; font-weight:700;">✅ THREAT CONTAINED & LOCATIONS SECURED (0.12s)</span><br>
        • <strong>Network Action:</strong> Inbound & outbound anomalous traffic filtered and quarantined across all endpoints.<br>
        • <strong>Identity Fix:</strong> Suspicious identity access attempts blocked across all global locations with step-up MFA enforced.<br>
        • <strong>Compliance Audit:</strong> Forensic snapshot recorded with immutable SOC 2 & ISO 27001 audit stamp.<br>
        • <strong>Infrastructure Status:</strong> Zero Data Leakage. All global locations 100% Secure.`,
        actions: ['🔒 View Quarantined Endpoints', '📋 Export SOC Audit Log', '⚙️ Bsecure Rule Editor']
      }
    }
  },

  'general': {
    name: 'Bhoomi Online AI Assistant',
    badge: 'WEBSITE AI COPILOT',
    toolBadge: 'BHOOMI_KNOWLEDGE_ENGINE',
    welcome: 'Hello! I am <strong>Bhoomi Online</strong>, your AI assistant for <strong>Bhoomi Solutions Ltd</strong>. You can ask me anything about our Agentic AI capabilities, our enterprise projects like the <strong>Mutual Fund Tracker</strong>, industry workflows, or how to get in touch!<br><br>👉 <em>Click a quick question below or type your custom question!</em>',
    presets: [
      'What does Bhoomi Solutions do and how does Agentic AI work?',
      'Tell me about the Mutual Fund Tracker project.',
      'Ask about Industries',
      'How can I get in touch with Bhoomi Solutions?'
    ],
    toolOutput: {
      "assistant": "Bhoomi Online Copilot v3.5",
      "grounding_source": "www.bhoomisolutionsltd.com",
      "primary_focus": "Enterprise Agentic AI & Mutual Fund Intelligence",
      "response_model": "ChatGPT-Style Interactive Generative Agent",
      "compliance_guardrail": "SOC2_GDPR_READY",
      "fallback_policy": "ROUTE_COMPLEX_TO_GET_IN_TOUCH"
    }
  },

  'customer-service': {
    name: 'Autonomous Customer Support & Resolution Agent',
    badge: 'CRM & DISPUTE RESOLVER',
    toolBadge: 'ZENDESK_SALESFORCE_SYNC',
    welcome: 'Hello! I am Bhoomi’s <strong>Autonomous Customer Support Agent</strong>. I autonomously analyze customer intent, query internal CRM databases, verify warranties, issue real-time replacements, and update support tickets. <br><br>👉 <em>Click one of the prompt chips above or type a custom question!</em>',
    presets: [
      'Customer #90214 received defective sensor. Verify warranty and process RMA.',
      'Customer requests refund for order #ORD-77492 after 14 days.',
      'Check delivery status for order #84920 and expedite shipping.'
    ],
    toolOutput: {
      "tool_name": "Salesforce_Zendesk_Sync",
      "customer_id": "CUST-90214 (Acme Industrial Corp)",
      "product_item": "Bhoomi IoT Telemetry Hub v2 (SN-88402)",
      "warranty_status": "VALID_ACTIVE_UNTIL_2027",
      "action_executed": "DISPATCH_RMA_REPLACEMENT",
      "shipment_carrier": "FedEx Express Overnight (#FX-8829104)",
      "ticket_id": "ZD-58210",
      "ticket_status": "RESOLVED_AUTONOMOUSLY",
      "csat_confidence": "99.6%"
    },
    sampleResponses: {
      'default': {
        reasoning: [
          { step: 'NLP Intent Extraction', detail: 'Parsed customer entity #90214, identified warranty check and RMA request.' },
          { step: 'Vector RAG Query', detail: 'Retrieved policy guidelines from `bhoomi_enterprise_warranty_2026.md`.' },
          { step: 'Autonomous Tool Call', detail: 'Executed `Salesforce_CRM.verifyWarranty("CUST-90214")` -> Verified active status.' },
          { step: 'Warehouse API Trigger', detail: 'Dispatched automated replacement order with Priority Overnight Shipping.' }
        ],
        text: `<strong>✅ Autonomous Resolution Summary:</strong><br><br>
        • <strong>Customer:</strong> Acme Industrial Corp (#CUST-90214)<br>
        • <strong>Asset:</strong> Bhoomi IoT Telemetry Hub v2 (SN-88402)<br>
        • <strong>Warranty Status:</strong> <span style="color:#00FF87; font-weight:700;">Active Enterprise Coverage</span> (Expires Dec 2027)<br>
        • <strong>Action Taken:</strong> Autonomous RMA replacement <strong>#RMA-9941</strong> generated and scheduled for dispatch.<br>
        • <strong>Tracking Number:</strong> FedEx Overnight #FX-8829104<br>
        • <strong>Zendesk Ticket #ZD-58210:</strong> Automatically closed with resolution notes emailed to customer.`,
        actions: ['📄 View RMA Invoice', '📧 Send Customer SMS Confirmation', '🔄 Reopen Ticket']
      }
    }
  },

  'finance': {
    name: 'Mutual Fund Tracker & Financial Intelligence Agent',
    badge: 'MUTUAL FUND & PORTFOLIO AGENT',
    toolBadge: 'PORTFOLIO_NAV_REBALANCE_API',
    welcome: 'Welcome! I am Bhoomi’s <strong>Mutual Fund Tracker & Financial Intelligence Agent</strong>. I autonomously track fund NAV performance, automate portfolio rebalancing, monitor SIP investments, and parse financial statements with real-time risk calculations.',
    presets: [
      'Track Top 5 Large-Cap & Flexi-Cap Mutual Funds with 3-year CAGR & Alpha returns.',
      'Rebalance client portfolio #MF-90214: Shift 15% debt allocation to index equity.',
      'Audit Q4 financial balance sheet: Extract EBITDA, Debt-to-Equity, and risk indicators.'
    ],
    toolOutput: {
      "portfolio_id": "PORTFOLIO-MF-90214 (Wealth Advisory)",
      "total_aum_tracked": "$8,450,000",
      "holdings_breakdown": [
        { "fund_name": "Bhoomi Dynamic Equity Fund", "nav": "$142.80", "cagr_3yr": "+21.4%", "expense_ratio": "0.65%" },
        { "fund_name": "BlueChip Large-Cap Index Fund", "nav": "$98.50", "cagr_3yr": "+16.8%", "expense_ratio": "0.20%" },
        { "fund_name": "Ultra-Short Term Debt Fund", "nav": "$1,120.40", "cagr_3yr": "+7.2%", "expense_ratio": "0.35%" }
      ],
      "rebalance_action": "REALLOCATE_15%_DEBT_TO_INDEX_EQUITY",
      "projected_alpha_gain": "+2.85% Annualized",
      "risk_status": "OPTIMAL_SHARPE_RATIO (2.41)"
    },
    sampleResponses: {
      'default': {
        reasoning: [
          { step: 'Portfolio Ingestion & NAV Sync', detail: 'Fetched real-time NAVs and 3-year trailing returns across active fund holdings.' },
          { step: 'Risk-Adjusted Alpha Calculation', detail: 'Computed Sharpe Ratio (2.41) & Beta (0.88) relative to benchmark index.' },
          { step: 'Autonomous Rebalance Execution', detail: 'Identified 15% surplus cash in debt -> Rebalanced into low-cost BlueChip Large-Cap Index Fund.' },
          { step: 'Compliance & Tax Optimization', detail: 'Verified long-term capital gains (LTCG) threshold with zero exit load penalties.' }
        ],
        text: `<strong>📊 Mutual Fund Portfolio & Tracking Summary:</strong><br><br>
        • <strong>Portfolio ID:</strong> #MF-90214 (Wealth Advisory Client)<br>
        • <strong>Total AUM:</strong> $8.45M across 14 Top-Tier Funds<br>
        • <strong>Performance Trailing (3-Yr CAGR):</strong> <span style="color:#00FF87; font-weight:700;">+19.8%</span> (Outperforming benchmark by +3.4%)<br>
        • <strong>Rebalance Recommendation:</strong> Shift 15% ultra-short debt into BlueChip Index to capture current equity upside.<br>
        • <strong>Tax Impact:</strong> <span style="color:#00FF87;">Zero exit loads</span>, optimized for LTCG tax efficiency.<br>
        • <strong>Automated Alerts:</strong> Monthly SIP schedule updated with automated NAV dip accumulation alerts.`,
        actions: ['📈 Execute Portfolio Rebalance', '📑 Export Fund Factsheet PDF', '📊 Generate Client Statement']
      }
    }
  },

  'healthcare': {
    name: 'ABDM-Compliant Clinical Triage & Patient Care Agent (Ayushman Bharat Digital Mission)',
    badge: 'ABDM-COMPLIANT CLINICAL AGENT',
    toolBadge: 'EPIC_EHR_TRIAGE_SYNC',
    welcome: 'Hello. I am Bhoomi’s <strong>ABDM-Compliant Clinical Triage Assistant</strong>. I conduct preliminary symptom triage, calculate Emergency Severity Index (ESI), match physician availability, and generate clinical consultation summaries.',
    presets: [
      'Patient reports 2-day acute chest tightness radiating to left arm and shortness of breath.',
      'Schedule follow-up MRI review with Dr. Sarah Jenkins next Tuesday.',
      'Interpret blood panel: HbA1c 7.8%, Fasting Blood Glucose 165 mg/dL with dietary guidance.'
    ],
    toolOutput: {
      "patient_token": "PT-ANON-99412",
      "abdm_redaction_status": "VERIFIED_ZERO_PII_LEAK",
      "symptom_triage": {
        "primary_chief_complaint": "Acute Retrosternal Chest Tightness",
        "radiation_pattern": "Left Upper Extremity",
        "associated_symptoms": ["Dyspnea upon minimal exertion", "Diaphoresis"],
        "esi_urgency_tier": "LEVEL_2_EMERGENCY"
      },
      "ehr_action": "PRIORITY_CARDIAC_TRIAGE_ALERT_DISPATCHED",
      "oncall_physician": "Dr. Sarah Jenkins, MD (Cardiology)"
    },
    sampleResponses: {
      'default': {
        reasoning: [
          { step: 'ABDM Sanitization', detail: 'Redacted all PII/SSN identifiers; encrypted in-flight payload with AES-256.' },
          { step: 'Clinical Protocol Evaluation', detail: 'Assessed chest tightness + radiation -> Triggered Emergency Severity Index (ESI) Tier 2.' },
          { step: 'EHR Protocol Notification', detail: 'Sent instant HL7 FHIR emergency alert to On-Call Cardiology team.' },
          { step: 'Guidance Formulation', detail: 'Generated deterministic clinical instructions advising immediate ED evaluation.' }
        ],
        text: `<strong>🏥 Clinical Triage & Urgency Evaluation:</strong><br><br>
        • <span style="background:rgba(255,71,87,0.2); color:#FF6B81; padding:3px 8px; border-radius:4px; font-weight:700;">⚠️ ESI TIER 2: HIGH URGENCY CARDIAC PROTOCOL</span><br>
        • <strong>Clinical Finding:</strong> Retrosternal pressure with left arm radiation presents acute coronary syndrome (ACS) risk profile.<br>
        • <strong>Recommended Action:</strong> Advise patient to immediately proceed to the nearest Emergency Department or call emergency services (911).<br>
        • <strong>EHR Sync:</strong> Emergency triage notes and telemetry dispatched to Dr. Sarah Jenkins at City Heart Institute.<br>
        • <em>Disclaimer: Autonomous AI triage does not replace professional emergency clinical assessment.</em>`,
        actions: ['🚨 Dispatch Emergency ED Alert', '📅 View Dr. Jenkins Schedule', '📋 Export Clinical FHIR Note']
      }
    }
  },

  'ecommerce': {
    name: 'Conversational Commerce & AI Stylist Agent',
    badge: 'LIVE STORE & CATALOG AGENT',
    toolBadge: 'SHOPIFY_INVENTORY_API',
    welcome: 'Hello! I am Bhoomi’s <strong>Conversational Commerce & Personal Stylist Agent</strong>. I help online shoppers discover personalized recommendations, check live warehouse inventory, and bundle products with smart discount codes.',
    presets: [
      'Recommend waterproof jacket & hiking boots for Iceland in November under $450.',
      'Check live inventory for EcoLeather Jacket SKU-882 in Size L and apply 15% discount.',
      'Compare Silk Blouse vs Cashmere Sweater in terms of durability and sizing.'
    ],
    toolOutput: {
      "session_id": "SHOP-SESSION-77402",
      "recommended_bundle": "Iceland Expedition Outerwear Kit",
      "cart_items": [
        { "sku": "JKT-882", "title": "Bhoomi ArcticShield 3-in-1 Waterproof Parka", "size": "L", "price": 249.00, "stock": 14 },
        { "sku": "BOT-104", "title": "Vibram TrailGrip Thermal Boots", "size": "10.5", "price": 169.00, "stock": 8 }
      ],
      "bundle_subtotal": 418.00,
      "applied_vip_discount": "-$62.70 (15% OFF - CODE: ICELAND15)",
      "final_total": 355.30,
      "free_shipping_eligible": true
    },
    sampleResponses: {
      'default': {
        reasoning: [
          { step: 'Shopper Preference Parsing', detail: 'Target destination: Iceland (sub-zero, rain/wind). Budget ceiling: $450.' },
          { step: 'Warehouse Catalog Query', detail: 'Filtered 1,200 SKUs for GORE-TEX waterproof rating > 20,000mm & Vibram grip.' },
          { step: 'Price Optimization Engine', detail: 'Combined 2 matching items ($418) and applied 15% VIP adventure bundle discount.' },
          { step: 'Real-time Stock Lock', detail: 'Verified 14 units available in Size L with 2-day delivery guarantee.' }
        ],
        text: `<strong>🛍️ Curated Adventure Bundle for Iceland (Under $450):</strong><br><br>
        1. <strong>ArcticShield 3-in-1 Waterproof Parka</strong> (Size L) — <em>$249.00</em><br>
           • 100% windproof, fleece lined, rated down to -20°C.<br>
        2. <strong>Vibram TrailGrip Thermal Boots</strong> (Size 10.5) — <em>$169.00</em><br>
           • Hydrophobic membrane, ice-grip traction sole.<br><br>
        💰 <strong>Bundle Summary:</strong><br>
        • Subtotal: <s>$418.00</s><br>
        • VIP Discount (15%): <span style="color:#00FF87;">-$62.70</span><br>
        • <strong>Final Total: $355.30</strong> <em>(Saves you $94.70 below your budget!)</em>`,
        actions: ['🛒 Add Complete Bundle to Cart', '📏 Size Guide Assistant', '🎁 Gift Wrap Option']
      }
    }
  },

  'devops': {
    name: 'Autonomous DevOps & SQL Query Generator',
    badge: 'CODE & PIPELINE AGENT',
    toolBadge: 'POSTGRES_DOCKER_ENGINE',
    welcome: 'Hello! I am Bhoomi’s <strong>DevOps & Data Engineering Agent</strong>. I translate natural language into optimized SQL queries, generate secure CI/CD pipelines, and analyze database bottlenecks with live syntax highlighting.',
    presets: [
      'Generate PostgreSQL query for top 5 enterprise accounts with churn risk and active licenses > 50.',
      'Create GitHub Actions workflow YAML for Docker build, Trivy scan, and AWS EKS deploy.',
      'Analyze slow query on users table (10M rows) and suggest indexing strategy.'
    ],
    toolOutput: {
      "database_type": "PostgreSQL 16.2 / Distributed Aurora",
      "query_optimization_score": "98.5%",
      "estimated_execution_time": "12.4ms",
      "indexes_used": ["idx_enterprise_accounts_risk", "idx_licenses_status_acc"],
      "query_hash": "a88f190cbb412"
    },
    sampleResponses: {
      'default': {
        reasoning: [
          { step: 'Natural Language Decomposition', detail: 'Identified target entities: enterprise_accounts, licenses, risk_telemetry.' },
          { step: 'Schema Join Optimization', detail: 'Selected indexed foreign key `account_id` and filtered active licenses in WHERE clause.' },
          { step: 'Aggregation & Limit', detail: 'Grouped by account, aggregated active license count > 50, sorted by churn risk score DESC.' },
          { step: 'Query Plan Verification', detail: 'Generated EXPLAIN ANALYZE plan ensuring index-scan instead of full table scan.' }
        ],
        text: `<strong>⚡ Optimized PostgreSQL Query Generated:</strong><br><br>
        <pre style="background:#040813; padding:14px; border-radius:8px; border:1px solid rgba(0,198,255,0.25); color:#A5D6FF; overflow-x:auto; font-size:0.8rem; line-height:1.5;"><code><span style="color:#FF7B72;">SELECT</span> 
    a.account_id,
    a.company_name,
    a.total_ltv,
    <span style="color:#FFA657;">COUNT</span>(l.license_id) <span style="color:#FF7B72;">AS</span> active_licenses,
    r.churn_probability_score
<span style="color:#FF7B72;">FROM</span> enterprise_accounts a
<span style="color:#FF7B72;">JOIN</span> licenses l <span style="color:#FF7B72;">ON</span> a.account_id = l.account_id
<span style="color:#FF7B72;">JOIN</span> risk_telemetry r <span style="color:#FF7B72;">ON</span> a.account_id = r.account_id
<span style="color:#FF7B72;">WHERE</span> l.status = <span style="color:#7EE787;">'ACTIVE'</span> 
  <span style="color:#FF7B72;">AND</span> r.churn_probability_score >= <span style="color:#79C0FF;">0.75</span>
<span style="color:#FF7B72;">GROUP BY</span> a.account_id, a.company_name, a.total_ltv, r.churn_probability_score
<span style="color:#FF7B72;">HAVING</span> <span style="color:#FFA657;">COUNT</span>(l.license_id) > <span style="color:#79C0FF;">50</span>
<span style="color:#FF7B72;">ORDER BY</span> r.churn_probability_score <span style="color:#FF7B72;">DESC</span>, a.total_ltv <span style="color:#FF7B72;">DESC</span>
<span style="color:#FF7B72;">LIMIT</span> <span style="color:#79C0FF;">5</span>;</code></pre><br>
        • <strong>Performance Note:</strong> Query uses composite index <code>idx_accounts_risk</code> with estimated execution latency of only <strong>12.4ms</strong>.`,
        actions: ['📋 Copy SQL to Clipboard', '🚀 Run in Live DB Sandbox', '📈 View Query Execution Plan']
      }
    }
  }
};

// State Variables
let currentActiveScenario = 'general';
let currentTourChapter = 0;
let tourInterval = null;
let isTourPlaying = true;

// 3. Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initIndustryTabs();
  initScrollSpy();
  initDemoStudio();
  initVoiceInteraction();
});

/* 1. Header Scroll Background Effect */
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* Festive Ribbon Controller */
function initFestiveRibbon() {
  const ribbon = document.getElementById('festive-ribbon');
  const badge = document.getElementById('festive-badge');
  const message = document.getElementById('festive-message');

  if (!ribbon || !badge || !message) return;

  // Force Ganesh Chaturthi / Happy Ganesh Festival ribbon active by default for instant preview
  ribbon.className = 'festive-ribbon ganesh-chaturthi-theme';
  badge.innerHTML = '🚩 HAPPY GANESH FESTIVAL';
  message.innerHTML = '🐘 <strong>Happy Ganesh Festival!</strong> May Lord Ganesha bless your organization with divine wisdom, auspicious beginnings & prosperity — <em>Bhoomi Solutions Ltd</em> 🪔✨';
  ribbon.style.display = 'block';
  document.body.classList.add('has-festive-ribbon');
}

function closeFestiveRibbon() {
  const ribbon = document.getElementById('festive-ribbon');
  if (ribbon) ribbon.style.display = 'none';
  document.body.classList.remove('has-festive-ribbon');
}

/* 2. Mobile Drawer Navigation Toggle */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = toggleBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Close mobile drawer when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggleBtn.querySelector('i').className = 'fa-solid fa-bars';
      });
    });
  }
}

/* 3. Industry Tabs Switcher Logic */
let currentSelectedIndustryKey = 'customer-service';

function initIndustryTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const featuredTitle = document.getElementById('featured-title');
  const featuredDesc = document.getElementById('featured-desc');
  const featuredPill = document.getElementById('featured-pill');
  const metricVal = document.getElementById('metric-val');
  const metricLbl = document.getElementById('metric-lbl');
  const checklistGrid = document.getElementById('checklist-grid');
  const featuredCard = document.getElementById('featured-card');
  const testDemoBtn = document.getElementById('test-live-demo-btn');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const industryKey = btn.getAttribute('data-industry');
      const data = industryData[industryKey];

      if (!data) return;
      currentSelectedIndustryKey = industryKey;

      // Active state on tab buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Subtle fade animation
      featuredCard.style.opacity = '0.4';
      featuredCard.style.transform = 'translateY(8px)';

      setTimeout(() => {
        featuredTitle.textContent = data.title;
        featuredPill.textContent = data.badge;
        featuredDesc.textContent = data.desc;
        metricVal.textContent = data.metricVal;
        metricLbl.textContent = data.metricLbl;

        if (testDemoBtn) {
          testDemoBtn.setAttribute('onclick', `openDemoModal('${industryKey}', true)`);
        }

        // Render updated checklist
        checklistGrid.innerHTML = data.checklist.map(item => `
          <div class="check-item">
            <i class="fa-solid fa-circle-check"></i>
            <span>${item}</span>
          </div>
        `).join('');

        featuredCard.style.opacity = '1';
        featuredCard.style.transform = 'translateY(0)';
      }, 150);
    });
  });
}

/* 4. Active Tab Highlighting on Scroll (ScrollSpy) */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = 'home';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   GENERATIVE AI DEMO SHOWCASE STUDIO CONTROLLER
   ========================================================================== */

function initDemoStudio() {
  selectScenario('general');
  startTourAutoPlay();
}

function selectScenario(scenarioKey) {
  if (!demoScenarios[scenarioKey]) return;
  currentActiveScenario = scenarioKey;

  // Update Scenario Navigation Chips
  document.querySelectorAll('.scenario-chip').forEach(btn => {
    if (btn.getAttribute('data-scenario') === scenarioKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const scenario = demoScenarios[scenarioKey];

  // Update Agent Name and Tool Badge
  const agentNameElem = document.getElementById('active-agent-name');
  if (agentNameElem) agentNameElem.textContent = scenario.name;

  const toolBadgeElem = document.getElementById('tool-active-badge');
  if (toolBadgeElem) toolBadgeElem.textContent = scenario.toolBadge;

  // Populate Preset Prompt Chips
  const promptChipsWrap = document.getElementById('demo-prompt-chips-wrap');
  if (promptChipsWrap) {
    promptChipsWrap.innerHTML = scenario.presets.map(prompt => `
      <button type="button" class="quick-prompt-btn" onclick="executePresetPrompt('${escapePrompt(prompt)}')">
        <i class="fa-solid fa-wand-magic-sparkles" style="color: var(--cyan-accent); margin-right: 4px;"></i> ${prompt}
      </button>
    `).join('');
  }

  // Populate Tool Sandbox Output with Syntax Coloration
  renderToolOutput(scenario.toolOutput);

  // Reset Chat Messages Container with Welcome Greeting
  const chatMessages = document.getElementById('demo-chat-messages');
  if (chatMessages) {
    chatMessages.innerHTML = `
      <div class="chat-bubble agent">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
          <span class="step-badge">${scenario.badge}</span>
          <span style="font-size:0.75rem; color:var(--text-light-muted);"><i class="fa-solid fa-bolt" style="color:#00FF87;"></i> Online & Ready</span>
        </div>
        <div class="agent-response-text">${scenario.welcome}</div>
      </div>
    `;
  }

  // Reset Telemetry HUD
  updateTelemetry('ACTIVE', '18ms', '99.4%');
}

function escapePrompt(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function resetActiveScenario() {
  selectScenario(currentActiveScenario);
}

function renderToolOutput(outputObj) {
  const sandboxViewer = document.getElementById('sandbox-code-viewer');
  if (!sandboxViewer) return;

  const jsonStr = JSON.stringify(outputObj, null, 2);
  const highlighted = jsonStr
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      let cls = 'json-number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'json-key';
        } else {
          cls = 'json-string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'json-bool';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    });

  sandboxViewer.innerHTML = `<pre>${highlighted}</pre>`;
}

function updateTelemetry(state, latency, confidence) {
  const stateElem = document.getElementById('telemetry-state');
  const latencyElem = document.getElementById('telemetry-latency');
  const confidenceElem = document.getElementById('telemetry-confidence');

  if (stateElem) {
    stateElem.textContent = state;
    stateElem.style.color = (state === 'REASONING...') ? '#FFA657' : (state === 'CALLING TOOLS') ? '#00C6FF' : '#00FF87';
  }
  if (latencyElem) latencyElem.textContent = latency;
  if (confidenceElem) confidenceElem.textContent = confidence;
}

function generateBhoomiOnlineResponse(query) {
  const q = query.toLowerCase().trim();

  // 1. Mutual Fund Tracker & Financial Projects
  if (q.includes('mutual fund') || q.includes('tracker') || q.includes('sip') || q.includes('portfolio') || q.includes('rebalance') || q.includes('cagr') || q.includes('wealth')) {
    return {
      reasoning: [
        { step: 'Entity Recognition', detail: 'Identified entity: Featured Enterprise Project [Mutual Fund Tracker].' },
        { step: 'Knowledge Retrieval', detail: 'Fetched portfolio rebalancing, SIP tracking, and wealth advisory specs.' },
        { step: 'Accuracy Verification', detail: 'Confirmed 99.4% resolution rate metric and zero exit-load compliance.' }
      ],
      text: `<strong>📊 Mutual Fund Tracker — Featured Enterprise Project:</strong><br><br>
      • <strong>Automated Portfolio Rebalancing:</strong> Monitors client asset allocation and executes tax-optimized index/equity rebalancing based on risk tolerances.<br>
      • <strong>SIP Tracking & Analytics:</strong> Real-time tracking of systematic investment plans with automated NAV dip accumulation alerts.<br>
      • <strong>Personalized Fund Recommendations:</strong> Multi-factor scoring analyzing Alpha, Beta, Sharpe ratio, and expense ratios.<br>
      • <strong>Impact & Metrics:</strong> Delivered a <span style="color:#00FF87; font-weight:700;">99.4% resolution rate</span> and automated 85% of routine wealth advisor workflows.`,
      actions: ['📈 Launch Mutual Fund Demo', '📑 Request Case Study PDF', '📩 Get in Touch']
    };
  }

  // 2. Overview / What is Bhoomi Solutions / Services
  if (q.includes('bhoomi') || q.includes('what is') || q.includes('what do you do') || q.includes('about') || q.includes('overview') || q.includes('services') || q.includes('agentic')) {
    return {
      reasoning: [
        { step: 'Intent Parsing', detail: 'Classified general inquiry: Bhoomi Solutions Ltd firm overview.' },
        { step: 'Knowledge Grounding', detail: 'Extracted core mission: Agentic AI solutions that think, act, and deliver autonomous impact.' },
        { step: 'Pillar Verification', detail: 'Structured 3 core values: Autonomous, Scalable, Reliable.' }
      ],
      text: `<strong>Bhoomi Solutions Ltd</strong> creates cutting-edge <strong>Agentic AI solutions</strong> that empower organizations to automate complex workflows, enhance customer experiences, and drive scalable growth.<br><br>
      🌟 <strong>Core Pillars:</strong><br>
      • <strong>Autonomous:</strong> Our AI agents think, reason, and deliver real-world outcomes independently.<br>
      • <strong>Scalable:</strong> Built to scale across industries, ERPs, CRMs, and business functions.<br>
      • <strong>Reliable:</strong> Customized to your requirements, and accurately aligned with your business goals.`,
      actions: ['🚀 Explore Solutions', '💬 Ask about Industries', '📩 Get in Touch']
    };
  }

  // 3. Cognitive Framework: Understand, Reason, Act, Learn
  if (q.includes('understand') || q.includes('reason') || q.includes('act') || q.includes('learn') || q.includes('how it works') || q.includes('how do agents work') || q.includes('framework')) {
    return {
      reasoning: [
        { step: 'Decomposition', detail: 'Mapped cognitive architecture nodes from hero section.' },
        { step: 'NLP to API Trace', detail: 'Verified 4-stage pipeline: NLP -> Planning -> Execution -> RL Feedback.' }
      ],
      text: `<strong>🧠 The Bhoomi Agentic Cognitive Architecture:</strong><br><br>
      1. <strong>Understand:</strong> Natural Language Processing (NLP) extracts context, intents, and entities from customer inputs.<br>
      2. <strong>Reason:</strong> Multi-step planning, decision-making, and real-time knowledge retrieval (Vector RAG).<br>
      3. <strong>Act:</strong> Executes autonomous API calls, CRM updates, database queries, and document generation.<br>
      4. <strong>Learn:</strong> Continuous improvement through multi-turn interaction loops and reinforcement feedback.`,
      actions: ['🎬 Architecture Tour', '🤖 View Live Agents', '📩 Get in Touch']
    };
  }

  // 4. Contact & Inquiries
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('rajesh') || q.includes('shetty') || q.includes('phone') || q.includes('get in touch') || q.includes('support')) {
    return {
      reasoning: [
        { step: 'Intent Match', detail: 'Matched intent: Official contact & representative information.' },
        { step: 'Contact Info Fetch', detail: 'Retrieved verified email and website coordinates.' }
      ],
      text: `<strong>📩 Connect with Bhoomi Solutions Ltd:</strong><br><br>
      • <strong>Official Website:</strong> <a href="https://www.bhoomisolutionsltd.com" style="color:var(--cyan-accent); font-weight:600;">www.bhoomisolutionsltd.com</a><br>
      • <strong>Direct Email:</strong> <a href="mailto:rajeshshetty@bhoomisolutionsltd.com" style="color:var(--cyan-accent); font-weight:600;">rajeshshetty@bhoomisolutionsltd.com</a><br>
      • <strong>Contact Form:</strong> You can submit your requirements directly using the <strong>Get in Touch</strong> form on this page!`,
      actions: ['📩 Scroll to Get in Touch', '💬 Ask another question']
    };
  }

  // 5. Healthcare Triage
  if (q.includes('health') || q.includes('hospital') || q.includes('patient') || q.includes('clinical') || q.includes('doctor') || q.includes('triage') || q.includes('hipaa')) {
    return {
      reasoning: [
        { step: 'Domain Classification', detail: 'Matched Healthcare Industry Deployment.' },
        { step: 'Safety Check', detail: 'Enforced ABDM compliance protocol and ESI level verification.' }
      ],
      text: `<strong>🏥 Healthcare Clinical Triage & Patient Care:</strong><br><br>
      • <strong>ABDM Compliant:</strong> Zero-retention encrypted pipelines for patient data intake.<br>
      • <strong>Clinical Triage:</strong> Automated Emergency Severity Index (ESI) classification and preliminary assessment.<br>
      • <strong>EHR Synchronized:</strong> Connects directly with Epic and Cerner for doctor appointment scheduling and alerts.`,
      actions: ['🏥 Test Clinical Triage Demo', '📩 Get in Touch']
    };
  }

  // 6. E-Commerce / Retail
  if (q.includes('e-commerce') || q.includes('ecommerce') || q.includes('shop') || q.includes('cart') || q.includes('retail') || q.includes('store') || q.includes('product')) {
    return {
      reasoning: [
        { step: 'Domain Classification', detail: 'Matched E-Commerce Shopping & Conversational Commerce.' },
        { step: 'Metric Verification', detail: 'Retrieved +34% conversion uplift benchmark.' }
      ],
      text: `<strong>🛒 E-Commerce Conversational Shopping Assistant:</strong><br><br>
      • <strong>Personalized Recommendations:</strong> AI guides shoppers based on preferences, climate, budget, and sizing.<br>
      • <strong>Real-time Stock & Sync:</strong> Instant warehouse inventory queries and 1-click cart addition.<br>
      • <strong>Results:</strong> Drives an average of <span style="color:#00FF87; font-weight:700;">+34% revenue uplift</span> and automated returns handling.`,
      actions: ['🛒 Test E-Commerce Demo', '📩 Get in Touch']
    };
  }

  // 7. Security / Hosting
  if (q.includes('security') || q.includes('compliance') || q.includes('hosted') || q.includes('soc2') || q.includes('iso') || q.includes('gdpr') || q.includes('dpdp')) {
    return {
      reasoning: [
        { step: 'Compliance Verification', detail: 'Audited enterprise hosting, DPDP Act 2023 & security certifications.' }
      ],
      text: `<strong>🛡️ Enterprise Security & Privacy:</strong><br><br>
      • <strong>Security & Privacy:</strong> Data is encrypted, consent-driven, and auditable, aligning with India’s DPDP Act, 2023.<br>
      • <strong>Cloud Infrastructure:</strong> Hosted on SOC2, ISO 27001, and GDPR Ready architecture.<br>
      • <strong>Data Shield:</strong> Zero-data retention, automated PII masking, and end-to-end encryption.`,
      actions: ['🛡️ View Guardrails', '📩 Get in Touch']
    };
  }

  // 8. Supported Industries Overview
  if (q.includes('industr') || q.includes('sector') || q.includes('customer service') || q.includes('bsecure') || q.includes('manufacturing') || q.includes('real estate') || q.includes('education') || q.includes('logistics')) {
    return {
      reasoning: [
        { step: 'Industry Matrix Retrieval', detail: 'Queried 9 enterprise industry verticals from knowledge base.' }
      ],
      text: `<strong>🌐 Bhoomi Solutions delivers Agentic AI across 9 key sectors:</strong><br><br>
      1. <strong>Customer Service:</strong> 24/7 autonomous issue resolution.<br>
      2. <strong>Finance:</strong> Mutual Fund Tracker, automated risk scoring, and underwriting.<br>
      3. <strong>Healthcare:</strong> ABDM compliant patient triage and EHR scheduling.<br>
      4. <strong>E-Commerce:</strong> Conversational shopping assistants.<br>
      5. <strong>Manufacturing:</strong> IoT telemetry and predictive maintenance.<br>
      6. <strong>Real Estate:</strong> 24/7 lead qualification and tour booking.<br>
      7. <strong>Education:</strong> 24/7 AI tutoring companions.<br>
      8. <strong>Logistics:</strong> Fleet route optimization and autonomous dispatch.<br>
      9. <strong>Bsecure:</strong> Autonomous zero-trust cybersecurity & threat defense.`,
      actions: ['🚀 Explore All Industries', '📩 Get in Touch']
    };
  }

  // 9. FALLBACK FOR COMPLEX / UNRESOLVED / OUT-OF-DOMAIN QUERIES
  // EXACT TEXT REQUIRED BY USER:
  return {
    reasoning: [
      { step: 'Query Scope Evaluation', detail: 'Evaluating query against Bhoomi Solutions knowledge repository.' },
      { step: 'Escalation Protocol', detail: 'Complex / custom request detected -> routing to human engineering team.' }
    ],
    text: `Please update your queries in Get in Touch to respond back on your email. Thankyou for interacting with Bhoomi. Good bye`,
    actions: ['📩 Go to Get in Touch Form']
  };
}

/* Handle Prompt Submission */
function handleDemoPromptSubmit(event) {
  if (event) event.preventDefault();
  const inputElem = document.getElementById('demo-user-input');
  if (!inputElem) return;

  const userText = inputElem.value.trim();
  if (!userText) return;

  inputElem.value = '';
  executePromptWorkflow(userText);
}

function executePresetPrompt(promptText) {
  executePromptWorkflow(promptText);
}

function executePromptWorkflow(userQuery) {
  const chatMessages = document.getElementById('demo-chat-messages');
  if (!chatMessages) return;

  // 1. Append User Message Bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.innerHTML = `<div>${userQuery}</div>`;
  chatMessages.appendChild(userBubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // 2. Set Telemetry to Reasoning State
  updateTelemetry('REASONING...', '24ms', '99.8%');

  // 3. Generate ChatGPT-style Response Grounded on Website Knowledge
  const responseData = generateBhoomiOnlineResponse(userQuery);
  const scenario = demoScenarios[currentActiveScenario] || demoScenarios['customer-service'];

  const agentBubble = document.createElement('div');
  agentBubble.className = 'chat-bubble agent';
  
  const reasoningHtml = `
    <div class="reasoning-accordion" id="reasoning-${Date.now()}">
      <div class="reasoning-header" onclick="this.parentElement.querySelector('.reasoning-content').classList.toggle('hidden')">
        <span><i class="fa-solid fa-brain"></i> Bhoomi Reasoning & Retrieval Trace</span>
        <i class="fa-solid fa-chevron-down" style="font-size:0.75rem;"></i>
      </div>
      <div class="reasoning-content">
        ${responseData.reasoning.map(r => `
          <div class="reasoning-step">
            <span class="step-badge">${r.step}</span>
            <span>${r.detail}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  agentBubble.innerHTML = reasoningHtml + `
    <div class="agent-response-text" id="stream-text-${Date.now()}">
      <i class="fa-solid fa-spinner fa-spin" style="color:var(--cyan-accent);"></i> Bhoomi Online is typing...
    </div>
    <div class="agent-action-buttons" style="display:none;">
      ${responseData.actions.map(act => {
        if (act.includes('Get in Touch')) {
          return `<button class="agent-action-btn" onclick="bookEnterpriseDemoFromModal()"><i class="fa-solid fa-paper-plane"></i> Get in Touch</button>`;
        }
        return `<button class="agent-action-btn" onclick="executePresetPrompt('${escapePrompt(act)}')"><i class="fa-solid fa-check"></i> ${act}</button>`;
      }).join('')}
    </div>
  `;

  chatMessages.appendChild(agentBubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // 4. Simulate Token-by-Token Streaming Completion
  setTimeout(() => {
    updateTelemetry('ACTIVE', '18ms', '99.8%');
    renderToolOutput({
      "query_received": userQuery,
      "knowledge_grounding": "bhoomisolutionsltd.com",
      "matched_intent": responseData.reasoning[0]?.detail || "General Knowledge",
      "execution_state": "RESOLVED_SUCCESSFULLY"
    });

    setTimeout(() => {
      const streamElem = agentBubble.querySelector('.agent-response-text');
      const actionRow = agentBubble.querySelector('.agent-action-buttons');

      if (streamElem) {
        streamElem.innerHTML = responseData.text;
        speakText(responseData.text);
      }
      if (actionRow) {
        actionRow.style.display = 'flex';
      }

      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 600);
  }, 400);
}

/* Web Speech API - Voice Interaction Controller */
let isVoiceInputListening = false;
let isVoiceAudioEnabled = true;
let speechRecognition = null;

function initVoiceInteraction() {
  const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognitionClass) {
    speechRecognition = new SpeechRecognitionClass();
    speechRecognition.continuous = false;
    speechRecognition.interimResults = false;
    speechRecognition.lang = 'en-US';

    speechRecognition.onstart = () => {
      isVoiceInputListening = true;
      const micIcon = document.getElementById('voice-icon');
      const micBtn = document.getElementById('voice-mic-btn');
      if (micIcon) micIcon.className = 'fa-solid fa-microphone-lines fa-beat';
      if (micBtn) micBtn.style.color = '#00FF87';
    };

    speechRecognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const inputElem = document.getElementById('demo-user-input');
      if (inputElem) {
        inputElem.value = transcript;
        handleDemoPromptSubmit(new Event('submit'));
      }
    };

    speechRecognition.onerror = (event) => {
      console.warn('Speech recognition error:', event.error);
      resetVoiceMicIcon();
    };

    speechRecognition.onend = () => {
      resetVoiceMicIcon();
    };
  }
}

function resetVoiceMicIcon() {
  isVoiceInputListening = false;
  const micIcon = document.getElementById('voice-icon');
  const micBtn = document.getElementById('voice-mic-btn');
  if (micIcon) micIcon.className = 'fa-solid fa-microphone';
  if (micBtn) micBtn.style.color = '';
}

function toggleVoiceInput() {
  if (!speechRecognition) {
    triggerVoiceSimulation();
    return;
  }
  if (isVoiceInputListening) {
    speechRecognition.stop();
  } else {
    try {
      speechRecognition.start();
    } catch (e) {
      speechRecognition.stop();
    }
  }
}

function toggleVoiceAudio() {
  isVoiceAudioEnabled = !isVoiceAudioEnabled;
  const btn = document.getElementById('voice-speaker-btn');
  if (btn) {
    if (isVoiceAudioEnabled) {
      btn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Voice Audio: On';
      btn.style.color = '#00FF87';
      speakText('Voice audio response enabled.');
    } else {
      btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> Voice Audio: Off';
      btn.style.color = 'var(--text-light-muted)';
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    }
  }
}

let selectedIndianFemaleVoice = null;

function loadIndianFemaleVoice() {
  if (!('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return;

  // 1. Look for explicit Indian Female Voices (en-IN or hi-IN)
  const indianVoices = voices.filter(v => v.lang === 'en-IN' || v.lang === 'hi-IN' || v.lang.includes('IN'));
  const indianFemale = indianVoices.find(v => 
    v.name.toLowerCase().includes('heera') || 
    v.name.toLowerCase().includes('neerja') || 
    v.name.toLowerCase().includes('veena') || 
    v.name.toLowerCase().includes('female') ||
    v.name.toLowerCase().includes('google')
  ) || indianVoices[0];

  if (indianFemale) {
    selectedIndianFemaleVoice = indianFemale;
  } else {
    // 2. Fallback to general English female voice with Indian English pronunciation tuning
    const femaleVoice = voices.find(v => 
      (v.lang.startsWith('en')) && 
      (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('samantha') || v.name.toLowerCase().includes('victoria') || v.name.toLowerCase().includes('google'))
    ) || voices[0];
    selectedIndianFemaleVoice = femaleVoice;
  }
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadIndianFemaleVoice;
  loadIndianFemaleVoice();
}

function speakText(textToSpeak) {
  if (!isVoiceAudioEnabled || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  // Strip HTML tags for clean speech
  const cleanText = textToSpeak.replace(/<[^>]*>?/gm, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);

  if (!selectedIndianFemaleVoice) {
    loadIndianFemaleVoice();
  }

  if (selectedIndianFemaleVoice) {
    utterance.voice = selectedIndianFemaleVoice;
    utterance.lang = selectedIndianFemaleVoice.lang || 'en-IN';
  } else {
    utterance.lang = 'en-IN';
  }

  // Pitch tuning for pleasant Indian female voice tone
  utterance.pitch = 1.25;
  utterance.rate = 0.95;

  window.speechSynthesis.speak(utterance);
}

/* Voice Simulation Fallback */
function triggerVoiceSimulation() {
  const inputElem = document.getElementById('demo-user-input');
  const voiceIcon = document.getElementById('voice-icon');
  if (!inputElem || !voiceIcon) return;

  voiceIcon.className = 'fa-solid fa-microphone-lines fa-bounce';
  voiceIcon.style.color = '#00FF87';

  setTimeout(() => {
    const voicePrompts = [
      'What Agentic AI solutions does Bhoomi Solutions offer?',
      'Tell me about the Mutual Fund Tracker project.',
      'Which industries do you build autonomous AI agents for?',
      'How can I get in touch with Bhoomi Solutions?'
    ];
    const picked = voicePrompts[Math.floor(Math.random() * voicePrompts.length)];
    inputElem.value = picked;
    voiceIcon.className = 'fa-solid fa-microphone';
    voiceIcon.style.color = '';
    inputElem.focus();
  }, 1200);
}

/* Demo Tabs Navigation */
function switchDemoTab(tabId) {
  document.querySelectorAll('.demo-mode-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const tabs = ['playground', 'guided', 'settings'];
  tabs.forEach(t => {
    const tabElem = document.getElementById(`tab-${t}`);
    if (tabElem) {
      tabElem.style.display = (t === tabId) ? 'flex' : 'none';
    }
  });
}

/* Fullscreen Toggle */
function toggleDemoFullscreen() {
  const modal = document.getElementById('demo-modal-card');
  const fsBtn = document.getElementById('fullscreen-toggle');
  if (modal) {
    modal.classList.toggle('fullscreen');
    if (fsBtn) {
      const isFs = modal.classList.contains('fullscreen');
      fsBtn.innerHTML = isFs ? '<i class="fa-solid fa-compress"></i>' : '<i class="fa-solid fa-expand"></i>';
    }
  }
}

/* Guided Tour Chapter Walkthrough */
const tourChapters = [
  {
    badge: 'CHAPTER 1: ARCHITECTURE OVERVIEW',
    title: 'How Bhoomi Autonomous Multi-Agent Swarms Work',
    desc: 'Incoming customer intent is decomposed into discrete sub-tasks, dispatched across specialized micro-agents, and executed with deterministic enterprise safety.'
  },
  {
    badge: 'CHAPTER 2: REAL-TIME VECTOR RAG',
    title: 'Dense-Sparse Hybrid Knowledge Retrieval',
    desc: 'Bhoomi integrates directly with your enterprise databases, policy manuals, and CRMs to retrieve precise context in under 15 milliseconds without hallucination.'
  },
  {
    badge: 'CHAPTER 3: AUTONOMOUS TOOL CALLING',
    title: 'Bi-Directional ERP & API Execution',
    desc: 'Agents do not just talk — they take action. From updating Zendesk tickets to generating SQL queries and booking calendar slots automatically.'
  },
  {
    badge: 'CHAPTER 4: ENTERPRISE SECURITY & CSAT',
    title: 'SOC2 Type II Guardrails & 98% CSAT',
    desc: 'Zero data retention, automated PII sanitization, and strict compliance monitoring deliver scalable 24/7 automation with full human-in-the-loop controls.'
  }
];

function setTourChapter(index) {
  currentTourChapter = index;
  const chapter = tourChapters[index];
  if (!chapter) return;

  const badgeElem = document.getElementById('tour-chapter-badge');
  const titleElem = document.getElementById('tour-chapter-title');
  const descElem = document.getElementById('tour-chapter-desc');

  if (badgeElem) badgeElem.textContent = chapter.badge;
  if (titleElem) titleElem.textContent = chapter.title;
  if (descElem) descElem.textContent = chapter.desc;

  const timelineSteps = document.querySelectorAll('.timeline-step');
  timelineSteps.forEach((step, idx) => {
    if (idx === index) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}

function nextTourChapter() {
  currentTourChapter = (currentTourChapter + 1) % tourChapters.length;
  setTourChapter(currentTourChapter);
}

function prevTourChapter() {
  currentTourChapter = (currentTourChapter - 1 + tourChapters.length) % tourChapters.length;
  setTourChapter(currentTourChapter);
}

function toggleTourPlayback() {
  const btn = document.getElementById('tour-play-btn');
  if (isTourPlaying) {
    clearInterval(tourInterval);
    isTourPlaying = false;
    if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i> Resume Tour';
  } else {
    startTourAutoPlay();
    isTourPlaying = true;
    if (btn) btn.innerHTML = '<i class="fa-solid fa-pause"></i> Auto-Play Active';
  }
}

function startTourAutoPlay() {
  clearInterval(tourInterval);
  tourInterval = setInterval(() => {
    if (isTourPlaying) {
      nextTourChapter();
    }
  }, 4500);
}

function updateSettingVal(targetId, val) {
  const target = document.getElementById(targetId);
  if (target) {
    target.textContent = parseFloat(val).toFixed(2) + (val < 0.3 ? ' (Enterprise Strict)' : val < 0.7 ? ' (Balanced)' : ' (Creative)');
  }
}

/* Analytics & Conversion Tracking Helper */
function trackConversionEvent(eventName, eventDetails) {
  try {
    if (window.va) {
      window.va('event', { name: eventName, data: eventDetails });
    }
    if (window.gtag) {
      window.gtag('event', eventName, eventDetails);
    }
    console.log('[Analytics Conversion Tracked]:', eventName, eventDetails);
  } catch (err) {
    console.warn('Analytics event tracking error:', err);
  }
}

/* Modal Open & Close Functions */
function openDemoModal(scenarioKey = 'general', isolateToIndustry = false) {
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.classList.add('active');

    // Resolve industry key to target scenarioKey if applicable
    let targetScenario = scenarioKey || 'general';
    if (scenarioKey && industryData[scenarioKey] && industryData[scenarioKey].scenarioKey) {
      targetScenario = industryData[scenarioKey].scenarioKey;
    }

    const navContainer = document.querySelector('.demo-scenario-nav');
    const chips = document.querySelectorAll('.demo-scenario-nav .scenario-chip');

    // If opening general client chatbot, hide all project scenario chips for a clean client experience
    if (!isolateToIndustry || targetScenario === 'general') {
      if (navContainer) navContainer.style.display = 'none';
    } else {
      if (navContainer) navContainer.style.display = 'flex';
      chips.forEach(chip => {
        const sc = chip.getAttribute('data-scenario');
        if (sc === targetScenario) {
          chip.style.display = 'inline-flex';
        } else {
          chip.style.display = 'none';
        }
      });
    }

    selectScenario(targetScenario);
    trackConversionEvent('demo_modal_opened', { scenario: targetScenario, isolated: isolateToIndustry });
  }
}

const caseStudyData = {
  'bsecure': {
    tag: 'CYBERSECURITY & THREAT DEFENSE',
    title: 'Bsecure: Enterprise Autonomous Threat Shield',
    client: 'Global Fortune 500 Enterprise Infrastructure Provider',
    challenge: 'Manual SOC triage delays in detecting stealth zero-day exploits, credential compromises, and multi-cloud perimeter anomalies.',
    solution: 'Bhoomi Solutions implemented Bsecure, an autonomous 24/7 AI security agent performing continuous vulnerability assessment, real-time threat containment, and SOC playbook automation.',
    metrics: [
      { val: '99.99%', label: 'Threat Containment' },
      { val: '< 0.5s', label: 'Autonomous Response' },
      { val: '100%', label: 'SOC2 & ISO 27001 Auditability' }
    ],
    highlights: [
      'Continuous 24/7 zero-trust network monitoring',
      'Sub-second autonomous threat containment & isolation',
      'Automated SIEM & SOC incident response playbook execution'
    ]
  },
  'finance': {
    tag: 'FINANCIAL SERVICES',
    title: 'Mutual Fund Tracker & Wealth Advisor Agent',
    client: 'Global Asset Management & Wealth Fund Group',
    challenge: 'Processing high-volume client SIP inquiries, portfolio rebalancing requests, and fund analytics across 100,000+ accounts with zero latency.',
    solution: 'Bhoomi Solutions deployed an autonomous AI Wealth Advisor Agent with real-time portfolio data retrieval, automated SIP tracking, and SOC 2 compliant security.',
    metrics: [
      { val: '99.4%', label: 'Automated Resolution Rate' },
      { val: '< 2 sec', label: 'Response Latency' },
      { val: '100k+', label: 'Accounts Managed' }
    ],
    highlights: [
      'Automated Mutual Fund portfolio rebalancing notifications',
      'SIP tracking & personalized fund recommendations',
      'Encrypted zero-leakage financial data guardrails'
    ]
  },
  'ecommerce': {
    tag: 'RETAIL & E-COMMERCE',
    title: 'Autonomous Sales & Upsell Assistant',
    client: 'Leading Global Direct-to-Consumer Retail Brand',
    challenge: 'High cart abandonment rate and support delays during peak shopping events.',
    solution: 'Integrated a conversational AI buyer agent with live Shopify/Stripe sync, personalized product bundling, and instant checkout support.',
    metrics: [
      { val: '+34%', label: 'Revenue & Conversion Uplift' },
      { val: '85%', label: 'Support Ticket Reduction' },
      { val: '24/7', label: 'Multi-Currency Support' }
    ],
    highlights: [
      'Real-time inventory query & cart recovery',
      'Personalized product recommendations & discount codes',
      'Automated return processing & tracking alerts'
    ]
  },
  'realestate': {
    tag: 'REAL ESTATE & SUPPORT',
    title: 'Instant Lead Qualification Bot',
    client: 'Premier Commercial & Residential Real Estate Group',
    challenge: 'Manual lead qualification caused a 12-hour delay in responding to buyer inquiries and scheduling property tours.',
    solution: 'Deployed an autonomous real estate agent that engages visitors 24/7, qualifies buyer budgets, matches MLS listings, and books agent calendar tours.',
    metrics: [
      { val: '< 1 min', label: 'Response Time (vs 12 hrs)' },
      { val: '68%', label: 'Increase in Qualified Tours' },
      { val: '100%', label: 'CRM & Calendar Accuracy' }
    ],
    highlights: [
      '24/7 buyer & renter inquiry response',
      'Automated budget & timeline lead qualification',
      'Instant calendar booking integration with agent CRM'
    ]
  },
  'healthcare': {
    tag: 'HEALTHCARE & CLINICAL TRIAGE',
    title: 'ABDM-compliant for Ayushman Bharat Digital Mission',
    client: 'Multi-Specialty Regional Healthcare Network',
    challenge: 'Overwhelmed phone lines for appointment booking and clinical triage causing delayed patient care and high admin costs.',
    solution: 'Deployed an ABDM-compliant (Ayushman Bharat Digital Mission) autonomous clinical triage agent handling appointment scheduling, Emergency Severity Index (ESI) symptom triage, and EHR synchronization.',
    metrics: [
      { val: '24/7', label: 'Patient Care Availability' },
      { val: '100%', label: 'ABDM Zero-PII Compliance' },
      { val: '94%', label: 'Clinical Triage Accuracy' }
    ],
    highlights: [
      'Ayushman Bharat Digital Mission (ABDM) compliance alignment',
      'Automated ESI clinical triage & emergency alert dispatch',
      'Direct FHIR / EHR calendar booking & physician matching'
    ]
  },
  'logistics': {
    tag: 'LOGISTICS & SUPPLY CHAIN',
    title: 'Smart Supply Chain & Fleet Dispatch Agent',
    client: 'Global Freight Logistics & Warehouse Operator',
    challenge: 'Manual dispatch routing, inventory forecasting delays, and complex SQL database query bottlenecks during peak supply chain hours.',
    solution: 'Bhoomi Solutions implemented an autonomous supply chain agent that optimizes multi-vendor routes, predicts warehouse inventory depletion, and generates high-speed SQL analytics.',
    metrics: [
      { val: '40%', label: 'Dispatch Speed Gain' },
      { val: '12.4ms', label: 'SQL Query Latency' },
      { val: '99.8%', label: 'Downtime Prevented' }
    ],
    highlights: [
      'Real-time weather & traffic delivery route optimization',
      'Automated inventory reorder triggers & ERP purchase order generation',
      'Natural language to SQL query conversion with index optimization'
    ]
  }
};

function openCaseStudyModal(projectKey) {
  const data = caseStudyData[projectKey] || caseStudyData['finance'];
  const modal = document.getElementById('casestudy-modal');

  if (!modal) return;

  const tagElem = document.getElementById('cs-tag');
  const titleElem = document.getElementById('cs-title');
  const clientElem = document.getElementById('cs-client');
  const challengeElem = document.getElementById('cs-challenge');
  const solutionElem = document.getElementById('cs-solution');
  const metricsContainer = document.getElementById('cs-metrics');
  const highlightsContainer = document.getElementById('cs-highlights');

  if (tagElem) tagElem.textContent = data.tag;
  if (titleElem) titleElem.textContent = data.title;
  if (clientElem) clientElem.textContent = `Client Sector: ${data.client}`;
  if (challengeElem) challengeElem.textContent = data.challenge;
  if (solutionElem) solutionElem.textContent = data.solution;

  if (metricsContainer) {
    metricsContainer.innerHTML = data.metrics.map(m => `
      <div style="background: rgba(0, 82, 255, 0.08); padding: 16px; border-radius: var(--radius-md); text-align: center; border: 1px solid rgba(0, 82, 255, 0.15);">
        <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary); line-height: 1.1;">${m.val}</div>
        <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; margin-top: 4px;">${m.label}</div>
      </div>
    `).join('');
  }

  if (highlightsContainer) {
    highlightsContainer.innerHTML = data.highlights.map(h => `
      <div class="check-item" style="margin-bottom: 8px;">
        <i class="fa-solid fa-circle-check" style="color: var(--primary);"></i>
        <span style="font-size: 0.88rem; color: var(--text-main); font-weight: 500;">${h}</span>
      </div>
    `).join('');
  }

  modal.classList.add('active');
  trackConversionEvent('case_study_opened', { project: projectKey });
}

function closeCaseStudyModal() {
  const modal = document.getElementById('casestudy-modal');
  if (modal) modal.classList.remove('active');
}

function closeDemoModal() {
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

/* Legal & Privacy Policy Modal Handler */
const legalData = {
  'privacy': {
    tag: 'DPDP ACT 2023 & GDPR ALIGNED',
    title: 'Privacy Policy & Data Protection',
    content: `
      <p style="margin-bottom: 14px;">At <strong>Bhoomi Solutions Ltd</strong>, we are committed to upholding strict data privacy, enterprise security, and confidentiality standards across all our AI services and client interactions.</p>

      <h4 style="color: var(--text-main); font-size: 1rem; margin: 16px 0 8px 0;">1. Information We Collect</h4>
      <p style="margin-bottom: 14px;">When you fill out our contact form or interact with Bhoomi Online, we collect professional contact details (Full Name, Work Email, Industry, and Project Details) provided directly by you.</p>

      <h4 style="color: var(--text-main); font-size: 1rem; margin: 16px 0 8px 0;">2. How We Use Your Data</h4>
      <p style="margin-bottom: 14px;">Your details are strictly used to evaluate your business inquiry, schedule custom PoC demonstrations, and communicate regarding Agentic AI implementations. We do not sell, rent, or trade your personal data.</p>

      <h4 style="color: var(--text-main); font-size: 1rem; margin: 16px 0 8px 0;">3. Compliance & Security (DPDP Act 2023 & ABDM)</h4>
      <p style="margin-bottom: 14px;">In alignment with India's <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>, SOC2 Type II guidelines, and ABDM health data standards, all incoming lead data is encrypted in transit (TLS 1.3) and at rest (AES-256). Processing is consent-driven and fully auditable.</p>

      <h4 style="color: var(--text-main); font-size: 1rem; margin: 16px 0 8px 0;">4. Contact Privacy Officer</h4>
      <p>For data access, deletion, or privacy inquiries, contact our Data Governance team at <a href="mailto:rajeshshetty@bhoomisolutionsltd.com" style="color: var(--primary);">rajeshshetty@bhoomisolutionsltd.com</a>.</p>
    `
  },
  'terms': {
    tag: 'ENTERPRISE SERVICE TERMS',
    title: 'Terms of Service',
    content: `
      <p style="margin-bottom: 14px;">Welcome to <strong>Bhoomi Solutions Ltd</strong> (www.bhoomisolutionsltd.com). By accessing this website and utilizing our interactive AI agent demonstrations, you agree to the following terms.</p>

      <h4 style="color: var(--text-main); font-size: 1rem; margin: 16px 0 8px 0;">1. Intellectual Property</h4>
      <p style="margin-bottom: 14px;">All content, agentic AI architecture demonstrations, branding, visual assets, and code on this site are the intellectual property of Bhoomi Solutions Ltd and protected under copyright laws.</p>

      <h4 style="color: var(--text-main); font-size: 1rem; margin: 16px 0 8px 0;">2. AI Demonstration Disclaimer</h4>
      <p style="margin-bottom: 14px;">Interactive demonstrations (Bhoomi Online Copilot) provide simulated workflow responses based on enterprise grounding benchmarks. Commercial production deployments are subject to formal enterprise licensing agreements.</p>

      <h4 style="color: var(--text-main); font-size: 1rem; margin: 16px 0 8px 0;">3. Governing Law</h4>
      <p>These terms are governed by the laws of India. For legal or corporate inquiries, reach out to <a href="mailto:rajeshshetty@bhoomisolutionsltd.com" style="color: var(--primary);">rajeshshetty@bhoomisolutionsltd.com</a>.</p>
    `
  }
};

function openLegalModal(type) {
  const data = legalData[type] || legalData['privacy'];
  const modal = document.getElementById('legal-modal');
  const tagElem = document.getElementById('legal-tag');
  const titleElem = document.getElementById('legal-title');
  const contentElem = document.getElementById('legal-content');

  if (modal) {
    if (tagElem) tagElem.textContent = data.tag;
    if (titleElem) titleElem.textContent = data.title;
    if (contentElem) contentElem.innerHTML = data.content;
    modal.classList.add('active');
  }
}

function closeLegalModal() {
  const modal = document.getElementById('legal-modal');
  if (modal) modal.classList.remove('active');
}

// Attach overlay backdrop click and Mobile Nav Auto-Close handlers
document.addEventListener('DOMContentLoaded', () => {
  const demoModal = document.getElementById('demo-modal');
  const caseModal = document.getElementById('casestudy-modal');
  const legalModal = document.getElementById('legal-modal');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  // Mobile Toggle Listener
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });

    // Auto-close mobile drawer when any link is clicked
    navLinksContainer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
      });
    });
  }

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) closeDemoModal();
    });
  }

  if (caseModal) {
    caseModal.addEventListener('click', (e) => {
      if (e.target === caseModal) closeCaseStudyModal();
    });
  }

  if (legalModal) {
    legalModal.addEventListener('click', (e) => {
      if (e.target === legalModal) closeLegalModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDemoModal();
      closeCaseStudyModal();
      closeLegalModal();
    }
  });
});

function openContactForm(industryName) {
  const contactSection = document.getElementById('contact');
  const industrySelect = document.getElementById('industry-select');
  if (industrySelect && industryName) {
    for (let opt of industrySelect.options) {
      if (opt.text.toLowerCase().includes(industryName.toLowerCase())) {
        opt.selected = true;
        break;
      }
    }
  }
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  trackConversionEvent('contact_form_focused', { industry: industryName || 'General' });
}

function bookEnterpriseDemoFromModal() {
  closeDemoModal();
  const contactSection = document.getElementById('contact');
  const msgField = document.getElementById('message');
  const scenarioName = demoScenarios[currentActiveScenario]?.name || 'Agentic AI';
  
  if (msgField) {
    msgField.value = `Hi Bhoomi Solutions team, I would like to schedule a 1-on-1 enterprise PoC demo for your ${scenarioName}.`;
  }
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  trackConversionEvent('enterprise_demo_requested', { scenario: currentActiveScenario });
}

/* Production Contact Form Submission Handler (Async API + mailto Fallback) */
async function handleFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const industrySelect = document.getElementById('industry-select');
  const messageInput = document.getElementById('message');
  const alertContainer = document.getElementById('form-status-alert');
  const submitBtn = document.getElementById('contact-submit-btn');

  const name = nameInput?.value.trim() || '';
  const email = emailInput?.value.trim() || '';
  const industry = industrySelect?.value || 'General';
  const message = messageInput?.value.trim() || '';

  if (!name || !email || !message) {
    if (alertContainer) {
      alertContainer.style.display = 'block';
      alertContainer.style.background = 'rgba(255, 107, 129, 0.12)';
      alertContainer.style.color = '#FF6B81';
      alertContainer.style.border = '1px solid rgba(255, 107, 129, 0.3)';
      alertContainer.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please fill in all required fields.';
    }
    return;
  }

  // Show Loading State on Submit Button
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Dispatching Inquiry...';
  }

  trackConversionEvent('lead_form_submitted', { name, email, industry });

  const mailtoSubject = encodeURIComponent(`Bhoomi Solutions Lead Inquiry: ${name} (${industry})`);
  const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nIndustry: ${industry}\n\nProject Details:\n${message}`);
  const mailtoUrl = `mailto:rajeshshetty@bhoomisolutionsltd.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '629c0af0-5bb1-42ab-ae8c-d99cb18c1ffe',
        subject: `New Lead Inquiry: ${name} (${industry})`,
        from_name: name,
        replyto: email,
        email: email,
        industry: industry,
        message: message,
        to_email: 'rajeshshetty@bhoomisolutionsltd.com'
      })
    });

    const result = await response.json().catch(() => null);

    if (result && result.success) {
      if (alertContainer) {
        alertContainer.style.display = 'block';
        alertContainer.style.background = 'rgba(0, 255, 135, 0.12)';
        alertContainer.style.color = '#00FF87';
        alertContainer.style.border = '1px solid rgba(0, 255, 135, 0.3)';
        alertContainer.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, <strong>${name}</strong>! Your inquiry has been sent to Bhoomi Solutions. Our team will contact you at <strong>${email}</strong> within 24 hours.`;
      }
      document.getElementById('contact-form').reset();
    } else {
      // Fallback: Trigger direct mailto client window
      window.location.href = mailtoUrl;
      if (alertContainer) {
        alertContainer.style.display = 'block';
        alertContainer.style.background = 'rgba(0, 198, 255, 0.12)';
        alertContainer.style.color = 'var(--cyan-accent)';
        alertContainer.style.border = '1px solid rgba(0, 198, 255, 0.3)';
        alertContainer.innerHTML = `<i class="fa-solid fa-envelope"></i> Thank you, <strong>${name}</strong>! Opening your email app to send directly to <strong>rajeshshetty@bhoomisolutionsltd.com</strong>. Or <a href="${mailtoUrl}" style="color: #FFFFFF; text-decoration: underline;">Click Here to Send Email Directly</a>.`;
      }
    }
  } catch (err) {
    window.location.href = mailtoUrl;
    if (alertContainer) {
      alertContainer.style.display = 'block';
      alertContainer.style.background = 'rgba(0, 198, 255, 0.12)';
      alertContainer.style.color = 'var(--cyan-accent)';
      alertContainer.style.border = '1px solid rgba(0, 198, 255, 0.3)';
      alertContainer.innerHTML = `<i class="fa-solid fa-envelope"></i> Thank you, <strong>${name}</strong>! <a href="${mailtoUrl}" style="color: #FFFFFF; text-decoration: underline;">Click Here to Send Email Directly to rajeshshetty@bhoomisolutionsltd.com</a>.`;
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
    }
  }
}

