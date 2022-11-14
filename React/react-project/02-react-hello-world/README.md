# React Hello World

## Добавление h1 с помощью React.
- ```const container = document.querySelector('.app')``` - Мы нашли html элемент с классом app, присвоили его переменной container.
- ```const root = ReactDOM.createRoot(container)``` - Передали этот container в вызове метода createRoot (который является методом объекта ReactDOM).
- ```root.render(helloWorldHeading)``` - Вызываем метод render объекта root и передаем ему элемент React (helloWorldHeading).

## Добавление h1 с помощью Vanilla JS.