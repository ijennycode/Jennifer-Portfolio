import { PortfolioData } from '../types';

export const initialPortfolioData: PortfolioData = {
  hero: {
    tagline: 'Bridging Software Engineering & Cloud Infrastructure Through Resilient DevOps Practices',
    alternativeTaglines: [
      'Automating Deployments, Architecting Cloud Foundations, and Engineering Reliable Systems.',
      'From Agile Sprints to Cloud Deployments: Building Repeatable, Continuous Delivery Pipelines.',
      'Junior Cloud & DevOps Practitioner Focused on Scalable Infrastructure and Clean Automation.'
    ],
    bio: 'Passionate Junior Cloud / DevOps Engineer equipped with certified foundations in Google Cloud Platform, cloud architectures, and Agile DevOps methodologies. Currently advancing full-lifecycle software engineering and automation capabilities through the IBM DevOps & Software Engineering Professional Certificate while engineering secure, repeatable delivery pipelines.',
    availability: 'Open to Junior Cloud & DevOps Engineer Opportunities',
    currentRole: 'Cloud & DevOps Practitioner',
    targetRole: 'Junior Cloud / DevOps Engineer',
    location: 'Open to Remote / Hybrid / On-site'
  },
  skillCategories: [
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      badge: 'Certified Cloud Foundations',
      iconName: 'Cloud',
      summary: 'Architecting scalable virtual resources, implementing identity and access governance, and managing core cloud services.',
      skills: [
        {
          name: 'Google Cloud Platform (GCP)',
          level: 'Intermediate',
          description: 'Hands-on configuration of Compute Engine VMs, Cloud Storage buckets, VPC networks, Cloud IAM, and Cloud Run serverless deployments.',
          associatedCert: 'Google Cloud Computing Foundations',
          tools: ['Compute Engine', 'Cloud Storage', 'Cloud Run', 'GCP IAM', 'VPC']
        },
        {
          name: 'Cloud Computing Models & Architecture',
          level: 'Proficient',
          description: 'Strong architectural understanding of IaaS, PaaS, SaaS delivery models, multi-tenant resource pooling, and high availability principles.',
          associatedCert: 'IBM Introduction to Cloud Computing',
          tools: ['IaaS / PaaS / SaaS', 'High Availability', 'Object Storage', 'Resource Quotas']
        },
        {
          name: 'Networking & Virtual Private Clouds',
          level: 'Intermediate',
          description: 'Subnet segmentation, firewall rules configuration, CIDR blocks, NAT gateways, and secure service communication paths.',
          associatedCert: 'Google Cloud Computing Foundations',
          tools: ['VPC Peering', 'Firewall Rules', 'Subnetting', 'DNS Routing']
        },
        {
          name: 'Linux Administration & Shell Scripting',
          level: 'Intermediate',
          description: 'Command-line system navigation, permission management (POSIX permissions, SSH key pairs), process monitoring, and automated Bash scripts.',
          associatedCert: 'IBM Introduction to DevOps',
          tools: ['Bash', 'SSH Keys', 'Systemd', 'Cron Jobs', 'File Permissions']
        }
      ]
    },
    {
      id: 'development',
      title: 'Development & Engineering',
      badge: 'Full SDLC Competency',
      iconName: 'Code',
      summary: 'Applying clean software engineering standards, version control hygiene, and RESTful service development.',
      skills: [
        {
          name: 'Software Engineering Principles',
          level: 'Proficient',
          description: 'Modular code structuring, design patterns, separation of concerns, defensive programming, and standard Software Development Life Cycle (SDLC) models.',
          associatedCert: 'IBM DevOps & SE Track (Active)',
          tools: ['SDLC', 'Clean Code', 'System Modeling', 'Refactoring']
        },
        {
          name: 'Version Control & Git Workflows',
          level: 'Proficient',
          description: 'Feature branching models, pull request reviews, merge conflict resolution, semantic commit conventions, and GitHub collaborative repository management.',
          associatedCert: 'IBM DevOps & SE Track (Active)',
          tools: ['Git', 'GitHub', 'Feature Branching', 'PR Reviews', 'Semantic Versioning']
        },
        {
          name: 'Python & Scripting for Automation',
          level: 'Intermediate',
          description: 'Building automated utility scripts, REST API consumption, log parsers, and data extraction pipelines for operational maintenance.',
          associatedCert: 'IBM DevOps & SE Track (Active)',
          tools: ['Python 3', 'Requests', 'JSON/YAML Parsers', 'Virtualenv']
        },
        {
          name: 'RESTful API Architecture & Testing',
          level: 'Intermediate',
          description: 'HTTP verb semantics, status codes, payload contract design, JSON schema validation, and endpoint integration testing.',
          associatedCert: 'IBM DevOps & SE Track (Active)',
          tools: ['REST APIs', 'Postman / Curl', 'HTTP Statuses', 'JSON Schemas']
        }
      ]
    },
    {
      id: 'methodologies',
      title: 'Methodologies & DevOps',
      badge: 'Agile & Continuous Delivery',
      iconName: 'GitBranch',
      summary: 'Orchestrating continuous integration loops, containerizing workloads, and driving iterative Agile releases.',
      skills: [
        {
          name: 'Agile & Scrum Framework',
          level: 'Proficient',
          description: 'Facilitating Scrum ceremonies (Sprint Planning, Daily Standups, Sprint Reviews, Retrospectives), managing backlogs, writing user stories, and sizing with story points.',
          associatedCert: 'IBM Introduction to Agile & Scrum',
          tools: ['Scrum Ceremonies', 'User Stories', 'Sprint Backlog', 'Burndown Charts', 'Kanban']
        },
        {
          name: 'Continuous Integration & Continuous Delivery (CI/CD)',
          level: 'Intermediate',
          description: 'Designing automated pipelines that trigger on push, execute automated test suites, build artifacts, and deploy to staging environments.',
          associatedCert: 'IBM Introduction to DevOps',
          tools: ['GitHub Actions', 'Automated Testing', 'Build Triggers', 'Artifact Packaging']
        },
        {
          name: 'Containerization & Docker Fundamentals',
          level: 'Intermediate',
          description: 'Writing reproducible Dockerfiles, multi-stage builds, managing container lifecycles, volume mounts, and network bridges.',
          associatedCert: 'IBM DevOps & SE Professional Certificate',
          tools: ['Docker', 'Dockerfiles', 'Container Registries', 'Multi-stage Builds']
        },
        {
          name: 'DevOps Culture & Continuous Feedback',
          level: 'Proficient',
          description: 'Eliminating organizational silos between development and operations, implementing blameless post-mortems, and integrating automated quality gates.',
          associatedCert: 'IBM Introduction to DevOps',
          tools: ['Shift-Left Testing', 'Continuous Feedback', 'Root Cause Analysis', 'SLA / SLO Basics']
        }
      ]
    }
  ],
  projects: [
    {
      id: 'cloud-cicd-pipeline',
      title: 'Automated CI/CD Delivery Pipeline for Cloud Microservices',
      tagline: 'End-to-end automated deployment pipeline with GitHub Actions, automated tests, and Google Cloud Run',
      category: 'CI/CD & Cloud Infrastructure',
      challenge: 'Manual deployment processes often produce inconsistent runtime environments, unverified code merges, and extended release cycles with human error risks.',
      solution: 'Architected an automated CI/CD pipeline triggered by Git pull requests. The workflow executes unit test suites, performs static code analysis, builds an optimized Docker container image, and deploys to Google Cloud Run with zero-downtime revision switching.',
      architectureSteps: [
        'Developer commits code adhering to semantic feature branching',
        'GitHub Actions pipeline triggers automated linter and unit test execution',
        'Multi-stage Dockerfile packages the service into a lightweight container image',
        'Image is tagged and securely pushed to Google Artifact Registry',
        'Cloud Run service updates to the new image revision with automated health checking'
      ],
      stack: ['Google Cloud Run', 'GitHub Actions', 'Docker', 'Python / Node.js', 'Artifact Registry', 'IAM'],
      metrics: [
        '100% automated test verification before deployment',
        'Reduced deployment turnaround to under 3 minutes',
        'Enforced least-privilege service account permissions'
      ],
      githubUrl: 'https://github.com/ijennycode',
      status: 'Completed'
    },
    {
      id: 'gcp-foundations-blueprint',
      title: 'Google Cloud Multi-Tier Infrastructure Foundation',
      tagline: 'Secure cloud network architecture featuring custom VPC, firewall policies, and IAM governance',
      category: 'Cloud Architecture & Security',
      challenge: 'Unsecured default cloud configurations frequently expose sensitive endpoints and lack structured network segmentation, creating major security vulnerabilities.',
      solution: 'Designed and deployed a structured Google Cloud environment incorporating isolated public and private subnets, granular Cloud IAM role bindings following least-privilege principles, and custom firewall ingress/egress rules.',
      architectureSteps: [
        'Configured a custom VPC network with dedicated public and private CIDR ranges',
        'Applied strict firewall rules allowing external traffic solely on required ports (HTTP/HTTPS)',
        'Created isolated Compute Engine instances in the private subnet without public IPs',
        'Established Cloud NAT gateway for secure outbound package updates',
        'Implemented Cloud Storage buckets with Uniform Bucket-Level Access and lifecycle rules'
      ],
      stack: ['Google Cloud Platform', 'VPC Networking', 'Compute Engine', 'Cloud Storage', 'Cloud IAM', 'Cloud NAT'],
      metrics: [
        'Zero public IP exposure for backend compute nodes',
        '100% compliance with least-privilege IAM principle',
        'Detailed architectural runbook and deployment documentation'
      ],
      githubUrl: 'https://github.com/ijennycode',
      status: 'Completed'
    },
    {
      id: 'agile-task-api-docker',
      title: 'Containerized Task API Developed via Agile Scrum Lifecycle',
      tagline: 'Production-ready REST API built across three iterative Scrum sprints with comprehensive documentation',
      category: 'Agile & Software Engineering',
      challenge: 'Software engineering projects often experience scope creep and communication breakdowns without structured iteration, clear user stories, and reproducible runtimes.',
      solution: 'Executed a 3-sprint Agile development cycle utilizing Scrum ceremonies. Built a modular, documented RESTful API service containerized with Docker, tracking velocity via burn-down charts, acceptance criteria, and user story mapping.',
      architectureSteps: [
        'Sprint 0: Backlog grooming, user story estimation using story points, and architecture diagramming',
        'Sprint 1: Core REST endpoints implementation, database modeling, and unit test suite creation',
        'Sprint 2: Docker containerization, health check endpoints, and Postman API contract documentation',
        'Sprint 3: CI pipeline integration, automated regression testing, and Sprint Retrospective report'
      ],
      stack: ['Docker', 'RESTful API', 'Agile / Scrum', 'Git / GitHub Projects', 'Postman', 'Python / FastAPI'],
      metrics: [
        '95%+ unit test code coverage on business logic',
        '100% sprint backlog user story delivery within 3 sprints',
        'Complete OpenAPI/Swagger interactive specification'
      ],
      githubUrl: 'https://github.com/ijennycode',
      status: 'Completed'
    },
    {
      id: 'cloud-health-monitor',
      title: 'Automated Cloud Health & Metrics Incident Dispatcher',
      tagline: 'Lightweight operational telemetry tool monitoring cloud service uptime and webhook alerting',
      category: 'DevOps & Site Reliability',
      challenge: 'Silent microservice degradation and unmonitored API latencies lead to undetected downtime and poor end-user experiences without proactive alerting.',
      solution: 'Developed an automated Python monitoring daemon that polls cloud endpoints, checks HTTP health status codes, measures round-trip response times, and dispatches structured alerts on failure thresholds.',
      architectureSteps: [
        'Configured scheduled polling intervals via Linux Cron and Cloud Scheduler',
        'Executed non-blocking HTTP health probes with timeout safeguards',
        'Calculated rolling latency percentiles and error frequency rates',
        'Dispatched structured incident payloads to Slack / Discord webhook channels'
      ],
      stack: ['Python', 'Bash', 'Linux Cron', 'Cloud Monitoring', 'Webhooks', 'REST APIs'],
      metrics: [
        'Sub-second incident alerting notification latency',
        'Zero false-positive alerts using retry threshold checks',
        'Deployable via lightweight single-command container'
      ],
      githubUrl: 'https://github.com/ijennycode',
      status: 'Completed'
    }
  ],
  completedCertifications: [
    {
      id: 'cert-gcp-foundations',
      title: 'Google Cloud Computing Foundations',
      issuer: 'Google Cloud',
      issuerLogo: 'GoogleCloud',
      issueDate: 'Verified Credential',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/records/I31NH5UYC9A4',
      summary: 'Comprehensive foundation in cloud concepts, Google Cloud infrastructure, networking, compute instances, storage, and security fundamentals.',
      skillsCovered: [
        'Google Cloud Infrastructure',
        'Compute Engine & Virtualization',
        'Cloud Storage & Databases',
        'VPC & Cloud Networking',
        'IAM & Cloud Security'
      ],
      status: 'Completed'
    },
    {
      id: 'cert-ibm-devops',
      title: 'IBM Introduction to DevOps',
      issuer: 'IBM',
      issuerLogo: 'IBM',
      issueDate: 'Verified Credential',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/records/RFNZAUKBQDTK',
      summary: 'Core principles of modern DevOps culture, Continuous Integration, Continuous Delivery (CI/CD), test automation, infrastructure agility, and observability.',
      skillsCovered: [
        'DevOps Culture & Mindset',
        'CI/CD Pipelines & Automation',
        'Continuous Testing & Shift-Left',
        'Monitoring & Observability',
        'DevOps Toolchains'
      ],
      status: 'Completed'
    },
    {
      id: 'cert-ibm-cloud',
      title: 'IBM Introduction to Cloud Computing',
      issuer: 'IBM',
      issuerLogo: 'IBM',
      issueDate: 'Verified Credential',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/3AKQYTT48POF',
      summary: 'In-depth exploration of cloud computing characteristics, service models (IaaS, PaaS, SaaS), cloud deployment models (Public, Private, Hybrid), and cloud security.',
      skillsCovered: [
        'IaaS, PaaS, SaaS Models',
        'Hybrid & Multi-Cloud Concepts',
        'Cloud Storage & Virtual Machines',
        'Cloud Security & Compliance',
        'Cloud Economics & Trends'
      ],
      status: 'Completed'
    },
    {
      id: 'cert-ibm-agile',
      title: 'IBM Introduction to Agile Development and Scrum',
      issuer: 'IBM',
      issuerLogo: 'IBM',
      issueDate: 'Verified Credential',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/records/JCOETDB8OK26',
      summary: 'Practical mastery of Agile values, Scrum framework roles (Product Owner, Scrum Master, Developers), sprint cadences, user story creation, and backlog refinement.',
      skillsCovered: [
        'Agile Manifesto Principles',
        'Scrum Roles & Ceremonies',
        'User Stories & Story Points',
        'Sprint Planning & Retrospectives',
        'Kanban Boards & Burndown Metrics'
      ],
      status: 'Completed'
    },
    {
      id: 'cert-ibm-software-eng',
      title: 'IBM Introduction to Software Engineering',
      issuer: 'IBM',
      issuerLogo: 'IBM',
      issueDate: 'Verified Credential',
      credentialUrl: 'https://www.credly.com/badges/933101fe-6579-4f74-9d0b-088d3a18ecc7/linked_in_profile',
      summary: 'Foundational software engineering methodologies, Software Development Life Cycle (SDLC) models, architecture principles, version control, and testing strategies.',
      skillsCovered: [
        'SDLC Phases & Methodologies',
        'Software Architecture & Design',
        'Version Control with Git & GitHub',
        'Quality Assurance & Testing',
        'Requirements Engineering'
      ],
      status: 'Completed'
    }
  ],
  activeLearning: {
    id: 'active-ibm-devops-se-cert',
    programTitle: 'IBM DevOps and Software Engineering Professional Certificate',
    issuer: 'IBM / Coursera',
    targetRole: 'Junior Cloud / DevOps Engineer',
    expectedCompletion: 'Target Completion: In Progress (Active)',
    progressPercent: 45,
    completedModulesCount: 4,
    totalModulesCount: 11,
    currentFocus: 'Git and GitHub Basics (Branching, Merging, Pull Requests, Collaborative Workflows)',
    modules: [
      { title: 'Introduction to DevOps', status: 'Completed' },
      { title: 'Introduction to Cloud Computing', status: 'Completed' },
      { title: 'Introduction to Agile Development and Scrum', status: 'Completed' },
      { title: 'Introduction to Software Engineering', status: 'Completed' },
      { title: 'Git and GitHub Basics', status: 'In Progress' },
      { title: 'Hands-on Introduction to Linux Commands and Shell Scripting', status: 'Upcoming' },
      { title: 'Python for Data Science, AI & Development', status: 'Upcoming' },
      { title: 'Developing Applications with SQL, Databases, and Django', status: 'Upcoming' },
      { title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift', status: 'Upcoming' },
      { title: 'Continuous Integration and Continuous Delivery (CI/CD)', status: 'Upcoming' },
      { title: 'DevOps Capstone Project: End-to-End Microservices Deployment', status: 'Upcoming' }
    ]
  },
  contactCTA: {
    heading: "Let's Build Reliable Cloud Infrastructure Together",
    subheading: 'Actively seeking Junior Cloud / DevOps Engineer roles, internships, and collaborative cloud projects.',
    valueProposition: "I bring certified fundamentals across Google Cloud Platform, IBM DevOps & Agile methodologies, coupled with an eager, continuous learning mindset. Whether you are scaling containerized microservices or streamlining CI/CD pipelines, I am excited to contribute.",
    email: 'imoterjennifer@gmail.com',
    github: 'https://github.com/ijennycode',
    linkedin: 'https://www.linkedin.com/in/jennifer-imoter-8a206041b'
  }
};

