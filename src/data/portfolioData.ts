import { ExperienceRole, Project } from '../types';

export const PERSONAL_INFO = {
  name: 'Kumar Guddepogu',
  title: 'Software Architect & Backend Engineer',
  specialization: 'High-throughput Python backends, distributed microservices, TypeScript interfaces, and telecom-grade cloud automation',
  location: 'Toronto, ON, Canada',
  authorization: 'Canadian Permanent Resident (Unrestricted Work Rights)',
  experienceYears: '5+ Years',
  email: 'kumar.guddepogu@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  availability: 'Available immediately for Senior Backend / Architect roles',
  logoUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1XEsEGATPJPEh8wGpv86oRMZJXvcZYSQehmXRrVycFmvEmZ5BKXDnt6D9sKwjcZLbZizSo2bwDtrZb2rkrhGHbQv1JQy99Xr45EsyibUUbd-ms1R-kX89nZ0z5fgCrFZ7vnTt5kYCxh-mfX341s3K3X7yMKlGq5GlP8bmiPNvApmt0Nrp5Ws9OGncF3D-iu3Bob3BGRZNupcpROWeJuMAbvdMvL8WvqJ2NlUd_5mwmvw35C29k_o8_gWEE',
  avatarUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VyBrroGtXLawRqrkVm-DVDtLSpmdicXuTV8pj2YJLzD4PguTR7-XMnTXRDd8ImcM5J2tbG2lnEeeZ4BI_Xchaoor3Jhw0WiibmdNPEFxcq3Cbr2yH5ybztt51taV13rWG0QuXraJm5r2AwmEQpgo83u4DmnXgKSFKY-fWmqCsp0ZoBxUpDCeSfDp6bK_tmxhTNMChUd2O2akiX7HG3MUgEiuW9Y-Jni-2QnMXD9M0OwwUCI8WLVcpcxg',
  datacenterPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBezESw2JTigh8QP5XgaSlSUNIMqjYEH7MVE60Q1c8I4OLHt3bRbqvxGiS22RNoRt9ksF0frCjeeVIl54HYMqvdroE3UXRiKB0X86RUop5H5-TrJUocIAwQ4neoVNCGfX9UJLudKBbs2j3wDHyp4lKQzW-NMpMuKAOwJ8IOQk7CuJ6ogzzyhAMPBLC3Lk2_MrLh0yqWsQgT5bVbHuarQEr-V6NSsr-88K14GH8kGIa26QBzdAj026bm',
  workspacePhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl7dVOpv_IViEnLKswO2cBZhjZaGhxY3zBdwjqe1DJaEYKtaoXdJEFV9BHNgyH06wO6b0cgjTrU61RPLMFu7apnW-vrF_x1D9WRzBVcAOeiYCPRZPOB6-9soKAnEDRbXT8F1TIAWeFWkAZYfd40G9Cgxggi-zXHjJPOalKR_CYyYyMZVgO0d52qnpCVy2TCxbWpw5-gmGZf7kMYPsBXArwbpAcvzpxuDcC2Dpjy-lo-GMMhBweZtBo'
};

