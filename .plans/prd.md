# PRD - Painel de Despesas

## 1. Visão geral

Este projeto tem como objetivo criar um painel simples de controle de despesas usando Vite com TypeScript vanilla. A aplicação deve permitir ao usuário registrar despesas, visualizar todas as entradas em uma lista e acompanhar o total gasto por categoria e no total geral.

O projeto deve priorizar simplicidade, manutenção fácil e interface funcional, sem persistência de dados em armazenamento local ou backend.

## 2. Objetivo do produto

O produto deve funcionar como um visualizador e registrador de despesas pessoais, oferecendo:

- cadastro rápido de novas despesas;
- organização visual por categoria;
- total geral acumulado;
- total por categoria;
- listagem de todas as despesas adicionadas;
- interface clara e fácil de manter.

## 3. Escopo funcional

### 3.1 Cadastro de despesas
O usuário deve conseguir adicionar uma nova despesa informando:

- título;
- valor;
- categoria.

As categorias disponíveis são fixas e devem seguir a lista abaixo:

- Alimento
- Transporte
- Lazer
- Saúde
- Outros

### 3.2 Validação de dados
Antes de cadastrar a despesa, o sistema deve garantir que:

- o título esteja preenchido;
- o valor seja numérico e maior que zero;
- a categoria seja uma opção válida.

Se qualquer campo for inválido, a aplicação deve impedir o cadastro e indicar o problema visualmente, de forma simples.

### 3.3 Lista de despesas
A aplicação deve exibir todas as despesas cadastradas em uma lista abaixo do card de nova despesa.

Cada item da lista deve conter:

- título;
- valor;
- categoria.

A apresentação deve ser clara, organizada e legível.

### 3.4 Resumo financeiro
Na lateral esquerda da interface, deve existir uma área de resumo com:

- soma total de todas as despesas;
- total por categoria.

Esse resumo deve refletir automaticamente os dados atualmente cadastrados.

### 3.5 Atualização em tempo real
Toda vez que uma nova despesa for adicionada, os seguintes dados devem ser recalculados:

- total geral;
- totais por categoria;
- lista de despesas.

A atualização deve acontecer imediatamente após o cadastro, sem necessidade de recarregar a página.

### 3.6 Sem persistência
A aplicação não deve salvar os dados em localStorage, banco de dados ou qualquer backend.

Os dados devem existir apenas durante a execução da página, sendo resetados ao recarregar a aplicação.

## 4. Requisitos técnicos

### 4.1 Stack
- Vite
- TypeScript
- HTML
- CSS
- JavaScript/TypeScript vanilla

### 4.2 Estrutura de tipos
Todos os tipos devem estar no arquivo:

- src/types.ts

Os tipos esperados incluem, no mínimo:

- Categoria
- Despesa

### 4.3 Estrutura da interface
A estrutura HTML da aplicação deve ser montada diretamente no arquivo HTML principal, com os elementos visuais já definidos no DOM, como:

- sidebar com resumo financeiro;
- formulário de cadastro;
- área da lista de despesas.

O arquivo TypeScript deve ser responsável apenas pela manipulação dos dados e atualização dos elementos existentes, sem criar a estrutura inteira da interface dentro de `#app`.

### 4.4 Separação de responsabilidades
A implementação deve manter o código simples e organizado, com lógica separada entre:

- estrutura de tipos;
- leitura dos elementos do DOM;
- manipulação de eventos;
- cálculo de totais;
- atualização de textos e listas já existentes.

### 4.5 Eventos no TypeScript
Todos os eventos devem ser adicionados via TypeScript e não por atributos inline no HTML.

Exemplo: evitar `onclick` diretamente no markup e usar `addEventListener` em código TS.

### 4.6 Manutenibilidade
O código deve ser escrito de forma simples, legível e fácil de evoluir. Isso inclui:

- nomes claros para variáveis e funções;
- funções pequenas e com responsabilidade única;
- ausência de lógica excessivamente acoplada;
- reutilização simples para cálculos e atualização visual.

