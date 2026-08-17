/* ==========================================================================
   BHOOMI SOLUTIONS - MAIN JAVASCRIPT CONTROLLER
   Handles Navigation Tabs, Dynamic Industry Switcher, Modals & Form Submission
   ========================================================================== */

// Industry Showcase Data for Solutions Switcher
const industryData = {
  'customer-service': {
    title: 'Autonomous AI Agent for Customer Service',
    badge: 'FEATURED PROJECT',
    desc: 'An intelligent AI agent that autonomously handles customer inquiries, resolves issues, and escalates complex cases — 24/7, across multiple channels.',
    metricVal: '98%',
    metricLbl: 'Customer Satisfaction',
    img: 'assets/images/featured_bot.jpg',
    checklist: [
      'Understands customer intent',
      'Learns from interactions',
      'Provides accurate, human-like responses',
      'Integrates with CRM & Helpdesk',
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
    title: 'HIPAA-Compliant Patient Care & Triage Agent',
    badge: 'HEALTHCARE SOLUTION',
    desc: 'Autonomous clinical triage and appointment scheduling assistant designed to handle patient inquiries with high precision and security compliance.',
    metricVal: '100%',
    metricLbl: 'HIPAA Compliant',
    img: 'assets/images/featured_bot.jpg',
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

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initIndustryTabs();
  initScrollSpy();
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
function initIndustryTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const featuredTitle = document.getElementById('featured-title');
  const featuredDesc = document.getElementById('featured-desc');
  const featuredPill = document.getElementById('featured-pill');
  const metricVal = document.getElementById('metric-val');
  const metricLbl = document.getElementById('metric-lbl');
  const checklistGrid = document.getElementById('checklist-grid');
  const featuredCard = document.getElementById('featured-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const industryKey = btn.getAttribute('data-industry');
      const data = industryData[industryKey];

      if (!data) return;

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

function openDemoModal() {
  const modal = document.getElementById('demo-modal');
  if (modal) modal.classList.add('active');
}

function closeDemoModal() {
  const modal = document.getElementById('demo-modal');
  if (modal) modal.classList.remove('active');
}

function openCaseStudyModal() {
  openDemoModal();
}

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
}

/* Interactive Demo Chat Handler */
function sendDemoMessage() {
  const input = document.getElementById('demo-chat-input');
  const chatBody = document.getElementById('demo-chat-body');
  
  if (!input || !chatBody || !input.value.trim()) return;

  const userText = input.value.trim();
  
  // 1. Render User Message
  const userMsgHtml = `
    <div style="display: flex; justify-content: flex-end; width: 100%;">
      <div style="background: #0052FF; color: #ffffff; border-radius: 12px; border-top-right-radius: 2px; padding: 10px 14px; font-size: 0.9rem; max-width: 80%; line-height: 1.4;">
        ${userText}
      </div>
    </div>
  `;
  chatBody.insertAdjacentHTML('beforeend', userMsgHtml);
  input.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  // 2. Render Automated Bot Response
  setTimeout(() => {
    const botMsgHtml = `
      <div style="display: flex; gap: 10px; align-items: flex-start;">
        <div style="width: 32px; height: 32px; border-radius: 50%; background: rgba(0, 198, 255, 0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid rgba(0, 198, 255, 0.4);">
          <i class="fa-solid fa-robot" style="color: #00C6FF; font-size: 0.85rem;"></i>
        </div>
        <div style="background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; border-top-left-radius: 2px; padding: 12px 16px; color: #e2e8f0; font-size: 0.9rem; max-width: 82%; line-height: 1.5;">
          Thank you! To view our full case study or tailored solution architecture, please update your requirements in <strong>Get in Touch</strong> below.
        </div>
      </div>
    `;
    chatBody.insertAdjacentHTML('beforeend', botMsgHtml);
    chatBody.scrollTop = chatBody.scrollHeight;

    // 3. Automatically close modal and scroll down to "Get in Touch" after 2.5 seconds
    setTimeout(() => {
      closeDemoModal();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2500);
  }, 600);
}
