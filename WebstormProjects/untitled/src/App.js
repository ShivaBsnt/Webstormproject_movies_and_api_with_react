import React, {Component} from "react";
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'

import Home from "./components/Home";
import AboutPage from "./components/About";
import Services from "./components/Services";
import PageNotFound from "./components/PageNotFound";
import NavBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{
    async postdata(){
        try{
            let result = await fetch('http://127.0.0.1:8000/fruits1/',{

                method: 'post',
                mode: 'no-cors',
                headers:{
                    'Authorization':'Token 3a91395b0cdc746feb4a38e78968816cfede5d03',
                    // 'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body:({

                    "name": "apricot",
                    "colour": "green",
                    "shape": "round"
                })



            });
            alert('success')
        }
        catch (e) {
            console.log(e);


        }


        // fetch('http://127.0.0.1:8000/fruits1/', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         firstParam: 'yourValue',
        //         secondParam: 'yourOtherValue',
        //     })
        // })


    //     var request = new XMLHttpRequest();
    //     request.open('POST', 'http://127.0.0.1:8000/fruits1/', true);
    //     request.setRequestHeader('Content-Type',"Access-Control-Allow-Origin", "*", "Access-Control-Allow-Headers", "X-Requested-With", 'application/json; charset=UTF-8');
    //     request.send({
    //
    //                 "name": "papaya",
    //                 "colour": "yellow",
    //                 "shape": "round"
    //
    //                 });
    //     alert('success')
    //
     }
    render(){
        return(<BrowserRouter>
                <NavBar/>
                <switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/services' component={Services}/>
                    <Route path='/notfound' component={PageNotFound}/>
                </switch>
                <div className="App">
                    <button onClick={()=> this.postdata()}>press me</button>

                </div>

                </BrowserRouter>

        );


    }


}
export default App;