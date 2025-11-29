# HANDOVER - NOVO SITE ELIS COM ELEVENTY

**Data:** 2024-11-28  
**Projeto:** Migração do site ELIS para Eleventy  
**Status:** Hero Section customizado, necessita correção no botão Support

---

## 📊 STATUS ATUAL DO PROJETO

### ✅ CONCLUÍDO:

- [x] Eleventy Excellent instalado e rodando
- [x] Servidor de desenvolvimento ativo (`http://localhost:8080`)
- [x] Hero section customizado com design ELIS
- [x] Logo ELIS implementado no header
- [x] Navegação customizada (About, Research, Tools, Support)
- [x] Cores exatas do site atual aplicadas
- [x] Fontes Playfair Display + Inter configuradas
- [x] Layout responsivo básico
- [x] Floating card "Systematic Review" implementado
- [x] CSS organizado e comentado

### 🔄 PROBLEMA ATUAL:

**Botão "Support" na navegação está com estilos invertidos:**
- Estado normal: aparece com estilo de hover
- Estado hover: aparece com estilo normal
- **Causa:** Possível duplicação de CSS ou conflito de especificidade

### ⬜ PENDENTE:

- [ ] Corrigir botão Support (dourado por padrão)
- [ ] Implementar seção "About" (3 cards)
- [ ] Implementar seção "What ELIS Will Deliver"
- [ ] Remover conteúdo desnecessário do template
- [ ] Adicionar imagem de fundo no hero (opcional)
- [ ] Build final para produção
- [ ] Deploy para GitHub Pages

---

## 🗂️ ESTRUTURA DO PROJETO

```
C:\Users\carlo\
│
├── electoralintegrity.org\          ← SITE ATUAL EM PRODUÇÃO (NÃO TOCAR!)
│   ├── index.html
│   ├── styles.css
│   └── public/
│       └── ... (imagens, logos)
│
└── elis-eleventy\                    ← NOVO SITE EM DESENVOLVIMENTO
    ├── src/                          (código fonte)
    │   ├── _includes/
    │   │   ├── layouts/
    │   │   │   └── base.njk          (template HTML base)
    │   │   └── partials/
    │   │       ├── header.njk        (header com logo e nav)
    │   │       └── main-nav.njk      (navegação principal)
    │   │
    │   ├── assets/
    │   │   ├── css/
    │   │   │   └── global.css        ← ARQUIVO CSS PRINCIPAL
    │   │   └── images/
    │   │       ├── elis-logo.png
    │   │       └── hero-background.png (1920x1080)
    │   │
    │   ├── pages/
    │   │   └── index.njk             (homepage)
    │   │
    │   └── _data/
    │       └── ... (dados do site)
    │
    ├── _site/                        (output compilado - não editar)
    ├── .eleventy.js                  (config Eleventy)
    ├── tailwind.config.js            (config Tailwind - cores ELIS)
    ├── package.json
    └── node_modules/
```

---

## 🎨 DESIGN SYSTEM

### **Cores do Site Atual (Aplicadas):**

```css
/* Header */
background: #1B2332

/* Hero background */
background: #2A3643

/* Floating card gradient */
background: linear-gradient(135deg, #222E41 0%, #2A3847 100%)

/* Botão Support (gold) */
background: linear-gradient(135deg, #CFAA32 0%, #B8941F 100%)

/* Botão Support hover */
background: linear-gradient(135deg, #E0BB43 0%, #CFAA32 100%)

/* Borda gold */
border-color: #d4af37

/* Texto claro */
color: #f1f5f9
```

### **Tipografia:**

```css
/* Títulos (H1, H2, H3) */
font-family: 'Playfair Display', Georgia, serif;
font-weight: 600-700;

/* Corpo de texto */
font-family: 'Inter', system-ui, sans-serif;
font-weight: 300-500;
```

### **Espaçamentos:**

```css
/* Header height */
padding: 0.75rem 0;
body padding-top: 70px;

/* Hero section */
padding: 6rem 2rem 4rem;
min-height: 100vh;

/* Grid gap */
gap: 3rem;
```

---

## 🔧 CORREÇÃO NECESSÁRIA - BOTÃO SUPPORT

### **Problema:**
O botão Support na navegação está aparecendo com as cores invertidas.

### **Arquivo a Corrigir:**
`src/assets/css/global.css`

### **Localização:**
Procure por `.nav-btn-support` (aproximadamente linhas 105-120)

### **Código Correto:**

```css
/* Botão Support na navegação */
.nav-btn-support {
  background: linear-gradient(135deg, #CFAA32 0%, #B8941F 100%) !important;
  color: #1a2332 !important;
  padding: 0.65rem 1.8rem !important;
  border-radius: 50px !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  transition: all 0.3s ease !important;
  border: none !important;
  text-decoration: none !important;
  display: inline-block !important;
}

.nav-btn-support:hover {
  background: linear-gradient(135deg, #E0BB43 0%, #CFAA32 100%) !important;
  color: #1a2332 !important;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(207, 170, 50, 0.3);
}
```