## 5. Requisitos visuais

### 5.1 Layout geral
A interface deve seguir um layout com duas áreas principais:

- sidebar à esquerda;
- conteúdo principal à direita.

A organização visual deve facilitar a leitura do resumo financeiro e da lista de despesas.

### 5.2 Estrutura HTML principal
A interface deve ser montada no HTML principal, com a seguinte organização:

- sidebar à esquerda para resumo financeiro;
- área principal à direita com formulário e lista;
- elementos fixos no markup, como containers para valores e itens.

O TypeScript deve apenas consumir esses elementos e atualizar o conteúdo conforme os dados.

### 5.3 Card de nova despesa
No topo da área principal, deve existir um card/formulário para adicionar uma nova despesa.

Esse bloco deve ter:

- campo para título;
- campo para valor;
- seletor de categoria;
- botão de envio.

### 5.4 Lista de despesas
Abaixo do card de cadastro, deve existir uma área com todas as despesas cadastradas.

A lista deve apresentar os itens em ordem clara, com destaque visual para valor e categoria.

### 5.5 Sidebar
A sidebar deve mostrar:

- total geral acumulado;
- total por categoria.

A informação deve ser visualmente destacada, fácil de localizar e entender.

### 5.6 Estilo visual
O projeto deve manter um visual limpo, moderno e simples, sem exageros.

Diretrizes:

- paleta de cores consistente;
- espaçamento uniforme;
- bordas e contrastes claros;
- foco em legibilidade;
- aparência agradável, mas funcional.

## 6. Estrutura de dados

### 6.1 Categoria
As categorias devem ser representadas por um conjunto fixo de valores:

- "Alimento"
- "Transporte"
- "Lazer"
- "Saúde"
- "Outros"

### 6.2 Despesa
Cada despesa deve ter a seguinte estrutura:

- id: string
- titulo: string
- valor: number
- categoria: Categoria

### 6.3 Estado da aplicação
O estado principal da aplicação deve conter a lista de despesas cadastradas e os valores calculados a partir dela.

## 7. Fluxo de uso principal

1. O usuário acessa a página.
2. Visualiza o formulário de nova despesa.
3. Preenche título, valor e categoria.
4. Submete o formulário.
5. A aplicação valida os dados.
6. Se válidos, a despesa é adicionada à lista.
7. A interface recalcula o total geral e os totais por categoria.
8. A lista e o resumo são atualizados imediatamente.

## 8. Critérios de aceitação

### Cadastro
- [ ] O usuário consegue adicionar uma despesa com título, valor e categoria.
- [ ] O valor deve ser aceito somente quando for válido.
- [ ] A categoria deve respeitar as opções definidas.

### Visualização
- [ ] A lista de despesas aparece abaixo do formulário.
- [ ] A sidebar exibe o total geral e os totais por categoria.
- [ ] A interface reflete os dados atualizados instantaneamente.

### Implementação
- [ ] Todos os tipos ficam em src/types.ts.
- [ ] O HTML define a estrutura base da interface.
- [ ] O TypeScript manipula dados e atualiza os elementos do DOM, sem montar a interface inteira em `#app`.
- [ ] Os eventos são tratados no TypeScript.
- [ ] A solução usa Vite, HTML, CSS e TypeScript simples.
- [ ] Não há persistência de dados.

## 9. Restrições do projeto

- Sem backend.
- Sem persistência local.
- Sem uso de frameworks adicionais.
- Sem ações inline no HTML.
- Sem montagem completa da interface dentro de `#app` no TypeScript.
- Código simples e de fácil manutenção.

## 10. Resultado esperado

A aplicação deve funcionar como um painel básico de controle de despesas, com formulário de cadastro, listagem de itens e resumo financeiro visualmente organizado. O usuário deve ser capaz de registrar despesas e entender rapidamente quanto foi gasto no total e por categoria.
