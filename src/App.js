import Hoc from "./components/hoc";
import {BrowserRouter, Switch} from "react-router-dom";
import './styles.css'
function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Hoc/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
