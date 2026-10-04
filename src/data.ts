export type Experience = {
  company: string
  role: string
  period: string
  location?: string
  summary: string
  achievements: string[]
  stack: string[]
  progression?: string
  initiative?: {
    name: string
    description: string
    areas: string[]
  }
}

export type Project = {
  id: string
  index: string
  title: string
  category: string
  filter: string
  tier: 'featured' | 'additional'
  context: 'Professional work' | 'Engineering project' | 'Learning project'
  summary: string
  problem: string
  approach: string
  architecture: string[]
  stack: string[]
  impact: string
  challenges: string
  outcome: string
  learned: string
  details?: string[]
  link?: { label: string; url: string }
}

export const metrics = [
  { value: '18', label: 'Data marts delivered' },
  { value: '15K+', label: 'Collaboration records processed' },
  { value: '15', label: 'Automated weekly workflows' },
  { value: '500+', label: 'International collaborations tracked' },
]

export const experiences: Experience[] = [
  {
    company: 'BINUS University',
    role: 'Data Engineer',
    period: 'Oct 2025 — Present',
    location: 'Jakarta, Indonesia',
    summary:
      'Developing institutional data infrastructure for research analytics, university rankings, competitor benchmarking, automated reporting, and AI-assisted data access.',
    achievements: [
      'Leading the BIRA AI Agent initiative to help 90+ employees access institutional insights through a conversational interface.',
      'Designed 18 analytical data marts powering 10 real-time charts, with research metrics available in approximately 5 seconds.',
      'Automated a weekly pipeline tracking 500+ international university collaborations across 15,000+ records and 35+ countries at approximately 99% accuracy.',
      'Built an Airflow DAG framework automating approximately 80% of previously manual operations and orchestrating 15 recurring weekly tasks.',
      'Reduced repetitive engineering work by an estimated 50+ hours per month while improving the reliability of publication, citation, affiliation, subject-area, and ranking datasets.',
      'Partnered with Data Analysts and institutional stakeholders to translate analytical needs into scalable data products.',
    ],
    stack: ['Python', 'SQL', 'Airflow', 'MySQL', 'PostgreSQL', 'Docker', 'Selenium', 'FastAPI', 'pgvector', 'Qdrant', 'Tableau', 'Metabase'],
    initiative: {
      name: 'BIRA AI Agent · Data Platform Initiative',
      description:
        'Exploring grounded conversational access to institutional information through reliable source routing across documents and structured databases.',
      areas: ['RAG', 'Multi-source routing', 'Vector search', 'Entra ID', 'Document ingestion', 'MCP exploration'],
    },
  },
  {
    company: 'Pelindo Solusi Digital',
    role: 'Data Engineer',
    period: 'Apr 2025 — Oct 2025',
    progression: 'IT / Application Support → Data Engineer',
    summary:
      'Moved internally into Data Engineering, building real-time IoT pipelines and operational analytics for port environments.',
    achievements: [
      'Developed a real-time IoT pipeline with Spark Structured Streaming, transforming continuous sensor events into analytics-ready datasets.',
      'Embedded automated data-quality validation into the streaming flow, reaching approximately 90% data accuracy.',
      'Deployed a YOLO-based detection system for 8 vehicle categories with approximately 95% detection accuracy at port entry points.',
      'Built 3 live Metabase dashboards used by 15+ stakeholders to monitor congestion and operational road conditions.',
    ],
    stack: ['Python', 'Apache Spark', 'Structured Streaming', 'PySpark', 'Airflow', 'MongoDB', 'Docker', 'Metabase', 'YOLO'],
  },
  {
    company: 'Pelindo Solusi Digital',
    role: 'IT / Application Support',
    period: 'Aug 2022 — Apr 2025',
    summary:
      'Built the production-systems foundation for a move into Data Engineering through application ownership, database investigation, and operational SQL.',
    achievements: [
      'Maintained and improved internal business applications while supporting approximately 99.5% application uptime.',
      'Sustained weekly SLA performance above 95% through disciplined issue documentation and resolution.',
      'Used CTEs, joins, subqueries, extraction, validation, and data manipulation to investigate production issues.',
      'Resolved 50+ application and data issues, contributing to an estimated 20% improvement in user satisfaction.',
    ],
    stack: ['SQL', 'Oracle', 'PostgreSQL', 'PHP', 'Laravel', 'CodeIgniter', 'REST APIs', 'SOAP', 'Postman'],
  },
  {
    company: 'Telkom Indonesia',
    role: 'Backend Developer Intern',
    period: 'Sep 2022 — Feb 2023',
    summary:
      'Developed a web-based employee performance application in a microservices-oriented environment.',
    achievements: [
      'Collaborated with System Analysts to design database structures for employee performance data.',
      'Built and documented REST APIs used by web and mobile clients, coordinating integrations across engineering teams.',
    ],
    stack: ['PHP', 'CodeIgniter', 'MySQL', 'REST API', 'Jenkins', 'RabbitMQ'],
  },
]

