import React, {Component} from 'react';
// import {moviesData} from '../moviesData';
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from "../utils/api";

//UI=fn(state,props)


class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            moviesWillWatsh:[],
        };
        console.log("constructor")

    }

   componentDidMount() {
       console.log("did mount");
       fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`)
           .then((response)=>{
              return response.json()
           }).then((data)=>{
           console.log("data",data)
           this.setState({
               movies:data.results
           })
       })

   }

    removeMovie = (movie) => {
        const updateMovies = this.state.movies.filter(item => {
            return item.id !== movie.id;
        });
        console.log(updateMovies);
        this.setState({
            movies: updateMovies
        });
    };

    addMovieToWillWatch=(movie)=>{
        console.log(movie);
        //push в массив элемент
       const updateMovies=[...this.state.moviesWillWatsh,movie];
       this.setState({
           moviesWillWatsh:updateMovies
       });
    };

    removeMovieFromWillWatch = (movie) => {
        const updateWillWatchMovies = this.state.moviesWillWatsh.filter(item => {
            return item.id !== movie.id;
        });
        console.log(updateWillWatchMovies);
        this.setState({
            moviesWillWatsh: updateWillWatchMovies
        });
    };


    render() {
        console.log("render", this);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.movies.map(movie => {
                                return (
                                    <div className="col-6 mb-4" key={movie.id}>
                                        <MovieItem data={movie}
                                                   removeMovie={this.removeMovie}
                                                   addMovieToWillWatch={this.addMovieToWillWatch}
                                                   removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <h4> Will Watch :{this.state.moviesWillWatsh.length} </h4>
                        <ul className="list-group">
                            {this.state.moviesWillWatsh.map(movie=>(
                                <li key={movie.id} className="list-group-item">
                                    <div className="d-flex justify-content-between">
                                        <p>{movie.title}</p>
                                        <p>{movie.vote_average}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );

    }
}

export default MovieList;
