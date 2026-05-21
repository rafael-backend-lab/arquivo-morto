import { useState } from 'react'
import './App.css'

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
    desc: 'Mary Shelley publica Frankenstein no auge do imaginário galvanista.',
  },
  {
    year: '1818',
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
  { ref: 'LÂM-042', displayDate: 'arquivo interno', type: 'ESPÉCIME',    name: 'Lâmina Histológica',    visual: 'anatomical-plate',
    desc: 'Tecido neural pós-galvanização. Reação desconhecida nos neurônios terminais.' },
  { ref: 'MAN-019', displayDate: '1803', type: 'DOCUMENTO',   name: 'Manuscrito Aldini',      visual: 'medical-file',
    desc: 'Notas de campo da sessão de 1803. Três páginas ilegíveis. Tinta ferruginosa.' },
  { ref: 'REA-007', displayDate: 'registro apócrifo', type: 'SUBSTÂNCIA',  name: 'Reagente HW-7',          visual: 'reagent-vial',
    desc: 'Composto verde-amarelado. Origem não rastreada. Efeito sobre tecido morto: indeterminado.' },
  { ref: 'PRO-334', displayDate: 'data lacrada', type: 'REGISTRO',    name: 'Prontuário 334-B',       visual: 'medical-file',
    desc: 'Cadáver masculino, ~40 anos. Causa mortis: desconhecida. Marcas pós-morte atípicas.' },
  { ref: 'OSC-002', displayDate: 'arquivo interno', type: 'INSTRUMENTO', name: 'Osciloscópio de Campo',  visual: 'galvanic-wave',
    desc: 'Registrou atividade elétrica em tecido certificado como morto. Equipamento lacrado após incidente.' },
  { ref: 'CAD-111', displayDate: 'registro apócrifo', type: 'ESPÉCIME',    name: 'Cadáver Catalogado 111', visual: 'corpse-tag',
    desc: 'Status: reanimação parcial tentada. Resultado: inconclusivo. Localização atual: desconhecida.' },
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
]

