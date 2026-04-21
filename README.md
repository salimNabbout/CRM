# CRM CETEM Automação — Prospecção Comercial

Sistema web completo para gestão do processo de prospecção comercial da **CETEM Automação** — desde o cadastro de leads até a qualificação completa e o handoff para o time comercial.

🔗 **Acesso online:** https://salimnabbout.github.io/CRM
📘 **Databook de formação:** [databook-crm-cetem.pdf](./databook-crm-cetem.pdf)

---

## Visão geral

CRM **voltado exclusivamente para a etapa de prospecção**. O sistema acompanha o lead do primeiro contato até o agendamento da reunião comercial qualificada. A partir daí, o handoff é feito ao time comercial via Briefing PDF gerado pelo próprio CRM.

### Objetivo

Gerar **volume qualificado de reuniões comerciais**, com eficiência de canal e aprendizado contínuo sobre o funil.

---

## Funcionalidades principais

### Pipeline e operação
- **Kanban e Lista** com alternância fluida
- **Drag-and-drop** entre etapas (cards e colunas)
- **Etapas customizáveis** (nome, cor, ordem, descrição/tooltip)
- **Filtros combinados:** busca, etapa, origem, ativos/desqualificados
- **Log automático** de movimentações no histórico (data, hora, usuário)

### Cadastro e qualificação
- Dados básicos (nome, empresa, cargo, telefone, e-mail, valor)
- **Origem do lead** (LinkedIn, Indicação, Cold Email, etc. — editáveis)
- **ICP Fit Score (0-100)** calculado automaticamente por setor + porte
- **BANT Score (0-100)** — Budget, Authority, Need, Timing
- **Desqualificação com motivo** (aprender o que filtrar)
- **Múltiplos contatos por empresa** com papéis (Decisor, Influenciador, Patrocinador, Usuário, Gatekeeper)
- **Histórico unificado** (interações manuais + eventos automáticos)

### Agenda
- Calendário mensal com compromissos
- Lista cronológica agrupada (Atrasados / Hoje / Amanhã / Esta semana / Próximos 30 dias)
- Integração direta com o campo "Próximo contato" dos prospectos

### Comunicação
- **Templates de mensagem** com variáveis ({{nome}}, {{empresa}}, {{cargo}}, {{seuNome}}, {{assinatura}})
- **WhatsApp** — abre wa.me com texto pronto
- **E-mail** — abre Outlook Web com destinatário/assunto; corpo copiado para clipboard
- **LinkedIn** — copia mensagem para colar
- **Script de ligação** — texto de apoio
- **Assinatura de e-mail configurável** com auto-append

### Cadência automática
- **Régua padrão:** D+0 E-mail · D+3 WhatsApp · D+7 Ligação · D+10 LinkedIn · D+15 Breakup
- Sistema indica **próxima ação sugerida** no modal do prospecto
- Cadência totalmente configurável

### Integração Outlook
- **Agendamento de reunião** com deep link (data, hora, local, participante, descrição)
- **Envio de e-mail** via Outlook Web

### Dashboard (admin)
- KPIs operacionais (total, pipeline R$, ticket médio, conversão)
- **Ritmo de prospecção** com metas diárias e semanais
- **Ações sugeridas para hoje** (urgente / importante / oportunidade)
- Próximos contatos + Atividade recente
- Gráficos de funil e pipeline por etapa

### Análise (admin)
- KPIs mensais com delta vs mês anterior
- **Metas** (diárias, semanais, mensais)
- Atividade diária (empilhada por tipo)
- **Tendência 6 meses**
- **Velocidade por etapa** (dias médios de cada transição progressiva)
- **Heatmap** semanal (dia × hora)
- **Origens dos leads** com taxa de conversão
- **Distribuição BANT** do pipeline
- **Motivos de desqualificação** (barras percentuais)
- **Prospectos dormentes** (14+ dias sem atividade)
- Comparativo mensal (tabela últimos 6 meses)
- **Snapshot mensal** imutável para auditoria
- Export CSV detalhado do mês

### Handoff
- **Briefing PDF** profissional com BANT visual, histórico completo, contatos adicionais e sugestão de abordagem

### Configurações (admin)
- Etapas do Pipeline (nome, cor, ordem, descrição)
- Origens do Lead
- Motivos de Desqualificação
- ICP (setores e portes prioritários)
- Régua de Cadência
- Assinatura de E-mail
- Templates de Mensagem (WhatsApp / E-mail / LinkedIn / Script)
- Metas de Prospecção (dia / semana / mês)

### Hierarquia de acesso
- **Admin** (Salim): acesso total (Pipeline, Dashboard, Análise, Agenda, Configurações)
- **Usuário** (Márcia): acesso operacional (Pipeline, Agenda)
- Dados 100% compartilhados entre usuários

### Exportação
- **CSV do Pipeline** (todos os prospectos)
- **PDF do Pipeline** (relatório em paisagem A4)
- **CSV de atividade mensal** (todos os eventos)
- **Briefing PDF individual** por prospecto

