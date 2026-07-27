import { useState } from 'react'
import './App.css'

const assetPath = (path) => {
  const normalized = path.replace(/^\/?(arquivo-morto\/)?/, '')
  const base = import.meta.env.BASE_URL || '/'

  return `${base}${normalized}`.replace(/([^:]\/)\/+/g, '$1')
}

const articles = [
  {
    index: '01',
    period: 'séc. XVIII–XIX',
    tag: 'ENSAIO',
    title: 'O Roubo de Carne',
    text: 'A economia dos cadáveres no século XIX: anatomistas, body snatchers e o mercado negro de tecido humano.',
  },
  {
    index: '02',
    period: 'séc. XVIII–XIX',
    tag: 'HISTÓRIA DA CIÊNCIA',
    title: 'A Disputa Vitalista',
    text: 'Animismo contra mecanicismo. O debate sobre o que separa o vivo do morto atravessa dois séculos de ciência europeia.',
  },
  {
    index: '03',
    period: 'séc. XX–XXI',
    tag: 'BODY HORROR',
    title: 'A Carne Fragmentada',
    text: 'Da peça anatômica ao cinema cult. Como o corpo recortado tornou-se objeto estético, científico e narrativo.',
  },
  {
    index: '04',
    period: 'séc. XX–XXI',
    tag: 'SONIC HORROR',
    title: 'Frequência Fúnebre',
    text: 'Frequências que perturbam. Sons que afetam o organismo sem que a mente saiba. A fronteira entre ruído e colapso.',
  },
  {
    index: '05',
    period: 'Idade Média',
    tag: 'HISTÓRIA MEDIEVAL',
    title: 'O Mapa Medieval da Dor',
    text: 'Cartografias anatômicas medievais onde nervos são rios e órgãos são províncias. O corpo como território desconhecido.',
  },
]

const timelineEvents = [
  {
    year: '1730',
    desc: 'Stephen Gray demonstra que o corpo humano conduz eletricidade.',
  },
  {
    year: '1803',
    desc: 'Aldini galvaniza o cadáver de George Forster em Londres.',
  },
  {
    year: '1818',
    displayYear: '1818 · Shelley',
    desc: 'Mary Shelley publica Frankenstein no auge do imaginário galvanista.',
    image: '/arquivo-morto/assets/archive/frankenstein-title.jpg',
    imageAlt: 'Página de título da edição original de Frankenstein, 1818',
    imageCaption: 'Frankenstein; or, The Modern Prometheus · 1ª edição, 1818',
  },
  {
    year: '1818',
    displayYear: '1818 · Ure',
    desc: 'Andrew Ure aplica correntes ao corpo de Matthew Clydesdale em Glasgow.',
  },
  {
    year: '1922',
    desc: 'Lovecraft publica Herbert West: Reanimator em seis partes.',
  },
  {
    year: '1985',
    desc: 'Re-Animator leva o reagente verde ao cinema cult.',
  },
  {
    year: 'Hoje',
    desc: 'IA, criogenia e biotecnologia reabrem perguntas sobre continuidade e identidade.',
  },
]

const cabinet = [
  {
    ref: 'LÂM-042', displayDate: 'arquivo interno', type: 'ESPÉCIME',
    name: 'Lâmina Histológica', visual: 'anatomical-plate', size: 'featured',
    desc: 'Tecido neural pós-galvanização. Reação desconhecida nos neurônios terminais. Amostra mantida sob lacre por comportamento elétrico residual após exposição ao campo galvânico. Análise interrompida por protocolo interno.',
  },
  {
    ref: 'REA-007', displayDate: 'registro apócrifo', type: 'SUBSTÂNCIA',
    name: 'Reagente HW-7', visual: 'reagent-vial', size: 'wide',
    desc: 'Composto verde-amarelado. Origem não rastreada. Efeito sobre tecido morto: instável, reversível e potencialmente hostil. Amostra mantida sob selo de quarentena. Acesso restrito ao pessoal autorizado do arquivo.',
  },
  {
    ref: 'CAD-111', displayDate: 'registro apócrifo', type: 'ESPÉCIME',
    name: 'Cadáver Catalogado 111', visual: 'corpse-tag', size: 'wide',
    desc: 'Reanimação parcial tentada. Resultado inconclusivo. Localização atual: desconhecida. Registro mantido por obrigação documental. Acesso restrito ao gabinete. Não reabrir sem protocolo 7-B.',
  },
  {
    ref: 'MAN-019', displayDate: '1803', type: 'DOCUMENTO',
    name: 'Manuscrito Aldini', visual: 'medical-file', size: 'standard',
    desc: 'Notas de campo atribuídas à sessão de 1803. Três páginas ilegíveis, tinta ferruginosa e marcas de manipulação posterior.',
  },
  {
    ref: 'PRO-334', displayDate: 'data lacrada', type: 'REGISTRO',
    name: 'Prontuário 334-B', visual: 'medical-file', size: 'standard',
    desc: 'Cadáver masculino, aproximadamente 40 anos. Causa mortis desconhecida. Marcas pós-morte incompatíveis com rigidez comum.',
  },
  {
    ref: 'OSC-002', displayDate: 'arquivo interno', type: 'INSTRUMENTO',
    name: 'Osciloscópio de Campo', visual: 'galvanic-wave', size: 'standard',
    desc: 'Registrou atividade elétrica em tecido certificado como morto. Equipamento lacrado após três leituras impossíveis de reproduzir.',
  },
]

const humanityAgainstDeath = [
  {
    era: 'Egito Antigo',
    period: 'c. 2600–30 a.C.',
    focus: 'Preservação ritual do corpo',
    theme: 'Mumificação, travessia espiritual e permanência',
    text: 'Na cultura funerária egípcia, a integridade do corpo participava da continuidade após a morte. Mumificação, vasos canopos, textos funerários e arquitetura tumular formavam uma tecnologia ritual de permanência: preservar a forma para garantir travessia, julgamento e memória diante dos deuses e dos vivos.',
  },
  {
    era: 'Mesopotâmia',
    period: 'c. 3500–539 a.C.',
    focus: 'Submundo como território',
    theme: 'Descida aos mortos, poeira, destino e soberania funerária',
    text: 'Nos poemas sumérios e acádios, o mundo subterrâneo aparece como domínio concreto, regido por leis próprias e habitado por sombras reduzidas à poeira. A descida de Inanna e a Epopeia de Gilgamesh tratam a morte menos como espetáculo e mais como fronteira inevitável: um território a ser narrado, temido e reconhecido.',
  },
  {
    era: 'Grécia e Roma',
    period: 'c. 800 a.C.–400 d.C.',
    focus: 'Memória ritual dos mortos',
    theme: 'Hades, sombras, sepultamento e culto funerário',
    text: 'Entre a nekyia grega, as moedas para Caronte, os túmulos familiares romanos e os festivais dedicados aos manes, o morto permanecia vinculado à cidade e à casa. Ritos funerários, libações e memória pública buscavam evitar o esquecimento e manter uma relação ordeira entre vivos, ancestrais e sombras.',
  },
  {
    era: 'Cristianismo',
    period: 'Antiguidade tardia em diante',
    focus: 'Retorno como promessa escatológica',
    theme: 'Ressurreição, milagre, corpo glorificado e esperança',
    text: 'Na tradição cristã, a vitória sobre a morte não se descreve como procedimento humano, mas como milagre, promessa e juízo final. A ressurreição de Cristo, as narrativas de santos, o culto às relíquias e a ideia de corpo glorificado moldaram uma imaginação do retorno em que a carne pode ser restaurada por intervenção divina, não por laboratório.',
  },
  {
    era: 'Mortos inquietos no folclore',
    period: 'Idade Média–Era Moderna',
    focus: 'Cadáveres que não descansam',
    theme: 'Revenants, vampiros, assombrações e sepultamentos falhos',
    text: 'Crônicas medievais, relatos aldeões e tradições balcânicas registram mortos que voltam quando o funeral falha, a culpa permanece ou a comunidade interpreta um mal invisível como presença póstuma. Revenants, vampiros e assombrações pertencem à história do medo social: explicam contágio, desordem moral e a ansiedade provocada pelo cadáver que resiste ao repouso.',
  },
  {
    era: 'Ancestrais e mediação espiritual',
    period: 'Múltiplas tradições',
    focus: 'Contato simbólico e continuidade de linhagem',
    theme: 'Ritos, xamanismo, culto ancestral e escuta ritual',
    text: 'Em muitas cosmologias africanas, ameríndias e asiáticas, os mortos continuam presentes por memória, oferenda, consulta e obrigação ritual. Altares domésticos, xamanismos e cultos aos ancestrais não pretendem abolir a morte: procuram negociar presença, orientação e continuidade entre gerações, tratando os mortos como parte ativa da ordem simbólica da comunidade.',
  },
]

const occultReturnChapter = [
  {
    mark: 'OCC-001',
    displayDate: 'Antiguidade–Renascimento',
    title: 'Necromancia',
    category: 'Tradição ritual e saber proibido',
    theme: 'Comunicação com mortos como busca de conhecimento vedado',
    text: 'Da Antiguidade tardia aos grimórios medievais e renascentistas, a necromancia aparece como prática textual e ritual voltada menos ao retorno físico dos mortos do que à consulta de vozes invisíveis. O morto, real ou invocado, torna-se fonte de saber interdito: genealogia do medo intelectual, não procedimento científico.',
    warning: 'Registro cultural e ritual. O arquivo a trata como tradição histórica do ocultismo, não como ciência.',
  },
  {
    mark: 'OCC-002',
    displayDate: 'Antiguidade tardia–séc. XVII',
    title: 'Alquimia',
    category: 'Matéria, espírito e transmutação',
    theme: 'Anima, elixir, purificação e filosofia da transformação',
    text: 'A alquimia articulou laboratório, metáfora e cosmologia numa mesma linguagem. Metais, vapores, sal, enxofre e mercúrio serviam tanto à observação da matéria quanto à ideia de que toda substância escondia um princípio animado. O desejo de transmutar o mundo exterior espelhava a ambição de refinar o próprio corpo e prolongar sua permanência.',
    warning: 'Tradição histórico-filosófica. Seus símbolos pertencem à história da filosofia natural e do esoterismo.',
  },
  {
    mark: 'OCC-003',
    displayDate: '1527–1608',
    title: 'John Dee',
    category: 'Ocultismo renascentista',
    theme: 'Matemática, astrologia, linguagem angélica e comunicação espiritual',
    text: 'Matemático, astrólogo e conselheiro da corte elisabetana, John Dee ocupou o ponto ambíguo em que cálculo, magia natural e especulação espiritual ainda não estavam separados. Seus experimentos com comunicação angélica, conduzidos com Edward Kelley, revelam menos uma vontade de reanimar cadáveres do que a tentativa renascentista de decifrar uma ordem invisível acima da matéria.',
    warning: 'Figura histórica ligada ao ocultismo e à matemática. Não é tratada aqui como reanimador de mortos.',
  },
  {
    mark: 'OCC-004',
    displayDate: 'tradição medieval judaica',
    title: 'Golem',
    category: 'Mito de matéria obediente',
    theme: 'Criação artificial pela palavra, barro e inscrição sagrada',
    text: 'Na tradição judaica, o golem é a figura limite da matéria que recebe forma, nome e comando. Não é cadáver reanimado, mas vida fabricada por linguagem, rito e autoridade simbólica. Sua importância para o Arquivo Morto está na ideia de criatura artificial anterior à ciência moderna: corpo moldado, animado e obediente, sempre à beira de escapar do controle.',
    warning: 'Mito e tradição cultural. O capítulo o aborda como imaginação religiosa e literária da criação artificial.',
  },
  {
    mark: 'OCC-005',
    displayDate: 'tradição alquímica',
    title: 'Elixir da vida',
    category: 'Longa duração contra a decadência',
    theme: 'Longevidade, imortalidade e resistência ao desgaste do corpo',
    text: 'Sob muitos nomes — pedra filosofal líquida, panaceia, quinta essência — o elixir da vida condensou a recusa humana em aceitar a corrupção da carne. Mais que promessa química literal, ele funcionou como imagem histórica da luta contra envelhecimento, doença e finitude, ligando alquimia, medicina especulativa e obsessão pela continuidade do corpo.',
    warning: 'Símbolo histórico e alquímico. O texto evita tratá-lo como prova de eficácia material.',
  },
  {
    mark: 'OCC-006',
    displayDate: 'séc. XVIII',
    title: 'Autômatos e corpo mecânico',
    category: 'Máquina, imitação e criatura artificial',
    theme: 'Engenhos que simulam vida e preparam a imaginação moderna do corpo',
    text: 'Relógios animados, pássaros mecânicos, figuras hidráulicas e autômatos cortesãos ajudaram a deslocar a pergunta sobre a vida do templo para o mecanismo. Se o corpo podia ser descrito como engrenagem, então a criatura artificial deixava de ser apenas mito e passava a habitar a filosofia natural. Aqui começa a ponte para galvanismo, anatomia experimental e, mais tarde, Frankenstein.',
    warning: 'Antecedente simbólico e técnico. O interesse está na imaginação mecânica da vida, não numa equivalência direta com consciência.',
  },
]

