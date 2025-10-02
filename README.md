# servico-email-ezequiel

Este projeto é uma API simples e poderosa para **envio de e-mails via SMTP** utilizando [NestJS](https://nestjs.com/) e [Nodemailer](https://nodemailer.com/). Ele recebe requisições HTTP via API e envia e-mails em formato **texto** ou **HTML** para qualquer destinatário.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [Nodemailer](https://nodemailer.com/)
- [Class Validator](https://github.com/typestack/class-validator)
- [@nestjs/config](https://docs.nestjs.com/techniques/configuration)

---

## 📁 Estrutura do projeto

```
src/
├─ dto/
│  └─ create-mail.dto.ts      # DTO com validações do corpo da requisição
├─ repository/
│  └─ MailRepository.ts       # Lida com a lógica de envio de e-mails
├─ use-cases/
│  └─ send-email.use-case.ts  # Caso de uso para envio
├─ mail.controller.ts         # Controller com a rota POST /mail/send
├─ mail.module.ts             # Módulo principal de e-mails
├─ main.ts                    # Bootstrap do NestJS
└─ app.module.ts              # Módulo raiz do projeto
```

---

## ⚙️ Configuração do ambiente

Crie um arquivo `.env` na **raiz do projeto** e defina as credenciais do seu servidor SMTP:

```env
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=seuemail@gmail.com
MAIL_PASS=sua_senha_ou_app_password
MAIL_FROM="Meu Projeto <seuemail@gmail.com>"
```

> ⚠️ Caso utilize Gmail, é necessário gerar uma **App Password** nas configurações de segurança da sua conta.

---

## 🛠️ Como rodar o projeto localmente

1. **Clonar o repositório:**

```bash
git clone https://github.com/ezequiel-softfilm/servico-email-ezequiel.git
cd servico-email-ezequiel
```

2. **Instalar as dependências:**

```bash
npm install
```

3. **Rodar o projeto em modo desenvolvimento:**

```bash
npm run start:dev
```

4. O servidor estará disponível em:

```
http://localhost:3000
```

---

## 📮 Endpoints disponíveis

### ✉️ Enviar e-mail

**URL:**

```
POST /mail/send
```

**Descrição:**
Envia um e-mail para o destinatário informado no corpo da requisição.

---

### 📦 Exemplo de requisição

**POST:** `http://localhost:3000/mail/send`
**Headers:**

```
Content-Type: application/json
```

**Body:**

```json
{
  "to": "destinatario@exemplo.com",
  "subject": "Teste de envio de e-mail",
  "text": "Olá! Este é um e-mail de teste.",
  "html": "<h1>Olá!</h1><p>Este é um e-mail <strong>em HTML</strong>.</p>"
}
```

---

### ✅ Resposta de sucesso

```json
{
  "message": "E-mail enviado com sucesso!",
  "info": {
    "accepted": ["destinatario@exemplo.com"],
    "response": "250 2.0.0 OK: queued as <abc123@mailserver.com>"
  }
}
```

---

## 📌 Dicas importantes

- Se estiver usando **Gmail**, o envio só funciona com [App Password](https://support.google.com/accounts/answer/185833?hl=pt-BR) (senão o Google bloqueará o acesso SMTP).
- Sempre verifique a **pasta de spam/lixo eletrônico** ao testar o envio.
- Para produção, recomenda-se utilizar provedores dedicados (SendGrid, Amazon SES, Mailgun etc.).

---

## 🧑‍💻 Exemplo de uso com `fetch` (JavaScript)

```javascript
fetch("http://localhost:3000/mail/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    to: "destinatario@exemplo.com",
    subject: "Olá 👋",
    text: "Este é um teste simples.",
    html: "<h1>Olá 👋</h1><p>Envio de e-mail com sucesso!</p>",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

---

## 🧪 Testando com cURL

```bash
curl -X POST http://localhost:3000/mail/send \
  -H "Content-Type: application/json" \
  -d '{
    "to": "destinatario@exemplo.com",
    "subject": "Teste via cURL",
    "text": "Este é um e-mail de teste via terminal.",
    "html": "<h1>Teste via cURL</h1><p>Envio realizado!</p>"
  }'
```

---

## 📜 Licença

Este projeto é open-source e pode ser usado livremente em projetos pessoais e comerciais.