export const PROJECTS: Project[] = [
  {
    id: 'rogers-automation',
    title: 'Automating 322+ Multi-Vendor Routers across Rogers Communications Core Clusters',
    category: 'Telecom Edge Infrastructure',
    tagline: 'High-concurrency Python automation replacing manual configurations with validated idempotent state loops',
    description: 'Architected and deployed a hardened Python automation suite executing asynchronous command workflows across distributed edge routers (Cisco, Juniper, Nokia). Replaced fragile legacy manual configurations with validated idempotent state loops, slashing turnaround lead times by 78% while eliminating human configuration drift in live national routing segments.',
    longDescription: 'At Rogers Communications, edge network operations relied on manual, vendor-specific CLI configuration scripts susceptible to syntax discrepancies and network state drift. I led the architectural overhaul by building an asynchronous Python daemon leveraging Paramiko, AsyncIO worker pools, and Netmiko abstraction layers. The system validates topological BGP state prior to mutation, performs transactional rollback on failure, and continuously streams optic attenuation metrics into PostgreSQL.',
    featured: true,
    metrics: [
      { label: 'Lead Time Reduction', value: '-78%' },
      { label: 'Audit Traceability', value: '100%' },
      { label: 'SSH Concurrency P99', value: '<50ms' }
    ],
    technologies: ['Python 3.12', 'AsyncIO', 'Paramiko', 'PostgreSQL', 'Docker', 'BGP Telemetry', 'Cisco / Juniper / Nokia'],
    architecturePoints: [
      'Stateless execution engine with distributed redis task lease tokens',
      'Transactional config rollback using multi-vendor checkpoint recovery',
      'Idempotent parameter validation against standardized JSON schemas',
      'Zero-loss structured audit telemetry emitted to timeseries storage'
    ],
    codeSnippet: {
      filename: 'execution_pipeline.log',
      code: `$ ssh-exec --target=core-agg-tor-042 --verify
[00:00:01] Initializing Paramiko async transport session...
[00:00:02] Querying BGP neighbor topology & optic attenuation...
[00:00:03] >> OK [0.042s] • 48/48 TenGig ports synchronized
$ schema-migration --sync-catalog --write-telemetry
[00:00:04] PostgreSQL state recorded: Commit hash 8b3cf17
Pipeline Status: Complete (0 ERRORS)`
    },
    image: PERSONAL_INFO.datacenterPhoto
  },
  {
    id: 'distributed-stream-broker',
    title: 'High-Throughput Asynchronous Ingestion & Telemetry Pipeline',
    category: 'Distributed Systems & Data',
    tagline: 'Decoupled event pipeline processing 45,000 writes/second with sub-second P99 latency guarantees',
    description: 'Engineered a horizontally scalable event ingestion service in Python (FastAPI/AsyncIO) backed by partitioned PostgreSQL tables and Redis stream buffers, designed to absorb unexpected traffic surges without packet drops.',
    longDescription: 'Created a fault-tolerant ingestion topology supporting high-velocity sensor and server telemetry. Integrated backpressure throttling, circuit breakers, and batch insertion routines that achieved a 5x throughput improvement over existing REST API microservices.',
    metrics: [
      { label: 'Ingestion Throughput', value: '45k/s' },
      { label: 'P99 Write Latency', value: '38ms' },
      { label: 'Data Loss Rate', value: '0.00%' }
    ],
    technologies: ['Python 3.12', 'FastAPI', 'Redis Streams', 'PostgreSQL', 'Docker', 'Kafka'],
    architecturePoints: [
      'Bounded memory buffer queues with automatic backpressure signals',
      'Partitioned PostgreSQL tables grouped by monthly timeseries intervals',
      'Distributed worker pooling scaling dynamically based on consumer lag'
    ],
    codeSnippet: {
      filename: 'stream_consumer.py',
      code: `async def consume_event_batch(batch_size: int = 1000):
    async with db_pool.acquire() as conn:
        events = await redis_client.xreadgroup('workers', 'c-1', count=batch_size)
        payloads = [transform(e) for e in events]
        await conn.copy_records_to_table('telemetry_events', records=payloads)
        await redis_client.xack('telemetry_stream', 'workers', *[e.id for e in events])`
    }
  },
  {
    id: 'optic-telemetry-engine',
    title: 'Automated Port Health & Fiber Attenuation Detection Suite',
    category: 'Network Edge Automation',
    tagline: 'Continuous diagnostic monitor across 50,000+ switch interfaces with proactive degradation alerts',
    description: 'Built a lightweight polling daemon that gathers optical power levels (dBm), temperature, and CRC error counters from tens of thousands of physical optic transceivers, detecting physical line degradation before outage occurrence.',
    longDescription: 'By employing non-blocking asynchronous socket polls and mathematical statistical outlier algorithms, this service eliminated undetected gradual fiber degradation. Teams are now notified days in advance of physical link failures.',
    metrics: [
      { label: 'Monitored Optic Ports', value: '50,000+' },
      { label: 'Proactive Alert Accuracy', value: '96.4%' },
      { label: 'MTTR Improvement', value: '4.2x' }
    ],
    technologies: ['Python', 'AsyncIO', 'SNMPv3', 'NumPy', 'TimescaleDB', 'Grafana'],
    architecturePoints: [
      'Lightweight polling micro-daemon with strictly bounded CPU usage (<3%)',
      'Polynomial trend extrapolation predicting link failure thresholds',
      'Automated Jira and PagerDuty incident generation with exact fiber port IDs'
    ]
  },
  {
    id: 'enterprise-auth-gateway',
    title: 'Zero-Trust API Gateway & RBAC Token Dispatcher',
    category: 'Security & Microservices',
    tagline: 'Cryptographically signed token evaluation with microsecond cache validation',
    description: 'Designed an enterprise API gateway service that handles authentication, rate limiting, and RBAC policy enforcement across 24 internal microservices with strict sub-10ms response budgets.',
    longDescription: 'Implemented an asynchronous middleware layer enforcing JWT verification, distributed sliding-window rate limiting via Redis, and fine-grained resource permissions according to enterprise compliance standards.',
    metrics: [
      { label: 'Evaluation Overhead', value: '<4ms' },
      { label: 'Daily Handled Calls', value: '18M+' },
      { label: 'Policy Coverage', value: '100%' }
    ],
    technologies: ['Python', 'FastAPI', 'TypeScript', 'Redis Cluster', 'OAuth2/OIDC', 'Docker'],
    architecturePoints: [
      'Sliding window token bucket rate limiting executed via Redis Lua scripts',
      'JWKS caching with automated key rotation and graceful fallbacks',
      'Context propagation via gRPC metadata headers across backend nodes'
    ]
  }
];