const bodyStudyChapter = [
  {
    code: 'ANT-001',
    displayDate: 'Antiguidade–Idade Média',
    title: 'Corpo sagrado',
    label: 'Relíquia, tabu e memória ritual',
    theme: 'Corpo morto como templo, vestígio e objeto de respeito funerário',
    text: 'Durante séculos, o cadáver permaneceu cercado por reverência, proibição e temor. Reliquias, sepulturas, restos santos e tabus funerários mostram que o corpo morto não era matéria neutra: era memória encarnada, sinal religioso e território de contato entre vivos, mortos e transcendência.',
  },
  {
    code: 'ANT-002',
    displayDate: 'séc. XIII–XVI',
    title: 'Dissecação e anatomia',
    label: 'Abertura do corpo',
    theme: 'Ruptura simbólica, observação interna e nascimento do olhar anatômico',
    text: 'Abrir o corpo significou violar um limite antigo para produzir um conhecimento novo. A dissecação substituiu parte do mistério pela observação, mas não sem escândalo: o cadáver tornou-se superfície de leitura, e a anatomia nasceu entre fascínio científico, repulsa moral e imaginação sombria.',
  },
  {
    code: 'ANT-003',
    displayDate: 'séc. XVIII–XIX',
    title: 'Escolas médicas',
    label: 'Instituição e ensino',
    theme: 'Necessidade de corpos para demonstração, aula e formação médica',
    text: 'Com o crescimento do ensino médico, o cadáver deixou de ser apenas exceção e tornou-se recurso institucional. Teatros anatômicos, faculdades e hospitais passaram a depender de corpos para formar cirurgiões e médicos, transformando o morto em infraestrutura silenciosa do saber moderno.',
  },
  {
    code: 'ANT-004',
    displayDate: 'séc. XVIII–XIX',
    title: 'Ressurrecionistas',
    label: 'Mercado clandestino de corpos',
    theme: 'Body snatchers, roubo de cadáveres e urbanização da anatomia',
    text: 'Nos séculos XVIII e XIX, a demanda anatômica superou a oferta legal. Coveiros subornados, túmulos violados e intermediários noturnos alimentaram um circuito clandestino em que o cadáver circulava como mercadoria. O horror urbano dos ressurrecionistas pertence tanto à história social quanto à história da medicina.',
  },
  {
    code: 'ANT-005',
    displayDate: 'séc. XVIII',
    title: 'Vitalismo',
    label: 'Debate sobre o princípio de vida',
    theme: 'O que separa matéria viva de matéria morta',
    text: 'Vitalismo designa o conjunto de tentativas filosóficas e científicas de nomear algo que a simples matéria não explicaria por completo: sopro, força, princípio ou energia da vida. O debate não oferece resposta final, mas prepara o terreno em que anatomia, eletricidade e fisiologia passariam a interrogar o cadáver.',
  },
  {
    code: 'ANT-006',
    displayDate: 'séc. XVIII–XIX',
    title: 'Cadáver como prova',
    label: 'Olhar pericial nascente',
    theme: 'Autópsia, causa mortis e corpo como documento',
    text: 'À medida que a medicina legal se consolida, o cadáver deixa de ser apenas objeto de horror ou devoção e passa a ser também prova. Marcas, tecidos, feridas e alterações internas começam a compor uma gramática pericial que desloca o mistério para o relatório, a hipótese para o exame e a morte para o campo do indício.',
  },
]

const forensicDeathChapter = [
  {
    code: 'FOR-001',
    displayDate: '1780s–1791',
    title: 'Galvani e a eletricidade animal',
    label: 'História da ciência',
    theme: 'Nervos, contrações e a suspeita de uma força animadora no corpo',
    text: 'Os experimentos de Luigi Galvani com músculos e nervos sugeriram que o corpo podia responder à eletricidade de modo inquietante. A hipótese de uma eletricidade animal não ressuscitava mortos, mas reabria a pergunta sobre o que ainda persistia no tecido após o fim aparente da vida.',
    warning: 'Leitura histórica e editorial. Não se trata de manual experimental nem de prova de reanimação.',
  },
  {
    code: 'FOR-002',
    displayDate: '1803',
    title: 'Aldini e o teatro galvânico',
    label: 'Espetáculo científico',
    theme: 'George Forster, demonstração pública e horror científico em cena',
    text: 'Giovanni Aldini transformou o cadáver em palco de demonstração. As sessões públicas com o corpo de George Forster converteram contrações musculares em espetáculo científico, num ponto em que ciência, imprensa e terror coletivo passaram a compartilhar a mesma sala.',
    warning: 'Tratamento histórico-documental. O interesse está no espetáculo científico, não em promessa terapêutica.',
  },
  {
    code: 'FOR-003',
    displayDate: '1818',
    title: 'Andrew Ure e o cadáver em Glasgow',
    label: 'Relato pericial',
    theme: 'Matthew Clydesdale, corrente galvânica e a violência das contrações',
    text: 'Em Glasgow, Andrew Ure aplicou correntes no corpo de Matthew Clydesdale e produziu movimentos que perturbaram a plateia. O episódio exemplifica como a medicina do período oscilava entre observação rigorosa, ambição fisiológica e imaginação pública de retorno.',
    warning: 'Contexto histórico e médico-legal. O texto não reproduz técnica nem orientação experimental.',
  },
  {
    code: 'FOR-004',
    displayDate: 'séc. XIX',
    title: 'Espasmo cadavérico',
    label: 'Fenômeno observado',
    theme: 'Contração muscular no contexto da morte, sem equivalência com retorno à vida',
    text: 'O espasmo cadavérico entrou para o vocabulário médico-legal como forma específica de contração associada a certas circunstâncias de morte. Sua importância editorial está em mostrar como pequenos sinais musculares foram muitas vezes exagerados pela imaginação popular e confundidos com algo sobrenatural.',
    warning: 'Fenômeno médico-legal tratado de modo cultural e responsável. Não é instrução diagnóstica.',
  },
  {
    code: 'FOR-005',
    displayDate: 'séc. XIX',
    title: 'Rigidez cadavérica',
    label: 'Transformação pós-morte',
    theme: 'Tempo, músculo e leitura do corpo após o fim da circulação',
    text: 'A rigidez cadavérica tornou-se um dos sinais clássicos pelos quais o corpo pós-morte passou a ser lido. Ela interessa menos como técnica isolada e mais como marco da passagem do cadáver para o tempo material da decomposição, quando o músculo registra a morte em sua própria alteração.',
    warning: 'Assunto pericial em chave editorial. O capítulo não ensina investigação forense nem estimativa prática.',
  },
  {
    code: 'FOR-006',
    displayDate: 'observação médico-legal histórica',
    title: 'Gases, ruídos e movimentos pós-morte',
    label: 'Decomposição e medo popular',
    theme: 'Fenômenos naturais que alimentaram lendas de assombração e retorno',
    text: 'Ruídos, distensões, pequenas alterações de posição e outros efeitos da decomposição alimentaram por séculos a crença de que o morto ainda reagia. O que a cultura leu como inquietação do cadáver, a observação médico-legal passou a registrar como processo natural do corpo em transformação.',
    warning: 'Fenômenos naturais descritos de forma histórica e cultural, não como guia de exame post mortem.',
  },
  {
    code: 'FOR-007',
    displayDate: 'séc. XVIII–XIX',
    title: 'Catalepsia e medo do enterro vivo',
    label: 'Pânico de diagnóstico equivocado',
    theme: 'Estados confundidos com morte e o imaginário dos caixões de segurança',
    text: 'A possibilidade de confundir certos estados do corpo com a morte produziu um medo social persistente: o enterro vivo. Catalepsia, inconsciência profunda e incerteza diagnóstica deram origem a mecanismos de segurança, literatura de pânico e uma cultura do alarme funerário.',
    warning: 'Tema histórico e social. Não é material clínico para reconhecimento de estado neurológico.',
  },
  {
    code: 'FOR-008',
    displayDate: 'séc. XVIII–XIX',
    title: 'Autópsia e medicina legal',
    label: 'Corpo como laudo',
    theme: 'Causa mortis, exame, prova e passagem do mistério para o documento',
    text: 'A autópsia consolidou o cadáver como arquivo material da morte. Ao transformar o corpo em prova documental, a medicina legal trocou parte do imaginário do prodígio pelo vocabulário da lesão, da causa mortis e da responsabilidade. O morto passa a falar por indícios, e não por retorno.',
    warning: 'Medicina legal tratada em contexto cultural, documental e ético. O texto não oferece instrução de autópsia.',
  },
]

