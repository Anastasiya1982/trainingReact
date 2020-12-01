import React,{Component} from "react";

 class MovieItem extends Component{

     constructor() {
         super();
         this.state={
             willWatch:false,
         }
     }
     render() {

         const {data, removeMovie, addMovieToWillWatch,removeMovieFromWillWatch} = this.props;
         return (
             <div className="card">
                 <img className="card-img-top"
                      src={`https://image.tmdb.org/t/p/w500${data.backdrop_path || data.poster_path}`}
                      alt=""
                 />
                 <div className="card-body">
                     <h6 className="card-text">{data.title}</h6>
                     <div className="d-flex justify-content-between align-items-center">
                         <p className="mb-0"> Raiting: {data.vote_count}</p>

                         {this.state.willWatch === true
                             ? <button type="button"
                                       className="btn btn-success"
                                       onClick={() => {
                                           this.setState({
                                               willWatch: false
                                           })
                                           removeMovieFromWillWatch(data);
                                       }}
                             > Remove Will Watch </button>
                             : <button type="button"
                                       className="btn btn-secondary"
                                       onClick={() => {
                                           this.setState({
                                               willWatch: true
                                           })
                                           addMovieToWillWatch(data);
                                       }}
                             > Add Will Watch </button>
                         }
                     </div>
                     <button onClick={removeMovie.bind(null, data)}>Delete title</button>

                 </div>
             </div>
         );
     }
 };
export default MovieItem;
