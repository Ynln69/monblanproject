<p align="center">
  <img src="public/logo.png" alt="monblanproject logo" width="140" />
</p>

# monblanproject

Адаптивний односторінковий сайт — профіль у стилі стрічки соцмережі
(тестове завдання WEBSPARK), зібраний за макетом із Figma.

## Стек

- **Vite + React 19** — збірка та UI
- **CSS Modules** (нативний CSS-nesting) — стилі по компонентах, без конфліктів класів
- **flatpickr** — datepicker (стороння JS-бібліотека, згідно з умовою завдання)
- **Google Fonts** — Roboto + Montserrat
- **Netlify** — деплой (автозбірка з GitHub)

## Функціонал

- **Перемикання вигляду стрічки**: список (list) ↔ сітка (grid). Активна іконка
  підсвічується синім (#3D8EDA).
- **Datepicker** на двох полях `from` / `to` (flatpickr) — з кнопкою очищення (×)
  та іконкою календаря; інпут лише для вибору, без ручного вводу.
- **LOAD MORE** — догрузка постів порціями (grid — по 8, list — по 9) з короткою
  індикацією `Loading...`; коли всі пости показані — кнопка зникає. Захист від
  подвійного спрацювання. Позиція скролу зберігається (нові пости додаються знизу).
- **Кнопка «вгору»** — з'являється при прокручуванні, плавно вертає на початок.
- **Адаптивність** — mobile-first, сітка згортається 4 → 2 → 1 колонки.
- **Lazy load** фото постів і декору (`loading="lazy"`).

## Структура

```
src/
├── App.jsx / App.module.css        # стан (view, дати, visibleCount, isLoading), збірка сторінки
├── index.css                       # reset, CSS-змінні (кольори, шрифти), глобальне
├── data/posts.js                   # дані постів (по 2 фото на пост: list і grid)
└── components/
    ├── Header/        # лого, назва, статистика, "Start on", блок Date
    ├── DateFilter/    # обгортка дат + DateInput (flatpickr на кожному полі)
    ├── ViewToggle/    # перемикач grid / list (inline SVG, currentColor)
    ├── PostList/      # контейнер: рендерить PostCard у потрібному вигляді
    ├── PostCard/      # картка поста — окрема розмітка для list та grid + icons.jsx
    ├── LoadMore/      # кнопка догрузки зі станом завантаження
    └── ScrollTopButton/  # плаваюча кнопка "вгору"
```

Дані постів — мокові (`data/posts.js`); кожен пост має `imageList` та `imageGrid`,
бо макет передбачає різні зображення для двох виглядів. Фото та іконки — у `public/`.

## Команди

```bash
npm install     # встановити залежності
npm run dev     # локальний дев-сервер (http://localhost:5173)
npm run build   # production-збірка в dist/
npm run preview # переглянути зібраний build локально
```

## Деплой

Деплоїться на Netlify через підключення цього GitHub-репозиторію.
Конфіг — [netlify.toml](netlify.toml): build command `npm run build`, publish dir `dist`,
SPA-redirect на `index.html`.