const medicalDeathChapter = [
  {
    ref: 'MED-001',
    displayDate: 'séc. XX–XXI',
    tag: 'MEDICINA REAL',
    title: 'Parada cardíaca e ressuscitação clínica',
    theme: 'RCP/CPR, emergência, circulação e tentativa de reversão clínica',
    text: 'Na medicina de emergência, a parada cardíaca é tratada como interrupção súbita da circulação e da oxigenação eficazes. A ressuscitação clínica pertence ao campo da resposta protocolar que tenta restaurar fluxo sanguíneo e ganhar tempo para cuidados avançados. No Arquivo Morto, esse cenário surge menos como milagre e mais como linguagem de urgência, limite fisiológico e decisão técnica.',
    warning: 'Contexto médico real. Esta ficha não ensina procedimentos nem substitui treinamento, atendimento ou orientação profissional.',
  },
  {
    ref: 'MED-002',
    displayDate: 'séc. XX',
    tag: 'MEDICINA REAL · BIOÉTICA',
    title: 'Morte cerebral',
    theme: 'Critérios médicos, irreversibilidade e diferença entre morte cerebral e coma',
    text: 'Morte cerebral designa a perda completa e irreversível das funções cerebrais, determinada por critérios médicos rigorosos. Não é sinônimo de coma, sedação profunda ou estado vegetativo. A força editorial deste tema está na precisão com que a medicina moderna redefine o fim: o corpo pode permanecer aquecido e ventilado, mas a pessoa já foi legal e clinicamente reconhecida como morta.',
    warning: 'Campo clínico e bioético. O capítulo diferencia morte cerebral de outras condições neurológicas sem oferecer aconselhamento médico.',
  },
  {
    ref: 'MED-003',
    displayDate: 'séc. XX–XXI',
    tag: 'BIOÉTICA CLÍNICA',
    title: 'Suporte artificial de vida',
    theme: 'Ventilação, UTI, máquinas e a fronteira entre manutenção orgânica e presença humana',
    text: 'Ventiladores, drogas vasoativas, monitores e terapia intensiva deslocaram a morte para uma zona técnica em que funções corporais podem ser sustentadas por longos períodos. Essa infraestrutura salva vidas, mas também obriga famílias e equipes a pensar a diferença entre organismo mantido, prognóstico possível e ausência irreversível. O dilema deixa de ser apenas biológico e torna-se ético, jurídico e afetivo.',
    warning: 'Medicina real em contexto filosófico e ético. O texto discute limites terapêuticos, não recomenda condutas individuais.',
  },
  {
    ref: 'MED-004',
    displayDate: 'séc. XX–XXI',
    tag: 'ÉTICA INSTITUCIONAL',
    title: 'Transplantes',
    theme: 'Órgãos, tecidos, doação e continuidade corporal entre pessoas',
    text: 'Os transplantes reorganizam a imaginação do corpo: partes de uma vida sustentam a continuidade de outra. Nesse campo, a medicina depende de critérios diagnósticos, confiança pública, sistemas de doação e regras éticas para aquisição e distribuição de órgãos e tecidos. O Arquivo Morto trata esse tema como uma fronteira em que técnica, generosidade e política institucional se encontram sob vigilância moral constante.',
    warning: 'Medicina real e ética pública. O enfoque está em doação, critérios e responsabilidade institucional, não em elegibilidade clínica.',
  },
  {
    ref: 'MED-004B',
    displayDate: '1920s–1940',
    tag: 'HISTÓRIA DA MEDICINA · BIOÉTICA',
    title: 'Sergei Brukhonenko e o autojektor',
    theme: 'circulação artificial, cinema científico soviético e a fronteira experimental da reanimação',
    text: 'O médico soviético Sergei Brukhonenko desenvolveu o autojektor, um dos primeiros aparelhos de circulação extracorpórea. Seus experimentos com cães, divulgados no filme Experiments in the Revival of Organisms, entraram para o imaginário da reanimação moderna: órgãos mantidos por máquina, reflexos preservados e a imagem perturbadora de uma vida reduzida a circulação, tubo e aparelho.',
    warning: 'Documento histórico controverso. O Arquivo Morto trata o caso como história da medicina, propaganda científica e bioética experimental, não como prova simples de retorno real da vida.',
  },
  {
    ref: 'MED-005',
    displayDate: 'séc. XX–XXI',
    tag: 'ESPECULAÇÃO CULTURAL',
    title: 'Criogenia',
    theme: 'Preservação em baixa temperatura, promessa futura e desejo de escapar da decomposição',
    text: 'A criogenia ocupa um território ambíguo entre tecnologia de preservação e imaginação cultural da posteridade. Embora use linguagem científica e infraestrutura real, sua promessa de eventual retorno permanece especulativa e não equivale à ressuscitação clínica aceita pela medicina contemporânea. Por isso ela interessa ao Arquivo Morto como sintoma moderno da recusa em aceitar a decadência final do corpo.',
    warning: 'Especulação cultural com aparência técnica. O capítulo não apresenta criogenia como terapia comprovada ou reversão real da morte.',
  },
  {
    ref: 'MED-006',
    displayDate: 'séc. XXI',
    tag: 'TECNOLOGIA EMERGENTE',
    title: 'Biotecnologia e reparo do corpo',
    theme: 'Próteses, engenharia de tecidos, medicina regenerativa e fronteiras materiais reais',
    text: 'Próteses avançadas, bioimpressão, engenharia de tecidos e terapias regenerativas alteraram o vocabulário do reparo corporal. Aqui a modernidade abandona o sonho de vencer a morte por completo e concentra-se em restaurar função, prolongar autonomia e substituir estruturas danificadas. Trata-se de ciência real, mas prudente: a reconstrução do corpo não elimina a mortalidade, apenas desloca alguns de seus limites.',
    warning: 'Ciência atual e prudência editorial. O texto descreve campos de pesquisa e cuidado, sem prometer cura total ou imortalidade biológica.',
  },
  {
    ref: 'MED-007',
    displayDate: 'séc. XXI',
    tag: 'TECNOLOGIA · CULTURA',
    title: 'IA, luto digital e simulações dos mortos',
    theme: 'Chatbots, vozes sintéticas, avatares e presença artificial após a perda',
    text: 'Memoriais digitais, reconstruções de voz e chatbots treinados em rastros textuais criaram uma nova forma de presença residual. Não se trata de retorno dos mortos, mas de simulações que reorganizam luto, memória e intimidade tecnológica. Esta ficha pertence ao presente sombrio do Arquivo Morto: a pessoa ausente persiste como interface, arquivo e projeção conversacional.',
    warning: 'Tecnologia emergente e especulação cultural. O foco está no impacto ético do luto digital, não em equivaler simulação a sobrevivência real.',
  },
  {
    ref: 'MED-008',
    displayDate: 'bioética contemporânea',
    tag: 'BIOÉTICA E CUIDADO',
    title: 'Diretivas antecipadas e fim de vida',
    theme: 'Vontade do paciente, cuidado, autonomia e limites terapêuticos',
    text: 'Diretivas antecipadas deslocam o debate sobre morte para antes da crise, permitindo que preferências sobre suporte, reanimação e representantes de saúde sejam registradas com clareza. Nesse contexto, a modernidade não tenta apenas adiar o fim; tenta governá-lo com linguagem jurídica, autonomia e cuidado. O tema pertence à bioética porque lembra que nem toda tecnologia disponível precisa ser empregada até o último limite.',
    warning: 'Contexto humano e bioético. O capítulo aborda planejamento e autonomia, não oferece aconselhamento legal ou clínico individual.',
  },
]

const medicalEditorialSources = [
  'American Heart Association — CPR/ECC Guidelines',
  'NHS — Brain death',
  'Cleveland Clinic — Brain Death: What It Is, Stages & Criteria',
  'WHO — Guiding Principles on Human Cell, Tissue and Organ Transplantation',
  'MedlinePlus / NIH — Advance Directives',
  'National Institute on Aging / NIH — Advance Care Planning',
  'Brukhonenko / Experiments in the Revival of Organisms — circulação artificial e documento soviético controverso',
]

const selectedDossiers = [
  {
    registry: 'DOS-001',
    drawer: 'GAVETA 04',
    displayDate: '1803',
    category: 'HISTÓRIA DOCUMENTADA',
    type: 'real',
    title: 'Aldini e George Forster',
    summary: 'Caso fundador do arquivo: eletricidade aplicada ao corpo recém-executado em Londres.',
    visual: 'galvanic-wave',
    subject: 'George Forster',
    condition: 'Executado por enforcamento',
    cause: 'Asfixia por suspensão cervical',
    preservation: 'Corpo frio, rigidez parcial, tecido recém-entregue',
    procedure: 'Corrente galvânica em face e tórax',
    outcome: 'Movimentação facial e reflexos nos membros',
    postMortem: 'Resposta muscular positiva',
    drawerStatus: 'NÃO ENCERRADO',
    risk: 'Acesso restrito',
    stamp: 'NÃO REPETIR O PROCEDIMENTO',
    marginalia: 'A morte foi declarada às 02h17. O movimento começou às 02h43.',
    bodyTemp: '18 °C',
    internalTemp: '4 °C',
    timeOfDeath: '02:17',
    movement: '04:46',
    claimed: 'NÃO RECLAMADO',
  },
  {
    registry: 'DOS-002',
    drawer: 'GAVETA 05',
    displayDate: '1818',
    category: 'HISTÓRIA DOCUMENTADA',
    type: 'real',
    title: 'Andrew Ure e Matthew Clydesdale',
    summary: 'Demonstração escocesa que intensificou o imaginário público da reanimação.',
    visual: 'galvanic-wave',
    subject: 'Matthew Clydesdale',
    condition: 'Cadáver recém-dissecado',
    cause: 'Execução judicial e dissecação subsequente',
    preservation: 'Integridade irregular, musculatura exposta',
    procedure: 'Estimulação elétrica muscular',
    outcome: 'Espasmo violento e expressão facial alterada',
    postMortem: 'Atividade ocular e torácica registrada',
    drawerStatus: 'LACRADA POR DENTRO',
    risk: 'Relatório incompleto',
    stamp: 'MATERIAL DECOMPOSTO',
    marginalia: 'O coração permaneceu imóvel. As mãos, não.',
    bodyTemp: '17 °C',
    internalTemp: '4 °C',
    timeOfDeath: '03:08',
    movement: '03:41',
    claimed: 'IDENTIFICAÇÃO NEGADA',
  },
  {
    registry: 'DOS-006',
    drawer: 'GAVETA 07',
    displayDate: '1818',
    category: 'LITERATURA',
    type: 'literatura',
    title: 'Mary Shelley e Frankenstein',
    summary: 'A literatura transforma o debate científico em mito moderno.',
    visual: 'medical-file',
    subject: 'Criatura sem nome',
    condition: 'Corpo fabricado e abandonado',
    cause: 'Óbito não aplicável / montagem artificial',
    preservation: 'Costuras múltiplas, reconstituição incompleta',
    procedure: 'Assemblagem e animação especulativa',
    outcome: 'Mito fundador do horror científico',
    postMortem: 'Atividade narrativa permanente',
    drawerStatus: 'IDENTIFICAÇÃO INCONCLUSIVA',
    risk: 'Documento parcial',
    stamp: 'RESULTADO INCONCLUSIVO',
    marginalia: 'Certos documentos foram arquivados para que ninguém os encontrasse.',
    bodyTemp: '19 °C',
    internalTemp: '6 °C',
    timeOfDeath: 'N/A',
    movement: 'Registro contínuo',
    claimed: 'CORPO NÃO RECLAMADO',
  },
  {
    registry: 'DOS-003',
    drawer: 'GAVETA 06',
    displayDate: '1921–1922',
    category: 'LITERATURA DE HORROR',
    type: 'literatura',
    title: 'Herbert West, reanimador',
    summary: 'Lovecraft desloca a reanimação para a obsessão química e o horror do laboratório.',
    visual: 'reagent-vial',
    subject: 'Pacientes não homologados',
    condition: 'Inatividade biológica recente',
    cause: 'Óbito variado sob custódia clínica',
    preservation: 'Múltiplos estados de rigidez e degradação',
    procedure: 'Reagente experimental HW-7',
    outcome: 'Retorno hostil e instável',
    postMortem: 'Atividade agressiva recorrente',
    drawerStatus: 'ABERTA SOB QUARENTENA',
    risk: 'Procedimento vetado',
    stamp: 'ACESSO RESTRITO',
    marginalia: 'O experimento foi encerrado. O paciente não.',
    bodyTemp: '21 °C',
    internalTemp: '5 °C',
    timeOfDeath: '04:02',
    movement: '04:11',
    claimed: 'SEM RESPONSÁVEL LEGAL',
  },
  {
    registry: 'HIS-005',
    drawer: 'GAVETA 02',
    displayDate: 'séc. XVIII–XIX',
    category: 'HISTÓRIA SOCIAL',
    type: 'real',
    title: 'Ressurrecionistas',
    summary: 'Mercado clandestino de cadáveres abastece escolas médicas.',
    visual: 'corpse-tag',
    subject: 'Corpos sem tutela',
    condition: 'Violação de sepulturas',
    cause: 'Exumação clandestina',
    preservation: 'Conservação desigual, transporte noturno',
    procedure: 'Remoção e revenda para anfiteatros',
    outcome: 'Normalização clandestina do cadáver como insumo',
    postMortem: 'Deslocamento documental não autorizado',
    drawerStatus: 'SEM REGISTRO DE ENTRADA',
    risk: 'Arquivo sensível',
    stamp: 'RELATÓRIO CORROMPIDO',
    marginalia: 'Nenhum dos presentes soube explicar por que o cadáver abriu os olhos.',
    bodyTemp: '12 °C',
    internalTemp: '7 °C',
    timeOfDeath: 'Desconhecido',
    movement: 'Não confirmado',
    claimed: 'CORPO NÃO RECLAMADO',
  },
  {
    registry: 'PRO-334-B',
    drawer: 'GAVETA 08',
    displayDate: 'data lacrada',
    category: 'FICÇÃO EDITORIAL DO ARQUIVO MORTO',
    type: 'ficcao',
    title: 'Prontuário 334-B',
    summary: 'Ficção editorial própria do Arquivo Morto.',
    visual: 'medical-file',
    subject: 'Indivíduo não identificado',
    condition: 'Morte documentada sem encerramento observável',
    cause: 'Causa mortis não estabelecida',
    preservation: 'Lençol fixado, ausência de decomposição compatível',
    procedure: 'Reabertura de prontuário interditado',
    outcome: 'Paciente reclassificado como pendente',
    postMortem: 'Mudança espontânea de posição',
    drawerStatus: 'UMA GAVETA PERMANECE ABERTA',
    risk: 'Nível vermelho',
    stamp: 'NÃO ABRIR SEM TESTEMUNHAS',
    marginalia: 'O prontuário foi encerrado. A vigília, não.',
    bodyTemp: '18 °C',
    internalTemp: '4 °C',
    timeOfDeath: '02:17',
    movement: '04:46',
    claimed: 'A FAMÍLIA NEGOU A IDENTIFICAÇÃO',
  },
]