export const careerStages = [
  { year: '2022', title: 'Software Engineering', note: 'Backend & application foundations' },
  { year: '2022—25', title: 'Production Systems + SQL', note: 'Operations, databases & reliability' },
  { year: '2025', title: 'Data Engineering', note: 'Pipelines, streaming & quality' },
  { year: '2025—Now', title: 'Modern Data Platforms', note: 'Automation, marts & analytics' },
  { year: '2026+', title: 'AI-enabled Data Systems', note: 'Grounded access to enterprise data' },
]

export const featuredProjects: Project[] = [
  {
    id: 'bira-ai-agent', index: '01', title: 'BIRA AI Agent', category: 'AI Engineering / Data Platform', filter: 'AI / RAG', tier: 'featured', context: 'Professional work',
    summary: 'A conversational architecture for governed access to institutional documents and structured data.',
    problem: 'Institutional information is distributed across documents, databases, dashboards, and disconnected data sources, creating friction for non-technical users.',
    approach: 'Built a FastAPI-centered architecture with authentication, intent routing, document retrieval, structured database access, and grounded LLM responses. MCP remains an active architectural exploration rather than a production claim.',
    architecture: ['User', 'Chat interface', 'FastAPI', 'Auth + source router', 'RAG / structured DB', 'Grounded response'],
    stack: ['FastAPI', 'PostgreSQL', 'pgvector', 'Qdrant', 'Docker', 'OpenAI', 'Gemini', 'Ollama', 'n8n'],
    impact: 'Designed to make institutional insight self-service for 90+ employees.',
    challenges: 'Routing questions to the right source, preserving authorization boundaries, handling follow-up context, and keeping generated answers grounded.',
    outcome: 'Established a practical path for joining reliable data access with conversational AI while maintaining explicit source boundaries.',
    learned: 'Grounded AI systems depend as much on data contracts, access control, routing, and observability as they do on model capability.',
    details: ['PDF / DOCX / XLSX ingestion', 'Chunking and embeddings', 'Multi-source retrieval', 'Role-based access', 'Microsoft Entra ID authentication'],
  },
  {
    id: 'researchview-platform', index: '02', title: 'ResearchView Data Platform', category: 'Data Engineering', filter: 'Data Engineering', tier: 'featured', context: 'Professional work',
    summary: 'Automated institutional research analytics from external ingestion through analytical data marts.',
    problem: 'Research and university-ranking updates depended on fragmented scripts and recurring manual work.',
    approach: 'Designed scheduled ingestion, validation, staging, SQL transformation, and serving layers for research and benchmarking analytics.',
    architecture: ['External sources', 'Python / Selenium', 'Validation + staging', 'SQL transforms', '18 data marts', 'Tableau'],
    stack: ['Python', 'SQL', 'Apache Airflow', 'MySQL', 'Selenium', 'Docker', 'Linux', 'Tableau'],
    impact: '18 marts · 10 charts · 15K+ records · 35+ countries · 15 weekly tasks.',
    challenges: 'Normalizing external research entities, maintaining recurring ingestion, and translating stakeholder metrics into stable analytical models.',
    outcome: 'Reduced manual effort and made research, citation, collaboration, publication, and ranking metrics consistently available for analysis.',
    learned: 'Reliable analytical products emerge from disciplined validation, repeatable orchestration, and business-readable data models.',
    details: ['Journal quartiles and percentiles', 'Citation metrics', 'International collaboration', 'Publication classification', 'University benchmarking'],
  },
  {
    id: 'spark-kafka-streaming', index: '03', title: 'Real-Time Stream Processing', category: 'Streaming Data Engineering', filter: 'Streaming', tier: 'featured', context: 'Engineering project',
    summary: 'An event-driven pipeline for continuous ingestion, transformation, and aggregation with Kafka and Spark.',
    problem: 'Batch-oriented patterns cannot provide low-latency transformation for continuously arriving events.',
    approach: 'Implemented a producer-to-Kafka-to-Spark flow using Structured Streaming transformations and aggregations before emitting processed data.',
    architecture: ['Producer', 'Apache Kafka', 'Spark Streaming', 'Transform + aggregate', 'Processed data'],
    stack: ['Apache Kafka', 'Apache Spark', 'Spark Structured Streaming'],
    impact: 'Demonstrates the core mechanics of scalable, event-driven processing.',
    challenges: 'Reasoning about continuous state, aggregation windows, event flow, and processing boundaries.',
    outcome: 'A working reference architecture for continuous stream ingestion and transformation.',
    learned: 'Stream processing requires a different mental model from batch ETL: time, state, and delivery semantics become first-class concerns.',
  },
  {
    id: 'pyspark-retention', index: '04', title: 'Big Data Analytics with PySpark', category: 'Big Data / Data Engineering', filter: 'Data Engineering', tier: 'featured', context: 'Engineering project',
    summary: 'A distributed customer-retention analytics workflow orchestrated as a repeatable batch pipeline.',
    problem: 'Customer-retention analysis needs scalable transformation when source datasets outgrow single-machine workflows.',
    approach: 'Orchestrated batch ingestion with Airflow, applied distributed PySpark transformations, and persisted modeled results to PostgreSQL.',
    architecture: ['Source data', 'Airflow', 'Batch ETL', 'PySpark', 'PostgreSQL', 'Analytics'],
    stack: ['PySpark', 'Apache Spark', 'Apache Airflow', 'PostgreSQL'],
    impact: 'Connects orchestration, distributed processing, persistence, and business analysis in one workflow.',
    challenges: 'Designing transformation stages that remain clear and efficient in a distributed execution model.',
    outcome: 'Produced analytics-ready retention data through a reproducible big-data workflow.',
    learned: 'Distributed compute is most useful when data layout, transformation boundaries, and orchestration are designed together.',
  },
  {
    id: 'dynamic-airflow-etl', index: '05', title: 'Dynamic ETL with Airflow', category: 'Data Engineering', filter: 'Data Engineering', tier: 'featured', context: 'Engineering project',
    summary: 'Reusable dynamic DAG generation for scheduled employee-data transformation and loading.',
    problem: 'Repeated ETL patterns become difficult to maintain when every dataset requires a hand-written DAG.',
    approach: 'Created reusable pipeline components and dynamic workflow generation to standardize extraction, transformation, scheduling, and loading.',
    architecture: ['Source', 'Extract', 'Dynamic Airflow DAG', 'Transform', 'PostgreSQL'],
    stack: ['Apache Airflow', 'PostgreSQL', 'Data Modeling'],
    impact: 'Demonstrates maintainable orchestration through composable pipeline definitions.',
    challenges: 'Balancing dynamic configuration with readable task graphs and predictable failure handling.',
    outcome: 'A scalable ETL pattern for processing related datasets without duplicating orchestration code.',
    learned: 'Good orchestration abstractions reduce repetition without hiding operational behavior.',
  },
  {
    id: 'amazon-dbt-bigquery', index: '06', title: 'Amazon Sales Warehouse', category: 'Analytics Engineering', filter: 'Analytics Engineering', tier: 'featured', context: 'Engineering project',
    summary: 'A dimensional sales warehouse modeled with maintainable dbt transformations in BigQuery.',
    problem: 'Raw transaction data is not structured for consistent reporting or reusable analytical queries.',
    approach: 'Organized raw data into transformation layers and modeled dimensions and facts with dbt on BigQuery.',
    architecture: ['Raw sales data', 'BigQuery', 'dbt transforms', 'Dimensions + facts', 'Analytics model'],
    stack: ['dbt', 'Google BigQuery', 'SQL', 'Dimensional Modeling'],
    impact: 'Turns source-level sales data into a governed, analytics-ready semantic structure.',
    challenges: 'Choosing grain, separating facts and dimensions, and keeping transformations modular and testable.',
    outcome: 'Delivered a maintainable cloud warehouse model for repeatable sales analysis.',
    learned: 'Analytics engineering creates leverage by making data definitions reusable, testable, and close to the business language.',
  },
]