### PWA (app instalável)
- iPhone / iPad (via Safari → "Adicionar à Tela de Início")
- Android (Chrome → "Instalar app")
- Windows Desktop (Chrome/Edge → "Instalar página como aplicativo")
- Ícone CETEM · splash vermelho · tela cheia sem barra do navegador

### Visual
- Identidade CETEM Automação (logo, cor vermelha #E30613)
- Tema **claro e escuro** (preferência salva)
- Sidebar lateral com navegação colorida
- Layout responsivo (desktop, tablet, mobile)

---

## Tecnologia

| Camada | Stack |
|--------|-------|
| Frontend | HTML + CSS + JavaScript vanilla (single file) |
| UI extras | Chart.js (gráficos) · jsPDF + autoTable (exports) |
| Backend | Supabase (PostgreSQL + Auth + RLS) |
| Auth | Supabase Auth com e-mail/senha |
| Hospedagem | GitHub Pages (gratuito, HTTPS) |
| PWA | manifest.json + apple-touch-icon + service-worker-ready |

---

## Segurança

- Autenticação obrigatória via Supabase Auth
- **RLS (Row Level Security)** habilitado em todas as tabelas
- Acesso anônimo bloqueado a nível de banco
- HTTPS em toda comunicação
- Dados criptografados em repouso no Supabase
- Chave publicável no frontend (projetada para isso — segurança real está no RLS)

---

## Estrutura do repositório

```
CRM/
├── index.html                    App principal (single-file)
├── manifest.json                 Config PWA
├── apple-touch-icon.png          Ícone iOS 180x180
├── icon-512.png                  Ícone Android 512x512
├── logo-cetem.png                Logo CETEM (transparente)
├── logo-cetem.jpg                Logo CETEM (legacy JPG)
├── databook-crm-cetem.pdf        Databook completo de formação
└── README.md                     Este documento
```

---

## Primeiros passos

### Para usuários

1. Acesse https://salimnabbout.github.io/CRM
2. Faça login com as credenciais fornecidas pelo admin
3. Troque a senha em **Meu perfil** (sidebar)
4. Leia o [databook-crm-cetem.pdf](./databook-crm-cetem.pdf) para entender todas as funcionalidades

### Para novos admins

1. Crie o usuário em **Supabase Dashboard → Authentication → Users**
2. Edite a lista `ADMINS` no `index.html` (caso queira acesso admin):
   ```js
   const ADMINS = ['salim@cetemrj.com.br', 'novoadmin@cetemrj.com.br'];
   ```
3. Commit + push — GitHub Pages atualiza em ~1 minuto

### Para desenvolvimento local

```bash
git clone https://github.com/salimNabbout/CRM.git
cd CRM
# Abra index.html diretamente no navegador OU sirva com qualquer servidor estático:
python -m http.server 8000
# Acesse http://localhost:8000
```

---

## Schema do banco (Supabase)

### Tabela `prospects`

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | text (PK) | ID único gerado no frontend |
| nome | text | Nome do contato principal |
| empresa | text | Razão social |
| contato | text | Cargo/função |
| email | text | E-mail |
| telefone | text | Telefone |
| valor | numeric | Valor estimado |
| stage | text | Etapa atual |
| notas | text | Observações livres |
| proximoContato | date | Data do próximo contato |
| horaContato | text | Hora HH:MM (opcional) |
| origem | text | Canal de origem |
| setor | text | Setor da empresa |
| porte | text | Porte (Micro/Pequeno/Médio/Grande) |
| desqualificado | boolean | Marcador de desqualificação |
| motivoDesqualificacao | text | Motivo (se desqualificado) |
| bantB, bantA, bantN, bantT | boolean | Critérios BANT |
| contatosExtras | jsonb | Array de contatos adicionais |
| historico | jsonb | Array de eventos (interações + auto) |
| criadoEm | date | Data de criação |

### Tabela `crm_config`

Configurações globais compartilhadas: stages, origens, motivos, templates, assinatura, cadência, icp, goals, setores, snapshots-YYYY-MM.

| Coluna | Tipo |
|--------|------|
| key | text (PK) |
| value | jsonb |
| updated_at | timestamptz |

---

## Roadmap futuro

Recursos opcionais que podem ser adicionados conforme demanda real:

- **Importar CSV em lote** (LinkedIn Sales Navigator)
- **Busca global `Ctrl+K`**
- **Notificações push** no navegador
- **Score de temperatura** (quente/morno/frio)
- **Anexos** via Supabase Storage
- **Gamificação** (ranking entre vendedores, badges)
- **Tags customizadas**
- **Webhook de entrada** (formulário do site → lead automático)
- **Integração leitura de e-mail** (Microsoft Graph)
- **2FA** no login
- **Log de auditoria completo**
- **Permissões por nível** (hoje é binário: admin/user)
- **IA para sugestão de abordagem** (Claude API)

---

## Licença

Uso interno — CETEM Automação. Todos os direitos reservados.

---

## Contato e suporte

**Admin do sistema:** Salim Nabbout · salim@cetemrj.com.br
**Empresa:** CETEM Automação · https://cetemrj.com.br

Para sugestões de melhoria, correções ou treinamento de novos usuários, contate o admin.
