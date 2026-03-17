import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-950 text-slate-50 font-sans selection:bg-sky-500/30">
      
      {/* Barra de Navegação */}
      <nav className="flex justify-between items-center py-6 px-6 md:px-12 border-b border-slate-800/50 backdrop-blur-md fixed w-full top-0 z-50">
        <div className="text-2xl font-bold tracking-tighter text-sky-400">
          &lt;Alexandre.dev /&gt;
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <Link href="#projetos" className="hover:text-white transition-colors">Projetos</Link>
          <Link href="#sobre" className="hover:text-white transition-colors">Sobre Mim</Link>
          <Link href="#contato" className="hover:text-white transition-colors">Contato</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col justify-center items-center text-center px-6 pt-40 pb-20">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(56,189,248,0.15)]">
          Disponível para Projetos Freelance
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          Engenharia de Software para <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
            Problemas Complexos.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
          Sou Alexandre Almeida de Lucena. Desenvolvedor focado em criar sistemas seguros, arquiteturas escaláveis e aplicações de alto impacto. Transformo lógica avançada em interfaces intuitivas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#projetos" className="px-8 py-4 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
            Ver Meus Projetos
          </Link>
          <Link href="#contato" className="px-8 py-4 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 text-slate-300 font-bold transition-all">
            Entrar em Contato
          </Link>
        </div>
      </main>

      {/* Seção de Projetos */}
      <section id="projetos" className="w-full max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projetos em <span className="text-sky-400">Destaque</span>
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto text-lg">
          Um portfólio construído na prática, resolvendo problemas reais através de arquiteturas escaláveis, automação de dados e gestão inteligente.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Projeto 1: Aurum */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)]">
            <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">Aurum NeuroAnalytics</h3>
            <p className="text-slate-400 mb-6 leading-relaxed flex-grow">Sistema clínico e operacional voltado para Health Tech. Conta com controle de acesso baseado em funções (RBAC) para Administração, Especialistas e Recepção. Inclui gestão de pacientes, relatórios clínicos personalizados e aplicação de protocolos de rastreio para o Autiosmo.</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Health Tech</span>
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">RBAC</span>
            </div>
          </div>

          {/* Projeto 2: Analisador de Roletas */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)]">
            <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">Analisador de Roletas</h3>
            <p className="text-slate-400 mb-6 leading-relaxed flex-grow">Plataforma robusta de extração de dados automatizada via Web Scraping e WebSockets. Processa estatísticas complexas em tempo real, valida estratégias e integra bots automatizados para envio de sinais via Telegram.</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Web Scraping</span>
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">WebSockets</span>
            </div>
          </div>

          {/* Projeto 3: Portal de Condomínios */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)]">
            <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">Portal de Condomínios</h3>
            <p className="text-slate-400 mb-6 leading-relaxed flex-grow">Portal completo para gestão de condomínios utilizando arquitetura Serverless (Firebase Functions). Módulos interativos para Moradores, Portaria e Administração, englobando encomendas, reservas de espaços e livro de ocorrências digital.</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Serverless / Firebase</span>
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Gestão de Condomínio</span>
            </div>
          </div>

          {/* Projeto 4: Clinica Médica Especializada */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)]">
            <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">Sistema Clinica Médica Especializada</h3>
            <p className="text-slate-400 mb-6 leading-relaxed flex-grow">Sistema de gestão para um núcleo de terapias integradas com foco em TEA. Agenda multidisciplinar complexa (ABA, Fonoaudiologia, TO), monitoramento inteligente de sessões e auditoria de guias de convênio.</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Agenda Complexa</span>
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Auditoria de Guias</span>
            </div>
          </div>

          {/* Projeto 5: SpyBug */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)]">
            <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">SpyBug VIP</h3>
            <p className="text-slate-400 mb-6 leading-relaxed flex-grow">Aplicação web de acesso restrito (VIP) com interface "Neon Futurista". O sistema gerencia assinaturas mensais e oferece análises e estratégias de alta performance exclusivas para usuários assinantes.</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">UI/UX Futurista</span>
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">SaaS (Assinaturas)</span>
            </div>
          </div>

          {/* Projeto 6: Portal de Empresas Multiserviços */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)]">
            <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">Portal de Empresas Multiserviços</h3>
            <p className="text-slate-400 mb-6 leading-relaxed flex-grow">Solução focada em presença corporativa e solidez para uma empresa de terceirização (SP e RN). Estrutura o amplo portfólio da empresa, desde portaria e controle de acesso até manutenção predial estratégica.</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Solução Corporativa</span>
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Catálogo de Serviços</span>
            </div>
          </div>

          {/* Projeto 7: Copa Condomínios */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)]">
            <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">Gestão de Copas Esportivas</h3>
            <p className="text-slate-400 mb-6 leading-relaxed flex-grow">Plataforma desenvolvida para gerenciar campeonatos de futebol entre condomínios. A arquitetura contempla regras complexas de negócio, incluindo registro de times e jogadores, sorteio de grupos (chaves), cronograma de jogos e tabelas de classificação em tempo real.</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Regras de Negócio</span>
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Sorteio de Chaves</span>
              <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Tabelas Real-time</span>
            </div>
          </div>

          {/* Projeto 8: E-commerce Livro Anatomia (Destaque Largo - Ocupa 2 colunas em telas grandes) */}
          <div className="md:col-span-2 lg:col-span-2 bg-slate-900/50 border border-sky-500/30 rounded-2xl p-8 hover:border-sky-400 transition-all duration-300 group flex flex-col md:flex-row gap-8 items-center hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-sky-500 text-slate-950 text-xs font-bold px-4 py-1 rounded-bl-lg">Impacto Social</div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">E-commerce: A História da Anatomia na UFRN</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Plataforma web para o pré-lançamento de vouchers do livro (tiragem limitada). O sistema exigiu lógicas precisas de estoque em tempo real e um fluxo reverso para cancelamento e reembolso com retorno automático de unidades ao inventário.
              </p>
              <p className="text-slate-300 italic mb-6">
                * Projeto de forte impacto social, com o detalhe de que 100% da renda gerada foi revertida para instituições de caridade.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">E-commerce Customizado</span>
                <span className="px-3 py-1 bg-slate-800 text-sky-300 text-xs rounded-full">Gestão de Estoque</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Seção Sobre Mim */}
      <section id="sobre" className="w-full bg-slate-900/30 border-y border-slate-800/50 py-24 mt-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Minha <span className="text-sky-400">Trajetória</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Coluna de Texto */}
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                Minha jornada na tecnologia começou com a formação em <strong>Ciência da Computação (UNIPÊ, 2002)</strong>, logo solidificada por certificações de peso da <strong>Microsoft (MCP, MCSE, MCDBA)</strong> com foco em redes e banco de dados.
              </p>
              <p>
                Construí uma carreira plural e de alta responsabilidade. No setor público, atuei no Governo da Paraíba desenvolvendo sistemas de mapeamento hídrico (HTML, PHP, MySQL). No setor corporativo privado, fui Administrador Local de TI na <strong>São Paulo Alpargatas S/A</strong>, gerenciando a infraestrutura de múltiplas unidades fabris e postos de costura.
              </p>
              <p>
                A disciplina, a resiliência e a liderança foram forjadas no <strong>Exército Brasileiro</strong>, onde servi como Oficial Técnico Temporário. Alcancei o posto de 1º Tenente, desempenhando diversas funções de chefia na área de Informática na 7ª Região Militar e no Colégio Militar do Recife.
              </p>
              <p>
                Retornando ao serviço público federal, passei pelo IFPE e atuei como Coordenador da Seção de Redes e Infraestrutura no IFPB. Hoje, aplico toda essa bagagem no Centro de Biociências da <strong>UFRN</strong>.
              </p>
              <div className="pt-4 border-t border-slate-800">
                <p className="text-slate-200 font-medium border-l-4 border-sky-500 pl-4 italic">
                  "Em paralelo a toda essa sólida vivência em gestão e infraestrutura, a programação sempre foi o meu fio condutor. Nunca parei de codificar e criar soluções, unindo a visão estratégica de um gestor à execução técnica de um desenvolvedor apaixonado."
                </p>
              </div>
            </div>

            {/* Coluna Visual (Timeline Resumida) */}
            <div className="hidden lg:flex flex-col justify-center pl-10 border-l-2 border-slate-800 space-y-10">
              <div className="relative">
                <span className="absolute -left-[49px] top-1 h-4 w-4 rounded-full bg-sky-500 ring-4 ring-slate-950"></span>
                <h4 className="text-xl font-bold text-slate-200">A Base & O Código</h4>
                <p className="text-sm text-slate-500 mt-1">UNIPÊ • Certificações Microsoft • Governo da PB</p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[49px] top-1 h-4 w-4 rounded-full bg-slate-700 ring-4 ring-slate-950"></span>
                <h4 className="text-xl font-bold text-slate-200">Gestão Corporativa</h4>
                <p className="text-sm text-slate-500 mt-1">São Paulo Alpargatas S/A</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[49px] top-1 h-4 w-4 rounded-full bg-slate-700 ring-4 ring-slate-950"></span>
                <h4 className="text-xl font-bold text-slate-200">Disciplina Militar</h4>
                <p className="text-sm text-slate-500 mt-1">1º Tenente • Exército Brasileiro (7ª RM, CMR)</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[49px] top-1 h-4 w-4 rounded-full bg-slate-700 ring-4 ring-slate-950"></span>
                <h4 className="text-xl font-bold text-slate-200">Liderança Acadêmica</h4>
                <p className="text-sm text-slate-500 mt-1">IFPE • IFPB • UFRN (Atual)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="w-full max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vamos <span className="text-sky-400">Conversar?</span>
        </h2>
        <p className="text-slate-400 mb-10 text-lg">
          Seja para desenvolver um sistema do zero, integrar APIs ou criar uma solução escalável, estou disponível para transformar sua necessidade em código de alto nível.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="mailto:alexandre.lucena@ufrn.br" className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            alexandre.lucena@ufrn.br
          </a>
          
          <a href="https://github.com/SeuUsuario" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 text-slate-300 font-bold transition-all transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Acessar GitHub
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800/50">
        © {new Date().getFullYear()} Alexandre Almeida de Lucena. Todos os direitos reservados. <br/>
        <span className="text-xs text-slate-600 mt-2 block">Desenvolvido com Next.js & Tailwind CSS.</span>
      </footer>
      
    </div>
  );
}