# DG Design Prototyping

Песочница для disposable-прототипов на shadcn/ui + Tailwind v4. Используется для согласования дизайн-флоу внутри команды Documentolog — НЕ для продакшена.

## Запуск

```bash
npm install
npm run dev
```

Открыть http://localhost:5173 — главная страница это галерея всех прототипов.

## Добавить прототип

Самый быстрый путь — сказать Claude:

> добавь прототип согласования документа

Он создаст папку `src/prototypes/YYYY-MM-{тема}/`, нужные экраны и зарегистрирует его в галерее. Правила и структура — в [CLAUDE.md](CLAUDE.md).

## Подкрутить под бренд

В `src/index.css` — CSS-переменные shadcn:

- `--primary` — основной акцент (кнопки, активные элементы)
- `--radius` — скругление углов
- `--accent`, `--secondary` — вторичные акценты

Значения в формате `oklch()`. Можно конвертировать HEX → oklch через https://oklch.com/.

## Полезные команды

```bash
npm run dev          # дев-сервер с HMR
npm run build        # production-сборка (для деплоя)
npm run preview      # локальный просмотр прод-сборки
npm run lint         # eslint
npx shadcn@latest add <component>   # добавить новый компонент shadcn
```
