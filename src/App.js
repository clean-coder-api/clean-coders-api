import Hoc from "./components/hoc";
import {BrowserRouter, Switch} from "react-router-dom";

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
