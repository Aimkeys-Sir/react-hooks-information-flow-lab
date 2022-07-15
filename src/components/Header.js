export default function Header({themeState,onDarkModeClick}){
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {themeState ? "Light" : "Dark"} Mode
        </button>
      </header>
    )
}