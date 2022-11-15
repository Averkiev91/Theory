# React Hello World

## Добавление h1 с помощью React.
- ```const helloWorldHeading = React.createElement('h1', null, 'Hello from React')``` - С помощью объекта React создаем новую компоненту, используя метод createElement.
- ```const container = document.querySelector('.react-app')``` - - Мы нашли html элемент с классом react-app, присвоили его переменной container.
- ```const root = ReactDOM.createRoot(container)``` - Присвоили переменной root результат вызова метода createRoot объекта ReactDOM (Монтируем компонент React в html страницу).
- ```root.render(reactHeading)``` - Вызываем метод render объекта root и передаем ему компонент React (reactHeading).

## Добавление h1 с помощью Vanilla JS.
- ```const vanillaJsHeading = document.createElement("h1")``` - Объявили переменную vanillaJsHeading и присвоили ей результат вызова метода createElement объекта document (создали html элемент h1)
- ```vanillaJsHeading.textContent = "Hello from Vanilla JS"``` - Задаем текстовое содержимое элемента h1 (добавили текст внутри html элемента h1).
- ```document.querySelector('.vanilla-app').appendChild(vanillaJsHeading)``` - Находим элемент с классом vanilla-app и ему передаем html элемент h1 (добавили элемент h1 внутри элемента div с классом vanilla-app).

## Сравнение результата с React и без него:
- helloWorldHeading - Объект javascript. У объекта есть type (тип) и props (свойства).
- vanillaJsHeading - Просто html элемент.