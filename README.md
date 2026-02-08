# Modo Systems 官网（Next.js + Tailwind CSS）

Notion 风格的产品解释站，包含页面：
- Home
- How it works
- Solutions
- About
- Contact

## 技术栈
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- lucide-react

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 目录结构

```text
app/
  about/page.tsx
  contact/page.tsx
  how-it-works/page.tsx
  solutions/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  sections/
    contact-form.tsx
    home-hero.tsx
    home-process.tsx
    home-trust.tsx
    home-visual-flow.tsx
    home-what-is.tsx
    home-where-helps.tsx
  ui/
    comparison-table.tsx
    flow-diagram.tsx
    layer-diagram.tsx
    section-title.tsx
  site-footer.tsx
  site-header.tsx
```
