import React, {Component} from 'react';
import {moviesData} from '../moviesData';
import MovieItem from "./MovieItem";


class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            movies: moviesData,
        };

    }

    //функция переключает стэйт  с фолс на тру и наоборот

    removeMovie = (movie) => {
        const updateMovies = this.state.movies.filter(item => {
            return item.id !== movie.id;
        });
        console.log(updateMovies);
        this.setState({
            movies: updateMovies
        });
    }

    render() {
        console.log(this)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.movies.map(movie => {
                                return (
                                    <div className="col-6 mb-4">
                                        <MovieItem key={movie.id}
                                                   movie={movie}
                                                   removeMovie={this.removeMovie}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <p> Will Watch :0 </p>
                    </div>
                </div>
            </div>
        );

    }
}

export default MovieList;
