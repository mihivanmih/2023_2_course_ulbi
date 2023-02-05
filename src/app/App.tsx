import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRuter} from "app/providers/router";
import {Navbar} from "widgets/Navabr";
import {Sidebar} from "widgets/Sidebar";


const App = () => {

    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className={"content-page"}>
                <Sidebar />
                <AppRuter />
            </div>
        </div>
    );
};

export default App;
