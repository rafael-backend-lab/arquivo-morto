import './App.css'

const dossiers = [
  {
    id: 'DOS-001',
    tag: 'EXPERIMENTO',
    location: 'Londres, 1803',
    title: 'Aldini e George Forster',
    text: 'Giovanni Aldini aplica correntes galvânicas no cadáver do enforcado George Forster diante de público. O corpo se contorce, a mandíbula abre. A ciência encontra o teatro da morte.',
    status: 'LACRADO',
  },
  {
    id: 'DOS-002',
    tag: 'CASO CLÍNICO',
    location: 'Glasgow, 1818',
    title: 'Andrew Ure e Matthew Clydesdale',
    text: 'Quinze minutos após a execução, Andrew Ure conecta Matthew Clydesdale a baterias galvânicas. Os músculos contraem com tal violência que a plateia abandona a sala em terror.',
    status: 'ARQUIVADO',
  },
  {
    id: 'DOS-003',
    tag: 'FICÇÃO CIENTÍFICA',
    location: 'Miskatonic, 1922',
    title: 'Herbert West, Reanimador',
    text: 'H. P. Lovecraft escreve em seis partes o pesadelo de um cientista obcecado com a reanimação do tecido morto. O horror vem de dentro do laboratório, não de fora.',
    status: 'PROIBIDO',
  },
  {
    id: 'DOS-004',
    tag: 'EXPERIMENTO',
    location: 'Londres, 1730',
    title: 'Stephen Gray e o corpo condutor',
    text: 'Stephen Gray demonstra que o corpo humano conduz eletricidade. Um jovem suspenso por cordas de seda atrai pedaços de chumbo. O corpo vivo como fio elétrico.',
    status: 'CATALOGADO',
  },
  {
    id: 'DOS-005',
    tag: 'MEDICINA ANTIGA',
    location: 'Séc. II–III d.C.',
    title: 'Pseudo-Galeno e o Homem Ferido',
    text: 'O tratado atribuído a Galeno descreve os nervos como canais do espírito vital. O corpo ferido como mapa da alma. Entre cirurgia e filosofia, o limite entre vivo e morto.',
    status: 'FRAGMENTADO',
  },
  {
    id: 'DOS-006',
    tag: 'LITERATURA',
    location: 'Genebra, 1818',
    title: 'Mary Shelley e a Criatura',
    text: 'Com dezoito anos, Mary Shelley cria o arquétipo moderno da criatura reanimada pela ciência. Frankenstein não é o monstro — é o cientista que não suporta sua própria criação.',
    status: 'FUNDACIONAL',
  },
]

const articles = [
  {
    index: '01',
    tag: 'ENSAIO',
    title: 'O Roubo de Carne',
    text: 'A economia dos cadáveres no século XIX: anatomistas, body snatchers e o mercado negro de tecido humano.',
  },
  {
    index: '02',
    tag: 'HISTÓRIA DA CIÊNCIA',
    title: 'A Disputa Vitalista',
    text: 'Animismo contra mecanicismo. O debate sobre o que separa o vivo do morto atravessa dois séculos de ciência europeia.',
  },
  {
    index: '03',
    tag: 'BODY HORROR',
    title: 'A Carne Fragmentada',
    text: 'Da peça anatômica ao cinema cult. Como o corpo recortado tornou-se objeto estético, científico e narrativo.',
  },
  {
    index: '04',
    tag: 'SONIC HORROR',
    title: 'Frequência Fúnebre',
    text: 'Frequências que perturbam. Sons que afetam o organismo sem que a mente saiba. A fronteira entre ruído e colapso.',
  },
  {
    index: '05',
    tag: 'HISTÓRIA MEDIEVAL',
    title: 'O Mapa Medieval da Dor',
    text: 'Cartografias anatômicas medievais onde nervos são rios e órgãos são províncias. O corpo como território desconhecido.',
  },
]

const timelineEvents = [
  {
    year: '1730',
    desc: 'Stephen Gray demonstra que o corpo humano conduz eletricidade — o corpo como fio elétrico vivo.',
  },
  {
    year: '1803',
    desc: 'Giovanni Aldini galvaniza o cadáver de George Forster em público, em Londres. O horror torna-se espetáculo científico.',
  },
  {
    year: '1818',
    desc: 'Mary Shelley publica Frankenstein. O mito moderno da reanimação nasce no contexto direto do galvanismo europeu.',
  },
  {
    year: '1818',
    desc: 'Andrew Ure e Matthew Clydesdale em Glasgow. Quinze minutos após a execução, a ciência tenta reverter a morte.',
  },
  {
    year: '1922',
    desc: 'Lovecraft escreve Herbert West: Reanimator em seis partes. O laboratório torna-se território de horror cósmico.',
  },
  {
    year: '1985',
    desc: 'Stuart Gordon leva Re-Animator ao cinema. O reagente verde entra para o imaginário cult e horror pop.',
  },
  {
    year: 'Hoje',
    desc: 'Criogenia, transplantes, IA generativa e interfaces neurais reabrem perguntas sobre identidade, morte e continuidade.',
  },
]