### **IMPORTANTE - Verificar Duplicação:**

1. Abra `global.css`
2. Procure por **todas** as ocorrências de `.nav-btn-support`
3. Se houver duplicação no final do arquivo (dentro de `@media (max-width: 768px)`), **REMOVA** a duplicação
4. Mantenha apenas uma definição da classe

### **Dentro do Media Query (deve ter apenas):**

```css
@media (max-width: 768px) {
  .nav-list {
    gap: 1rem;
    font-size: 0.9rem;
  }
  
  .nav-btn-support {
    padding: 0.6rem 1.2rem !important;
  }
}
```

---

## 📝 ARQUIVOS PRINCIPAIS

### **1. src/pages/index.njk**

```yaml
---
layout: base
permalink: /index.html
title: 'ELIS Electoral Integrity Strategies'
description: 'Synthesizing 35 years of research to identify what actually works to protect elections. ELIS provides evidence-based guidance for election officials, policymakers, and democracy advocates.'
---

<header class="hero-elis">
  <div class="hero-content">
    <div class="hero-text">
      <h1 class="hero-title font-display">{{ title }}</h1>
      <p class="hero-subtitle">{{ description }}</p>
      <div class="hero-buttons">
        <a href="#support" class="btn-primary">Support This Research</a>
        <a href="#about" class="btn-secondary">Learn More</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="floating-card">
        <div class="card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
        <h3>Systematic Review</h3>
        <p>Evidence-based research</p>
      </div>
    </div>
  </div>
</header>
```

### **2. src/_includes/partials/main-nav.njk**

```html
<nav class="main-nav">
  <ul class="nav-list">
    <li><a href="#about">About</a></li>
    <li><a href="#research">Research</a></li>
    <li><a href="#tools">Tools</a></li>
    <li><a href="#support" class="nav-btn-support">Support</a></li>
  </ul>
</nav>
```

**⚠️ IMPORTANTE:** NÃO adicionar `style` inline neste arquivo!

### **3. src/_includes/partials/header.njk**

```html
<header class="header-elis">
  <a href="#main" class="skip-link">{{ meta.skipContent }}</a>

  <div class="header-content">
    <a href="/" class="logo" {{ indicateActiveHome }}>
      <img src="/assets/images/elis-logo.png" alt="ELIS Logo" style="height: 50px; width: auto;">
    </a>
    {% include "partials/main-nav.njk" %}
  </div>
</header>
```

### **4. src/_includes/layouts/base.njk**

No `<head>`, as fontes estão configuradas:

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### **5. tailwind.config.js**

Cores ELIS customizadas:

```javascript
colors: {
  midnight: {
    DEFAULT: '#1a2332',
    light: '#2a3d52',
    dark: '#0f1820',
  },
  gold: {
    DEFAULT: '#d4af37',
    light: '#f4d56f',
    dark: '#b8941f',
  }
}

fontFamily: {
  display: ['Playfair Display', 'Georgia', 'serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Playfair Display', 'Georgia', 'serif'],
}
```

---

## 🚀 COMANDOS ESSENCIAIS

### **Iniciar servidor de desenvolvimento:**

```powershell
cd C:\Users\carlo\elis-eleventy
```

```powershell
npm start
```

Servidor abre em: `http://localhost:8080`

### **Parar servidor:**

```
Ctrl + C
```

### **Reiniciar servidor (se travar):**

```
Ctrl + C
```

```powershell
npm start
```

### **Salvar todos arquivos abertos (VS Code):**

```
Ctrl + K, S
```

ou salvar um por um:

```
Ctrl + S
```

### **Hard refresh no navegador:**

```
Ctrl + Shift + R
```

### **Abrir DevTools:**

```
F12
```

---

## 🛠️ WORKFLOW DE DESENVOLVIMENTO

### **1. Editar múltiplos arquivos:**
- Abrir todos arquivos necessários no VS Code
- Fazer todas as mudanças
- Salvar tudo de uma vez: `Ctrl + K, S`
- O Eleventy detecta mudanças e recompila automaticamente

### **2. Se o servidor travar:**
- `Ctrl + C` no PowerShell
- `npm start` novamente
- Aguardar mensagem "Server at http://localhost:8080/"

### **3. Verificar console do navegador:**
- `F12` → aba Console
- Verificar se há erros (cor vermelha)
- Erros 404 indicam arquivos faltando

---

## ⚠️ REGRAS IMPORTANTES (APRENDIDAS)

