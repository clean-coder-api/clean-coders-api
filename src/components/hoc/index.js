import Footer from "../footer";
import Header from "../header";
import Peoples from "../../pages/peoples";
import People from "../../pages/people";
import {Route} from "react-router-dom";
import {Redirect} from "react-router";

const Hoc = () => {
    return (
        <div>
            <Header/>
            <Redirect exact from="/" to="/peoples/1" />
            <Route  component={Peoples} exact path="/peoples/:id"/>
            <Route component={People} path="/people/:id" exact/>
            <Footer/>
        </div>
    );
};

export default Hoc;
