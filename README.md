# monblanproject

Адаптивний односторінковий сайт (тестове завдання WEBSPARK).

## Стек

- **Vite + React** — збірка та UI
- **flatpickr** — datepicker (стороння JS-бібліотека)
- **Netlify** — деплой (build з GitHub)

## Команди

```bash
npm install     # встановити залежності
npm run dev     # локальний дев-сервер
npm run build   # production-збірка в dist/
npm run preview # переглянути зібраний build локально
```

## Деплой

Сайт деплоїться на Netlify через підключення цього GitHub-репозиторію.
Конфіг у [netlify.toml](netlify.toml): build command `npm run build`, publish dir `dist`.

## Статус

🚧 Налаштовано збірку. Верстка та логіка — в роботі (поетапно).