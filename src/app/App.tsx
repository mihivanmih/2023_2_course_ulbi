import {Link} from "react-router-dom";
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRuter} from "app/providers/router";
import {Navbar} from "widgets/Navabr";


const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>TOGGLE</button>
            <AppRuter />
        </div>
    );
};

export default App;