export const additionalProjects: Project[] = [
  { id: 'sneaker-scraping', index: '07', title: 'Sneaker Product Scraping', category: 'Data Collection', filter: 'Data Engineering', tier: 'additional', context: 'Learning project', summary: 'Automated collection of sneaker product information for downstream pricing and market analysis.', problem: 'Product data required repeatable extraction from web sources.', approach: 'Combined browser automation and HTTP extraction to gather structured product details.', architecture: ['Web sources', 'Selenium / Requests', 'Parse', 'Structured data'], stack: ['Python', 'Selenium', 'Requests', 'HTML'], impact: 'Created a repeatable source dataset for later analysis.', challenges: 'Handling page structure and consistent field extraction.', outcome: 'Produced structured product records from web pages.', learned: 'Collection pipelines need resilient selectors and clear downstream schemas.' },
  { id: 'customer-retention', index: '08', title: 'Customer Retention Analysis', category: 'Data Analytics', filter: 'Data Analytics', tier: 'additional', context: 'Learning project', summary: 'Cohort analysis of online retail behavior across customer lifecycle stages.', problem: 'Retention patterns were not visible in raw transactions.', approach: 'Cleaned transactions, formed customer cohorts, and visualized retention over time.', architecture: ['Transactions', 'Cleaning', 'Cohorts', 'Retention matrix'], stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'], impact: 'Revealed customer return patterns by cohort.', challenges: 'Defining valid customer and cohort dates.', outcome: 'Produced a lifecycle-focused view of customer behavior.', learned: 'Cohort framing can make longitudinal behavior far clearer than aggregate totals.' },
  { id: 'sms-spam', index: '09', title: 'SMS Spam Detection', category: 'Machine Learning', filter: 'Machine Learning', tier: 'additional', context: 'Learning project', summary: 'A Flask application classifying SMS messages with TF-IDF and Logistic Regression.', problem: 'Users need a lightweight way to classify unwanted SMS messages.', approach: 'Built a preprocessing, TF-IDF, Logistic Regression, and prediction pipeline exposed through a Flask interface and evaluated with a confusion matrix.', architecture: ['SMS', 'Preprocess', 'TF-IDF', 'Logistic Regression', 'Prediction'], stack: ['Python', 'Flask', 'TF-IDF', 'Logistic Regression'], impact: 'Portfolio records report approximately 97.8% testing performance.', challenges: 'Transforming language into stable model features and evaluating class-level errors.', outcome: 'Delivered an end-to-end text classification web application.', learned: 'Model performance must be paired with interpretable error analysis.', link: { label: 'Read publication', url: 'https://doi.org/10.34148/teknika.v11i2.466' } },
  { id: 'ecommerce-dashboard', index: '10', title: 'E-Commerce Dashboard', category: 'Business Intelligence', filter: 'Visualization', tier: 'additional', context: 'Learning project', summary: 'Interactive analysis of sales, transactions, products, categories, and customer demographics.', problem: 'Commercial metrics were distributed across raw spreadsheet data.', approach: 'Modeled core measures and assembled a navigable reporting view.', architecture: ['Google Sheets', 'Modeled metrics', 'Looker Studio'], stack: ['Looker Studio', 'Google Sheets', 'Data Visualization'], impact: 'Unified key e-commerce indicators in one reporting surface.', challenges: 'Keeping definitions consistent across dashboard views.', outcome: 'Created an interactive overview for business performance analysis.', learned: 'Effective dashboards privilege decision context over chart volume.' },
  { id: 'covid-dashboard', index: '11', title: 'COVID-19 Indonesia Dashboard', category: 'Data Visualization', filter: 'Visualization', tier: 'additional', context: 'Learning project', summary: 'Interactive Tableau analysis of cases, recoveries, fatalities, hotspots, and time trends.', problem: 'Regional pandemic metrics needed geographic and temporal context.', approach: 'Cleaned public health data and designed linked regional and time-series views.', architecture: ['Source data', 'Cleaning', 'Tableau', 'Interactive views'], stack: ['Tableau', 'Data Cleaning', 'Data Visualization'], impact: 'Made regional hotspots and trend changes easier to explore.', challenges: 'Aligning location and time dimensions across measures.', outcome: 'Delivered a focused public-health visualization experience.', learned: 'Geographic and temporal views work best when they share consistent filters.' },
  { id: 'retail-eda', index: '12', title: 'Online Retail Sales EDA', category: 'Data Analytics', filter: 'Data Analytics', tier: 'additional', context: 'Learning project', summary: 'Exploratory analysis of sales patterns, customer behavior, and transactional trends.', problem: 'Raw sales records obscured useful behavioral patterns.', approach: 'Cleaned, aggregated, profiled, and visualized transaction data.', architecture: ['Transactions', 'Cleaning', 'EDA', 'Insights'], stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'], impact: 'Surfaced patterns suitable for deeper commercial analysis.', challenges: 'Separating valid signals from data-quality artifacts.', outcome: 'Created an evidence-based overview of retail activity.', learned: 'Exploration is most useful when every chart answers a concrete business question.' },
  { id: 'seattle-airbnb', index: '13', title: 'Seattle Airbnb Analytics', category: 'Data Visualization', filter: 'Visualization', tier: 'additional', context: 'Learning project', summary: 'A Tableau dashboard exploring pricing, occupancy, property types, and high-demand locations.', problem: 'Listing data needed a clearer view of geographic demand and price variation.', approach: 'Cleaned listing data and designed connected market, property, and location views.', architecture: ['Listings', 'Cleaning', 'Tableau', 'Market views'], stack: ['Tableau', 'Data Cleaning', 'Data Visualization'], impact: 'Made neighborhood-level patterns easier to compare.', challenges: 'Balancing map detail with readable market summaries.', outcome: 'Created an interactive view of Seattle listing dynamics.', learned: 'Location analytics becomes more useful when geography is paired with clear comparative measures.' },
  { id: 'bike-sales', index: '14', title: 'Bike Sales Analysis', category: 'Data Analytics', filter: 'Data Analytics', tier: 'additional', context: 'Learning project', summary: 'Interactive reporting on customer distribution, market trends, and sales patterns.', problem: 'Sales records needed a compact view for comparing buyer segments.', approach: 'Prepared spreadsheet data and assembled interactive summaries.', architecture: ['Sales data', 'Excel model', 'Interactive report'], stack: ['Microsoft Excel', 'Data Analysis', 'Data Visualization'], impact: 'Condensed customer and sales signals into an accessible report.', challenges: 'Designing useful segmentation from limited source dimensions.', outcome: 'Delivered a reusable sales-analysis workbook.', learned: 'Strong data communication does not depend on a complex toolchain.' },
  { id: 'amazon-scraping', index: '15', title: 'Amazon Product Scraping', category: 'Data Collection', filter: 'Data Engineering', tier: 'additional', context: 'Learning project', summary: 'Python workflow extracting product titles, prices, and metadata with BeautifulSoup.', problem: 'Product information needed to be converted from HTML into a consistent dataset.', approach: 'Fetched and parsed product pages into structured records.', architecture: ['Product pages', 'BeautifulSoup', 'Parse fields', 'Dataset'], stack: ['Python', 'BeautifulSoup', 'HTML'], impact: 'Created a structured base for product analysis.', challenges: 'Handling missing values and inconsistent page structures.', outcome: 'Automated a repeatable product-data collection flow.', learned: 'Downstream analysis quality starts with explicit extraction and missing-data rules.' },
]

export const allProjects = [...featuredProjects, ...additionalProjects]

export const skillGroups = [
  { title: 'Core Data Engineering', items: ['Python', 'SQL', 'Apache Airflow', 'Apache Spark', 'PySpark', 'ETL / ELT', 'Data Pipelines', 'Data Modeling', 'Data Warehousing', 'Data Marts'] },
  { title: 'Streaming & Integration', items: ['Apache Kafka', 'Spark Structured Streaming', 'REST APIs', 'Web Scraping', 'Selenium'] },
  { title: 'Databases & Storage', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'BigQuery', 'pgvector', 'Qdrant'] },
  { title: 'Analytics Engineering', items: ['dbt', 'Dimensional Modeling', 'Fact & Dimension Modeling', 'Data Quality'] },
  { title: 'AI Engineering', items: ['RAG', 'LLM Applications', 'AI Agents', 'Embeddings', 'Vector Search', 'OpenAI', 'Gemini', 'Ollama', 'MCP'] },
  { title: 'Infrastructure & BI', items: ['Docker', 'Linux', 'Nginx', 'Git', 'GitHub', 'Tableau', 'Metabase', 'Looker Studio'] },
]