const cinemaEntries = [
  {
    id: 'frankenstein-1910',
    label: 'EVIDÊNCIA RECUPERADA 01',
    title: 'Frankenstein (1910)',
    year: '1910',
    layout: 'single',
    intro: 'Primeira adaptação cinematográfica conhecida de Frankenstein. J. Searle Dawley para a Edison Studios transforma o mito em experiência visual primitiva: a criatura aparece como produto de laboratório alquímico, mais visão demoníaca do que monstro trágico moderno. O corpo fabricado deixa o romance de Shelley e ganha forma pública pela primeira vez.',
    evidence: 'LAT-1910-01',
    condition: 'Película ressecada, emulsão estável',
    origin: 'Edison Studios / cópia de arquivo',
    contamination: 'Baixa',
    images: [
      {
        src: '/arquivo-morto/assets/cinema/frankenstein-1910-poster.jpg',
        alt: 'Pôster do Frankenstein de 1910, Edison Studios',
        caption: 'Edison Studios, 1910 — o mito no cinema silencioso e nos efeitos primitivos',
        role: 'hero',
      },
    ],
    meta: ['REGISTRO AUDIOVISUAL', 'CONTEÚDO: criação artificial', 'STATUS: liberado para consulta'],
    text: 'A criatura ainda aparece como visão demoníaca, mais próxima de uma aparição do que do monstro trágico moderno. O cinema silencioso registra o mito antes de ele se tornar ícone visual — a alquimia do laboratório precede a eletricidade da Universal.',
  },
  {
    id: 'frankenstein-1931',
    label: 'EVIDÊNCIA RECUPERADA 02',
    title: 'Frankenstein (1931) — James Whale e Boris Karloff',
    year: '1931',
    layout: 'feature-duo',
    intro: 'James Whale e a Universal consolidam o ícone visual definitivo: testa marcada, corpo pesado, eletricidade, laboratório e tragédia. Boris Karloff transforma a criatura em símbolo reconhecível mundialmente, mesmo por quem nunca leu Mary Shelley. É aqui que nasce a imagem do horror moderno.',
    evidence: 'LAT-1931-03',
    condition: 'Negativo preservado com abrasão lateral',
    origin: 'Universal Pictures',
    contamination: 'Moderada',
    images: [
      {
        src: '/arquivo-morto/assets/cinema/frankenstein-1931-karloff-maria.jpg',
        alt: 'Boris Karloff como a criatura e a menina Maria, Frankenstein 1931',
        caption: 'A criatura e Maria — inocência, brutalidade e rejeição social',
        role: 'hero',
      },
      {
        src: '/arquivo-morto/assets/cinema/frankenstein-1931-poster.jpg',
        alt: 'Pôster clássico de Frankenstein, Universal Pictures, 1931',
        caption: 'Universal Pictures, 1931 — pôster clássico, ícone mundial',
        role: 'support',
      },
    ],
    meta: ['REGISTRO AUDIOVISUAL', 'CONTEÚDO: criatura elétrica', 'STATUS: sob custódia'],
    text: 'O filme consolida a imagem popular do monstro: testa marcada, corpo pesado, eletricidade e laboratório. Karloff cria um ícone visual permanente. A cena com a menina Maria concentra a ambiguidade central do mito: o monstro não entende o mundo, não domina a própria força e se torna ameaça sem nascer moralmente maligno.',
  },
  {
    id: 'mary-shelley-1994',
    label: 'EVIDÊNCIA RECUPERADA 03',
    title: "Mary Shelley's Frankenstein (1994) — Robert De Niro como criatura",
    year: '1994',
    layout: 'feature-trio',
    intro: 'Kenneth Branagh tenta devolver Frankenstein ao drama moral do romance: criação, abandono, culpa, revolta e desejo de reconhecimento. A criatura interpretada por Robert De Niro não é apenas monstro visual — é sujeito ferido, consciente e vingativo que cobra do criador a responsabilidade pela vida que recebeu.',
    evidence: 'LAT-1994-10',
    condition: 'Cópia íntegra, manchas de umidade no estojo',
    origin: 'TriStar / arquivo doméstico',
    contamination: 'Baixa',
    images: [
      {
        src: '/arquivo-morto/assets/cinema/Frankenstein-de-Mary-Shelley-10.jpg',
        alt: 'O corpo reconstruído, Frankenstein 1994, Kenneth Branagh',
        caption: 'Kenneth Branagh, 1994 — costura, carne e cicatriz',
        role: 'hero',
      },
      {
        src: '/arquivo-morto/assets/cinema/Frankenstein-de-Mary-Shelley-13.jpg',
        alt: 'Criador e criatura, confronto moral, Frankenstein 1994',
        caption: 'Criador e criatura — cobrança, espelho e condenação',
        role: 'support',
      },
      {
        src: '/arquivo-morto/assets/cinema/Frankenstein-de-Mary-Shelley-20.jpg',
        alt: 'A criatura excluída, Frankenstein 1994',
        caption: 'Corpo rejeitado, alma em busca de reconhecimento',
        role: 'support',
      },
    ],
    meta: ['REGISTRO AUDIOVISUAL', 'CONTEÚDO: costura e abandono', 'STATUS: liberado com ressalvas'],
    text: 'A criatura de De Niro fala, sente, aprende e cobra do criador a responsabilidade pela vida que recebeu. O horror nasce menos do susto e mais da pergunta moral: quem cria um ser abandonado também cria sua dor. O filme acentua a dimensão corporal do mito — costura, carne e cicatriz como assinatura permanente do abandono.',
  },
  {
    id: 'reanimator-1985',
    label: 'EVIDÊNCIA RECUPERADA 04',
    title: 'Re-Animator (1985) — Lovecraft, necrotério e ciência profanada',
    year: '1985',
    layout: 'feature-duo',
    intro: 'Stuart Gordon leva a reanimação para outro território: sai o gótico romântico e entra o horror cult, ácido, viscoso e excessivo. Herbert West não quer compreender a alma — ele quer vencer a morte como procedimento técnico. O reagente verde transforma o laboratório universitário em necrotério de experimentos fracassados.',
    evidence: 'LAT-1985-07',
    condition: 'Fita contaminada por fungo periférico',
    origin: 'Registro universitário apócrifo',
    contamination: 'Alta',
    images: [
      {
        src: '/arquivo-morto/assets/cinema/reanimator-1985.jpg',
        alt: 'Re-Animator 1985, Stuart Gordon, Herbert West',
        caption: 'Stuart Gordon, 1985 — seringa, reagente verde e arrogância científica',
        role: 'hero',
      },
      {
        src: '/arquivo-morto/assets/cinema/reanimator-1985-creature.jpg',
        alt: 'Cadáver reanimado, Re-Animator 1985',
        caption: 'O reanimado não volta como pessoa restaurada — volta como erro biológico',
        role: 'support',
      },
    ],
    meta: ['REGISTRO AUDIOVISUAL', 'CONTEÚDO: necrotério e reagente', 'STATUS: contaminação elevada'],
    text: 'O filme transforma o conto de Lovecraft em cinema físico: seringa, reagente verde, cadáver, necrotério e arrogância científica. A reanimação aqui não é milagre nem tragédia nobre; é violação direta do corpo morto. Herbert West é uma inversão moderna de Victor Frankenstein: menos romântico, mais frio, mais técnico e obcecado — ele testa, repete, corrige e profana.',
  },
  {
    id: 'romero',
    label: 'EVIDÊNCIA RECUPERADA 05',
    title: 'George A. Romero — Noite dos Mortos Vivos e o zumbi moderno',
    year: '1968–1985',
    layout: 'feature-duo',
    intro: 'Romero funda o zumbi moderno e transforma o morto-vivo em linguagem da cultura pop. Seus zumbis não são só monstros: são multidão, colapso social, cerco doméstico e repetição automática dos hábitos humanos depois da morte. A Noite dos Mortos Vivos cria a gramática que todo o cinema de zumbi posterior vai herdar.',
    evidence: 'LAT-1968-11',
    condition: 'Película recondicionada, bordas frágeis',
    origin: 'Arquivo televisivo recuperado',
    contamination: 'Moderada',
    images: [
      {
        src: '/arquivo-morto/assets/cinema/night-of-the-living-dead-1968.jpg',
        alt: 'Night of the Living Dead, George A. Romero, 1968',
        caption: 'Night of the Living Dead, 1968 — cerco doméstico, origem do zumbi moderno',
        role: 'hero',
      },
      {
        src: '/arquivo-morto/assets/cinema/night-of-the-living-dead-1968-b.webp',
        alt: 'Cena de Night of the Living Dead, George A. Romero, 1968',
        caption: 'Os mortos retornam, cercam os vivos e transformam a casa em bunker',
        role: 'support',
      },
    ],
    meta: ['REGISTRO AUDIOVISUAL', 'CONTEÚDO: cerco doméstico', 'STATUS: vigilância contínua'],
    text: 'O filme de 1968 funda o zumbi moderno: cadáveres retornam, cercam os vivos e transformam a casa em bunker. O horror está no cerco, mas também na desconfiança entre os sobreviventes. Em Dawn of the Dead (1978), o shopping vira mausoléu do consumo — os mortos caminham pelas lojas porque ainda repetem os gestos de quando estavam vivos. A trilogia cresce como diagnóstico cultural: cerco, consumo, militarização.',
  },
  {
    id: 'snyder-2004',
    label: 'EVIDÊNCIA RECUPERADA 06',
    title: 'Madrugada dos Mortos (2004) — Zack Snyder e o zumbi veloz',
    year: '2004',
    layout: 'feature-duo',
    intro: 'A refilmagem de 2004 pega a base de Romero e acelera tudo: o morto-vivo deixa de ser massa lenta e vira explosão física. É o apocalipse como colapso imediato, urbano e agressivo — o zumbi do século XXI não caminha, ele corre.',
    evidence: 'LAT-2004-12',
    condition: 'Mídia íntegra, estojo violado',
    origin: 'Acervo comercial reaproveitado',
    contamination: 'Média',
    images: [
      {
        src: '/arquivo-morto/assets/cinema/madrugada-dos-mortos-2004-01.webp',
        alt: 'Madrugada dos Mortos, Zack Snyder, 2004 — zumbis velozes',
        caption: 'Madrugada dos Mortos, 2004 — colapso instantâneo e zumbi veloz',
        role: 'hero',
      },
      {
        src: '/arquivo-morto/assets/cinema/madrugada-dos-mortos-2004-02.avif',
        alt: 'Madrugada dos Mortos, Zack Snyder, 2004 — terror de sobrevivência',
        caption: 'Zack Snyder, 2004 — diferente do ritmo social e satírico de Romero',
        role: 'support',
      },
    ],
    meta: ['REGISTRO AUDIOVISUAL', 'CONTEÚDO: contágio veloz', 'STATUS: exame aberto'],
    text: 'Snyder transforma o pânico em velocidade. A ameaça não avança como multidão hipnótica; ela corre, invade, rasga e derruba a ordem social em minutos. O remake troca a sátira lenta pelo terror de sobrevivência: fugir, improvisar, desconfiar e sobreviver enquanto o mundo acaba.',
  },
  {
    id: 'del-toro',
    label: 'EVIDÊNCIA RECUPERADA 07',
    title: 'Frankenstein — Guillermo del Toro',
    year: '2025',
    layout: 'feature-trio',
    intro: 'O Frankenstein de Guillermo del Toro pertence à linhagem dos monstros trágicos. Em vez de tratar a criatura apenas como ameaça, a leitura contemporânea recoloca beleza, dor, abandono e humanidade no centro da imagem monstruosa — conversa direta com Shelley, Karloff e De Niro.',
    evidence: 'LAT-2025-03',
    condition: 'Material recente, armazenamento sem danos',
    origin: 'Registro promocional contemporâneo',
    contamination: 'Baixa',
    images: [
      {
        src: '/arquivo-morto/assets/cinema/frankenstein-2025-03.jpg',
        alt: 'Frankenstein de Guillermo del Toro, 2025 — a criatura em cena',
        caption: 'Guillermo del Toro, 2025 — monstro trágico, melancolia e compaixão',
        role: 'hero',
      },
      {
        src: '/arquivo-morto/assets/cinema/frankenstein-2025-01.jpg',
        alt: 'Frankenstein de Guillermo del Toro, 2025',
        caption: 'Del Toro, 2025 — beleza e dor no corpo impossível',
        role: 'support',
      },
      {
        src: '/arquivo-morto/assets/cinema/frankenstein-2025-02.jpg',
        alt: 'Frankenstein de Guillermo del Toro, 2025 — criatura e abandono',
        caption: 'Del Toro, 2025 — o monstro conversa com Shelley, Karloff e De Niro',
        role: 'support',
      },
    ],
    meta: ['REGISTRO AUDIOVISUAL', 'CONTEÚDO: monstro trágico', 'STATUS: recém-catalogado'],
    text: 'Del Toro sempre se interessou por criaturas marginalizadas, corpos impossíveis e monstros mais humanos do que os homens que os perseguem. Frankenstein encaixa diretamente nessa poética. O novo Frankenstein não precisa substituir as versões anteriores — ele conversa com elas: Shelley, Karloff, De Niro e toda a tradição do corpo fabricado retornam como arquivo vivo.',
  },
]