const cabinet = [
  {
    ref: 'LÂM-042',
    type: 'ESPÉCIME',
    name: 'Lâmina Histológica',
    desc: 'Tecido neural pós-galvanização. Reação desconhecida nos neurônios terminais.',
  },
  {
    ref: 'MAN-019',
    type: 'DOCUMENTO',
    name: 'Manuscrito Aldini',
    desc: 'Notas de campo da sessão de 1803. Três páginas ilegíveis. Tinta ferruginosa.',
  },
  {
    ref: 'REA-007',
    type: 'SUBSTÂNCIA',
    name: 'Reagente HW-7',
    desc: 'Composto verde-amarelado. Origem não rastreada. Efeito sobre tecido morto: indeterminado.',
  },
  {
    ref: 'PRO-334',
    type: 'REGISTRO',
    name: 'Prontuário 334-B',
    desc: 'Cadáver masculino, ~40 anos. Causa mortis: desconhecida. Marcas pós-morte atípicas.',
  },
  {
    ref: 'OSC-002',
    type: 'INSTRUMENTO',
    name: 'Osciloscópio de Campo',
    desc: 'Registrou atividade elétrica em tecido certificado como morto. Equipamento lacrado após incidente.',
  },
  {
    ref: 'CAD-111',
    type: 'ESPÉCIME',
    name: 'Cadáver Catalogado 111',
    desc: 'Status: reanimação parcial tentada. Resultado: inconclusivo. Localização atual: desconhecida.',
  },
]

function App() {
  return (
    <div className="root">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      <main className="page">

        {/* HERO */}
        <header className="hero">
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <div className="archive-meta">
              <span className="meta-tag">ARQ-001</span>
              <span className="meta-sep">·</span>
              <span className="meta-tag status-lacrado">STATUS: LACRADO</span>
              <span className="meta-sep">·</span>
              <span className="meta-tag">VOLTAGEM: 120V DC</span>
              <span className="meta-sep">·</span>
              <span className="meta-tag">DATA: 1803–∞</span>
            </div>
            <p className="eyebrow">Dossiês proibidos sobre morte, ciência e ficção</p>
            <h1>Arquivo<br />Morto</h1>
            <h2>Literatura, ciência e horror da reanimação</h2>
            <p className="lead">
              Um projeto editorial sombrio sobre os limites entre corpo, experimento,
              mito e laboratório. De Frankenstein a Herbert West, do galvanismo ao
              imaginário científico do horror.
            </p>
            <div className="actions">
              <a href="#dossies" className="btn btn-primary">Abrir dossiês</a>
              <a href="#linha" className="btn btn-secondary">Linha do tempo</a>
            </div>
          </div>
        </header>

        {/* MANIFESTO */}
        <section className="manifesto">
          <div className="manifesto-inner">
            <div className="manifesto-label">
              <span className="label-text">ARQUIVO 001</span>
              <div className="label-line" />
            </div>
            <blockquote className="manifesto-text">
              <p>
                Nem todo cadáver permanece em silêncio. Alguns voltam como literatura,
                outros como hipótese científica. O Arquivo Morto cataloga essa fronteira —
                quando a ciência tenta vencer a morte e encontra o horror.
              </p>
              <p>
                Entre Frankenstein e os laboratórios galvânicos, entre Lovecraft e os
                prontuários médicos do século XIX, existe um território sem nome.
                Este arquivo existe para mapeá-lo.
              </p>
            </blockquote>
          </div>
        </section>

        {/* DOSSIÊS */}
        <section id="dossies" className="section">
          <div className="section-header">
            <p className="section-label">Dossiês iniciais</p>
            <h3>Reanimação como literatura, ciência e pesadelo</h3>
          </div>
          <div className="dossier-grid">
            {dossiers.map((d) => (
              <article className="dossier-card" key={d.id}>
                <div className="card-header">
                  <span className="card-id">{d.id}</span>
                  <span className={`card-status status-${d.status.toLowerCase()}`}>{d.status}</span>
                </div>
                <div className="card-tag">{d.tag}</div>
                <p className="card-location">{d.location}</p>
                <h4 className="card-title">{d.title}</h4>
                <p className="card-text">{d.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ARTIGOS */}
        <section id="artigos" className="section">
          <div className="section-header">
            <p className="section-label">Artigos</p>
            <h3>Ensaios, histórias e investigações</h3>
          </div>
          <div className="articles-list">
            {articles.map((a) => (
              <article className="article-row" key={a.title}>
                <span className="article-index">{a.index}</span>
                <div className="article-body">
                  <span className="article-tag">{a.tag}</span>
                  <h4 className="article-title">{a.title}</h4>
                  <p className="article-text">{a.text}</p>
                </div>
                <div className="article-arrow">→</div>
              </article>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section id="linha" className="section">
          <div className="section-header">
            <p className="section-label">Linha do tempo</p>
            <h3>Do cadáver literário ao laboratório moderno</h3>
          </div>
          <div className="timeline">
            {timelineEvents.map((e, i) => (
              <div className="timeline-event" key={i}>
                <div className="timeline-year">
                  <span>{e.year}</span>
                  <div className="timeline-dot" />
                </div>
                <p className="timeline-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GABINETE */}
        <section id="gabinete" className="section">
          <div className="section-header">
            <p className="section-label">Gabinete de Anatomia</p>
            <h3>Itens catalogados, lacrados e interditos</h3>
          </div>
          <div className="cabinet-grid">
            {cabinet.map((item) => (
              <div className="cabinet-item" key={item.ref}>
                <div className="cabinet-top">
                  <span className="cabinet-ref">{item.ref}</span>
                  <span className="cabinet-type">{item.type}</span>
                </div>
                <h5 className="cabinet-name">{item.name}</h5>
                <p className="cabinet-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="footer-title">Arquivo Morto</span>
              <p className="footer-desc">
                Projeto editorial sobre literatura, ciência e horror da reanimação.
              </p>
            </div>
            <div className="footer-note">
              <p>Projeto cultural e editorial independente.</p>
              <p>Inspiração temática em H. P. Lovecraft, Mary Shelley e história da ciência do século XIX.</p>
              <p className="footer-github">GitHub: em breve</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-ref">ARQ-001 · LACRADO · VOLTAGEM: 120V DC</span>
          </div>
        </footer>

      </main>
    </div>
  )
}

export default App
