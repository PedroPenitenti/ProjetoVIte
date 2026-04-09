# Documentação do Projeto — Projeto Com Vite 3.0

## 1. Visão geral
Este projeto implementa uma aplicação web de autenticação de usuários com interface em React. O fluxo principal permite **cadastro**, **login** e **logout** com persistência de sessão, utilizando os serviços do Firebase.

Do ponto de vista acadêmico, trata-se de um exemplo de aplicação cliente (front-end) orientada a componentes, com integração a um provedor externo de identidade.

## 2. Stack tecnológica
A stack atual do projeto é composta por:

- **Vite**: ferramenta de build e servidor de desenvolvimento para aplicações front-end.
- **React**: biblioteca para construção da interface com arquitetura baseada em componentes e estado.
- **Firebase Authentication**: serviço de autenticação por e-mail e senha.
- **ESLint**: padronização e análise estática de código.

### Dependências principais
- `react`
- `react-dom`
- `firebase`

## 3. Estrutura funcional do sistema
Em alto nível, o sistema está organizado da seguinte forma:

- `src/App.jsx`: controla estados globais de autenticação e alterna entre telas de login/cadastro/dashboard.
- `src/auth.js`: centraliza funções de autenticação (`login`, `registro`, `logout` e observador de sessão).
- `src/firebase.js`: inicializa o app Firebase e expõe o objeto de autenticação.
- `src/components/*`: componentes de interface para formulários e painel do usuário.

## 4. Banco e autenticação
### 4.1 Serviço utilizado
O projeto está integrado ao **Firebase Authentication** para gerenciamento de credenciais (e-mail e senha) e sessão de usuário.

### 4.2 Sobre “banco de dados”
No estado atual, não há uso explícito de banco relacional (SQL) ou coleções de dados do Firestore no código-fonte desta aplicação.

Assim, o armazenamento efetivamente utilizado nesta versão está centrado na camada de autenticação do Firebase (contas e credenciais de acesso).

## 5. Contas já cadastradas
Para facilitar testes, existem duas contas de acesso já criadas:

1. **beta@gmail.com**  
   Senha: **beta@gmail.com**

2. **alpha@gmail.com**  
   Senha: **alpha@gmail.com**

> Observação: conforme solicitado, em ambas as contas a senha é igual ao texto do próprio e-mail.

## 6. Execução local
No diretório `vite-project`, executar:

```bash
npm install
npm run dev
```

Para gerar build de produção:

```bash
npm run build
```

## 7. Identificação do criador

- **Nome:** Pedro Henrique Pereira penitenti
- **RA:** 2971392511020
- **Curso:** DSM - Manhã
- **Semestre:** 3° Semestre
