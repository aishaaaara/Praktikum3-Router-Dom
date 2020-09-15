import React from 'react'
import { Link } from 'react-router-dom'

class beranda extends React.Component{
    render(){
        return(
        <div class="jumbotron">
        <div class="jumbotron jumbotron-fluid" >
        <div class="container" >
        <h1 class="display-4"><strong>Learning Router</strong></h1>
        <p class="lead">Create a web page and then decorate it using bootstrap. But here I am still decorating simply.
        Sorry for the shortcomings and mistakes</p>
        <button type="button" class="btn btn-dark">
            <Link to="/tentangsaya">Tentang Saya</Link>
        </button>
        </div>
        </div></div>
        )
    }
}
export default beranda;