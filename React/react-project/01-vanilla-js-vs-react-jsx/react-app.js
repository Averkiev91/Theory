const ReactBtn = (props) => {
    const { initialButtonText, initialClassesList } = props
    const [buttonText, setButtonText] = React.useState(initialButtonText)
    const [classesList, setClassesList] = React.useState(initialClassesList)
    const [isActive, setActive] = React.useState("false")

    const onButtonClick = () => {
        setActive(!isActive)
        setClassesList('button')
        setButtonText('Hello from react')
    }

    return (
        <div className="react__app">
            <button
                className={isActive ? classesList : initialClassesList}
                onClick ={onButtonClick}>
                {isActive ? initialButtonText : buttonText}
            </button>
        </div>
    )
}

const container = document.querySelector(".react-app")
const root = ReactDOM.createRoot(container)
root.render(<ReactBtn initialButtonText = "Click me" initialClassesList = "app__btn"/>)