// Todo o conteúdo do site fica aqui. Para adaptar ao seu PFC, edite este arquivo.

export const projeto = {
  nome: 'Rafa Manager',
  subtitulo: 'O portal do PFC',
  descricao:
    'Um portal que organiza a turma, os grupos, as entregas, os materiais e as referências do PFC — do cadastro do aluno à entrega final.',
  stats: [
    { valor: '6', rotulo: 'módulos de domínio' },
    { valor: '1', rotulo: 'função Lambda com router interno' },
    { valor: '8', rotulo: 'tecnologias na stack' },
    { valor: 'Terraform', rotulo: 'infraestrutura como código' },
  ],
  stack: [
    'Go',
    'AWS Lambda',
    'API Gateway',
    'DynamoDB',
    'Cognito',
    'S3',
    'Terraform',
    'Angular',
  ],
};

// Fluxo de trabalho do próprio projeto (slide "Objetivo pedagógico").
export const fluxo = [
  {
    id: 'ideia',
    titulo: 'Ideia',
    texto: 'Defina o problema real: quem usa, o que precisa fazer e o que fica de fora.',
    entrada: 'Problema escrito em uma frase',
  },
  {
    id: 'prototipo',
    titulo: 'Protótipo',
    texto: 'Esboce as telas e o caminho do usuário antes de codificar. Errar aqui custa pouco.',
    entrada: 'Rascunho das páginas e do menu',
  },
  {
    id: 'codigo',
    titulo: 'Código',
    texto: 'Peça à IA uma primeira versão com um prompt bem estruturado e um escopo pequeno.',
    entrada: 'Prompt com contexto, tarefa e formato',
  },
  {
    id: 'ajustes',
    titulo: 'Ajustes',
    texto: 'Leia o código gerado, rode, quebre, corrija e peça melhorias em ciclos curtos.',
    entrada: 'Revisão: o que funciona, o que não, o que é genérico',
  },
  {
    id: 'entrega',
    titulo: 'Entrega',
    texto: 'Publique no GitHub, faça o deploy na Vercel e confira o site em celular e desktop.',
    entrada: 'Repositório + URL pública',
  },
];

// Módulos reais do backend (PFC.Backend/README.md).
export const modulos = [
  {
    nome: 'identity',
    titulo: 'Identidade',
    resumo: 'Login, cadastro, confirmação de conta e recuperação de senha.',
    detalhes: ['Autenticação via Amazon Cognito', 'Primeiro acesso com senha temporária', 'Perfis: aluno, orientador e admin'],
  },
  {
    nome: 'academic',
    titulo: 'Acadêmico',
    resumo: 'Cursos, turmas, programa da turma e allowlist de RGMs.',
    detalhes: ['Só alunos pré-autorizados conseguem criar conta', 'Programa da turma define as atividades', 'Organização por curso e turma'],
  },
  {
    nome: 'groups',
    titulo: 'Grupos',
    resumo: 'Projetos, integrantes, orientador e convites.',
    detalhes: ['Grupo com nomes, orientador e turma', 'Convites entre alunos', 'Orientador vê só os grupos que orienta'],
  },
  {
    nome: 'deliveries',
    titulo: 'Entregas',
    resumo: 'Atividades, campos de entrega e envio de arquivos.',
    detalhes: ['Upload direto para o S3, com progresso', 'Campos de entrega configuráveis por atividade', 'Leitura, envio e download de arquivos'],
  },
  {
    nome: 'materials',
    titulo: 'Materiais',
    resumo: 'Materiais de apoio em link ou arquivo, por turma ou gerais.',
    detalhes: ['Publicação pela equipe', 'Alunos veem os gerais e os da sua turma'],
  },
  {
    nome: 'references',
    titulo: 'Referências',
    resumo: 'Busca de artigos e lista de referências no padrão ABNT.',
    detalhes: ['Busca em OpenAlex e Crossref', 'Lista ABNT gerada por grupo'],
  },
];

