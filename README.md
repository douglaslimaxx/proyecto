## Proyecto

O **Proyecto** é um sistema de organização de projetos pessoais, onde você pode adicionar as tarefas necessárias para execução deles e preencher quais foram completadas, como também avaliá-las.

> "Sabe aquela lista de filmes do estúdio Ghibli que você montou em um caderno e está riscando quando assiste um, o **Proyecto** vai te ajudar nisso."

Nele você vai conseguir visualizar o progresso do projeto, adicionar e avaliar as tarefas, entre outras funcionalidades.

### Funcionalidades

- CRUD de projetos
- Adicionar tarefas/componentes dos projetos
- Avaliar tarefas/componentes dos projetos
- Pesquisar projetos
- Categorização dos projetos
- Estatísticas de satisfação de um projeto
- Ranking dos projetos, baseado no progresso ou prioridade

### Telas

- Tela inicial. Onde teremos a listagem dos projetos e cada projeto terá uma foto, nome, categoria/label e a porcentagem de progresso (a ideia principal dessa tela foi demonstrada nesse [protótipo](https://douglaslimaxx.github.io/proyecto/proto/)). Ao clicar em um projeto será exibida a tela deste projeto. Acima da listagem teremos um campo de busca e um menu de seleção para escolher o fator de ordenação dos projetos (Por avaliação, por número de componentes, por progresso) ou o fator de filtragem (Projetos concluídos, não concluídos, abandonados). No topo teremos uma barra de navegação com as opções: início, criar projeto e relatório.
- Tela de exibição de um projeto. Ao lado da foto teremos um botão de edição do projeto e abaixo os detalhes dele, sendo eles: nome, descrição, categoria, progresso e avaliação. Abaixo do detalhes teremos a listagem do componentes do projeto com um botão ao final para adicionar mais um componente.
- Tela de criação/edição de um projeto. Nessa teremos campos para cada detalhe de um projeto: imagem, nome, detalhes, categoria, prioridade. Na tela de edição os campos com os detalhes estarão preenchidos com os valores atuais, mas o usuário poderá modificar esses valores e clicar no botão de salvar para efetuar a edição. Na tela de edição terá também um botão de Abandonar Projeto.
- Tela de relatório. Aqui haverá alguns dados gerais sobre o sistema, como: projeto mais bem avaliado, projeto mais "encalhado", número de projetos em andamento, número de projetos completados e um gráfico com a porcentagem de categoria dos projeto.

Esse sistema faz parte da avaliação da disciplina de [Princípios do Desenvolvimento Web](https://github.com/matheusgr/devweb)