function ArchiveVisual({ type = 'medical-file', label, code, size = 'md' }) {
  return (
    <div className={`archive-visual av-${size}`} aria-hidden="true">
      <div className={`archive-visual-frame visual-${type}`} />
      {(label || code) && (
        <div className="visual-meta">
          {label && <span className="visual-label archive-date">{label}</span>}
          {code && <span className="visual-code">{code}</span>}
        </div>
      )}
    </div>
  )
}

function App() {
  const [mode, setMode] = useState('arquivo')
  const [archiveLive, setArchiveLive] = useState(false)
  const rootStyle = {
    '--asset-capa-arquivo': `url("${assetPath('assets/cinema/capa-arquivo.png')}")`,
    '--asset-hero-arquivo': `url("${assetPath('assets/cinema/image.arquivo.png')}")`,
  }

  return (
    <div
      className={`root${mode === 'terminal' ? ' mode-terminal' : ''}${archiveLive ? ' archive-live' : ''}`}
      style={rootStyle}
    >
      <div className="noise-overlay" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      {/* SITE HEADER — navegação fixa */}
      <header className="site-header">
        <nav className="nav">
          <span className="nav-brand">Arquivo Morto</span>
          <div className="nav-links">
            <a href="#destaque" className="nav-link">Início</a>
            <a href="#dossies" className="nav-link">Dossiês</a>
            <a href="#linha" className="nav-link">Linha do Tempo</a>
            <a href="#cinema" className="nav-link">Cinema</a>
            <a href="#sobre" className="nav-link">Sobre</a>
          </div>
          <div className="header-actions">
            <button
              className={`archive-live-toggle${archiveLive ? ' active' : ''}`}
              onClick={() => setArchiveLive(v => !v)}
              aria-pressed={archiveLive}
              aria-label="Alternar modo Arquivo Vivo"
            >
              Arquivo Vivo
            </button>
            <button
              className="mode-toggle"
              data-mode={mode}
              onClick={() => setMode(m => m === 'arquivo' ? 'terminal' : 'arquivo')}
              aria-label="Alternar modo de visualização"
            >
              {mode === 'arquivo' ? 'Modo Terminal' : 'Modo Arquivo'}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE BOTTOM NAV — visível apenas em ≤720px */}
      <nav className="mobile-nav-bar" aria-label="Navegação rápida">
        <a href="#destaque" className="mobile-nav-link">Início</a>
        <a href="#dossies" className="mobile-nav-link">Dossiês</a>
        <a href="#linha" className="mobile-nav-link">Linha</a>
        <a href="#cinema" className="mobile-nav-link">Cinema</a>
        <a href="#sobre" className="mobile-nav-link">Sobre</a>
      </nav>

      <main className="page">

        {/* HERO */}
        <header className="hero">
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-layout">
            <div className="hero-content">
              <div className="archive-meta hero-meta">
                <span className="meta-tag">Fundado em 1803</span>
                <span className="meta-sep" aria-hidden="true">/</span>
                <span className="meta-tag status-lacrado">Classificação restrita</span>
                <span className="meta-sep" aria-hidden="true">/</span>
                <span className="meta-tag">Registro central</span>
              </div>
              <p className="hero-kicker">Instituto de Registros Pós-Morte</p>
              <h1 className="hero-title">Arquivo Morto</h1>
              <h2 className="hero-subtitle">Literatura, ciência e documentos sobre os limites entre corpo, experiência, morte e reanimação.</h2>
              <p className="hero-summary">
                Este arquivo reúne casos históricos, obras, experimentos e registros classificados relacionados ao que permanece depois do óbito.
              </p>
              <p className="hero-editorial-note">
                Setor de documentação, ciência, literatura e ocorrências pós-morte.
              </p>
              <div className="hero-actions actions">
                <a href="#dossies" className="btn btn-primary">Acessar dossiês</a>
                <a href="#linha" className="btn btn-secondary">Linha do tempo</a>
              </div>
            </div>
          </div>
        </header>

        <section className="registry-panel-section" aria-labelledby="registro-central-heading">
          <div className="registry-panel-shell">
            <div className="registry-panel-header">
              <span className="registry-panel-kicker">ARQ-MORTO</span>
              <h3 id="registro-central-heading" className="registry-panel-title">Registro Central</h3>
            </div>
            <dl className="registry-panel-grid">
              <div>
                <dt>Setor</dt>
                <dd>Pós-morte</dd>
              </div>
              <div>
                <dt>Classificação</dt>
                <dd>Restrito</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Ativo</dd>
              </div>
              <div>
                <dt>Fundação</dt>
                <dd>1803</dd>
              </div>
              <div>
                <dt>Arquivos indexados</dt>
                <dd>008</dd>
              </div>
              <div>
                <dt>Última atualização</dt>
                <dd>27 JUL 2026</dd>
              </div>
            </dl>
          </div>
        </section>

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

        {/* A HUMANIDADE CONTRA A MORTE */}
        <section className="section humanity-section" aria-labelledby="humanity-heading">
          <div className="section-header">
            <p className="section-label">Capítulo I</p>
            <h3 id="humanity-heading">A humanidade contra a morte</h3>
            <p className="history-subtitle">
              Antes do laboratório, antes da eletricidade e antes do cinema, já existia a tentativa humana de negociar com o fim.
            </p>
          </div>
          <div className="history-grid">
            {humanityAgainstDeath.map((entry) => (
              <article className="history-card" key={entry.era}>
                <div className="history-card-head">
                  <span className="archive-era-label history-period">{entry.period}</span>
                  <span className="history-focus">{entry.focus}</span>
                </div>
                <h4 className="history-title">{entry.era}</h4>
                <p className="history-theme">{entry.theme}</p>
                <p className="history-text">{entry.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* NECROMANCIA, ALQUIMIA E O DESEJO DE RETORNO */}
        <section className="section occult-section" aria-labelledby="occult-heading">
          <div className="section-header">
            <p className="section-label">Capítulo II</p>
            <h3 id="occult-heading">Necromancia, alquimia e o desejo de retorno</h3>
            <p className="occult-subtitle">
              Entre o rito e o laboratório, a humanidade tentou falar com os mortos, prolongar a vida e imaginar matéria obedecendo ao espírito.
            </p>
          </div>
          <section className="occult-visual-board" aria-label="Iconografia de necromancia, alquimia e criação artificial">
            <div className="occult-visual-intro">
              <span className="archive-date">ICONOGRAFIA OCULTA</span>
              <h4>Pranchas visuais do desejo de retorno</h4>
              <p>Antes da eletricidade médica, o imaginário da reanimação passou por grimórios, laboratórios alquímicos, símbolos herméticos, criaturas de barro e máquinas que imitavam organismos vivos.</p>
            </div>
            <div className="occult-visual-grid">
              <figure className="occult-visual-card occult-visual-card-large">
                <div className="occult-visual-frame">
                    <img
                    src={assetPath('/arquivo-morto/assets/archive/occult-alchemy-lab.jpg')}
                    alt="Alquimista em seu laboratório, Pieter Bruegel, séc. XVI"
                    loading="lazy"
                  />
                </div>
                <figcaption className="occult-visual-caption">
                  <strong>Alquimia e laboratório</strong>
                  <span>Pieter Bruegel, séc. XVI — matéria, espírito, transmutação e o sonho de prolongar a vida.</span>
                </figcaption>
              </figure>
              <div className="occult-visual-stack">
                <figure className="occult-visual-card">
                  <div className="occult-visual-frame">
                    <img
                      src={assetPath('/arquivo-morto/assets/archive/occult-john-dee.jpg')}
                      alt="Retrato de John Dee, matemático, astrólogo e mago elisabetano"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="occult-visual-caption">
                    <strong>John Dee</strong>
                    <span>Matemática, astrologia, cabala e linguagem angélica.</span>
                  </figcaption>
                </figure>
                <figure className="occult-visual-card">
                  <div className="occult-visual-frame">
                    <img
                      src={assetPath('/arquivo-morto/assets/archive/occult-golem.jpg')}
                      alt="O Golem e o Rabino Loew, ilustração histórica"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="occult-visual-caption">
                    <strong>Golem</strong>
                    <span>Matéria obediente, barro, palavra e criação artificial.</span>
                  </figcaption>
                </figure>
                <figure className="occult-visual-card">
                  <div className="occult-visual-frame">
                    <img
                      src={assetPath('/arquivo-morto/assets/archive/occult-automaton.jpg')}
                      alt="O Pato Mecânico de Vaucanson, autômato do século XVIII"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="occult-visual-caption">
                    <strong>Autômatos</strong>
                    <span>O Pato de Vaucanson — máquinas que imitam vida antes da biologia moderna.</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <div className="occult-grid">
            {occultReturnChapter.map((entry) => (
              <article className="occult-card" key={entry.mark}>
                <div className="occult-card-head">
                  <span className="occult-period archive-date">{entry.displayDate}</span>
                  <span className="occult-category">{entry.category}</span>
                </div>
                <h4 className="occult-title">{entry.title}</h4>
                <p className="occult-theme">{entry.theme}</p>
                <p className="occult-text">{entry.text}</p>
                <p className="occult-warning">{entry.warning}</p>
              </article>
            ))}
          </div>
        </section>

        {/* DO CORPO SAGRADO AO CORPO ESTUDADO */}
        <section className="section body-study-section" aria-labelledby="body-study-heading">
          <div className="section-header">
            <p className="section-label">Capítulo III</p>
            <h3 id="body-study-heading">Do corpo sagrado ao corpo estudado</h3>
            <p className="body-study-subtitle">
              Quando o cadáver deixou de ser apenas relíquia, pecado ou mistério, tornou-se também matéria de estudo.
            </p>
          </div>
          <div className="anatomy-visual-board">
            <figure className="anatomy-visual-main">
              <div className="anatomy-visual-frame">
                <img
                  src={assetPath('/arquivo-morto/assets/archive/anatomy-lesson.jpg')}
                  alt="A Lição de Anatomia do Dr. Nicolaes Tulp, Rembrandt van Rijn, 1632"
                  loading="lazy"
                />
              </div>
              <figcaption className="anatomy-visual-caption">
                A Lição de Anatomia do Dr. Nicolaes Tulp · Rembrandt, 1632 — Wikimedia Commons / Domínio público
              </figcaption>
            </figure>
            <div className="anatomy-visual-stack">
              <figure className="anatomy-visual-card">
                <div className="anatomy-visual-frame">
                  <img
                    src={assetPath('/arquivo-morto/assets/archive/vesalius-anatomy.jpg')}
                    alt="Prancha anatômica de De Humani Corporis Fabrica, Andreas Vesalius, 1543"
                    loading="lazy"
                  />
                </div>
                <figcaption className="anatomy-visual-caption">
                  Vesalius · De Humani Corporis Fabrica, 1543
                </figcaption>
              </figure>
              <figure className="anatomy-visual-card">
                <div className="anatomy-visual-frame">
                  <img
                    src={assetPath('/arquivo-morto/assets/archive/vesalius-skeleton.jpg')}
                    alt="Prancha do esqueleto de De Humani Corporis Fabrica, Andreas Vesalius, 1543"
                    loading="lazy"
                  />
                </div>
                <figcaption className="anatomy-visual-caption">
                  Vesalius · esqueleto, De Humani Corporis Fabrica, 1543
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="body-study-grid">
            {bodyStudyChapter.map((entry) => (
              <article className="body-study-card" key={entry.code}>
                <div className="body-study-card-head">
                  <span className="body-study-period archive-date">{entry.displayDate}</span>
                  <span className="anatomy-label">{entry.label}</span>
                </div>
                <h4 className="body-study-title">{entry.title}</h4>
                <p className="body-study-theme">{entry.theme}</p>
                <p className="body-study-text">{entry.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* GALVANISMO, MEDICINA LEGAL E SINAIS DO CADÁVER */}
        <section className="section forensic-section" aria-labelledby="forensic-heading">
          <div className="section-header">
            <p className="section-label">Capítulo IV</p>
            <h3 id="forensic-heading">Galvanismo, medicina legal e sinais do cadáver</h3>
            <p className="forensic-subtitle">
              Antes da morte se tornar protocolo hospitalar, ela foi lida no músculo, na pele, no rigor, no gás, no silêncio e nos movimentos que pareciam vida.
            </p>
          </div>
          <div className="forensic-grid">
            {forensicDeathChapter.map((entry) => (
              <article className="forensic-card" key={entry.code}>
                <div className="forensic-card-head">
                  <span className="forensic-period archive-date">{entry.displayDate}</span>
                  <span className="forensic-label">{entry.label}</span>
                </div>
                <h4 className="forensic-title">{entry.title}</h4>
                <p className="forensic-theme">{entry.theme}</p>
                <p className="forensic-text">{entry.text}</p>
                <p className="forensic-warning">{entry.warning}</p>
              </article>
            ))}
          </div>
        </section>

        {/* A MORTE TÉCNICA: MEDICINA, CORPO E FRONTEIRAS ATUAIS */}
        <section className="section modern-death-section" aria-labelledby="modern-death-heading">
          <div className="section-header">
            <p className="section-label">Capítulo V</p>
            <h3 id="modern-death-heading">A morte técnica: medicina, corpo e fronteiras atuais</h3>
            <p className="medical-subtitle">
              Na modernidade, vencer a morte deixou de ser apenas mito ou ritual: tornou-se linguagem de emergência, UTI, transplante, protocolo, bioética e tecnologia.
            </p>
          </div>

          <div className="bioethics-note">
            <span className="bioethics-title">Nota médica e bioética</span>
            <p>
              O Arquivo Morto trata medicina moderna apenas em contexto cultural, histórico e bioético. Esta seção não substitui orientação profissional, não ensina procedimentos médicos e não recomenda tratamentos. O objetivo é examinar como a modernidade transformou a morte em protocolo, fronteira técnica e dilema humano.
            </p>
            <span className="source-head">Base editorial oficial</span>
            <ul className="source-list">
              {medicalEditorialSources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </div>

          <div className="medical-grid">
            {medicalDeathChapter.map((entry) => (
              <article className="medical-card" key={entry.ref}>
                <div className="medical-card-head">
                  <span className="medical-period archive-date">{entry.displayDate}</span>
                  <span className="medical-tag">{entry.tag}</span>
                </div>
                <h4 className="medical-title">{entry.title}</h4>
                <p className="medical-theme">{entry.theme}</p>
                <p className="medical-text">{entry.text}</p>
                <p className="medical-warning">{entry.warning}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="destaque" className="featured-dossier">
          <div className="section-header">
            <p className="section-label">Dossiê fundacional</p>
            <h3>Aldini-Forster, Londres, 1803</h3>
          </div>
          <article className="featured-article">
            <div className="featured-layout">
              <div className="featured-content">
                <div className="featured-meta">
                  <span className="featured-date archive-date">1803</span>
                  <span className="featured-location">Londres</span>
                  <span className="featured-class">DEMONSTRAÇÃO PÚBLICA · OLD BAILEY</span>
                </div>
                <h4 className="featured-title">Giovanni Aldini diante do corpo de George Forster</h4>
                <p className="featured-summary">
                  Em 17 de janeiro de 1803, o sobrinho de Luigi Galvani levou ao Old Bailey uma demonstração que uniu medicina, curiosidade pública e imaginação sombria em torno do cadáver recém-executado de George Forster.
                </p>
        <div className="aldini-visual-gallery" aria-label="Imagens históricas de Giovanni Aldini e galvanismo">
          <figure className="aldini-visual-card aldini-visual-main">
            <img
              src={assetPath('/arquivo-morto/assets/archive/galvanism-corpse.jpg')}
              alt="Gravura histórica de um cadáver galvanizado, séc. XIX"
              loading="lazy"
            />
            <figcaption>
              A Galvanised Corpse · gravura satírica do século XIX que imagina o cadáver reagindo à eletricidade. A cena mistura humor macabro, medo público e fascínio científico: o morto sai do caixão como se a corrente tivesse rompido a fronteira entre corpo, espetáculo e retorno impossível.
            </figcaption>
          </figure>

          <figure className="aldini-visual-card">
            <img
              src={assetPath('/arquivo-morto/assets/archive/aldini-portrait.jpg')}
              alt="Retrato histórico de Giovanni Aldini, físico italiano"
              loading="lazy"
            />
            <figcaption>
              Giovanni Aldini · físico italiano, sobrinho de Luigi Galvani e divulgador teatral do galvanismo.
            </figcaption>
          </figure>

          <figure className="aldini-visual-card">
            <img
              src="https://commons.wikimedia.org/wiki/Special:Redirect/file/J.%20Aldini%2C%20galvanism%20Wellcome%20L0001964.jpg"
              alt="Ilustração histórica de galvanismo associada a Aldini"
              loading="lazy"
            />
            <figcaption>
              Galvanismo em imagem técnica · ilustração ligada à cultura visual dos experimentos de Aldini.
            </figcaption>
          </figure>
        </div>

                <div className="featured-blocks">
                  <div className="featured-block">
                    <span className="featured-block-label">Contexto</span>
                    <p>
                      Giovanni Aldini já era conhecido por ampliar os experimentos elétricos ligados ao nome de Galvani. George Forster, executado em Londres, tornou-se o corpo central dessa exibição pública diante de médicos, curiosos e autoridades.
                    </p>
                  </div>
                  <div className="featured-block">
                    <span className="featured-block-label">O experimento</span>
                    <p>
                      No Old Bailey, em 17 de janeiro de 1803, correntes foram aplicadas ao cadáver. Rosto, mandíbula, um olho e membros reagiram com contrações suficientes para chocar a sala, mas não houve reanimação real nem retorno da vida.
                    </p>
                  </div>
                  <div className="featured-block">
                    <span className="featured-block-label">Por que importa</span>
                    <p>
                      O episódio condensou um medo moderno: a possibilidade de a eletricidade fazer o morto parecer ativo outra vez. Sua sombra atravessa Frankenstein, o horror científico posterior e o vocabulário central do Arquivo Morto.
                    </p>
                  </div>
                  <div className="featured-block featured-editorial">
                    <span className="featured-block-label editorial-tag">Nota editorial</span>
                    <p>
                      Forster não voltou à vida. O que permaneceu foi mais perturbador para a cultura: a cena em que o cadáver entrou no teatro da ciência moderna.
                    </p>
                  </div>
                </div>
              </div>
              <aside className="featured-visual-panel" aria-hidden="true">
                <span className="fvp-tag">OLD BAILEY / 1803</span>
                <ArchiveVisual type="galvanic-wave" size="lg" />
                <span className="fvp-stamp">ELETRICIDADE PÓS-MORTE</span>
              </aside>
            </div>
          </article>
        </section>

      <section className="section cornish-dossier" aria-labelledby="cornish-dossier-heading">
        <div className="section-heading">
          <p className="section-label">Dossiê americano de reanimação experimental</p>
          <h3 id="cornish-dossier-heading">Robert E. Cornish: Lazarus, a prancha de balanço e a tentativa americana de vencer a morte</h3>
          <p>
            Nos anos 1930, Robert E. Cornish levou a obsessão moderna pela ressuscitação para uma forma mecânica, química e brutal:
            cães clinicamente mortos, uma prancha tipo gangorra, respiração artificial, sangue tratado, adrenalina, heparina e a esperança
            de que a morte recente ainda pudesse ser empurrada de volta.
          </p>
        </div>

                <div className="cornish-dossier-lead cornish-lead-split">
          <div className="cornish-lead-copy">
            <span className="archive-date">1903–1963</span>
            <h4>O biólogo que queria interromper a morte</h4>
            <p>
              Robert Edwin Cornish foi um biólogo americano, formado muito jovem pela University of California. Ele não vinha do ocultismo,
              nem de sociedades secretas, nem da literatura gótica. Seu território era outro: laboratório, fisiologia, circulação, química
              e uma pergunta quase intolerável para a medicina moderna — se a morte fosse recente, haveria ainda uma janela técnica para desfazê-la?
            </p>
            <p>
              Em 1932, Cornish passou a perseguir a ideia de restaurar vida em corpos recém-mortos. Primeiro tentou imaginar aplicação em vítimas
              humanas de morte súbita, afogamento ou eletrocussão. Sem êxito, deslocou a pesquisa para cães, onde podia controlar tempo, causa da
              morte e tentativa de retorno. A série recebeu um nome bíblico e deliberadamente provocador: Lazarus.
            </p>
          </div>

          <figure className="cornish-lead-photo">
            <img
              src="https://static.wixstatic.com/media/d5cc5f_9cbe05858d1c479a8ec9624b6dd0c764~mv2.webp/v1/fill/w_600,h_514,al_c,q_80,enc_avif,quality_auto/d5cc5f_9cbe05858d1c479a8ec9624b6dd0c764~mv2.webp"
              alt="Demonstração em prancha de teste ligada aos experimentos de Robert E. Cornish"
              loading="lazy"
            />
            <figcaption>
              Experimento Lazarus · prancha de teste · anos 1930
            </figcaption>
          </figure>
        </div>

<div className="cornish-image-gallery cornish-gallery-two" aria-label="Galeria documental de Robert E. Cornish">
          <figure className="cornish-gallery-card">
            <img
              src="https://static.wixstatic.com/media/d5cc5f_ba83559514e546cc8d3c4327f211165c~mv2.jpg/v1/fill/w_639,h_492,al_c,q_80,enc_avif,quality_auto/d5cc5f_ba83559514e546cc8d3c4327f211165c~mv2.jpg"
              alt="Robert E. Cornish em laboratório com cão Lazarus"
              loading="lazy"
            />
            <figcaption>
              Cornish em laboratório com cão Lazarus. O pesquisador aparece diante do corpo animal usado como fronteira entre circulação forçada, técnica experimental e espetáculo científico.
            </figcaption>
          </figure>

          <figure className="cornish-gallery-card">
            <img
              src="https://static.wixstatic.com/media/d5cc5f_167d7cc8f0054f32a4245dc11aff5086~mv2.jpg/v1/fill/w_639,h_488,al_c,q_80,enc_avif,quality_auto/d5cc5f_167d7cc8f0054f32a4245dc11aff5086~mv2.jpg"
              alt="Procedimento experimental de Robert E. Cornish com cão"
              loading="lazy"
            />
            <figcaption>
              Procedimento Lazarus: respiração artificial, intervenção química e suporte circulatório rudimentar. A imagem aproxima medicina experimental e horror documental.
            </figcaption>
          </figure>
        </div>
        <section className="cornish-video-panel cornish-video-embed" aria-label="Vídeo documental sobre Robert E. Cornish">
          <div className="cornish-video-copy">
            <span className="archive-date">1934 / arquivo audiovisual</span>
            <h4>O experimento em movimento</h4>
            <p>
              O registro audiovisual ajuda a entender por que Cornish entrou para o imaginário da reanimação moderna.
              A prancha, os assistentes, o animal, os tubos e a encenação científica mostram a passagem do laboratório para o espetáculo público.
              Este vídeo é apresentado como documento histórico e cultural, não como validação médica do procedimento.
            </p>
          </div>

          <div className="cornish-video-frame">
            <iframe
              src="https://www.youtube.com/embed/YnRoO4u6gJQ"
              title="Doctor Cornish's Resurrection Experiment 1934"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

<div className="cornish-dossier-grid">
          <article className="cornish-dossier-panel">
            <span className="archive-date">1932–1933</span>
            <h4>A hipótese da janela curta</h4>
            <p>
              A ideia central de Cornish era que a morte não seria um instante único, mas uma transição. Se o coração e a respiração paravam,
              talvez ainda existisse um intervalo antes que cérebro, tecidos e órgãos sofressem dano irreversível. Nesse intervalo, ele imaginava
              ser possível forçar o corpo a circular novamente.
            </p>
            <p>
              Essa hipótese torna Cornish diferente dos galvanistas antigos. Aldini fazia o cadáver se mover. Cornish queria algo mais ambicioso:
              restaurar circulação, oxigenação e função orgânica suficiente para produzir sobrevivência, ainda que danificada.
            </p>
          </article>

          <article className="cornish-dossier-panel">
            <span className="archive-date">teeterboard</span>
            <h4>A prancha que balançava o morto</h4>
            <p>
              O instrumento mais famoso era a <em>teeterboard</em>, uma prancha tipo gangorra. O animal morto era colocado sobre ela e balançado
              de um lado para o outro. O objetivo era usar a gravidade e o movimento para ajudar o sangue a circular quando o coração já não fazia
              esse trabalho.
            </p>
            <p>
              A cena parece saída de um filme de horror científico: corpo recente, madeira rangendo, tubos, solução entrando na veia, assistentes
              massageando o animal e Cornish tentando substituir, por força externa, o movimento interno da vida.
            </p>
          </article>

          <article className="cornish-dossier-panel">
            <span className="archive-date">procedimento</span>
            <h4>Química, ar e circulação forçada</h4>
            <p>
              O método combinava várias tentativas ao mesmo tempo. Cornish usava respiração artificial, massagem corporal, balanço mecânico, solução
              salina oxigenada, epinefrina/adrenalina como estimulante cardíaco, heparina como anticoagulante e sangue canino tratado para reduzir
              coagulação.
            </p>
            <p>
              A lógica era clara: impedir que o sangue coagulado bloqueasse a circulação, estimular o coração, empurrar oxigênio de volta ao sistema
              e usar a prancha para substituir, de modo rudimentar, aquilo que hoje associamos a suporte circulatório e ressuscitação avançada.
            </p>
          </article>

          <article className="cornish-dossier-panel">
            <span className="archive-date">1934–1935</span>
            <h4>Os cães Lazarus</h4>
            <p>
              Os cães receberam nomes como Lazarus I, II, IV e V. Os casos mais citados envolvem animais asfixiados, declarados clinicamente mortos
              e depois submetidos ao procedimento. O corpo era colocado na prancha, recebia respiração artificial e substâncias para tentar restaurar
              circulação e resposta cardíaca.
            </p>
            <p>
              O retorno não era triunfo limpo. Os relatos mais conhecidos falam de sobrevivência parcial, com animais vivos, mas severamente
              comprometidos. Lazarus IV e Lazarus V aparecem como os casos mais marcantes, associados a sequelas graves, dano neurológico e recuperação
              incompleta.
            </p>
          </article>

          <article className="cornish-dossier-panel">
            <span className="archive-date">Life Returns</span>
            <h4>Quando o laboratório virou cinema</h4>
            <p>
              Cornish não ficou restrito ao laboratório. Seu trabalho foi filmado e incorporado ao longa <em>Life Returns</em>, produção dos anos 1930
              sobre um médico convencido de que os mortos poderiam voltar. A presença de filmagens reais aproximou o caso da cultura popular e transformou
              a experiência em espetáculo.
            </p>
            <p>
              O laboratório de Cornish passou a existir também como imagem pública de transgressão científica: nem só medicina, nem só cinema, nem só horror,
              mas uma zona onde o público via o corpo morto ser tratado como máquina recuperável.
            </p>
          </article>

          <article className="cornish-dossier-panel">
            <span className="archive-date">San Quentin</span>
            <h4>O condenado Thomas McMonigle</h4>
            <p>
              A história atingiu o ponto mais sombrio quando Thomas McMonigle, condenado à morte em San Quentin, teria oferecido o corpo para que Cornish
              tentasse ressuscitá-lo após a execução. A proposta foi recusada pelas autoridades da Califórnia.
            </p>
            <p>
              Esse episódio pertence ao coração jurídico do Arquivo Morto: se um executado voltasse, ele ainda seria o mesmo condenado? A pena teria sido
              cumprida? O Estado poderia executá-lo novamente? A experiência não aconteceu, mas a pergunta é mais assustadora que o próprio experimento.
            </p>
          </article>

          <article className="cornish-dossier-panel">
            <span className="archive-date">bioética</span>
            <h4>O custo animal do experimento</h4>
            <p>
              Hoje, os experimentos de Cornish são inseparáveis de uma leitura bioética. Os cães não são apenas “provas” de uma técnica. Eles são vítimas de
              uma época em que o limite entre pesquisa, espetáculo e sofrimento animal era tratado de forma muito diferente.
            </p>
            <p>
              O Arquivo Morto não celebra o sofrimento. Ele registra o desconforto: a tentativa de vencer a morte produziu imagens de corpos usados como
              fronteira, matéria, instrumento e argumento.
            </p>
          </article>

          <article className="cornish-dossier-panel">
            <span className="archive-date">leitura do Arquivo</span>
            <h4>Por que Cornish importa</h4>
            <p>
              Cornish fica entre Aldini e Brukhonenko. Aldini mostrou o cadáver se movendo sob eletricidade. Cornish tentou restaurar circulação e função
              orgânica com movimento, química e ar. Brukhonenko colocou a máquina no centro do corpo. Os três formam uma linhagem: contração, circulação
              e suporte artificial.
            </p>
            <p>
              Por isso Cornish não deve ser só nota de rodapé. Ele é uma das figuras mais incômodas da história moderna da reanimação: não provou que a morte
              podia ser vencida, mas mostrou até onde alguém estava disposto a ir para tentar.
            </p>
          </article>
        </div>

        <div className="cornish-dossier-note">
          <strong>Nota editorial:</strong> este dossiê trata Robert E. Cornish como figura histórica real da ressuscitação experimental.
          O texto não apresenta seus resultados como vitória sobre a morte, mas como capítulo decisivo entre fisiologia, espetáculo,
          cinema, bioética animal e cultura da reanimação.
        </div>
      </section>

        <section className="soviet-dossier" aria-labelledby="soviet-dossier-heading">
          <div className="section-heading">
            <p className="section-label">Dossiê histórico-médico</p>
            <h3 id="soviet-dossier-heading">Sergei Brukhonenko: o autojektor, os cães e a máquina entre a vida e a morte</h3>
            <p>
              Antes de a circulação extracorpórea se tornar linguagem de cirurgia cardíaca, ela apareceu ao mundo como uma cena quase impossível:
              sangue passando por tubos, órgãos mantidos fora da ordem natural do corpo e animais sustentados por um aparelho que parecia desafiar
              a fronteira entre morte clínica, reflexo e suporte artificial.
            </p>
          </div>

          <div className="soviet-dossier-lead with-portrait">
            <figure className="brukhonenko-portrait">
              <img
                src={assetPath('/arquivo-morto/assets/archive/brukhonenko-portrait.jpg')}
                alt="Retrato de Sergei Brukhonenko, fisiologista soviético"
                loading="lazy"
              />
              <figcaption>
                Sergei Brukhonenko, 1942 · Wikimedia Commons · domínio público
              </figcaption>
            </figure>

            <div>
              <span className="archive-date">1890–1960</span>
              <h4>O pesquisador soviético</h4>
              <p>
                Sergei Sergeevich Brukhonenko foi médico, pesquisador e inventor soviético. Sua importância não está em uma fantasia de
                “ressuscitar mortos”, mas em algo historicamente mais sério: a tentativa de manter funções vitais por meio de circulação
                artificial. O Arquivo Morto o trata como figura de fronteira — entre fisiologia experimental, tecnologia médica, propaganda
                científica e imaginação cultural da reanimação.
              </p>
            </div>
          </div>
        <section className="brukhonenko-case-flow" aria-label="Sequência documental do caso Brukhonenko">
<article className="brukhonenko-flow-row reverse">
            <figure className="brukhonenko-flow-image">
              <img
                src={assetPath('/arquivo-morto/assets/archive/brukhonenko-autojektor.jpg')}
                alt="Desenho técnico do autojektor de Brukhonenko"
                loading="lazy"
              />
              <figcaption>
                Autojektor · desenho técnico do aparelho de circulação artificial associado a Brukhonenko.
              </figcaption>
            </figure>
            <div className="brukhonenko-flow-copy">
              <span className="archive-date archive-date-machine">AUTOJEKTOR · circulação artificial experimental</span>
              <h4><span className="machine-title">O autojektor</span><small>o corpo como circuito</small></h4>
              <p>
                O autojektor funcionava como tentativa primitiva de substituir funções circulatórias: conduzir sangue, manter fluxo e alimentar
                tecidos com sangue oxigenado. No filme soviético, a máquina aparece como coração externo, uma infraestrutura técnica que
                transforma organismo em circuito.
              </p>
              <p>
                Essa imagem é importante para o site porque liga Brukhonenko ao tema central do Arquivo Morto: não a ressurreição mística,
                mas o esforço moderno de empurrar a morte para dentro de um protocolo mecânico.
              </p>
            </div>
          </article>

          <article className="brukhonenko-flow-row dog-head-focus">
            <figure className="brukhonenko-flow-image strong">
              <img
                src={assetPath('/arquivo-morto/assets/archive/brukhonenko-experiment.jpg')}
                alt="Frame de Experiments in the Revival of Organisms, 1940 — cabeça de cão ligada ao sistema de circulação artificial"
                loading="lazy"
              />
              <figcaption>
                Frame de Experiments in the Revival of Organisms · cabeça de cão ligada ao sistema de circulação artificial.
              </figcaption>
            </figure>
            <div className="brukhonenko-flow-copy">
              <span className="archive-date">1940 / imagem controversa</span>
              <h4>A cabeça que respondia</h4>
              <p>
                A cena mais famosa do filme mostra uma cabeça de cão isolada ligada ao autojektor. A narração apresenta a cabeça recebendo
                sangue oxigenado e respondendo a estímulos externos. No filme, ela pisca, reage à luz, move a boca/língua e aparenta responder
                a sons ou contatos.
              </p>
              <p>
                É exatamente aqui que a curadoria precisa ser cuidadosa: a imagem é forte e historicamente relevante, mas o filme é controverso.
                O Arquivo Morto não trata a cena como prova limpa de “vida plena”, e sim como documento soviético de propaganda científica,
                fisiologia experimental, bioética animal e horror visual.
              </p>
            </div>
          </article>

          <section className="brukhonenko-media-panel brukhonenko-video-ordered" aria-label="Vídeo documental sobre Brukhonenko">
            <div className="brukhonenko-media-copy">
              <span className="archive-date">filme completo / arquivo audiovisual</span>
              <h4>Experiments in the Revival of Organisms</h4>
              <p>
                O vídeo deve vir depois das imagens explicadas, para o visitante entender o que está vendo antes de assistir.
                A sequência mostra órgão isolado, pulmão, autojektor, cabeça de cão e a tentativa de reanimar um organismo inteiro.
              </p>
            </div>
            <div className="brukhonenko-video-frame">
              <iframe
                src="https://www.youtube.com/embed/KDqh-r8TQgs"
                title="Experiments in the Revival of Organisms"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </section>

<div className="soviet-dossier-grid">
            <article className="soviet-dossier-panel">
              <span className="archive-date">1920s–1930s</span>
              <h4>O autojektor</h4>
              <p>
                O autojektor foi um aparelho primitivo de circulação extracorpórea: uma máquina construída para retirar, impulsionar, oxigenar
                e devolver sangue ao organismo ou a partes isoladas dele. Em linguagem simples, era um ancestral das máquinas coração-pulmão.
                Para a história médica, seu valor está na ideia de que certas funções do corpo poderiam ser temporariamente sustentadas por
                equipamento mecânico.
              </p>
              <p>
                Para o Arquivo Morto, o autojektor é também um objeto simbólico: a máquina que substitui o ritmo interno do corpo, colocando
                a vida sob a forma de pressão, tubos, bomba e circulação.
              </p>
            </article>

            <article className="soviet-dossier-panel">
              <span className="archive-date">experimentos com cães</span>
              <h4>Os cães de laboratório</h4>
              <p>
                A parte mais famosa e perturbadora de sua história envolve experimentos com cães. Os relatos e o filme soviético mostram
                coração, pulmão, circulação artificial e, sobretudo, a imagem de uma cabeça de cão conectada ao aparelho, reagindo a estímulos
                como luz, som ou contato. Essa imagem se tornou um dos ícones mais desconfortáveis da medicina experimental do século XX.
              </p>
              <p>
                O ponto editorial não é transformar sofrimento animal em espetáculo. É mostrar como a modernidade científica, ao tentar dominar
                a morte, cruzou territórios éticos difíceis: o corpo vivo fragmentado, o reflexo separado da pessoa, o organismo reduzido a
                função biológica.
              </p>
            </article>

            <article className="soviet-dossier-panel">
              <span className="archive-date">1940</span>
              <h4><em>Experiments in the Revival of Organisms</em></h4>
              <p>
                O filme soviético de 1940 apresentou esses experimentos como demonstração de “revivificação” de organismos. A obra mostra órgãos
                isolados funcionando, circulação artificial e cães submetidos a procedimentos extremos. A versão em inglês ficou conhecida por
                sua apresentação ao público científico ocidental e por sua aura de documento impossível.
              </p>
              <p>
                Esse filme pertence ao Arquivo Morto porque reúne todos os elementos centrais do projeto: laboratório, cadáver, organismo, máquina,
                propaganda, medo, fascínio e a promessa perigosa de que a morte poderia ser tecnicamente revertida.
              </p>
            </article>

            <article className="soviet-dossier-panel">
              <span className="archive-date">documento controverso</span>
              <h4>O que é história e o que exige cautela</h4>
              <p>
                O trabalho de Brukhonenko não deve ser descartado como simples fraude: sua contribuição para a circulação artificial e para o
                desenvolvimento de máquinas coração-pulmão pertence à história real da medicina. Ao mesmo tempo, o filme deve ser lido com cuidado:
                parte do material pode ter sido encenada, reorganizada ou apresentada em linguagem de propaganda científica soviética.
              </p>
              <p>
                A leitura correta é dupla: há pesquisa médica real, mas há também construção de imagem pública. O Arquivo Morto não vende o caso
                como prova literal de ressurreição; trata-o como um dos momentos em que a ciência moderna pareceu vestir a máscara antiga do
                necromante.
              </p>
            </article>

            <article className="soviet-dossier-panel">
              <span className="archive-date">legado médico</span>
              <h4>Da cena perturbadora à cirurgia cardíaca</h4>
              <p>
                A importância histórica de Brukhonenko está no caminho que seu trabalho ajudou a abrir: circulação extracorpórea, perfusão,
                suporte mecânico e procedimentos que mais tarde se tornariam centrais para cirurgias cardíacas. A imagem grotesca dos primeiros
                experimentos não deve apagar o fato de que a medicina moderna também nasceu de máquinas experimentais, erros, limites e riscos.
              </p>
              <p>
                No arquivo, ele ocupa o ponto em que a reanimação deixa de ser apenas mito, ritual ou literatura e passa a tocar a engenharia real
                do corpo.
              </p>
            </article>

            <article className="soviet-dossier-panel">
              <span className="archive-date">leitura do Arquivo</span>
              <h4>Por que Brukhonenko pertence ao Arquivo Morto</h4>
              <p>
                Aldini fez o cadáver contrair. Ure fez a plateia recuar. Mary Shelley transformou a ambição científica em mito. Brukhonenko,
                por sua vez, colocou a máquina no centro da pergunta: se sangue, oxigênio e circulação podem ser sustentados artificialmente,
                onde termina o organismo e onde começa o aparelho?
              </p>
              <p>
                Essa é a razão de sua presença aqui. Ele não é apenas nota de rodapé médica; é um capítulo decisivo na história cultural da
                tentativa humana de vencer a morte por tecnologia.
              </p>
            </article>
          </div>

          <div className="soviet-dossier-note">
            <strong>Nota editorial:</strong> este dossiê trata Brukhonenko com peso histórico. O autojektor é abordado como marco experimental
            da circulação artificial; o filme de 1940, como documento científico-cultural controverso; e os experimentos com cães, como tema
            bioético sensível, sem sensacionalismo e sem afirmar retorno literal da vida.
          </div>
        </section>

        {/* ARQUIVO DE CASOS */}
        <section id="dossies" className="section">
          <div className="section-header">
            <p className="section-label">Arquivo de dossiês</p>
            <h3>Registros institucionais essenciais</h3>
            <p className="selected-dossiers-intro">
              Casos, obras e registros apresentados como fichas técnicas do instituto, com data, classificação, categoria e estado do arquivo.
            </p>
          </div>
          <div className="stories-grid selected-dossiers-grid">
            {selectedDossiers.map((entry, index) => (
              <article className={`story-card selected-dossier-card story-type-${entry.type}`} key={entry.registry}>
                <div className="story-header">
                  <span className="selected-dossier-index">Registro {String(index + 1).padStart(3, '0')}</span>
                  <span className="story-period archive-date">{entry.displayDate}</span>
                </div>
                <div className="selected-dossier-heading">
                  <span className="story-category">{entry.category}</span>
                  <span className="selected-dossier-status">{entry.risk}</span>
                </div>
                <h4 className="story-title">{entry.subject}</h4>
                <p className="selected-dossier-subtitle">{entry.title}</p>
                <p className="story-summary selected-dossier-summary">{entry.summary}</p>
                <dl className="selected-dossier-records selected-dossier-records--compact">
                  <div>
                    <dt>Categoria</dt>
                    <dd>{entry.category}</dd>
                  </div>
                  <div>
                    <dt>Data</dt>
                    <dd>{entry.displayDate}</dd>
                  </div>
                  <div>
                    <dt>Classificação</dt>
                    <dd>{entry.risk}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{entry.drawerStatus}</dd>
                  </div>
                </dl>
                <p className="selected-dossier-marginalia">{entry.marginalia}</p>
                <div className="story-foot">
                  <span className="selected-dossier-ref">{entry.registry}</span>
                  <span className="story-classification">{entry.stamp}</span>
                </div>
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
                <span className="article-index archive-date">{a.period}</span>
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
                  <span>{e.displayYear || e.year}</span>
                  <div className="timeline-dot" />
                </div>
                <div className="timeline-body">
                  <p className="timeline-desc">{e.desc}</p>
                  {e.image && (
                    <figure className="timeline-figure">
                      <div className="contextual-figure-frame">
                        <img src={assetPath(e.image)} alt={e.imageAlt} loading="lazy" />
                      </div>
                      {e.imageCaption && (
                        <figcaption className="contextual-figure-caption">{e.imageCaption}</figcaption>
                      )}
                    </figure>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ICONOGRAFIA LITERÁRIA — Mary Shelley, após timeline */}
        <div className="literature-visual-strip" aria-label="Retrato de Mary Wollstonecraft Shelley">
          <figure>
            <div className="contextual-figure-frame">
              <img
                src={assetPath('/arquivo-morto/assets/archive/mary-shelley.jpg')}
                alt="Retrato de Mary Wollstonecraft Shelley por Richard Rothwell, c. 1840"
                loading="lazy"
              />
            </div>
            <figcaption className="contextual-figure-caption">
              Mary Wollstonecraft Shelley · Richard Rothwell, c. 1840 — Wikimedia Commons / Domínio público
            </figcaption>
          </figure>
        </div>

        {/* CINEMA E LITERATURA CONTEMPORÂNEA */}
        <section id="cinema" className="section cinema-section" aria-labelledby="cinema-heading">
          <div className="section-header">
            <p className="section-label">Arquivo audiovisual</p>
            <h3 id="cinema-heading">Arquivo Audiovisual</h3>
            <p className="cinema-subtitle">
              Registros cinematográficos relacionados à reanimação, morte e ciência proibida.
            </p>
          </div>

          <div className="cinema-dossier-list">
            {cinemaEntries.map((entry) => (
              <article className="cinema-dossier" key={entry.id}>
                <div className="cinema-dossier-head">
                  <span className="cinema-dossier-label">{entry.label}</span>
                  <h4 className="cinema-dossier-title">{entry.title}</h4>
                  <p className="cinema-dossier-intro">{entry.intro}</p>
                  <dl className="cinema-evidence-ledger">
                    <div>
                      <dt>Registro</dt>
                      <dd>{entry.evidence}</dd>
                    </div>
                    <div>
                      <dt>Formato</dt>
                      <dd>Digitalizado</dd>
                    </div>
                    <div>
                      <dt>Origem</dt>
                      <dd>Cinema</dd>
                    </div>
                    <div>
                      <dt>Classificação</dt>
                      <dd>Necrociência</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>Disponível</dd>
                    </div>
                    <div>
                      <dt>Ano</dt>
                      <dd>{entry.year}</dd>
                    </div>
                  </dl>
                </div>

                <div className={`cinema-dossier-gallery cinema-dossier-layout--${entry.layout}`}>
                  {entry.images.map((img, i) => (
                    <figure className={`cinema-dossier-card cinema-dossier-card--${img.role}`} key={i}>
                      <div className="cinema-image-frame">
                        <img src={assetPath(img.src)} alt={img.alt} loading="lazy" />
                      </div>
                      {img.caption && (
                        <figcaption className="cinema-dossier-caption">{img.caption}</figcaption>
                      )}
                    </figure>
                  ))}
                </div>

                <div className="cinema-dossier-text">
                  <div className="cinema-meta">
                    {entry.meta.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <p className="cinema-dossier-body">{entry.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* GABINETE */}
        <section id="gabinete" className="section">
          <div className="section-header">
            <p className="section-label">Gabinete de Anatomia</p>
            <h3>Objetos lacrados, corpos sem retorno e registros interditos</h3>
            <p className="cabinet-subtitle">Nem todo documento pertence à história pública. Alguns itens permanecem catalogados como evidência, advertência ou ficção apócrifa do próprio arquivo.</p>
          </div>
          <div className="cabinet-grid">
            {cabinet.map((item) => (
              <div className={`cabinet-card cabinet-card--${item.size}`} key={item.ref}>
                <ArchiveVisual type={item.visual} size={item.size === 'featured' ? 'md' : 'sm'} />
                <div className="cabinet-top">
                  <span className="archive-date">{item.displayDate}</span>
                  <span className="cabinet-type">{item.type}</span>
                </div>
                <h5 className="cabinet-name">{item.name}</h5>
                <p className="cabinet-desc">{item.desc}</p>
                <span className="cabinet-ref">{item.ref}</span>
              </div>
            ))}
          </div>
        </section>

        {/* NOTA DE CURADORIA */}
        <section id="sobre" className="curator-note">
          <div className="curator-inner">
            <div className="curator-head">
              <span className="curator-tag">NOTA DE CURADORIA</span>
            </div>
            <div className="curator-body">
              <p>
                O Arquivo Morto combina história documentada da ciência, literatura clássica de domínio público e ficção editorial própria. Cada camada permanece marcada por sua natureza para que o arquivo não confunda fato, mito literário e invenção cultural.
              </p>
              <p>
                Os capítulos ampliam contexto; os dossiês selecionados condensam casos; a linha do tempo fixa marcos; o gabinete preserva a atmosfera material do projeto. Quando o mesmo episódio reaparece, ele deve cumprir uma função nova, não repetir o mesmo bloco de texto.
              </p>
              <p>
                O objetivo continua sendo cultural, literário e visual: um arquivo imaginário que habita a fronteira entre ciência, horror e documento sem transformar repetição em ruído.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER — três colunas */}
        <footer className="footer">
          <div className="footer-ledger">
            <span className="footer-ledger-line">INSTITUTO DE REGISTROS PÓS-MORTE</span>
            <span className="footer-ledger-line">SETOR DE DOCUMENTAÇÃO, CIÊNCIA, LITERATURA E OCORRÊNCIAS PÓS-MORTE</span>
            <span className="footer-ledger-line">ARQUIVOS INDEXADOS: 08</span>
            <span className="footer-ledger-line footer-ledger-line-alert">CLASSIFICAÇÃO GERAL: RESTRITO</span>
          </div>
          <div className="footer-bottom">
            <p className="footer-quote">"Este arquivo existe para documentar o que permanece depois do óbito."</p>
            <span className="footer-ref">ARQ-MORTO · REGISTRO CENTRAL · FUNDADO EM 1803</span>
          </div>
        </footer>

      </main>
    </div>
  )
}

export default App