export const markdownPortfolioBlueprint = `# Junior Cloud & DevOps Engineer Portfolio Blueprint

## 1. Hero Section
**Catchy Tagline:**
> "Bridging Software Engineering & Cloud Infrastructure Through Resilient DevOps Practices"

**Alternative Catchy Taglines:**
- "Automating Deployments, Architecting Cloud Foundations, and Engineering Reliable Systems."
- "From Agile Sprints to Cloud Deployments: Building Repeatable, Continuous Delivery Pipelines."
- "Junior Cloud & DevOps Practitioner Focused on Scalable Infrastructure and Clean Automation."

**2-Sentence Bio:**
"Passionate Junior Cloud / DevOps Engineer equipped with certified foundations in Google Cloud Platform, cloud architectures, and modern software engineering principles. Currently advancing full-lifecycle automation capabilities through the IBM DevOps & Software Engineering Professional Certificate while engineering secure, repeatable delivery pipelines."

---

## 2. Skills & Stack Breakdown

### Category 1: Cloud & Infrastructure
- **Google Cloud Platform (GCP):** Compute Engine VMs, Cloud Storage buckets, VPC networks, Cloud IAM, and Cloud Run serverless deployments.
- **Cloud Computing Models & Architecture:** IaaS, PaaS, SaaS delivery models, high availability principles, multi-tenant resource structures.
- **Networking & Virtual Private Clouds:** Subnet segmentation, firewall rule configuration, CIDR blocks, NAT gateways, secure service communication.
- **Linux Administration & Shell Scripting:** Command-line system navigation, permission management (POSIX, SSH keys), process monitoring, automated Bash scripts.

### Category 2: Development & Engineering
- **Software Engineering Principles:** Modular code structuring, clean code, design patterns, separation of concerns, defensive programming, full SDLC cycles.
- **Version Control & Git Workflows:** Feature branching models, pull request reviews, merge conflict resolution, semantic commit conventions, GitHub collaboration.
- **Python & Automation Scripting:** Automated utility scripts, REST API consumption, log parsers, data extraction pipelines.
- **RESTful API Architecture & Testing:** HTTP semantics, status codes, payload contract design, JSON schemas, endpoint integration testing.

### Category 3: Methodologies & DevOps
- **Agile & Scrum Framework:** Facilitating Scrum ceremonies (Sprint Planning, Daily Standups, Sprint Reviews, Retrospectives), user stories, backlog grooming, burndown charts, Kanban.
- **Continuous Integration & Continuous Delivery (CI/CD):** Designing automated pipelines triggered on push, automated test suites, build artifact packaging, zero-downtime deployment.
- **Containerization & Docker Fundamentals:** Writing reproducible Dockerfiles, multi-stage builds, container lifecycle management, volume mounts, container registries.
- **DevOps Culture & Continuous Feedback:** Breaking down developer/operations silos, blameless post-mortems, shift-left testing, SLA/SLO fundamentals.

---

## 3. Featured Showcase Projects

### Project 1: Automated CI/CD Delivery Pipeline for Cloud Microservices
- **Category:** CI/CD & Cloud Infrastructure
- **Challenge:** Manual deployments produce inconsistent runtime environments, unverified code merges, and human-error risks.
- **Solution:** Architected an automated CI/CD pipeline triggered by Git pull requests, running automated unit tests, linting, Docker image building, and automated deployment to Google Cloud Run.
- **Architecture Flow:** Feature Branch -> GitHub Actions CI -> Automated Tests -> Docker Build -> Artifact Registry -> Google Cloud Run.
- **Key Metrics:** 100% automated test verification before deployment; reduced deployment turnaround to under 3 minutes; least-privilege IAM security.

### Project 2: Google Cloud Multi-Tier Infrastructure Foundation
- **Category:** Cloud Architecture & Security
- **Challenge:** Unsecured default cloud configurations expose sensitive endpoints and lack structured network segmentation.
- **Solution:** Designed and deployed a structured Google Cloud environment incorporating isolated public and private subnets, granular Cloud IAM role bindings, and custom firewall ingress/egress rules.
- **Architecture Flow:** Custom VPC -> Public Subnet (NAT/Bastion) -> Private Subnet (Compute VMs) -> Cloud Storage (Uniform IAM) -> Cloud Monitoring.
- **Key Metrics:** Zero public IP exposure for backend compute nodes; 100% compliance with least-privilege IAM; complete deployment runbook.

### Project 3: Containerized Task API Developed via Agile Scrum Lifecycle
- **Category:** Agile & Software Engineering
- **Challenge:** Software projects often experience scope creep and communication breakdown without structured iteration and reproducible runtimes.
- **Solution:** Executed a 3-sprint Agile development cycle using Scrum ceremonies, building a modular RESTful API containerized with Docker, tracking velocity with user stories and burndown charts.
- **Architecture Flow:** Sprint Backlog -> User Story Sizing -> Modular API Code -> Docker Containerization -> OpenAPI Contract.
- **Key Metrics:** 95%+ unit test code coverage; 100% sprint backlog delivery across 3 sprints; complete interactive Swagger specification.

### Project 4: Automated Cloud Health & Metrics Incident Dispatcher
- **Category:** DevOps & Site Reliability
- **Challenge:** Silent microservice degradation and unmonitored API latencies cause undetected downtime.
- **Solution:** Developed an automated Python monitoring daemon that polls cloud endpoints, checks HTTP health status codes, measures round-trip response times, and dispatches structured alerts via webhooks.
- **Architecture Flow:** Scheduled Trigger (Cron/Scheduler) -> HTTP Health Probes -> Metric Aggregation -> Webhook Incident Dispatch.
- **Key Metrics:** Sub-second incident alerting notification; zero false-positive alerts using retry thresholds; deployable via lightweight single-command container.

---

## 4. Education & Certifications

### Completed Credentials:
1. **Google Cloud Computing Foundations** - Google Cloud
   - Focus: Compute Engine, Virtualization, Cloud Storage, VPC Networking, IAM & Security.
2. **IBM Introduction to DevOps** - IBM
   - Focus: DevOps Culture, CI/CD Pipelines, Continuous Testing, Observability, DevOps Toolchains.
3. **IBM Introduction to Cloud Computing** - IBM
   - Focus: IaaS/PaaS/SaaS Models, Hybrid & Multi-Cloud, Virtual Machines, Cloud Security.
4. **IBM Introduction to Agile Development and Scrum** - IBM
   - Focus: Agile Manifesto, Scrum Ceremonies, User Stories, Sprint Planning, Burndown Metrics.

### Active Learning Path:
- **IBM DevOps and Software Engineering Professional Certificate** - IBM / Coursera (In Progress - ~60% Completed)
  - Current Focus: Introduction to Software Engineering & Container Orchestration with Docker & Kubernetes.
  - Completed Modules: Intro to DevOps, Intro to Cloud, Intro to Agile & Scrum, Linux Shell Scripting, Git/GitHub, Python.
  - Active Module: Introduction to Software Engineering.

---

## 5. Contact & Call to Action
**Heading:** "Let's Build Reliable Cloud Infrastructure Together"
**Subheading:** "Actively seeking Junior Cloud / DevOps Engineer roles, internships, and collaborative cloud projects."
**Value Proposition:**
"I bring certified fundamentals across Google Cloud Platform, IBM DevOps & Agile methodologies, coupled with an eager, continuous learning mindset. Whether you are scaling containerized microservices or streamlining CI/CD pipelines, I am excited to contribute."
**Primary Action:** Send an Email / Connect on LinkedIn / View GitHub Repositories.
`;
