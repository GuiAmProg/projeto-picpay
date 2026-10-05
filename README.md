# PicPay Simplificado - Backend API

> Desafio técnico de backend para construção de uma API RESTful de transferência de valores entre usuários, aplicando arquitetura limpa, segurança em transações financeiras e integrações externas.

---

##  Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

* **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo para construção de aplicações eficientes e escaláveis.
* **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática.
* **[Prisma ORM](https://www.prisma.io/)** - Next-generation ORM para Node.js e TypeScript.
* **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional robusto rodando em container.
* **[Docker & Docker Compose](https://www.docker.com/)** - Containerização do ambiente de banco de dados.
* **[Axios](https://axios-http.com/)** - Cliente HTTP para consumo de serviços autorizadores e de notificação externos.

---

##  Regras de Negócio Implementadas

O sistema atende rigorosamente aos seguintes requisitos do desafio:

1. **Tipos de Usuários:** Existem dois tipos de perfis (`COMMON` e `MERCHANT`).
   * Usuários Comuns podem enviar e receber dinheiro.
   * Lojistas (`Merchant`) **apenas recebem** dinheiro, não podendo realizar transferências.
2. **Validação de Cadastro:** O sistema impede cadastros duplicados com o mesmo CPF/CNPJ (`document`) ou e-mail.
3. **Validação de Saldo:** O pagador precisa ter saldo suficiente na conta antes de efetivar a transferência.
4. **Serviço Autorizador Externo:** Antes de concluir qualquer transação, a API consulta um serviço autorizador externo (`https://util.devi.tools/api/v2/authorize`).
5. **Transações Atômicas (`$transaction`):** O débito da conta do pagador e o crédito na conta do recebedor ocorrem em uma transação atômica do banco de dados (garantindo Rollback caso ocorra qualquer falha).
6. **Serviço de Notificação:** Um mock assíncrono notifica o recebedor após a conclusão bem-sucedida da transferência.

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter instalado na sua máquina:
* **Node.js** (versão 18+)
* **Docker** e **Docker Compose**

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/GuiAmProg/projeto-picpay.git](https://github.com/GuiAmProg/projeto-picpay.git)
   cd projeto-picpay