# Gerenciador de Tarefas

Este é um aplicativo de gerenciador de tarefas desenvolvido com **Ionic** e **Angular**. Ele permite aos usuários cadastrar, listar e gerenciar tarefas de forma simples e intuitiva. O projeto segue boas práticas de desenvolvimento, incluindo o uso de serviços para interação com APIs e validação de formulários.

---

## **Funcionalidades**

- **Autenticação:**
  - Login com validação de token JWT.
- **Gerenciamento de Tarefas:**
  - Cadastro de tarefas com título, data e descrição.
  - Listagem de tarefas cadastradas.
- **Design Intuitivo:**
  - Uso de componentes do Ionic para uma experiência fluida.

---

## **Tecnologias Utilizadas**

- **Frontend:**
  - [Ionic](https://ionicframework.com/)
  - [Angular](https://angular.io/)
  - [TypeScript](https://www.typescriptlang.org/)
- **Backend:**
  - API desenvolvida para gerenciar tarefas https://github.com/frosipedro/API-GerenciadorTarefas.git
- **Outros:**
  - Validação de formulários com **Reactive Forms**.
  - Ícones do **Ionicons** para melhorar a experiência visual.

---

## **Pré-requisitos**

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior).
- [npm](https://www.npmjs.com/).
- [Ionic CLI](https://ionicframework.com/docs/cli/overview).

---

## **Como Executar o Projeto**

1. Clone este repositório:
   ```bash
   git clone https://github.com/Marco-Hendges/Pio-Gerenciador-de-Tarefas.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd gerenciador-de-tarefas
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure o ambiente (arquivo `environment.ts`):
   - Adicione a URL da sua API no arquivo de ambiente:
     ```typescript
     export const environment = {
       production: false,
       apiUrl: 'http://sua-api.com/api',
     };
     ```

5. Execute o projeto:
   ```bash
   ionic serve
   ```

6. Acesse o aplicativo no navegador:
   - O projeto estará disponível em: [http://localhost:8100](http://localhost:8100)


