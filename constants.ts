
import { Question } from './types';

export const QUIZ_DATABASE: Question[] = [
  // TÓPICO 1: Arquitetura e Estratégia Electron
  {
    id: 'elec-1',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Qual é a composição fundamental da anatomia híbrida do Electron?',
    options: [
      'Chromium para a interface visual e Node.js para execução de sistema.',
      'React para componentes nativos e Chromium para o backend de rede.',
      'Swift para janelas no macOS e C++ para processamento no Windows.',
      'Engine V8 para renderização do DOM e PWA para o acesso ao hardware.',
      'Node.js para o frontend visual e Chromium para o gerenciamento de SO.'
    ],
    correctAnswer: 0,
    explanation: 'O Electron combina o Chromium (responsável por renderizar a interface web usando HTML, CSS e JS) e o Node.js (que permite acesso ao sistema de arquivos e APIs de baixo nível do sistema operacional). Essa união permite criar aplicações desktop com tecnologias web.'
  },
  {
    id: 'elec-2',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'No modelo de arquitetura do Electron, qual a principal função do Processo Principal?',
    options: [
      'Renderizar o conteúdo HTML e aplicar os estilos CSS da interface web.',
      'Gerenciar o ciclo de vida da aplicação e as janelas nativas do sistema.',
      'Executar o motor de renderização Blink de forma isolada por cada janela.',
      'Garantir que o código do frontend acesse diretamente o sistema de arquivos.',
      'Isolar a interface do usuário em um sandbox para evitar o consumo de RAM.'
    ],
    correctAnswer: 1,
    explanation: 'O Processo Principal (Main Process) é o ponto de entrada da aplicação. Ele gerencia o ciclo de vida do app (início, encerramento) e é responsável por criar e gerenciar as janelas nativas (BrowserWindow) do sistema operacional.'
  },
  {
    id: 'elec-3',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'O que acontece se um Processo de Renderização travar em uma aplicação Electron?',
    options: [
      'O aplicativo é encerrado imediatamente pelo gerenciador de processos do SO.',
      'O processo principal também trava por possuir uma dependência síncrona.',
      'A aplicação continua funcionando, afetando apenas a janela específica.',
      'O Node.js reinicia automaticamente todo o ciclo de vida do arquivo main.js.',
      'O sistema operacional bloqueia o acesso ao hardware para evitar falhas graves.'
    ],
    correctAnswer: 2,
    explanation: 'O Electron utiliza uma arquitetura multi-processo herdada do Chromium. Cada janela (BrowserWindow) roda em seu próprio Processo de Renderização isolado. Se uma janela travar, as outras janelas e o Processo Principal permanecem ativos.'
  },
  {
    id: 'elec-4',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Qual é o papel do IPC (Comunicação Inter-Processos) na arquitetura do framework?',
    options: [
      'Substituir a necessidade do Node.js para aumentar a performance do app.',
      'Permitir a renderização de componentes React dentro do processo principal.',
      'Atuar como uma ponte segura de mensagens entre o frontend e o backend.',
      'Compilar o código JavaScript em binários nativos para Windows e macOS.',
      'Gerenciar o consumo de memória RAM entre o Chromium e o motor de busca.'
    ],
    correctAnswer: 2,
    explanation: 'Como o Processo Principal e os Processos de Renderização são isolados, eles não podem compartilhar memória diretamente. O IPC (Inter-Process Communication) é o mecanismo que permite a troca de mensagens e dados entre esses processos de forma segura.'
  },
  {
    id: 'elec-5',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Por que o Electron é considerado uma solução "Write Once, Run Everywhere"?',
    options: [
      'Pois converte automaticamente código HTML em Swift e C# nativos.',
      'Devido à capacidade de rodar o mesmo código em navegadores móveis.',
      'Por permitir o uso de uma única base de código para múltiplos sistemas.',
      'Porque elimina a necessidade de instalar o Node.js no computador final.',
      'Por utilizar o motor do Chromium para emular sistemas operacionais antigos.'
    ],
    correctAnswer: 2,
    explanation: 'O Electron permite que desenvolvedores utilizem uma única base de código (HTML, CSS, JavaScript) para gerar executáveis nativos para Windows, macOS e Linux, reduzindo drasticamente o esforço de desenvolvimento multiplataforma.'
  },
  {
    id: 'elec-6',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Qual é a recomendação de segurança quanto ao uso de "nodeIntegration" no Renderer?',
    options: [
      'Deve ser habilitado para permitir que o CSS acesse o sistema de arquivos.',
      'Precisa ser ativado sempre que o desenvolvedor utilizar React ou Vue.js.',
      'Nunca deve ser habilitado para evitar que falhas de XSS exponham o SO.',
      'É obrigatório para que a comunicação via IPC funcione de forma assíncrona.',
      'Deve ser configurado como true apenas quando o app estiver em produção.'
    ],
    correctAnswer: 2,
    explanation: 'Habilitar o "nodeIntegration" permite que o código do frontend execute comandos do Node.js diretamente. Se o app sofrer um ataque de Cross-Site Scripting (XSS), o invasor teria acesso total ao sistema do usuário. Por isso, a recomendação é mantê-lo desativado.'
  },
  {
    id: 'elec-7',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'O que é o Context Bridge dentro do ecossistema do Electron?',
    options: [
      'Uma ferramenta de depuração usada para monitorar o consumo de recursos.',
      'Uma API que expõe funções seguras do Node através de scripts de preload.',
      'O motor responsável por converter código CSS em estilos nativos do SO.',
      'Um serviço de nuvem que sincroniza dados entre o desktop e dispositivos.',
      'O comando utilizado no terminal para inicializar o arquivo package.json.'
    ],
    correctAnswer: 1,
    explanation: 'O Context Bridge é a forma segura de expor APIs do Node.js (definidas em um script de preload) para o processo de renderização. Ele cria um canal isolado onde apenas as funções permitidas pelo desenvolvedor ficam disponíveis no frontend.'
  },
  {
    id: 'elec-8',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Qual comando é utilizado para instalar o Electron como dependência de desenvolvimento?',
    options: [
      'npm init -y electron',
      'npm install --save-dev electron',
      'npm start electron --global',
      'node install electron-backend',
      'npm run build-electron-app'
    ],
    correctAnswer: 1,
    explanation: 'O Electron deve ser instalado como uma dependência de desenvolvimento (`--save-dev` ou `-D`), pois ele é necessário para rodar e testar o app durante a criação, mas o binário final é empacotado separadamente.'
  },
  {
    id: 'elec-9',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'No arquivo package.json, qual é a finalidade de alterar a propriedade "main"?',
    options: [
      'Definir o nome da aplicação que aparecerá na barra de tarefas do sistema.',
      'Indicar qual arquivo HTML será carregado primeiro pelo motor Chromium.',
      'Especificar o ponto de entrada do Processo Principal, como o main.js.',
      'Configurar o script de inicialização para rodar o comando npm start.',
      'Listar todas as dependências de produção necessárias para o instalador.'
    ],
    correctAnswer: 2,
    explanation: 'A propriedade "main" no `package.json` informa ao Electron qual arquivo JavaScript deve ser executado para iniciar o Processo Principal da aplicação. Se não for definido, o padrão é procurar por um arquivo `index.js`.'
  },
  {
    id: 'elec-10',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Qual é um dos principais desafios técnicos ao escolher o Electron para um projeto?',
    options: [
      'A dificuldade de acessar periféricos e o hardware nativo do computador.',
      'A impossibilidade de criar interfaces consistentes entre diferentes SOs.',
      'O alto consumo de memória RAM e o tamanho elevado do pacote final.',
      'A falta de suporte para bibliotecas modernas de frontend como o React.',
      'A necessidade de reescrever o código de lógica para cada plataforma alvo.'
    ],
    correctAnswer: 2,
    explanation: 'Como cada aplicação Electron carrega uma instância completa do Chromium e do Node.js, o consumo de memória RAM é significativamente maior do que apps nativos, e o tamanho do instalador (bundle) costuma ser grande (acima de 100MB).'
  },
  {
    id: 'elec-11',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Qual ferramenta é recomendada para depurar erros de interface no Electron?',
    options: [
      'O terminal do Node.js executando o processo principal em modo verbose.',
      'As Ferramentas de Desenvolvedor (DevTools) acessadas via atalho de teclas.',
      'O gerenciador de tarefas do Windows para monitorar o uso da CPU e RAM.',
      'A alteração manual da propriedade nodeIntegration para o valor de true.',
      'O arquivo preload.js configurado para emitir alertas de sistema no console.'
    ],
    correctAnswer: 1,
    explanation: 'Como o Electron utiliza o Chromium, ele oferece as mesmas Chrome DevTools que usamos no navegador. Elas são essenciais para inspecionar o DOM, debugar CSS e verificar erros no console do JavaScript da interface.'
  },
  {
    id: 'elec-12',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Em qual situação o uso do Electron é explicitamente "evitado" segundo os slides?',
    options: [
      'Criação de ferramentas de produtividade como Slack e Notion para desktop.',
      'Desenvolvimento de aplicativos que precisam de funcionamento offline first.',
      'Construção de utilitários ultra-leves ou jogos 3D de alta performance.',
      'Startups que buscam um tempo de resposta ao mercado extremamente rápido.',
      'Softwares empresariais que exigem leitura e escrita no sistema de arquivos.'
    ],
    correctAnswer: 2,
    explanation: 'O Electron não é a melhor escolha para utilitários que precisam ser extremamente leves (devido ao overhead do Chromium) ou para jogos 3D de alta performance, onde o acesso direto e otimizado à GPU via APIs nativas é preferível.'
  },
  {
    id: 'elec-13',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Qual função o método "app.whenReady()" desempenha no código do main.js?',
    options: [
      'Carrega o arquivo index.html diretamente no processo de renderização.',
      'Finaliza todos os processos do Chromium para economizar memória RAM.',
      'Aguarda a inicialização do Electron antes de criar as janelas do app.',
      'Verifica se o Node.js possui permissões de administrador no sistema alvo.',
      'Define as dimensões de largura e altura da interface visual da aplicação.'
    ],
    correctAnswer: 2,
    explanation: 'Muitas APIs do Electron e a criação de janelas (BrowserWindow) só podem ser realizadas após o framework terminar sua inicialização interna. O `app.whenReady()` retorna uma Promise que resolve quando o ambiente está pronto.'
  },
  {
    id: 'elec-14',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Como o Electron garante que os patches de segurança sejam aplicados rapidamente?',
    options: [
      'Utilizando uma engine própria que não depende de navegadores externos.',
      'Mantendo seu ciclo de atualização sincronizado com as versões do Chrome.',
      'Bloqueando o acesso à rede para todos os processos de renderização ativos.',
      'Exigindo que o desenvolvedor recompile o kernel do Node.js mensalmente.',
      'Forçando a execução de todo o código frontend dentro do processo principal.'
    ],
    correctAnswer: 1,
    explanation: 'O Electron segue de perto o ciclo de lançamentos do Chromium. Quando uma falha de segurança é corrigida no Chrome, a equipe do Electron lança uma nova versão rapidamente para que os desenvolvedores possam atualizar seus apps.'
  },
  {
    id: 'elec-15',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'O que define um aplicativo como "Offline First" no contexto do Electron?',
    options: [
      'A capacidade de rodar no desktop sem depender de uma conexão de rede.',
      'O uso exclusivo de arquivos HTML locais sem qualquer requisição via API.',
      'A necessidade de baixar o navegador Chromium sempre que o app inicia.',
      'O isolamento total do processo principal em relação aos servidores web.',
      'A configuração do package.json para ignorar atualizações de segurança.'
    ],
    correctAnswer: 0,
    explanation: 'Diferente de sites, aplicações Electron são instaladas localmente. O conceito "Offline First" significa que o app carrega seus recursos (HTML/JS/CSS) do disco local e deve ser funcional mesmo sem internet.'
  },
  {
    id: 'elec-16',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Qual a principal diferença entre o Electron e um PWA (Progressive Web App)?',
    options: [
      'PWAs possuem acesso total ao hardware, enquanto o Electron é limitado.',
      'O Electron permite acesso total ao sistema, enquanto PWAs são limitados.',
      'O desenvolvimento em Electron é mais lento por exigir três times distintos.',
      'PWAs resultam em executáveis muito mais pesados do que o bundle Electron.',
      'O Electron roda apenas no navegador, enquanto PWAs são nativos do SO.'
    ],
    correctAnswer: 1,
    explanation: 'PWAs rodam dentro de um sandbox restrito do navegador por segurança. O Electron, através da integração com o Node.js, permite acesso profundo ao sistema operacional (arquivos, processos, registros, etc.) que um PWA não consegue.'
  },
  {
    id: 'elec-17',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'O que compõe a estrutura básica de arquivos de um projeto Electron inicial?',
    options: [
      'Somente os arquivos main.js e um banco de dados SQL local criptografado.',
      'A pasta node_modules, o package.json, main.js, index.html e o preload.js.',
      'Um compilador C++, o motor Chromium e os scripts de automação do Swift.',
      'Apenas o arquivo index.html e as dependências globais do sistema operacional.',
      'O binário executável do app e uma lista de comandos para o terminal Bash.'
    ],
    correctAnswer: 1,
    explanation: 'Um projeto Electron padrão requer o `package.json` (configurações), `main.js` (processo principal), `index.html` (interface), `preload.js` (segurança) e a pasta `node_modules` com as dependências instaladas.'
  },
  {
    id: 'elec-18',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Qual o risco de não sanitizar conteúdo externo via CSP em apps Electron?',
    options: [
      'Redução drástica na performance de renderização de estilos CSS complexos.',
      'Aumento do consumo de memória RAM pelo processo de renderização ativo.',
      'Possibilidade de ataques XSS comprometerem o sistema através do frontend.',
      'Erros de compilação durante a geração do instalador para o sistema Linux.',
      'Incompatibilidade com as ferramentas de desenvolvedor do motor Chromium.'
    ],
    correctAnswer: 2,
    explanation: 'A Content Security Policy (CSP) é uma camada extra de segurança que ajuda a detectar e mitigar certos tipos de ataques, como Cross-Site Scripting (XSS). Sem ela, um script malicioso pode ser injetado e tentar executar ações perigosas no app.'
  },
  {
    id: 'elec-19',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'No desenvolvimento com Electron, por que se usa a flag "--save-dev" para instalá-lo?',
    options: [
      'Porque o motor é necessário apenas durante a fase de criação e testes.',
      'Para garantir que o framework seja atualizado automaticamente via nuvem.',
      'Devido à necessidade de rodar o código fonte diretamente em produção.',
      'Para permitir que o Node.js acesse o hardware sem permissões de usuário.',
      'Porque o Electron substitui o motor V8 no ambiente de execução final.'
    ],
    correctAnswer: 0,
    explanation: 'O pacote `electron` contém o binário necessário para rodar o app durante o desenvolvimento. Quando o app é distribuído, ferramentas de empacotamento (como electron-builder) incluem o binário necessário, por isso ele é uma dependência de desenvolvimento.'
  },
  {
    id: 'elec-20',
    topic: 'Arquitetura e Estratégia Electron',
    question: 'Qual é a função dos scripts de "preload" na arquitetura de segurança?',
    options: [
      'Aumentar a velocidade de carregamento de imagens pesadas na interface.',
      'Executar código de sistema antes que o processo principal seja iniciado.',
      'Conectar o frontend ao Node.js de forma controlada e com APIs restritas.',
      'Substituir o arquivo package.json no gerenciamento de dependências NPM.',
      'Impedir que o usuário abra as ferramentas de desenvolvedor no aplicativo.'
    ],
    correctAnswer: 2,
    explanation: 'Os scripts de preload rodam em um contexto que tem acesso às APIs do Node.js, mas antes do conteúdo da página carregar. Eles permitem usar o `contextBridge` para expor apenas as funcionalidades necessárias ao frontend de forma segura.'
  },

  // TÓPICO 2: Janelas e Ciclo de Vida
  {
    id: 'win-1',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Qual módulo do Electron é o responsável direto pela criação e gerenciamento da interface visual (janelas) do aplicativo?',
    options: [
      'Módulo app',
      'Módulo BrowserWindow',
      'Módulo NativeImage',
      'Módulo IPCMain',
      'Módulo Process'
    ],
    correctAnswer: 1,
    explanation: 'O módulo `BrowserWindow` é a classe fundamental para criar janelas no Electron. Cada instância dessa classe representa uma janela do sistema operacional que carrega uma página web.'
  },
  {
    id: 'win-2',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Na configuração da BrowserWindow, qual é a função primordial da propriedade nodeIntegration: false?',
    options: [
      'Permitir que a página web acesse livremente arquivos do sistema operacional',
      'Isolar os scripts da página web em um ambiente de execução totalmente nativo',
      'Impedir que scripts da página web utilizem recursos diretos do Node.js',
      'Habilitar a comunicação síncrona entre o processo principal e o renderizador',
      'Garantir que o Chromium carregue apenas arquivos de texto estáticos e locais'
    ],
    correctAnswer: 2,
    explanation: 'O `nodeIntegration: false` é uma medida de segurança vital que impede que o código JavaScript executado no processo de renderização (frontend) tenha acesso direto às APIs do Node.js, mitigando riscos de ataques XSS.'
  },
  {
    id: 'win-3',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Sobre o Ciclo de Vida do Electron, por que é fundamental utilizar o método app.whenReady()?',
    options: [
      'Para garantir que o Node.js tenha carregado todos os módulos do sistema',
      'Porque a interface só pode ser criada após a inicialização do motor Chromium',
      'Para validar se a licença do software permite a abertura de múltiplas janelas',
      'Porque ele identifica automaticamente se o sistema operacional é Windows ou Mac',
      'Para forçar o encerramento de processos órfãos antes de renderizar o HTML'
    ],
    correctAnswer: 1,
    explanation: 'Muitas APIs do Electron, especialmente a criação de janelas, exigem que o ambiente (incluindo o motor Chromium) esteja totalmente inicializado. O `app.whenReady()` garante que o código de criação da interface só execute no momento certo.'
  },
  {
    id: 'win-4',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Na arquitetura do Electron, qual componente atua como a "ponte" que permite a comunicação entre o motor de renderização e o sistema operacional?',
    options: [
      'Chromium',
      'Node.js',
      'V8 Engine',
      'IPC',
      'Preload'
    ],
    correctAnswer: 4,
    explanation: 'O script de `Preload` atua como uma ponte segura. Ele roda em um contexto privilegiado com acesso ao Node.js e pode expor APIs específicas para o Renderer através do `contextBridge`, sem expor o Node.js inteiro.'
  },
  {
    id: 'win-5',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Qual é o comportamento padrão esperado de um aplicativo Electron ao fechar todas as janelas no sistema operacional macOS?',
    options: [
      'O aplicativo encerra todos os seus processos e limpa a memória RAM',
      'O processo principal continua em execução e o app permanece na Dock',
      'O sistema operacional força o reinício automático da janela principal',
      'O aplicativo emite um alerta de erro crítico de fechamento inesperado',
      'A interface visual é minimizada mas o Node.js é desativado na hora'
    ],
    correctAnswer: 1,
    explanation: 'No macOS, a convenção é que os aplicativos permaneçam ativos na Dock mesmo sem janelas abertas. O Electron respeita isso, e o desenvolvedor deve tratar o evento `activate` para recriar a janela se necessário.'
  },
  {
    id: 'win-6',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Durante o desenvolvimento, qual método é preferível para carregar conteúdo que suporte Hot Module Replacement (como em projetos React/Vite)?',
    options: [
      'win.loadFile(\'index.html\')',
      'win.loadURL(\'http://localhost:3000\')',
      'win.setURL(\'src/main.js\')',
      'win.openFile(\'project/dist\')',
      'win.render(\'app.js\')'
    ],
    correctAnswer: 1,
    explanation: 'Para suportar HMR durante o desenvolvimento, carregamos a URL do servidor de desenvolvimento local (ex: Vite ou Webpack Dev Server) usando `loadURL`. Em produção, geralmente mudamos para `loadFile` apontando para os arquivos estáticos compilados.'
  },
  {
    id: 'win-7',
    topic: 'Janelas e Ciclo de Vida',
    question: 'O que caracteriza o "Processo Principal" (Main Process) em uma aplicação Electron?',
    options: [
      'Podem existir vários rodando simultaneamente para cada janela aberta',
      'Ele é responsável apenas pela renderização de CSS e elementos visuais',
      'Funciona dentro de uma Sandbox e não possui acesso aos recursos do SO',
      'Existe apenas um por aplicativo e gerencia todo o ciclo de vida do app',
      'É criado automaticamente pelo motor Chromium sem interferência do Node.js'
    ],
    correctAnswer: 3,
    explanation: 'O Processo Principal é único por aplicação. Ele é um processo Node.js completo que orquestra o ciclo de vida do app, gerencia janelas e tem acesso total às APIs nativas do sistema operacional.'
  },
  {
    id: 'win-8',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Qual configuração de segurança garante que os scripts da página web e os scripts internos do Electron rodem em "mundos separados"?',
    options: [
      'nodeIntegration: true',
      'webPreferences: {}',
      'contextIsolation: true',
      'sandbox: false',
      'devTools: true'
    ],
    correctAnswer: 2,
    explanation: 'O `contextIsolation: true` garante que o script de preload e o script da página web rodem em contextos (mundos) isolados, impedindo que a página web acesse ou modifique objetos internos do Electron ou do Preload.'
  },
  {
    id: 'win-9',
    topic: 'Janelas e Ciclo de Vida',
    question: 'No modelo multi-processo do Electron, qual é a principal vantagem de isolar os "Renderers" do "Main Process"?',
    options: [
      'Garantir que uma falha em uma janela não derrube a aplicação inteira',
      'Permitir que o HTML tenha acesso direto a todos os arquivos do usuário',
      'Aumentar o consumo de memória para acelerar o motor de busca do app',
      'Facilitar a execução de códigos nativos C++ dentro do navegador Chromium',
      'Impedir que o aplicativo seja executado em sistemas Windows ou Linux'
    ],
    correctAnswer: 0,
    explanation: 'O isolamento de processos aumenta a robustez. Se um processo de renderização (uma janela) falhar ou travar devido a um script pesado ou erro, o processo principal e as outras janelas continuam operando normalmente.'
  },
  {
    id: 'win-10',
    topic: 'Janelas e Ciclo de Vida',
    question: 'O evento activate no ciclo de vida do Electron é utilizado principalmente para qual finalidade?',
    options: [
      'Encerrar o aplicativo quando o usuário fecha a última janela ativa',
      'Iniciar a renderização do motor Chromium antes do carregamento do app',
      'Recriar uma janela quando o ícone da Dock é clicado e não há janelas',
      'Sincronizar os dados entre o processo de renderização e o servidor remoto',
      'Bloquear ataques maliciosos que tentam acessar o sistema de arquivos'
    ],
    correctAnswer: 2,
    explanation: 'O evento `activate` é específico do macOS. Ele é disparado quando o usuário clica no ícone do app na Dock. É o momento ideal para verificar se não há janelas abertas e criar uma nova.'
  },
  {
    id: 'win-11',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Qual das alternativas descreve corretamente a "Trindade Tecnológica" do Electron?',
    options: [
      'HTML, CSS e JavaScript puro rodando sem auxílio de motores externos',
      'Chromium para UI, Node.js para o sistema e V8 como motor de execução',
      'React para interface, Vite para compilação e Windows para execução',
      'IPC para dados, Sandbox para segurança e Main Process para janelas',
      'WebPreferences para segurança, App para vida e BrowserWindow para CSS'
    ],
    correctAnswer: 1,
    explanation: 'O Electron é construído sobre três pilares: Chromium (para renderização visual), Node.js (para acesso ao sistema operacional) e o motor V8 (que executa o JavaScript em ambos os contextos).'
  },
  {
    id: 'win-12',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Ao definir a instância da BrowserWindow, o que representam os valores numéricos como 800 e 600?',
    options: [
      'A velocidade de renderização da página em milissegundos',
      'A quantidade máxima de memória Node.js que a janela pode consumir',
      'As dimensões de largura (width) e altura (height) da janela inicial',
      'O número de processos renderizadores que o app pode suportar',
      'A porta de rede utilizada pelo servidor de desenvolvimento local'
    ],
    correctAnswer: 2,
    explanation: 'Ao instanciar uma `BrowserWindow`, passamos um objeto de opções onde definimos propriedades como `width` (largura) e `height` (altura) em pixels para determinar o tamanho inicial da janela.'
  },
  {
    id: 'win-13',
    topic: 'Janelas e Ciclo de Vida',
    question: 'No arquivo package.json, a propriedade main aponta para qual componente do Electron?',
    options: [
      'Para o arquivo HTML que será renderizado na tela principal',
      'Para o ponto de entrada que executa o Processo Principal (Main)',
      'Para a pasta de estilos CSS que define o rosto do aplicativo',
      'Para o script de renderização que roda dentro do motor Chromium',
      'Para o módulo IPC que gerencia a comunicação entre processos'
    ],
    correctAnswer: 1,
    explanation: 'A propriedade `main` no `package.json` define o script que o Electron executará primeiro. Este script roda no Processo Principal e é responsável por iniciar a lógica da aplicação e criar janelas.'
  },
  {
    id: 'win-14',
    topic: 'Janelas e Ciclo de Vida',
    question: 'O que acontece tecnicamente quando executamos app.quit() no código?',
    options: [
      'O aplicativo é minimizado para a bandeja do sistema operacional',
      'A janela atual é fechada, mas o processo Node.js continua ativo',
      'O ciclo de vida é encerrado e todos os processos são finalizados',
      'O motor V8 entra em modo de suspensão para economizar energia',
      'O contexto de isolamento é quebrado para salvar os arquivos pendentes'
    ],
    correctAnswer: 2,
    explanation: 'O método `app.quit()` tenta fechar todas as janelas e, em seguida, encerra o processo principal e todos os processos de renderização associados, finalizando a execução do aplicativo.'
  },
  {
    id: 'win-15',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Qual é a principal responsabilidade do Chromium dentro da estrutura do Electron?',
    options: [
      'Gerenciar o acesso a arquivos locais e recursos de rede do sistema',
      'Executar o código JavaScript do lado do servidor dentro do desktop',
      'Renderizar a interface do usuário utilizando tecnologias web padrão',
      'Orquestrar a criação e destruição de todos os processos do aplicativo',
      'Servir como ponte de comunicação via IPC entre as janelas abertas'
    ],
    correctAnswer: 2,
    explanation: 'O Chromium é o motor de renderização. Sua única e principal função no Electron é interpretar HTML, CSS e JavaScript para desenhar a interface visual do usuário, exatamente como um navegador faz.'
  },
  {
    id: 'win-16',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Por que o Electron é descrito como "Mais que um Navegador Disfarçado"?',
    options: [
      'Porque ele remove a necessidade de usar HTML e CSS na criação de apps',
      'Pois integra tecnologias web com acesso total às capacidades nativas do SO',
      'Devido ao fato de rodar apenas em ambientes de servidor como o Node.js',
      'Porque ele substitui o motor V8 por uma arquitetura puramente binária',
      'Por permitir que sites da internet controlem o hardware do usuário'
    ],
    correctAnswer: 1,
    explanation: 'Embora use tecnologias web, o Electron quebra as barreiras do navegador tradicional ao integrar o Node.js, permitindo que o app desktop acesse arquivos, hardware e APIs do sistema que seriam impossíveis em um site comum.'
  },
  {
    id: 'win-17',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Na implementação prática, onde deve ser inserida a chamada para a função createWindow()?',
    options: [
      'No topo do arquivo, logo após a importação do módulo electron',
      'Dentro de um bloco condicional que verifica se o SO é o Windows',
      'No retorno da promessa gerada pelo método app.whenReady()',
      'Exclusivamente dentro do evento window-all-closed para reabertura',
      'Dentro do arquivo index.html através de uma tag de script comum'
    ],
    correctAnswer: 2,
    explanation: 'A criação de janelas depende da inicialização do Electron. Por isso, chamamos a função de criação de janelas dentro do `.then()` do `app.whenReady()` ou usando `await app.whenReady()`.'
  },
  {
    id: 'win-18',
    topic: 'Janelas e Ciclo de Vida',
    question: 'O que define um "Renderer Process" em termos de segurança padrão?',
    options: [
      'Ele possui acesso irrestrito ao sistema de arquivos via Node.js',
      'Ele é um processo isolado que, por padrão, roda em uma Sandbox',
      'Existe apenas um por aplicativo, independentemente do número de janelas',
      'É o responsável por gerenciar o ciclo de vida de fechamento do app',
      'Ele ignora as configurações de webPreferences para acelerar o V8'
    ],
    correctAnswer: 1,
    explanation: 'Para proteger o sistema do usuário, os Processos de Renderização rodam em uma Sandbox (caixa de areia), o que limita seu acesso direto ao hardware e ao sistema operacional, a menos que explicitamente permitido via Preload/IPC.'
  },
  {
    id: 'win-19',
    topic: 'Janelas e Ciclo de Vida',
    question: 'Qual é a utilidade do módulo app no desenvolvimento com Electron?',
    options: [
      'Criar elementos visuais como botões e menus dentro do arquivo HTML',
      'Atuar como o controle remoto dos eventos de ciclo de vida da aplicação',
      'Substituir a necessidade de utilizar o motor V8 para rodar JavaScript',
      'Definir as propriedades de CSS que serão aplicadas na janela principal',
      'Gerar o arquivo executável final para distribuição em lojas de apps'
    ],
    correctAnswer: 1,
    explanation: 'O módulo `app` é responsável por controlar o ciclo de vida da aplicação. Ele emite eventos como `ready`, `window-all-closed`, `activate` e `quit`, permitindo que o desenvolvedor reaja a esses estados.'
  },
  {
    id: 'win-20',
    topic: 'Janelas e Ciclo de Vida',
    question: 'A frase "A ponte entre a interface e o sistema operacional" refere-se a qual conceito?',
    options: [
      'Ao modelo de carregamento de arquivos estáticos via loadFile',
      'À síntese arquitetural que o Electron promove entre Web e Nativo',
      'Ao isolamento de contexto que separa scripts de mundos diferentes',
      'À configuração de largura e altura definida na instância da janela',
      'Ao fechamento diferenciado entre os sistemas Windows, Linux e Mac'
    ],
    correctAnswer: 1,
    explanation: 'O Electron é essencialmente a ponte que une o mundo Web (interface rica e flexível) ao mundo Nativo (poder de processamento e acesso ao sistema), permitindo criar softwares desktop modernos com facilidade.'
  },

  // TÓPICO 3: Hardware e Comunicação Segura
  {
    id: 'hard-1',
    topic: 'Hardware e Comunicação Segura',
    question: 'Qual é a responsabilidade principal do Main Process na arquitetura de janelas do Electron?',
    options: [
      'Desenhar a interface do usuário utilizando tecnologias web.',
      'Gerenciar o ciclo de vida das janelas, como criar e fechar.',
      'Executar scripts de animação CSS e interações do DOM.',
      'Injetar funções de segurança diretamente no objeto global window.',
      'Realizar o polling de bateria sem intervenção do sistema.'
    ],
    correctAnswer: 1,
    explanation: 'O Main Process é o único que tem acesso direto às APIs nativas do sistema operacional para criar e gerenciar janelas (BrowserWindow). O Renderer Process apenas exibe o conteúdo dentro dessas janelas.'
  },
  {
    id: 'hard-2',
    topic: 'Hardware e Comunicação Segura',
    question: 'Para impedir que uma aplicação Electron quebre visualmente ao ser redimensionada pelo usuário, qual propriedade deve ser utilizada?',
    options: [
      'maxWidth',
      'center',
      'minWidth',
      'frame',
      'resizable'
    ],
    correctAnswer: 2,
    explanation: 'A propriedade `minWidth` (e `minHeight`) define o tamanho mínimo que uma janela pode ter. Isso evita que o layout "quebre" ou fique ilegível se o usuário tentar encolher demais a janela.'
  },
  {
    id: 'hard-3',
    topic: 'Hardware e Comunicação Segura',
    question: 'Qual o efeito de definir a propriedade "frame" como "false" ao instanciar uma BrowserWindow?',
    options: [
      'A janela perde a área de arraste e os botões de controle nativos.',
      'O processo Renderer ganha acesso imediato a todas as APIs do Node.js.',
      'O sistema operacional impede que a janela entre em modo de suspensão.',
      'A janela torna-se automaticamente uma janela filha de outra janela ativa.',
      'A comunicação via IPC é desabilitada para garantir o isolamento total.'
    ],
    correctAnswer: 0,
    explanation: 'Uma janela "frameless" (sem moldura) não possui a barra de título, bordas e botões de fechar/minimizar nativos do sistema operacional. O desenvolvedor deve criar esses controles manualmente no HTML/CSS.'
  },
  {
    id: 'hard-4',
    topic: 'Hardware e Comunicação Segura',
    question: 'Como se chama a janela que bloqueia a interação com a janela pai até que seja fechada ou resolvida?',
    options: [
      'Janela Transparente',
      'Janela Modificada',
      'Janela de Preload',
      'Janela Modal',
      'Janela de Hardware'
    ],
    correctAnswer: 3,
    explanation: 'Uma janela modal é uma janela filha que desabilita a janela pai enquanto estiver aberta. É muito comum para diálogos de confirmação ou formulários que exigem atenção imediata.'
  },
  {
    id: 'hard-5',
    topic: 'Hardware e Comunicação Segura',
    question: 'Qual técnica de CSS é utilizada para permitir que o usuário arraste uma janela que não possui moldura nativa?',
    options: [
      '-webkit-app-region: no-drag',
      '-webkit-app-region: drag',
      'display: flex-window-drag',
      'position: fixed-frame',
      'cursor: grab-window-move'
    ],
    correctAnswer: 1,
    explanation: 'Em janelas sem moldura, a propriedade CSS `-webkit-app-region: drag` permite definir áreas do HTML (como uma barra de título personalizada) que o usuário pode clicar e arrastar para mover a janela.'
  },
  {
    id: 'hard-6',
    topic: 'Hardware e Comunicação Segura',
    question: 'Sobre o módulo "powerMonitor", em qual processo ele deve ser obrigatoriamente executado?',
    options: [
      'Renderer Process',
      'Preload Process',
      'Main Process',
      'Context Bridge',
      'Chromium Process'
    ],
    correctAnswer: 2,
    explanation: 'O módulo `powerMonitor` faz parte das APIs nativas do Electron que têm acesso ao hardware e ao sistema operacional, portanto, ele só pode ser utilizado no Main Process.'
  },
  {
    id: 'hard-7',
    topic: 'Hardware e Comunicação Segura',
    question: 'Qual evento do "powerMonitor" deve ser ouvido para pausar tarefas pesadas e salvar cache antes do sistema dormir?',
    options: [
      'resume',
      'on-battery',
      'on-ac',
      'suspend',
      'stop-blocker'
    ],
    correctAnswer: 3,
    explanation: 'O evento `suspend` é disparado quando o sistema operacional está prestes a entrar em modo de suspensão. É o momento ideal para o app salvar estados pendentes e pausar processos que consomem recursos.'
  },
  {
    id: 'hard-8',
    topic: 'Hardware e Comunicação Segura',
    question: 'Qual o objetivo de utilizar o nível de bloqueio "prevent-display-sleep" no módulo "powerSaveBlocker"?',
    options: [
      'Impedir apenas que a aplicação seja suspensa enquanto a tela apaga.',
      'Manter a tela e o sistema ligados, ideal para reprodução de vídeos.',
      'Reduzir o consumo de bateria através da desativação de animações.',
      'Bloquear o acesso do Renderer ao hardware por motivos de segurança.',
      'Garantir que o sistema operacional mude para a fonte de energia AC.'
    ],
    correctAnswer: 1,
    explanation: 'O nível `prevent-display-sleep` é o mais forte; ele impede que a tela apague e que o sistema entre em suspensão. É essencial para apps de vídeo ou apresentações.'
  },
  {
    id: 'hard-9',
    topic: 'Hardware e Comunicação Segura',
    question: 'O que acontece se um desenvolvedor esquecer de chamar "powerSaveBlocker.stop(id)" após a conclusão de uma tarefa crítica?',
    options: [
      'O computador impedirá o desligamento da tela sem necessidade.',
      'O processo Main será encerrado automaticamente por excesso de consumo.',
      'A janela BrowserWindow perderá a capacidade de comunicação via IPC.',
      'O sistema operacional forçará a ativação do modo de economia de energia.',
      'O isolamento de contexto da aplicação será desabilitado para economizar CPU.'
    ],
    correctAnswer: 0,
    explanation: 'O bloqueio de energia permanece ativo até que seja explicitamente parado. Esquecer de pará-lo resultará em um desperdício de bateria, pois o sistema não conseguirá entrar em repouso automaticamente.'
  },
  {
    id: 'hard-10',
    topic: 'Hardware e Comunicação Segura',
    question: 'Qual a função do "ipcRenderer.invoke" na comunicação entre processos?',
    options: [
      'Enviar uma mensagem unidirecional sem aguardar retorno do Main.',
      'Iniciar um bloqueador de energia para evitar a suspensão da UI.',
      'Solicitar dados ao Main Process e aguardar uma resposta via Promise.',
      'Expor APIs seguras para o front-end através do Preload script.',
      'Redimensionar a janela atual para o modo de tela cheia sem bordas.'
    ],
    correctAnswer: 2,
    explanation: 'O `ipcRenderer.invoke` é a forma moderna e recomendada de fazer requisições assíncronas do Renderer para o Main. Ele retorna uma Promise que resolve com o valor enviado pelo Main via `ipcMain.handle`.'
  },
  {
    id: 'hard-11',
    topic: 'Hardware e Comunicação Segura',
    question: 'Qual combinação de configurações no "webPreferences" é considerada um erro fatal de segurança?',
    options: [
      'nodeIntegration: false e contextIsolation: true',
      'nodeIntegration: true e contextIsolation: false',
      'nodeIntegration: false e frame: false',
      'contextIsolation: true e transparent: true',
      'nodeIntegration: true e modal: true'
    ],
    correctAnswer: 1,
    explanation: 'Habilitar o `nodeIntegration` e desabilitar o `contextIsolation` permite que qualquer script malicioso injetado na página web tenha acesso total ao Node.js e, consequentemente, ao computador do usuário.'
  },
  {
    id: 'hard-12',
    topic: 'Hardware e Comunicação Segura',
    question: 'Qual é o papel principal do Preload Script na arquitetura segura do Electron?',
    options: [
      'Renderizar o conteúdo HTML antes do processo Chromium iniciar.',
      'Substituir o Main Process no gerenciamento de eventos de hardware.',
      'Atuar como um porteiro seguro entre o Node.js e a página web.',
      'Impedir que o sistema entre em suspensão durante o carregamento.',
      'Controlar as dimensões mínimas e máximas de janelas secundárias.'
    ],
    correctAnswer: 2,
    explanation: 'O Preload Script roda em um ambiente que tem acesso ao Node.js, mas compartilha o objeto global com a página web (de forma segura via Context Bridge). Ele serve para expor apenas as funcionalidades necessárias, mantendo o Node.js isolado.'
  },
  {
    id: 'hard-13',
    topic: 'Hardware e Comunicação Segura',
    question: 'Qual ferramenta é utilizada para injetar funções específicas no objeto "window" sem expor o ipcRenderer diretamente?',
    options: [
      'BrowserWindow',
      'powerMonitor',
      'Context Bridge',
      'Web Contents',
      'Event Listener'
    ],
    correctAnswer: 2,
    explanation: 'O `contextBridge` é a API que permite expor funções do script de preload para o processo de renderização de forma segura, criando uma ponte entre os dois ambientes isolados.'
  },
  {
    id: 'hard-14',
    topic: 'Hardware e Comunicação Segura',
    question: 'No padrão de comunicação "Fire & Forget", qual método é utilizado no Main Process para ouvir o evento enviado pelo Renderer?',
    options: [
      'ipcMain.handle',
      'ipcMain.on',
      'ipcMain.invoke',
      'ipcMain.send',
      'ipcMain.expose'
    ],
    correctAnswer: 1,
    explanation: 'O padrão "Fire & Forget" (disparar e esquecer) usa `ipcRenderer.send` no Renderer e `ipcMain.on` no Main. O Renderer envia a mensagem e não espera por uma resposta imediata.'
  },
  {
    id: 'hard-15',
    topic: 'Hardware e Comunicação Segura',
    question: 'Ao detectar que o computador mudou para o estado "on-battery", qual deve ser a ação recomendada para um app nativo?',
    options: [
      'Liberar animações pesadas e aumentar o polling de dados.',
      'Ativar o modo de tela cheia para economizar pixels acesos.',
      'Entrar em modo de economia e reduzir o consumo de recursos.',
      'Iniciar um powerSaveBlocker para manter o sistema sempre ligado.',
      'Fechar todas as janelas filhas para diminuir a carga do Node.js.'
    ],
    correctAnswer: 2,
    explanation: 'Apps bem comportados devem monitorar o estado da bateria via `powerMonitor`. Ao entrar em modo bateria, o app deve reduzir atividades em segundo plano e animações para preservar a carga do usuário.'
  },
  {
    id: 'hard-16',
    topic: 'Hardware e Comunicação Segura',
    question: 'O que o método "win.flashFrame(true)" faz em uma aplicação Electron?',
    options: [
      'Limpa o cache da janela antes de entrar em modo de suspensão.',
      'Altera a transparência da moldura em janelas do tipo frameless.',
      'Faz o ícone da janela piscar na barra de tarefas para chamar atenção.',
      'Habilita o arraste da janela em regiões definidas pelo desenvolvedor.',
      'Reinicia o processo Renderer caso ocorra um erro de comunicação.'
    ],
    correctAnswer: 2,
    explanation: 'O `flashFrame` é uma forma nativa de notificar o usuário. Ele faz o ícone do app piscar (no Windows) ou pular (no macOS) na barra de tarefas/Dock para indicar que algo exige atenção.'
  },
  {
    id: 'hard-17',
    topic: 'Hardware e Comunicação Segura',
    question: 'Qual a principal limitação do módulo "powerMonitor" em relação ao sistema operacional?',
    options: [
      'Ele não pode parar o sistema, apenas escutar e reagir a mudanças.',
      'Ele só funciona quando a janela BrowserWindow está em tela cheia.',
      'Ele depende que o nodeIntegration esteja ativado no Renderer Process.',
      'Ele bloqueia a execução de funções assíncronas no Main Process.',
      'Ele não consegue detectar se o computador está conectado à energia AC.'
    ],
    correctAnswer: 0,
    explanation: 'O `powerMonitor` é um módulo de monitoramento. Ele informa ao app sobre mudanças no estado de energia (bateria, suspensão, etc.), mas não tem o poder de impedir que o sistema operacional execute essas ações.'
  },
  {
    id: 'hard-18',
    topic: 'Hardware e Comunicação Segura',
    question: 'Para que serve o ID retornado pelo método "powerSaveBlocker.start()"?',
    options: [
      'Identificar qual processo Renderer solicitou o acesso ao hardware.',
      'Ser utilizado posteriormente para cancelar o bloqueio da suspensão.',
      'Validar a assinatura de segurança durante a comunicação via IPC.',
      'Definir a prioridade de renderização da janela em relação ao SO.',
      'Sincronizar o estado da bateria entre o Main e o Preload script.'
    ],
    correctAnswer: 1,
    explanation: 'O método `start` retorna um ID inteiro único. Esse ID é obrigatório para chamar o método `stop`, informando ao Electron qual bloqueio específico deve ser encerrado.'
  },
  {
    id: 'hard-19',
    topic: 'Hardware e Comunicação Segura',
    question: 'Na hierarquia de janelas, o que acontece com uma "Child Window" quando a janela pai é fechada?',
    options: [
      'Ela se torna a nova janela principal da aplicação automaticamente.',
      'Ela permanece aberta de forma independente no sistema operacional.',
      'Ela é fechada automaticamente junto com a janela pai.',
      'Ela entra em modo de suspensão para economizar energia da bateria.',
      'Ela perde o acesso às funções expostas pelo Preload e Context Bridge.'
    ],
    correctAnswer: 2,
    explanation: 'Ao definir uma janela como "child" (filha) de outra, o Electron cria uma relação de dependência. Se a janela pai for destruída, todas as suas janelas filhas serão destruídas automaticamente pelo framework.'
  },
  {
    id: 'hard-20',
    topic: 'Hardware e Comunicação Segura',
    question: 'Como o front-end (Renderer) deve interagir com as funções do Electron em uma aplicação segura?',
    options: [
      'Chamando o módulo "electron" diretamente dentro do arquivo JavaScript.',
      'Utilizando o comando "require" para acessar o fs e apagar arquivos.',
      'Consumindo uma API global exposta pela ponte no script de preload.',
      'Enviando mensagens de broadcast para todos os processos Chromium.',
      'Alterando as variáveis de ambiente do Node.js via CSS personalizado.'
    ],
    correctAnswer: 2,
    explanation: 'A prática recomendada de segurança é: isolar o Renderer, usar um script de preload para definir uma API segura e expor essa API via `contextBridge`. O Renderer então usa essa API global (ex: `window.electronAPI`) para se comunicar com o Main.'
  },

  // TÓPICO 4: Integração com o Sistema Operacional
  {
    id: 'os-1',
    topic: 'Integração com o Sistema Operacional',
    question: 'Qual módulo do Electron é utilizado especificamente para abrir URLs no navegador padrão do usuário em vez de carregá-las dentro da janela do próprio aplicativo?',
    options: [
      'Módulo Dialog',
      'Módulo Screen',
      'Módulo Shell',
      'Módulo Clipboard',
      'Módulo Tray'
    ],
    correctAnswer: 2,
    explanation: 'O módulo `shell` fornece funções relacionadas à integração com o desktop, como abrir URLs no navegador padrão (`shell.openExternal`) ou abrir arquivos no explorador de arquivos nativo.'
  },
  {
    id: 'os-2',
    topic: 'Integração com o Sistema Operacional',
    question: 'Onde a maioria das APIs nativas do Electron é executada para garantir a segurança da aplicação?',
    options: [
      'Processo de Renderização',
      'Processo Principal',
      'Ponte de Contexto',
      'Interface do React',
      'Navegador Externo'
    ],
    correctAnswer: 1,
    explanation: 'Por motivos de segurança e acesso ao sistema, as APIs nativas (como File System, Menus, Tray) rodam no Processo Principal (Main Process). O Renderer deve solicitar essas ações via IPC.'
  },
  {
    id: 'os-3',
    topic: 'Integração com o Sistema Operacional',
    question: 'Para salvar dados de configuração que devem persistir após atualizações, qual caminho o Electron recomenda utilizar?',
    options: [
      'Pasta de instalação do app',
      'Pasta temporária do sistema',
      'Caminho app.getPath(\'userData\')',
      'Diretório raiz do projeto',
      'Pasta Program Files'
    ],
    correctAnswer: 2,
    explanation: 'O caminho `userData` aponta para um diretório específico do usuário onde o app tem permissão de escrita e os dados não são apagados durante atualizações do software.'
  },
  {
    id: 'os-4',
    topic: 'Integração com o Sistema Operacional',
    question: 'Qual é o comportamento obrigatório ao lidar com atalhos globais (globalShortcut) para ser um "bom vizinho" no sistema?',
    options: [
      'Registrar atalhos no processo de renderização',
      'Limpar todos os registros no evento \'will-quit\'',
      'Utilizar apenas combinações simples como Ctrl+C',
      'Manter os atalhos ativos após o fechamento do app',
      'Ignorar a verificação de sucesso no registro'
    ],
    correctAnswer: 1,
    explanation: 'Atalhos globais persistem enquanto o processo estiver vivo. É essencial desregistrar todos os atalhos quando o app for fechado (evento `will-quit`) para não "sequestrar" teclas de outros aplicativos.'
  },
  {
    id: 'os-5',
    topic: 'Integração com o Sistema Operacional',
    question: 'No macOS, qual sufixo deve ser adicionado ao nome do arquivo de imagem do Tray para que o sistema alterne automaticamente as cores entre o modo claro e escuro?',
    options: [
      '-dark',
      '-light',
      'Template',
      'Native',
      'System'
    ],
    correctAnswer: 2,
    explanation: 'No macOS, arquivos de imagem que terminam com `Template` (ex: `iconTemplate.png`) são tratados como "Template Images", permitindo que o sistema ajuste a cor do ícone automaticamente para contrastar com a barra de menus.'
  },
  {
    id: 'os-6',
    topic: 'Integração com o Sistema Operacional',
    question: 'Qual função do módulo Dialog é a mais adequada para solicitar que o usuário selecione um arquivo Markdown (.md) específico no disco?',
    options: [
      'showMessageBox',
      'showSaveDialog',
      'showOpenDialog',
      'showItemInFolder',
      'openExternal'
    ],
    correctAnswer: 2,
    explanation: 'O `dialog.showOpenDialog` abre a janela nativa de seleção de arquivos. É possível configurar filtros para permitir apenas extensões específicas, como `.md`.'
  },
  {
    id: 'os-7',
    topic: 'Integração com o Sistema Operacional',
    question: 'O que são as \'Roles\' (Papéis) dentro da construção de menus nativos no Electron?',
    options: [
      'Identificadores para permissões de escrita em disco',
      'Comandos que utilizam métodos internos do SO para ações comuns',
      'Scripts para detectar o hardware de múltiplos monitores',
      'Configurações de segurança para a ponte IPC',
      'Funções para copiar textos da área de transferência'
    ],
    correctAnswer: 1,
    explanation: '`Roles` permitem que o Electron use comportamentos nativos padrão (como `copy`, `paste`, `quit`, `minimize`) sem que o desenvolvedor precise escrever a lógica manualmente para cada sistema operacional.'
  },
  {
    id: 'os-8',
    topic: 'Integração com o Sistema Operacional',
    question: 'Qual método é utilizado para criar um menu a partir de um array de objetos, sendo considerado o "Padrão Ouro" pela escalabilidade?',
    options: [
      'Menu.setApplicationMenu()',
      'Menu.buildFromTemplate()',
      'Menu.popup()',
      'ipcRenderer.invoke()',
      'app.whenReady()'
    ],
    correctAnswer: 1,
    explanation: 'O `Menu.buildFromTemplate(template)` é a forma mais eficiente de criar menus complexos, pois permite definir toda a estrutura em um array de objetos legível e fácil de manter.'
  },
  {
    id: 'os-9',
    topic: 'Integração com o Sistema Operacional',
    question: 'Ao utilizar o módulo Clipboard, qual comando deve ser usado para capturar um texto que foi copiado pelo usuário em outro aplicativo?',
    options: [
      'clipboard.writeText()',
      'clipboard.readText()',
      'clipboard.clear()',
      'clipboard.copy()',
      'clipboard.paste()'
    ],
    correctAnswer: 1,
    explanation: 'O método `clipboard.readText()` acessa a área de transferência do sistema e retorna o conteúdo de texto atual, permitindo que o app "cole" informações vindas de fora.'
  },
  {
    id: 'os-10',
    topic: 'Integração com o Sistema Operacional',
    question: 'Qual a principal vantagem de usar atalhos globais (globalShortcut) em comparação aos atalhos de teclado comuns?',
    options: [
      'Funcionam apenas quando a janela do app está focada',
      'São mais fáceis de programar no processo Renderer',
      'Podem ser detectados mesmo com o aplicativo minimizado',
      'Garantem que nenhum outro app use aquela tecla',
      'Não consomem recursos adicionais do sistema'
    ],
    correctAnswer: 2,
    explanation: 'Diferente dos aceleradores de menu (que exigem foco na janela), os `globalShortcut` registram atalhos diretamente no sistema operacional, funcionando mesmo que o app esteja em segundo plano ou minimizado.'
  },
  {
    id: 'os-11',
    topic: 'Integração com o Sistema Operacional',
    question: 'No contexto do módulo Screen, qual informação pode ser obtida para ajustar a interface a múltiplos monitores?',
    options: [
      'O caminho absoluto dos arquivos do usuário',
      'As dimensões da área de trabalho e posição do cursor',
      'O conteúdo de texto salvo na área de transferência',
      'A lista de aplicativos abertos no sistema operacional',
      'O status de conectividade com links externos'
    ],
    correctAnswer: 1,
    explanation: 'O módulo `screen` permite recuperar informações sobre o tamanho das telas, a área de trabalho disponível (excluindo barras de tarefas) e a posição atual do mouse.'
  },
  {
    id: 'os-12',
    topic: 'Integração com o Sistema Operacional',
    question: 'Qual é a recomendação de segurança para realizar a comunicação entre a interface (React) e os recursos nativos (Node.js)?',
    options: [
      'Importar o módulo \'fs\' diretamente no componente React',
      'Utilizar a ponte IPC via Preload script e ContextBridge',
      'Desativar o sandbox do navegador permanentemente',
      'Executar todas as funções nativas dentro do Renderer',
      'Acessar o hardware diretamente via chamadas de API Web'
    ],
    correctAnswer: 1,
    explanation: 'A arquitetura segura do Electron exige que o Renderer seja isolado. A comunicação deve ser feita via IPC, expondo apenas funções específicas através do `contextBridge` no script de `preload`.'
  },
  {
    id: 'os-13',
    topic: 'Integração com o Sistema Operacional',
    question: 'O que acontece se um desenvolvedor registrar o atalho \'Ctrl+C\' como um globalShortcut no Electron?',
    options: [
      'O aplicativo fechará automaticamente por erro crítico',
      'Outros aplicativos do sistema não conseguirão usar a função copiar',
      'O Electron converterá o atalho para uma Role nativa',
      'O sistema operacional priorizará o navegador padrão',
      'O atalho funcionará apenas se o app estiver em segundo plano'
    ],
    correctAnswer: 1,
    explanation: 'Registrar um `globalShortcut` é uma ação poderosa que intercepta a tecla no nível do SO. Se você registrar `Ctrl+C`, o sistema enviará esse evento apenas para o seu app, impedindo que outros apps usem o comando de copiar.'
  },
  {
    id: 'os-14',
    topic: 'Integração com o Sistema Operacional',
    question: 'Qual API deve ser chamada para exibir aquele pequeno círculo numérico (badge) sobre o ícone do aplicativo na barra de tarefas?',
    options: [
      'tray.setImage()',
      'app.setBadgeCount()',
      'dialog.showMessageBox()',
      'shell.showItemInFolder()',
      'screen.getPrimaryDisplay()'
    ],
    correctAnswer: 1,
    explanation: 'O método `app.setBadgeCount(count)` (disponível principalmente no macOS e alguns ambientes Linux) define o número exibido no ícone do app para notificações.'
  },
  {
    id: 'os-15',
    topic: 'Integração com o Sistema Operacional',
    question: 'Para garantir que um atalho funcione corretamente tanto no macOS quanto no Windows/Linux, qual string aceleradora é recomendada?',
    options: [
      'Ctrl+Shift+Alt',
      'CommandOrControl',
      'Super+Shift',
      'Option+Space',
      'Cmd+W'
    ],
    correctAnswer: 1,
    explanation: '`CommandOrControl` (ou `CmdOrCtrl`) é um modificador virtual que se traduz para `Command` no Mac e `Control` no Windows/Linux, garantindo a experiência nativa esperada em cada plataforma.'
  },
  {
    id: 'os-16',
    topic: 'Integração com o Sistema Operacional',
    question: 'Qual módulo do Electron é responsável por destacar um arquivo específico dentro do explorador de arquivos (Explorer ou Finder)?',
    options: [
      'Dialog',
      'Clipboard',
      'Shell',
      'Screen',
      'Tray'
    ],
    correctAnswer: 2,
    explanation: 'O método `shell.showItemInFolder(path)` abre a pasta contendo o arquivo e o seleciona visualmente, facilitando a localização para o usuário.'
  },
  {
    id: 'os-17',
    topic: 'Integração com o Sistema Operacional',
    question: 'Quando o método popup() do objeto Menu é geralmente invocado na implementação de menus de contexto?',
    options: [
      'No momento em que o aplicativo termina de carregar',
      'Quando o usuário clica com o botão direito do mouse',
      'Quando o aplicativo é minimizado para a bandeja',
      'Logo após o registro de um atalho global bem-sucedido',
      'Sempre que o foco da janela principal é perdido'
    ],
    correctAnswer: 1,
    explanation: 'Menus de contexto são disparados pelo evento de clique direito (`context-menu`). O método `menu.popup()` exibe o menu na posição atual do cursor.'
  },
  {
    id: 'os-18',
    topic: 'Integração com o Sistema Operacional',
    question: 'Por que não se deve salvar arquivos diretamente na pasta onde o aplicativo foi instalado (como Program Files)?',
    options: [
      'Porque o Electron não consegue ler pastas de sistema',
      'Devido a restrições de permissões de escrita e risco de perda em updates',
      'Pois os menus nativos deixariam de funcionar corretamente',
      'Para evitar conflitos com os atalhos globais registrados',
      'Porque o módulo Shell exige caminhos na pasta UserData'
    ],
    correctAnswer: 1,
    explanation: 'Pastas de instalação geralmente exigem privilégios de administrador para escrita. Além disso, quando o app é atualizado, essa pasta pode ser limpa ou substituída, causando perda de dados do usuário.'
  },
  {
    id: 'os-19',
    topic: 'Integração com o Sistema Operacional',
    question: 'Qual a diferença fundamental entre menus de aplicativo (Top Bar) e menus de contexto (Right-Click)?',
    options: [
      'Menus superiores são locais e menus de contexto são globais',
      'Menus superiores são globais e menus de contexto são para ações locais',
      'Apenas menus superiores podem utilizar Roles do sistema',
      'Menus de contexto não podem ser construídos via templates',
      'Somente os menus de contexto exigem o uso do processo principal'
    ],
    correctAnswer: 1,
    explanation: 'O Menu de Aplicativo é a barra superior que contém ações gerais do app. Menus de contexto são específicos para o elemento ou área onde o usuário clicou, oferecendo ações contextuais.'
  },
  {
    id: 'os-20',
    topic: 'Integração com o Sistema Operacional',
    question: 'Em qual evento do ciclo de vida do aplicativo os módulos como o Screen e o registro de atalhos globais tornam-se disponíveis?',
    options: [
      'will-quit',
      'contextmenu',
      'ready (ou após o app.whenReady)',
      'focus',
      'invoke'
    ],
    correctAnswer: 2,
    explanation: 'Muitos módulos nativos do Electron exigem que o ambiente do sistema operacional esteja totalmente carregado e pronto, o que é garantido após o evento `ready` do módulo `app`.'
  }
];