### **1. Sempre separar comandos e código:**
- ❌ NÃO misturar instruções com código nos boxes
- ✅ Comandos PowerShell em boxes separados
- ✅ Código de arquivos em boxes separados
- ✅ Instruções em texto normal

### **2. Sempre fornecer contexto completo:**
- ✅ Indicar qual arquivo está sendo editado
- ✅ Indicar número de linha aproximado
- ✅ Mostrar código antes e depois
- ✅ Explicar o que está sendo mudado e por quê

### **3. Processo de edição:**
1. Identificar arquivo(s) a editar
2. Mostrar código atual
3. Mostrar código novo
4. Instruir para salvar
5. Confirmar resultado

### **4. Não modificar site em produção:**
- `electoralintegrity.org/` → NÃO TOCAR até novo site pronto
- `elis-eleventy/` → Trabalhar aqui livremente

---

## 📋 PRÓXIMOS PASSOS APÓS CORREÇÃO

### **1. Corrigir Botão Support** ⬅️ **PRIORIDADE**
- Verificar e corrigir `global.css`
- Remover duplicações
- Testar no navegador

### **2. Limpar Conteúdo Desnecessário**
- Remover seções do blog
- Remover conteúdo de exemplo do template

### **3. Implementar Seção "About"**
- 3 cards:
  - Systematic Literature Review (ícone: microscope)
  - Open Science (ícone: lock-open)
  - Research Automation (ícone: settings)

### **4. Implementar "What ELIS Will Deliver"**
- 5 deliverables com timeline
- Design de cards verticais
- Box de "Potential Impact"

### **5. Footer**
- Logo ELIS
- Links
- Copyright

### **6. Build Final**
- Testar tudo localmente
- Build de produção
- Copiar `_site/` para `electoralintegrity.org/`
- Deploy GitHub Pages

---

## 🎯 REFERÊNCIAS

### **Site Atual (Referência de Design):**
https://electoralintegrity.org/

### **Eleventy Documentation:**
https://www.11ty.dev/docs/

### **Template Base:**
https://github.com/madrilene/eleventy-excellent

### **Assets:**
- Logo: `C:\Users\carlo\electoralintegrity.org\public\ELIS-logo-fundo-midnight-ouro-640x640.png`
- Background: `C:\Users\carlo\electoralintegrity.org\public\ELIS-fundo-mapa-e-urna-1920x1080.png`

---

## 🐛 TROUBLESHOOTING

### **Servidor não inicia:**
```powershell
cd C:\Users\carlo\elis-eleventy
npm install
npm start
```

### **Mudanças não aparecem:**
1. Verificar se salvou arquivo (`Ctrl + S`)
2. Verificar console do PowerShell (mensagem de rebuild)
3. Hard refresh no navegador (`Ctrl + Shift + R`)
4. Reiniciar servidor se necessário

### **CSS não aplica:**
1. Abrir DevTools (`F12`)
2. Verificar elemento no "Elements"
3. Ver quais estilos estão aplicados
4. Verificar especificidade CSS
5. Usar `!important` se necessário

### **Imagem não carrega:**
1. Verificar caminho: `/assets/images/nome.png`
2. Verificar se arquivo existe na pasta
3. Verificar nome exato (case-sensitive)
4. Verificar console do navegador (erro 404)

---

## 📞 INFORMAÇÕES DE CONTATO

**Usuário:** Carlos  
**Localização:** London, England, GB  
**Email:** carlos.rocha@electoralintegrity.org  
**Instituição:** Imperial College Business School

---

## 🎓 CONTEXTO DO PROJETO ELIS

ELIS é uma systematic literature review investigando estratégias que melhoram a integridade eleitoral globalmente. O site precisa transmitir:

- **Credibilidade acadêmica** (fontes serif, design profissional)
- **Transparência** (open science, dados abertos)
- **Inovação** (automação de pesquisa, ferramentas open-source)
- **Acessibilidade** (design limpo, informação clara)

**Objetivo:** Site moderno, profissional e fácil de manter.

---

## ✅ CHECKLIST FINAL

Antes de considerar o projeto concluído:

- [ ] Botão Support dourado funcionando
- [ ] Todas seções implementadas (Hero, About, Deliverables, Research, Impact, Support, Footer)
- [ ] Conteúdo 100% do ELIS (sem template placeholder)
- [ ] Responsivo testado (desktop, tablet, mobile)
- [ ] Performance verificada (Lighthouse 90+)
- [ ] Links funcionando
- [ ] Imagens otimizadas
- [ ] SEO meta tags corretas
- [ ] Favicon funcionando
- [ ] Build de produção testado
- [ ] Deploy em GitHub Pages

---

**BOA SORTE COM O DESENVOLVIMENTO! 🚀**

Se tiver dúvidas, consulte este documento ou a documentação do Eleventy.
