# 💰 Budget Manager

Aplicação web para **gerenciamento e acompanhamento de despesas pessoais**, desenvolvida com **TypeScript e Vite**.

O projeto permite cadastrar despesas, classificá-las por categoria e acompanhar automaticamente o total gasto e a distribuição dos gastos.

## 📸 Preview

<img width="1136" height="849" alt="image" src="https://github.com/user-attachments/assets/cba7b1e5-8d10-4a1a-9383-06a4074a70a0" />


## 🚀 Funcionalidades

* ✅ Cadastro de novas despesas
* 💵 Formatação dos valores em Real Brasileiro (BRL)
* 🏷️ Categorização das despesas
* 📊 Resumo do total gasto
* 📋 Visualização das despesas cadastradas
* 🔎 Resumo dos gastos por categoria
* ⚠️ Validação dos dados do formulário
* 📱 Interface responsiva para dispositivos menores
* 🎨 Interface moderna e responsiva

### Categorias disponíveis

* 🍔 Alimento
* 🚗 Transporte
* 🎮 Lazer
* 🏥 Saúde
* 📦 Outros

## 🛠️ Tecnologias utilizadas

| Tecnologia          | Utilização                             |
| ------------------- | -------------------------------------- |
| **TypeScript**      | Desenvolvimento da aplicação e tipagem |
| **Vite**            | Build e servidor de desenvolvimento    |
| **HTML5**           | Estrutura da aplicação                 |
| **CSS3**            | Estilização e responsividade           |
| **JavaScript APIs** | Manipulação do DOM e geração de IDs    |

O projeto utiliza TypeScript e Vite como principais ferramentas de desenvolvimento.

## 📂 Estrutura do projeto

```text
budget-manager/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   ├── main.ts
│   ├── style.css
│   └── types.ts
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

A lógica principal da aplicação está concentrada em `src/main.ts`, enquanto `types.ts` define os tipos utilizados para categorias e despesas.

## ⚙️ Como executar

### Pré-requisitos

Antes de começar, você precisa ter instalado:

* [Node.js](https://nodejs.org/)
* npm

### 1. Clone o repositório

```bash
git clone https://github.com/JoaoGabrielRLP/budget-manager.git
```

### 2. Acesse a pasta

```bash
cd budget-manager
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

O Vite iniciará o servidor local de desenvolvimento.

## 📦 Scripts disponíveis

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

```bash
npm run build
```

Compila o TypeScript e gera a versão de produção da aplicação.

```bash
npm run preview
```

Executa uma prévia da versão de produção.

Esses são os scripts atualmente definidos no `package.json` do projeto.

## 🧠 Conceitos praticados

Este projeto foi desenvolvido com foco na prática de conceitos importantes de desenvolvimento frontend, incluindo:

* TypeScript
* Tipagem estática
* Interfaces e tipos
* Manipulação do DOM
* Eventos de formulário
* Validação de dados
* Arrays e métodos como `map`, `filter` e `reduce`
* `Intl.NumberFormat`
* Organização de código
* Responsividade com CSS
* Vite e gerenciamento de scripts npm

A aplicação utiliza `reduce` para calcular os totais gerais e por categoria e `Intl.NumberFormat` para formatar os valores como moeda brasileira.

## 🔮 Próximas melhorias

Algumas funcionalidades que podem ser adicionadas futuramente:

* [ ] Persistência dos dados com LocalStorage
* [ ] Exclusão de despesas
* [ ] Edição de despesas
* [ ] Filtro por categoria
* [ ] Filtro por período
* [ ] Gráficos de gastos
* [ ] Controle de receitas
* [ ] Cálculo de saldo
* [ ] Dark mode
* [ ] Exportação dos dados
* [ ] Persistência em banco de dados
* [ ] Autenticação de usuários

## 🎯 Objetivo

O **Budget Manager** foi desenvolvido como um projeto prático para aplicar conceitos de desenvolvimento web moderno, principalmente **TypeScript, manipulação do DOM, validação de dados e organização de aplicações frontend**.

## 👨‍💻 Autor

**João Gabriel**

* GitHub: [@JoaoGabrielRLP](https://github.com/JoaoGabrielRLP)
* Projeto: [Budget Manager](https://github.com/JoaoGabrielRLP/budget-manager)

---

⭐ Se este projeto foi útil ou interessante, considere deixar uma estrela no repositório!
