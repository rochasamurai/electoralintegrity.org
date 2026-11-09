// Editorial content for ELIS Website v2.0. Public descriptions only.
// Internal materials, embargoed research and unsupported impact claims are excluded.
const links = {
  atlas: 'https://atlas-brazil-2026.electoralintegrity.org/',
  protocol: 'https://github.com/elis-core/elections-brazil-2026',
  platform: 'https://github.com/elis-core/elis-core',
  site: 'https://github.com/rochasamurai/electoralintegrity.org'
};
const en = {
  lang:'en-GB', code:'en', other:'pt', otherLabel:'Português', otherPath:'/pt/',
  skip:'Skip to content', menu:'Menu', home:'Home', research:'Research', technology:'AI & Technology',
  publications:'Publications & Impact', partnerships:'Partnerships & Support', about:'About ELIS', contact:'Contact',
  eyebrow:'INDEPENDENT RESEARCH · RESPONSIBLE AI · PUBLIC KNOWLEDGE',
  headline:'Research that can be examined. AI that can be governed.',
  intro:'ELIS develops evidence-led research and practical technologies for electoral integrity, transparent data analysis and responsible use of artificial intelligence in research and education.',
  heroPrimary:'Explore our research', heroSecondary:'Partner with ELIS',
  areasTitle:'Our research and innovation programmes',
  areasIntro:'Distinct research programmes, connected by open methods, traceability and critical review.',
  areas:[
    {title:'AI for Research',description:'Multi-agent AI systems for reproducible research, governance and independent validation.',icon:'ai'},
    {title:'Evidence & Scientific Methods',description:'Systematic literature reviews and methods to assess public evidence and verifiability.',icon:'book'},
    {title:'Electoral Data Science',description:'Statistical research, historical comparisons and transparent treatment of uncertainty.',icon:'chart'},
    {title:'Open Tools & Public Engagement',description:'Accessible research tools and communication that help people examine evidence.',icon:'globe'}
  ],
  projectsTitle:'Research and projects', projectsIntro:'Current work, with its maturity and limitations clearly identified. Projects may use more than one code repository.',
  labels:{development:'In development',research:'Research in progress',validation:'Under validation',experimental:'Experimental',infrastructure:'Supporting infrastructure'},
  projects:[
    {id:'ai',title:'ELIS Multi-Agent AI Platform',tag:'development',description:'A platform where specialised AI agents undertake research and engineering tasks, with independent review and human oversight. Some execution components exist; the complete target architecture remains in development.',need:'Independent testing, compute and research collaborators.',url:links.platform,urlLabel:'ELIS Core repository'},
    {id:'slr',title:'Systematic Literature Review',tag:'research',description:'A structured review of scientific evidence on electoral integrity strategies, supported by reproducible search, screening and data processing workflows.',need:'Research assistance, database access and methodological validation.'},
    {id:'framework',title:'ELIS Electoral Evidence Framework',tag:'validation',description:'A developing methodology to assess whether publicly available evidence allows independent verification of officially reported election results. The method is not yet fully validated.',need:'External methodological review and empirical pilots.'},
    {id:'statistics',title:'Brazil 2026 Statistical Research',tag:'validation',description:'Pre-registered statistical research comparing Brazilian elections with historical data. Its methods distinguish unusual statistical patterns from conclusions about their causes; final findings require independent verification.',need:'Statistical review, reproducibility checks and research computing.',url:links.protocol,urlLabel:'Public publication commitment'},
    {id:'atlas',title:'Atlas Eleitoral',tag:'experimental',description:'A public, evolving explorer of Brazilian election results, with geographic filters, visualisations and historical comparisons. Coverage and results must be checked against the published sources.',need:'Data verification, accessibility testing and hosting.',url:links.atlas,urlLabel:'Open the Atlas'},
    {id:'knowledge',title:'Knowledge & Evidence Management',tag:'experimental',description:'Exploratory tools and practices for recording research decisions, sources, evidence provenance and reusable knowledge across AI-agent workflows.',need:'Knowledge engineering and evaluation.'},
    {id:'data',title:'Electoral Research Data Infrastructure',tag:'infrastructure',description:'Repositories and processes designed to preserve the provenance of sampled electoral data and analysis inputs. The repositories are not presented as complete public datasets.',need:'Reproducible data pipelines, storage and audit support.'}
  ],
  opportunitiesTitle:'Support research with verifiable outcomes',
  opportunitiesIntro:'We welcome discussion with universities, foundations, technology providers and researchers. Support must preserve scientific independence.',
  opportunities:[
    {title:'Research funding',description:'Support researchers, independent validation and open publication.'},
    {title:'Infrastructure',description:'Contribute cloud computing, model access, data services or storage.'},
    {title:'Academic partnerships',description:'Collaborate on methods, replication, peer review and education.'},
    {title:'Dissemination and impact',description:'Help explain evidence and uncertainties through accessible reports and dialogue.'}
  ],
  methodologyTitle:'Our commitments',methodology:[
    {title:'Transparency',description:'Identify sources, assumptions, project status and material limitations.'},
    {title:'Independent verification',description:'Seek critical replication before describing exploratory findings as established.'},
    {title:'Responsible AI',description:'Use human oversight and distinguish implemented capabilities from target designs.'},
    {title:'Scientific independence',description:'Funding and collaboration must not determine research conclusions.'}
  ],
  publicationsTitle:'Publications, resources & impact',publicationsIntro:'Selected public resources. A dedicated publication library will grow as outputs are cleared for release.',
  resources:[{title:'Pre-registered Brazil 2026 study',description:'Public commitments and methodological addenda; not a final findings report.',url:links.protocol},{title:'Atlas Eleitoral',description:'Experimental public election-data explorer.',url:links.atlas},{title:'ELIS Core',description:'Open code and documentation for the multi-agent platform.',url:links.platform}],
  aboutTitle:'About ELIS',aboutText:'ELIS — Electoral Integrity Strategies — is an independent research and technology initiative combining electoral integrity studies, data science and AI-assisted scientific workflows. We publish verified material progressively and distinguish active research from completed findings.',
  affiliation:'Institutional affiliations, academic collaborations and support are described only when their scope and status can be substantiated.',
  contactTitle:'Work with ELIS',contactText:'Tell us which research area interests you and whether you can offer funding, infrastructure, expertise or dissemination support.',
  emailLabel:'Contact the research team', disclaimer:'Research in progress. Descriptions do not imply peer review, completed validation, or proof of any allegation.',
  privacy:'Privacy', privacyText:'For now, enquiries use your own email application. No contact information is collected by this page. Refer to the site privacy notice for other processing.',
  lastUpdated:'Content review: 9 November 2026',legal:'Scientific content is presented with explicit limitations. Project code and documents have their own repository licences.',
  footer:'Independent research, accountable technology, public knowledge.'
};
const pt = {
  lang:'pt-BR', code:'pt', other:'en', otherLabel:'English', otherPath:'/en/',
  skip:'Ir para o conteúdo', menu:'Menu', home:'Início', research:'Pesquisas', technology:'IA e Tecnologia',
  publications:'Publicações e Impacto', partnerships:'Parcerias e Apoio', about:'Sobre o ELIS',contact:'Contato',
  eyebrow:'PESQUISA INDEPENDENTE · IA RESPONSÁVEL · CONHECIMENTO PÚBLICO',
  headline:'Pesquisa verificável. Inteligência artificial responsável.',
  intro:'O ELIS desenvolve pesquisas baseadas em evidências e tecnologias práticas para integridade eleitoral, análise transparente de dados e uso responsável da inteligência artificial na pesquisa e na educação.',
  heroPrimary:'Conheça as pesquisas',heroSecondary:'Seja parceiro do ELIS',
  areasTitle:'Nossos programas de pesquisa e inovação',
  areasIntro:'Programas distintos, conectados por métodos abertos, rastreabilidade e revisão crítica.',
  areas:[
    {title:'IA para Pesquisa',description:'Sistemas multiagentes de IA para pesquisa reproduzível, governança e validação independente.',icon:'ai'},
    {title:'Evidências e Métodos Científicos',description:'Revisões sistemáticas e métodos para avaliar evidências públicas e verificabilidade.',icon:'book'},
    {title:'Ciência de Dados Eleitorais',description:'Pesquisa estatística, comparações históricas e tratamento transparente da incerteza.',icon:'chart'},
    {title:'Ferramentas Abertas e Participação',description:'Ferramentas acessíveis e comunicação que ajudam a sociedade a examinar evidências.',icon:'globe'}
  ],
  projectsTitle:'Pesquisas e projetos',projectsIntro:'Trabalhos em andamento, com estágio e limitações claramente indicados. Um projeto pode utilizar vários repositórios.',
  labels:{development:'Em desenvolvimento',research:'Pesquisa em andamento',validation:'Em validação',experimental:'Experimental',infrastructure:'Infraestrutura de apoio'},
  projects:[
    {id:'ai',title:'ELIS — Plataforma Multiagente de IA',tag:'development',description:'Plataforma na qual agentes especializados de IA realizam tarefas de pesquisa e engenharia, com revisão independente e supervisão humana. Existem componentes implementados; a arquitetura completa ainda está em desenvolvimento.',need:'Testes independentes, computação e parceiros de pesquisa.',url:links.platform,urlLabel:'Repositório ELIS Core'},
    {id:'slr',title:'Revisão Sistemática da Literatura',tag:'research',description:'Revisão estruturada das evidências científicas sobre estratégias de integridade eleitoral, com processos reproduzíveis de busca, seleção e tratamento de estudos.',need:'Pesquisadores, acesso a bases acadêmicas e validação metodológica.'},
    {id:'framework',title:'ELIS — Metodologia de Evidências Eleitorais',tag:'validation',description:'Metodologia em desenvolvimento para avaliar se evidências públicas permitem conferir de forma independente resultados eleitorais anunciados oficialmente. Ainda não foi integralmente validada.',need:'Revisão metodológica externa e estudos-piloto.'},
    {id:'statistics',title:'Pesquisa Estatística Brasil 2026',tag:'validation',description:'Pesquisa estatística pré-registrada que compara eleições brasileiras com dados históricos. Distingue padrões incomuns de conclusões sobre suas causas; os resultados finais dependem de verificação independente.',need:'Revisão estatística, reprodução dos cálculos e computação.',url:links.protocol,urlLabel:'Compromisso público de publicação'},
    {id:'atlas',title:'Atlas Eleitoral',tag:'experimental',description:'Explorador público em evolução com resultados eleitorais brasileiros, filtros geográficos, visualizações e comparações históricas. A cobertura e os resultados devem ser conferidos com as fontes publicadas.',need:'Verificação de dados, acessibilidade e hospedagem.',url:links.atlas,urlLabel:'Abrir o Atlas'},
    {id:'knowledge',title:'Gestão de Conhecimento e Evidências',tag:'experimental',description:'Práticas e ferramentas exploratórias para registrar decisões científicas, fontes, proveniência de evidências e conhecimento reutilizável em fluxos de agentes de IA.',need:'Engenharia do conhecimento e avaliação.'},
    {id:'data',title:'Infraestrutura de Dados para Pesquisa Eleitoral',tag:'infrastructure',description:'Repositórios e processos para preservar a proveniência de dados eleitorais amostrais e das entradas das análises. Não são apresentados como bases públicas completas.',need:'Pipelines reproduzíveis, armazenamento e auditoria.'}
  ],
  opportunitiesTitle:'Apoie pesquisas com entregas verificáveis',
  opportunitiesIntro:'Buscamos diálogo com universidades, fundações, provedores de tecnologia e pesquisadores. O apoio deve preservar a independência científica.',
  opportunities:[
    {title:'Financiamento de pesquisa',description:'Apoie pesquisadores, validação independente e publicação aberta.'},
    {title:'Infraestrutura',description:'Contribua com nuvem, acesso a modelos de IA, serviços de dados ou armazenamento.'},
    {title:'Parcerias acadêmicas',description:'Colabore em métodos, reprodução de resultados, revisão científica e educação.'},
    {title:'Divulgação e impacto',description:'Ajude a explicar evidências e incertezas em relatórios acessíveis e diálogo institucional.'}
  ],
  methodologyTitle:'Nossos compromissos',methodology:[
    {title:'Transparência',description:'Identificar fontes, hipóteses, situação dos projetos e limitações relevantes.'},
    {title:'Verificação independente',description:'Buscar reprodução crítica antes de apresentar resultados exploratórios como estabelecidos.'},
    {title:'IA responsável',description:'Manter supervisão humana e distinguir capacidades implementadas de projetos futuros.'},
    {title:'Independência científica',description:'Financiamento e colaboração não podem determinar as conclusões das pesquisas.'}
  ],
  publicationsTitle:'Publicações, recursos e impacto',publicationsIntro:'Recursos públicos selecionados. A biblioteca crescerá à medida que entregas forem autorizadas para divulgação.',
  resources:[{title:'Pesquisa pré-registrada Brasil 2026',description:'Compromissos públicos e adendos metodológicos; não é relatório final de resultados.',url:links.protocol},{title:'Atlas Eleitoral',description:'Explorador público experimental de dados eleitorais.',url:links.atlas},{title:'ELIS Core',description:'Código aberto e documentação da plataforma multiagente.',url:links.platform}],
  aboutTitle:'Sobre o ELIS',aboutText:'O ELIS — Electoral Integrity Strategies — é uma iniciativa independente de pesquisa e tecnologia que combina estudos de integridade eleitoral, ciência de dados e fluxos científicos apoiados por IA. Publicamos materiais verificados progressivamente e distinguimos pesquisa em andamento de resultados concluídos.',
  affiliation:'Afiliações institucionais, colaborações acadêmicas e apoios são descritos somente quando seu alcance e situação puderem ser comprovados.',
  contactTitle:'Colabore com o ELIS',contactText:'Conte qual área de pesquisa interessa e se pode oferecer financiamento, infraestrutura, conhecimento especializado ou apoio à divulgação.',
  emailLabel:'Contato com a equipe de pesquisa', disclaimer:'Pesquisa em andamento. As descrições não implicam revisão por pares, validação concluída ou comprovação de qualquer alegação.',
  privacy:'Privacidade',privacyText:'Por enquanto, o contato utiliza seu aplicativo de e-mail. Esta página não coleta informações enviadas em formulários. Consulte a política de privacidade para outros tratamentos.',
  lastUpdated:'Conteúdo revisto em 9 de novembro de 2026',legal:'O conteúdo científico é apresentado com suas limitações. Código e documentos têm licenças próprias em cada repositório.',
  footer:'Pesquisa independente, tecnologia responsável, conhecimento público.'
};
export default {en,pt};