// Comparativo React × JavaScript puro (slides 5 e 6 do React.pptx).
export const exemplos = {
  antes: `<h1 id="titulo"></h1>
<script>
  let nome = "Maria"
  document.getElementById("titulo").innerHTML = "Olá, " + nome
</script>`,
  depois: `function Saudacao({ nome }) {
  return <h1>Olá, {nome}</h1>
}`,
};

export const comparativo = [
  { criterio: 'Organização', react: 'Componentes reutilizáveis', js: 'Tudo separado por tipo de arquivo' },
  { criterio: 'Reutilização', react: 'Um componente, muitos usos', js: 'Copiar e colar código' },
  { criterio: 'Atualização da tela', react: 'Renderiza sozinho quando o estado muda', js: 'Você atualiza o DOM manualmente' },
  { criterio: 'Escalabilidade', react: 'Ideal para projetos grandes', js: 'Cresce mal com muitas telas' },
  { criterio: 'Testes', react: 'Componentes testáveis de forma isolada', js: 'Mais difícil de isolar' },
];

export const quandoReact = [
  'Muitas interações (cliques e formulários)',
  'Reutilização de código em componentes',
  'Várias telas ou seções',
  'Requisições constantes para APIs',
];

export const quandoJs = [
  'Site simples e institucional',
  'Pouca ou nenhuma interação',
  'Apenas conteúdo estático',
];

// Diário de IA: exemplo ilustrativo de um ciclo pedir → revisar → corrigir.
export const diarioIA = {
  promptRuim: 'faz um site bonito pro meu TCC',
  problemasRuim: [
    'Não diz o tema nem o público',
    'Não define páginas nem tecnologia',
    'Resultado: layout genérico, com textos inventados',
  ],
  promptBom: `Contexto: site de apresentação do meu PFC (sistema de gestão de TCC).
Tarefa: crie a página inicial em React + Vite, com 5 páginas e menu responsivo.
Restrições: sem bibliotecas de UI; dados em um único arquivo; textos em português.
Formato: primeiro liste os arquivos que vai criar, depois mostre cada um.`,
  ajustesBom: [
    'Pedir a lista de arquivos antes do código evita respostas gigantes e confusas',
    'Restringir dependências impede bibliotecas desnecessárias',
    'Separar dados do layout facilita a manutenção',
  ],
};

export const checklistRevisao = [
  'Eu entendo cada linha que a IA escreveu?',
  'Rodei o projeto e testei o caminho principal?',
  'Há textos ou números inventados que preciso trocar?',
  'O visual está genérico? Se sim, o que o torna meu?',
  'Remover código que não uso?',
  'Declarei o uso de IA conforme as regras do PFC?',
];

export const mercado = {
  intro:
    'React é a biblioteca de interface mais usada no front-end do mundo e está presente em produtos de grandes empresas.',
  empresas: ['Meta', 'Netflix', 'Amazon', 'Uber', 'Airbnb', 'Spotify', 'Nubank', 'Itaú', 'XP', 'iFood'],
  areas: [
    'Interfaces web (front-end)',
    'Apps mobile com React Native',
    'Sistemas internos: dashboards, painéis e ERPs',
    'Landing pages, e-commerces e SaaS',
    'Componentes, design systems e bibliotecas de UI',
  ],
  carreiras: [
    'Desenvolvedor Front-End React',
    'Desenvolvedor Full Stack (React + Node.js)',
    'Desenvolvedor Mobile (React Native)',
    'Engenheiro de UI/UX com React',
    'Criador de componentes e bibliotecas',
  ],
};

export const entrega = [
  { etapa: 'Repositório no GitHub', feito: 'Código versionado, com README explicando como rodar' },
  { etapa: 'Deploy na Vercel', feito: 'URL pública que atualiza a cada push na branch principal' },
  { etapa: 'Mínimo de 5 páginas', feito: 'Início, Projeto, IA, React × JS, Mercado e Entrega' },
  { etapa: 'Revisão do código gerado', feito: 'Diário de IA com ciclos de prompt, revisão e correção' },
  { etapa: 'Responsivo', feito: 'Menu recolhível no celular e grades que se adaptam à largura' },
];
