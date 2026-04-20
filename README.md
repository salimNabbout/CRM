# CRM — Prospecção

Sistema de CRM leve para controle de prospecção comercial. Interface web completa em HTML/JS puro, sem dependências de build.

🔗 **Acesso online:** [https://salimnabbout.github.io/CRM](https://salimnabbout.github.io/CRM)

---

## Funcionalidades

- **Kanban** e **Lista** com alternância de visualização
- Funil em 3 etapas: Lead → Contato feito → Qualificação
- Cadastro completo: nome, empresa, cargo, telefone, e-mail, valor estimado
- Data de próximo contato com alertas visuais (em dia, hoje, atrasado)
- Histórico de interações por prospect (Nota, Ligação, E-mail, Reunião)
- Busca em tempo real por nome ou empresa
- Filtro por etapa
- Exportação para CSV
- Dark mode automático via `prefers-color-scheme`
- Dados persistidos no `localStorage` do navegador

---

## Rodar localmente

### Opção 1 — Abrir direto no navegador

```bash
git clone https://github.com/salimNabbout/CRM.git
cd CRM
# Abra o index.html no navegador
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Opção 2 — Servidor local (recomendado)

```bash
git clone https://github.com/salimNabbout/CRM.git
cd CRM

# Com Node.js
npx serve .

# Ou com Python
python3 -m http.server 3000
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## Usar com Claude Code

```bash
git clone https://github.com/salimNabbout/CRM.git
cd CRM
claude
```

Com o Claude Code você pode pedir diretamente:

- *"Adiciona a etapa Proposta enviada no funil"*
- *"Cria um backend com Node.js e SQLite para sincronizar entre usuários"*
- *"Adiciona campo de origem do lead (indicação, site, cold outreach)"*
- *"Implementa autenticação com Google OAuth"*
- *"Migra para React com Vite"*

---

## Estrutura do projeto

```
CRM/
├── index.html   # App completo (HTML + CSS + JS em um único arquivo)
└── README.md
```

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Interface | HTML5 + CSS3 + JavaScript vanilla |
| Fontes | Inter + Plus Jakarta Sans (Google Fonts) |
| Persistência | localStorage |
| Hospedagem | GitHub Pages |

---

## Deploy

O projeto é publicado automaticamente via **GitHub Pages** a cada push na branch `main`.

Para publicar em outro ambiente, basta copiar o `index.html` para qualquer servidor de arquivos estáticos (Netlify, Vercel, Cloudflare Pages, etc).

---

## Próximos passos sugeridos

- [ ] Backend com Node.js/FastAPI + banco de dados relacional
- [ ] Autenticação de usuários
- [ ] Dashboard com gráficos de conversão por etapa
- [ ] Notificações de contatos vencidos por e-mail
- [ ] App mobile com PWA

---

Desenvolvido para uso interno — **CETEM Tecnologia**
