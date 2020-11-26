import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const movie = {
    title: "Avengers:Infinity War",
    vote_average: 8.5,
    image: "https://culturavrn.ru/datas/users/aveng3max_1.jpg",
    overview: "The film was announced in October 2014 as Avengers: Infinity War – Part 1. The Russo brothers came on board to direct in April 2015, and a month later Markus and McFeely had signed on to write the script for the film, which draws inspiration from Jim Starlin's 1991"
};

function Image(props) {
    console.log("image props:", props)
    return (
        <img src={props.src} alt={props.alt} width='100%'/>
    )
}



class MovieItem extends Component{
    constructor() {
        super();
        this.state={
            show:false,
            like:false,
        }
    }
    //функция переключает стэйт  с фолс на тру и наоборот
    showOrHideOverview=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    handleLike =()=>{
        this.setState({
            like:!this.state.like
        })
    }

    render() {
        const {data: {title, vote_average, image, overview}} = this.props;
        console.log(this.state);

        return (
            <div style={{width:'300px',}}>
                <Image src={image} alt={title} />
                <p>{title}</p>
                <p>Raiting: {vote_average} </p>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <button type="button" onClick={this.showOrHideOverview}>{this.state.show ? "hide" : "show"}</button>
                    {this.state.show === true ? <p>{overview}</p> : null}
                    <button type="button"
                            onClick={this.handleLike}
                            className={this.state.like ?"bnt-like" : ""}
                    >likes</button>
                </div>
            </div>
        )
    }
}

function App() {
    return (
        <div>
            <MovieItem data={movie}
            />
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
