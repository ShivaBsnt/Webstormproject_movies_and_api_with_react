import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import singleMoviePage from "./components/singlePage";
// const SingleMoviePage = React.lazy(() => import("./components/singlePage"));


function App() {
    return (
        <Router>
            <Navbar />
            <React.Suspense fallback={"loading  ....."}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/movies/:id" component={singleMoviePage}/>

                </Switch>
            </React.Suspense>
        </Router>
    );
}

export default App;