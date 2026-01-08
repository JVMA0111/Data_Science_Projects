# Data Science Portfolio

Um portfólio profissional e responsivo para exibir seus projetos de Data Science, Machine Learning e Análise de Dados. Desenvolvido com React, Tailwind CSS e otimizado para GitHub Pages.

## 🎨 Design

O site segue a filosofia de **Minimalismo Científico Moderno**, com:

- Paleta de cores minimalista (branco, cinza, azul profundo)
- Tipografia clara com Poppins para títulos e Inter para corpo
- Animações suaves e transições elegantes
- Espaçamento generoso para respiração visual
- Design responsivo para todos os dispositivos

## 📋 Estrutura de Dados

O portfólio utiliza dois arquivos JSON para dados:

- **Projetos**: `client/src/data/projects.json`
- **Experiências**: `client/src/data/experiences.json`

### Formato de Projeto

Cada projeto deve ter a seguinte estrutura:

```json
{
  "id": 1,
  "title": "Título do Projeto",
  "description": "Descrição curta (uma linha)",
  "longDescription": "Descrição detalhada do projeto",
  "technologies": ["Python", "TensorFlow", "Pandas"],
  "metrics": {
    "Acurácia": "95%",
    "F1-Score": "0.94",
    "Treinamento": "4h"
  },
  "image": "https://images.unsplash.com/...",
  "githubUrl": "https://github.com/seu-usuario/projeto",
  "tags": ["Deep Learning", "CNN", "Visão Computacional"],
  "date": "2024-02"
}
```

### Campos Explicados

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | number | ID único do projeto (incrementar para cada novo) |
| `title` | string | Título do projeto (máx 50 caracteres) |
| `description` | string | Descrição curta para o card (máx 100 caracteres) |
| `longDescription` | string | Descrição detalhada para o modal |
| `technologies` | array | Lista de tecnologias utilizadas |
| `metrics` | object | Métricas de desempenho (opcional) |
| `image` | string | URL da imagem do projeto |
| `githubUrl` | string | Link para o repositório GitHub |
| `tags` | array | Categorias do projeto (para filtros) |
| `date` | string | Data no formato YYYY-MM |

## 🚀 Como Adicionar Novos Projetos

1. **Abra o arquivo** `client/src/data/projects.json`

2. **Adicione um novo objeto** ao final do array:

```json
{
  "id": 4,
  "title": "Seu Novo Projeto",
  "description": "Uma descrição curta e atrativa",
  "longDescription": "Uma descrição mais detalhada que aparecerá no modal",
  "technologies": ["Python", "Scikit-learn"],
  "metrics": {
    "Acurácia": "88%",
    "Tempo": "2h"
  },
  "image": "https://images.unsplash.com/photo-...",
  "githubUrl": "https://github.com/seu-usuario/novo-projeto",
  "tags": ["Machine Learning", "Classificação"],
  "date": "2024-04"
}
```
3. **Salve o arquivo** - o site será atualizado automaticamente

## 💼 Como Adicionar Novas Experiências

1. **Abra o arquivo** `client/src/data/experiences.json`

2. **Adicione um novo objeto** ao final do array com os seguintes campos:

```json
{
  "id": 4,
  "position": "Seu Cargo",
  "company": "Nome da Empresa",
  "period": "2024 - Presente",
  "startDate": "2024-01",
  "endDate": null,
  "description": "Descrição do seu papel",
  "achievements": ["Conquista 1", "Conquista 2"],
  "technologies": ["Python", "SQL"],
  "location": "Cidade, Estado"
}
```

3. **Salve o arquivo** - a timeline será atualizada automaticamente

## 🛠️ Desenvolvimento Local

### Atualize suas Informações

Edite `client/src/pages/Home.tsx` para:

- Alterar seu nome e descrição na seção Hero
- Adicionar seus links de contato (GitHub, LinkedIn, Email)
- Personalizar a seção "Sobre Mim"

### Substitua as Imagens

- **Hero Background**: `client/public/images/hero-background.png`
- **Projects Section**: `client/public/images/projects-section-bg.png`
- **Tech Stack**: `client/public/images/tech-stack-visual.png`

### Customize as Cores

Edite `client/src/index.css` para alterar a paleta:

```css
:root {
  --primary: #1e40af;  /* Azul profundo */
  --accent: #1e40af;   /* Cor de destaque */
  /* ... outras cores */
}
```

## 🛠️ Desenvolvimento Local

### Instalar Dependências

```bash
pnpm install
```

### Iniciar Servidor de Desenvolvimento

```bash
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
pnpm build
```

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:

- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🔍 SEO

O site inclui meta tags básicas. Para melhorar o SEO:

1. Atualize o `<title>` em `client/index.html`
2. Adicione uma descrição meta
3. Configure o favicon
4. Adicione schema.json estruturado

## 📦 Tecnologias Utilizadas

- **React 19** - Framework UI
- **Tailwind CSS 4** - Estilização
- **shadcn/ui** - Componentes UI
- **Wouter** - Roteamento
- **Lucide React** - Ícones
- **Vite** - Build tool

## 🚀 Deploy no GitHub Pages

1. **Configure o repositório** como público no GitHub
2. **Atualize o `package.json`** com o nome do seu repositório
3. **Execute o build**: `pnpm build`
4. **Faça push** dos arquivos para `gh-pages` branch
5. **Ative GitHub Pages** nas configurações do repositório

## 📝 Licença

MIT - Sinta-se livre para usar e modificar conforme necessário.

## 💡 Dicas

- Mantenha as descrições dos projetos concisas e focadas em resultados
- Use imagens de alta qualidade para os projetos
- Atualize regularmente com novos projetos
- Adicione links para artigos, papers ou demonstrações dos projetos
- Considere adicionar um blog para compartilhar insights de Data Science

---

**Desenvolvido com ❤️ para cientistas de dados**