export const EXPERIENCES: ExperienceRole[] = [
  {
    id: 'rogers',
    company: 'Rogers Communications',
    role: 'Senior Software Architect / Automation Lead',
    period: '2022 — Present',
    location: 'Toronto, ON, Canada',
    type: 'Full-Time',
    description: 'Led core network automation and architectural modernization across Rogers telecommunications infrastructure. Spearheaded the transition from manual, error-prone switch/router configurations to scalable, code-driven asynchronous orchestration platforms.',
    achievements: [
      'Architected and implemented Python AsyncIO automation frameworks managing 322+ multi-vendor core routing nodes across nationwide clusters.',
      'Slashing configuration provisioning turnaround times by 78%, dropping lead times from hours to minutes while maintaining 100% audit compliance.',
      'Built telemetry pipelines capturing interface health across 50,000+ switch ports with real-time alerting and PostgreSQL persistence.',
      'Mentored a team of 8 backend and DevOps engineers in defensive programming, strict typing, and test-driven architecture.'
    ],
    technologies: ['Python 3.12', 'AsyncIO', 'Paramiko', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'CI/CD Pipelines'],
    metrics: [
      { label: 'Routers Automated', value: '322+' },
      { label: 'Provisioning Speedup', value: '78%' },
      { label: 'SLA Guarantee', value: '99.98%' }
    ],
    highlight: 'Flagship enterprise delivery impacting national telecom infrastructure reliability.'
  },
  {
    id: 'distributed-cloud',
    company: 'Enterprise Cloud Technologies',
    role: 'Senior Backend Engineer / Systems Architect',
    period: '2020 — 2022',
    location: 'Toronto, ON, Canada',
    type: 'Full-Time',
    description: 'Architected high-throughput REST and gRPC microservices for data-intensive enterprise platforms. Optimized PostgreSQL query performance, designed schema migration strategies, and built containerized CI/CD deployment pipelines.',
    achievements: [
      'Engineered an event-driven data ingestion pipeline processing 30M+ daily events with sub-50ms P99 latency.',
      'Refactored legacy monolith endpoints into decoupled FastAPI microservices, reducing cloud server compute spend by 34%.',
      'Designed transactional database migration harnesses ensuring zero downtime during major relational schema updates.',
      'Established engineering standards for automated linting, test coverage (>90%), and vulnerability container scans.'
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'AWS EC2 / S3', 'Docker', 'Redis', 'GitHub Actions'],
    metrics: [
      { label: 'Daily Events', value: '30M+' },
      { label: 'Compute Cost', value: '-34%' },
      { label: 'Test Coverage', value: '92%' }
    ],
    highlight: 'Achieved 99.99% uptime for core database and microservice clusters.'
  },
  {
    id: 'fintech-solutions',
    company: 'Precision Systems Global',
    role: 'Full-Stack Software Engineer',
    period: '2018 — 2020',
    location: 'Toronto, ON',
    type: 'Full-Time',
    description: 'Developed full-stack web applications and robust backend APIs for enterprise data analytics. Built interactive TypeScript dashboards and integrated secure transaction processing engines.',
    achievements: [
      'Developed responsive, high-performance web applications using modern TypeScript and Python Django REST framework.',
      'Designed SQL relational schemas, stored procedures, and index strategies across SQL Server and MySQL.',
      'Integrated third-party banking and analytics APIs with resilient error recovery and idempotency checks.'
    ],
    technologies: ['TypeScript', 'JavaScript', 'Python', 'Django', 'PostgreSQL', 'MySQL', 'Bootstrap', 'REST APIs'],
    metrics: [
      { label: 'APIs Built', value: '40+' },
      { label: 'P99 Latency', value: '<80ms' },
      { label: 'Bugs in Prod', value: '<0.1%' }
    ],
    highlight: 'Built scalable foundations used by over 100,000 active business users.'
  }
];

