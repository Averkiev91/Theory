const helloWorldHeading = React.createElement('h1', null, 'Hello from React')
const container = document.querySelector('.react-app')
const root = ReactDOM.createRoot(container)
root.render(helloWorldHeading)