const selectedDossiers = [
  {
    registry: 'DOS-001',
    displayDate: '1803',
    category: 'HISTÓRIA REAL DOCUMENTADA',
    type: 'real',
    title: 'Aldini e George Forster',
    summary: 'Em Londres, Giovanni Aldini aplicou correntes galvânicas no corpo do enforcado George Forster. A cena transformou o cadáver em espetáculo público e fixou um marco do horror científico moderno.',
    visual: 'galvanic-wave',
  },
  {
    registry: 'DOS-002',
    displayDate: '1818',
    category: 'HISTÓRIA REAL DOCUMENTADA',
    type: 'real',
    title: 'Andrew Ure e Matthew Clydesdale',
    summary: 'Em Glasgow, Andrew Ure conectou o corpo de Matthew Clydesdale a baterias galvânicas minutos após a execução. As contrações violentas fizeram do caso um dos relatos mais perturbadores da fisiologia oitocentista.',
    visual: 'galvanic-wave',
  },
  {
    registry: 'DOS-006',
    displayDate: '1818',
    category: 'LITERATURA',
    type: 'literatura',
    title: 'Mary Shelley e Frankenstein',
    summary: 'Publicado em 1818, Frankenstein condensou galvanismo, responsabilidade moral e pavor diante da criatura artificial. O romance deu forma literária definitiva ao sonho de animar a carne pela ciência.',
    visual: 'medical-file',
  },
  {
    registry: 'DOS-003',
    displayDate: '1921–1922',
    category: 'LITERATURA DE HORROR',
    type: 'literatura',
    title: 'Herbert West, reanimador',
    summary: 'Entre 1921 e 1922, Lovecraft imaginou o médico que trata o cadáver como matéria química reativa. O laboratório torna-se aqui uma máquina de obsessão, degradação e falência ética.',
    visual: 'reagent-vial',
  },
  {
    registry: 'HIS-005',
    displayDate: 'séc. XVIII–XIX',
    category: 'HISTÓRIA SOCIAL E MEDICINA',
    type: 'real',
    title: 'Ressurrecionistas',
    summary: 'Body snatchers abasteceram escolas de anatomia quando a demanda por cadáveres superou a oferta legal. O tema resume o momento em que o corpo morto virou mercadoria, escândalo urbano e infraestrutura de ensino.',
    visual: 'corpse-tag',
  },
  {
    registry: 'PRO-334-B',
    displayDate: 'data lacrada',
    category: 'FICÇÃO EDITORIAL DO ARQUIVO MORTO',
    type: 'ficcao',
    title: 'Prontuário 334-B',
    summary: 'Registro apócrifo de causa mortis indeterminada, sessões interrompidas e localização desconhecida. A peça funciona como ficção editorial condensada do arquivo, não como documento histórico real.',
    visual: 'medical-file',
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

  return (
    <div className={`root${mode === 'terminal' ? ' mode-terminal' : ''}`}>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      {/* SITE HEADER — navegação fixa */}
      <header className="site-header">
        <nav className="nav">
          <span className="nav-brand">Arquivo Morto</span>
          <div className="nav-links">
            <a href="#destaque" className="nav-link">Destaque</a>
            <a href="#dossies" className="nav-link">Dossiês</a>
            <a href="#artigos" className="nav-link">Artigos</a>
            <a href="#linha" className="nav-link">Linha do Tempo</a>
            <a href="#gabinete" className="nav-link">Gabinete</a>
          </div>
          <button
            className="mode-toggle"
            data-mode={mode}
            onClick={() => setMode(m => m === 'arquivo' ? 'terminal' : 'arquivo')}
            aria-label="Alternar modo de visualização"
          >
            {mode === 'arquivo' ? 'Modo Terminal' : 'Modo Arquivo'}
          </button>
        </nav>
      </header>

      <main className="page">

        {/* HERO */}
        <header className="hero">
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-visual-system" aria-hidden="true">
            <div className="hvs-diagram" />
          </div>
          <div className="archive-seal" aria-hidden="true">
            <div className="seal-ring" />
            <div className="seal-core">
              <span className="seal-monogram">AM</span>
              <span className="seal-bolt" />
              <span className="seal-label">Arquivo Morto</span>
              <span className="seal-year">Est. 1803</span>
            </div>
          </div>
          <div className="hero-layout">
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
                <a href="#destaque" className="btn btn-primary">Abrir dossiês</a>
                <a href="#linha" className="btn btn-secondary">Linha do tempo</a>
              </div>
            </div>

            {/* PAINEL TÉCNICO LATERAL */}
            <aside className="hero-technical-panel" aria-label="Painel técnico de arquivo">
              <div className="panel-id">ARQ-MORTO</div>
              <div className="panel-section">DOSSIÊ CENTRAL</div>
              <ul className="panel-data">
                <li>
                  <span className="panel-key">Frequência</span>
                  <span className="panel-val">17Hz</span>
                </li>
                <li>
                  <span className="panel-key">Reagente</span>
                  <span className="panel-val">HW-7</span>
                </li>
                <li>
                  <span className="panel-key">Status</span>
                  <span className="panel-val panel-val-alert">lacrado</span>
                </li>
                <li>
                  <span className="panel-key">Registro</span>
                  <span className="panel-val">necrociência editorial</span>
                </li>
              </ul>
            </aside>
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

        {/* DOSSIÊ EM DESTAQUE */}
        <section id="destaque" className="featured-dossier">
          <div className="section-header">
            <p className="section-label">Dossiê em destaque</p>
            <h3>Aldini-Forster, Londres, 1803</h3>
          </div>
          <article className="featured-article">
            <div className="featured-layout">
              <div className="featured-content">
                <div className="featured-meta">
                  <span className="featured-date archive-date">1803</span>
                  <span className="featured-location">Londres</span>
                  <span className="featured-class">EXPERIMENTO · GALVANISMO</span>
                </div>
                <h4 className="featured-title">Giovanni Aldini e George Forster</h4>
                <p className="featured-summary">
                  Em 17 de janeiro de 1803, no Old Bailey, Aldini aplicou correntes galvânicas no cadáver recém-enforcado de George Forster. Os movimentos visíveis da face e dos membros fizeram do experimento um marco da ciência como espetáculo fúnebre.
                </p>
                <div className="featured-editorial">
                  <span className="editorial-tag">NOTA EDITORIAL</span>
                  <p>
                    Forster permanece aqui como ponto de origem: a cena em que o cadáver entrou no palco público da eletricidade.
                  </p>
                </div>
              </div>
              <aside className="featured-visual-panel" aria-hidden="true">
                <span className="fvp-tag">GALVANISMO / 1803</span>
                <ArchiveVisual type="galvanic-wave" size="lg" />
                <span className="fvp-stamp">OBSERVAÇÃO PÓS-MORTE</span>
              </aside>
            </div>
          </article>
        </section>

        {/* DOSSIÊS SELECIONADOS */}
        <section id="dossies" className="section">
          <div className="section-header">
            <p className="section-label">Dossiês selecionados</p>
            <h3>Seis casos para atravessar o arquivo</h3>
            <p className="selected-dossiers-intro">
              Casos compactos que condensam as figuras e episódios que atravessam o projeto sem repetir os capítulos históricos.
            </p>
          </div>
          <div className="stories-grid selected-dossiers-grid">
            {selectedDossiers.map((entry) => (
              <article className={`story-card selected-dossier-card story-type-${entry.type}`} key={entry.registry}>
                <ArchiveVisual type={entry.visual} size="sm" />
                <div className="story-header">
                  <span className="story-period archive-date">{entry.displayDate}</span>
                </div>
                <span className="story-category">{entry.category}</span>
                <h4 className="story-title">{entry.title}</h4>
                <p className="story-summary selected-dossier-summary">{entry.summary}</p>
                <div className="story-foot">
                  <span className="selected-dossier-ref">{entry.registry}</span>
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
                <ArchiveVisual type={item.visual} size="sm" />
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
        <section className="curator-note">
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
          <div className="footer-grid">
            <div className="footer-col">
              <span className="footer-title">Arquivo Morto</span>
              <p className="footer-desc">
                Projeto editorial sobre literatura, ciência e horror da reanimação.
              </p>
              <p className="footer-desc">Projeto cultural e editorial independente.</p>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Categorias</span>
              <ul className="footer-list">
                <li><a href="#dossies" className="footer-link">Dossiês</a></li>
                <li><a href="#artigos" className="footer-link">Artigos</a></li>
                <li><a href="#linha" className="footer-link">Linha do Tempo</a></li>
                <li><a href="#gabinete" className="footer-link">Gabinete de Anatomia</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Registro</span>
              <ul className="footer-list footer-registry">
                <li>ARQ-001 · LACRADO</li>
                <li>Voltagem: 120V DC</li>
                <li>Reagente: HW-7</li>
                <li>Data: 1803–∞</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-quote">"Todo arquivo morto ainda respira em alguma página."</p>
            <span className="footer-ref">ARQ-001 · LACRADO · VOLTAGEM: 120V DC</span>
          </div>
        </footer>

      </main>
    </div>
  )
}

export default App