export const SKILL_CATEGORIES = [
  {
    id: '01',
    name: 'Core Languages',
    description: 'Polyglot foundation with primary architectural depth in Python and TypeScript.',
    skills: ['Python 3.12', 'TypeScript', 'JavaScript', 'SQL (ANSI)', 'Java', 'PHP'],
    badge: 'Primary Focus: Python AsyncIO',
    icon: 'code'
  },
  {
    id: '02',
    name: 'Full-Stack & Web',
    description: 'Production web frameworks for decoupled architectures and microservices.',
    skills: ['Django / DRF', 'FastAPI', 'Flask', 'RESTful APIs', 'HTML5 & CSS3', 'Bootstrap'],
    badge: 'REST API Spec 3.0 Standard',
    icon: 'layers'
  },
  {
    id: '03',
    name: 'Data & Cloud Infra',
    description: 'High-volume storage engines, schema design, and declarative pipelines.',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Oracle DB', 'AWS / EC2', 'Docker', 'GitHub Actions'],
    badge: 'Automated CI/CD Containers',
    icon: 'database'
  },
  {
    id: '04',
    name: 'AI/ML & Automation',
    description: 'Machine learning workflows, mathematical analytics, and remote host drivers.',
    skills: ['PyTorch', 'Scikit-Learn', 'TensorFlow', 'Pandas / NumPy', 'Paramiko', 'SSH Automation'],
    badge: 'Fleet Automation Protocols',
    icon: 'smart_toy'
  }
];

export const TERMINAL_FILES: Record<string, { filename: string; language: string; content: string; status: string; output: string }> = {
  'kumar_daemon.py': {
    filename: 'kumar_daemon.py',
    language: 'python',
    status: 'ASYNC_ACTIVE',
    content: `// Production Enterprise Daemon Initializer
import asyncio, telemetry, infra_core
from automation.engine import NetworkProvisioner

// Profile metadata
class EngineerProfile:
    name: "Kumar Guddepogu"
    role: "Software Architect"
    region: "Toronto, ON (PR Holder)"
    throughput: "322+ Core Nodes"

// Real-time cluster health check
async def verify_cluster_sla():
    telemetry.stream("0.042s P99 latency")
    return {"status": "OPTIMAL", "uptime": 99.98}`,
    output: `DIAGNOSTIC TRACE PASSED | PID: 8094
> SLA Check: 99.98% valid  sys_mem: 184MB
> Microservices: 24/24 Online • Latency: 24ms`
  },
  'execution_pipeline.log': {
    filename: 'execution_pipeline.log',
    language: 'shell',
    status: 'LIVE_TRACE',
    content: `$ ssh-exec --target=core-agg-tor-042 --verify
[00:00:01] Initializing Paramiko async transport session...
[00:00:02] Querying BGP neighbor topology & optic attenuation...
[00:00:03] >> OK [0.042s] • 48/48 TenGig ports synchronized
$ schema-migration --sync-catalog --write-telemetry
[00:00:04] PostgreSQL state recorded: Commit hash 8b3cf17
Pipeline Status: Complete [0 ERRORS]`,
    output: `[SUCCESS] 322/322 routing nodes in synchronized state.
All audit hashes committed to PostgreSQL.`
  },
  'cluster_health.py': {
    filename: 'cluster_health.py',
    language: 'python',
    status: 'OPTIMAL',
    content: `import psycopg2, redis, asyncio

async def probe_cluster_telemetry():
    pool = await redis.create_pool("redis://cluster.edge:6379")
    latency = await pool.ping()
    db_conn = psycopg2.connect("dbname=telemetry_core user=architect")
    with db_conn.cursor() as cur:
        cur.execute("SELECT count(*) FROM edge_nodes WHERE status='ONLINE';")
        active_nodes = cur.fetchone()[0]
    return {"active_nodes": active_nodes, "latency_ms": 24}`,
    output: `Active nodes: 322/322 | Redis cluster ping: 1.2ms
PostgreSQL pool health: 100%`
  }
};
