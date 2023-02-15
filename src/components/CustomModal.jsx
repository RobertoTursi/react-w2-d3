import { Component } from "react";


class CustomModal extends Component {

    state= {
        singleMovie: null,
        selected: null
    }

    componentDidMount(){
        this.singleMovieFetch()
    }

    componentDidUpdate(prevProps){
        if(prevProps.film !== this.props.film){
            this.singleMovieFetch()
        }
    }

    singleMovieFetch = async () => {
        try {
            const response = await fetch("https://www.omdbapi.com/?apikey=de0e22be&i=" + this.props.film)
        if(response.ok) {
            const data = await response.json()
            console.log(data, "data")
            console.log(this.state.selected, "chittimorot")
            this.setState(
                {
                    selected: false,
                    singleMovie: data
                }, () => {console.log(this.state.singleMovie, "data")}
            )
        } else {
            alert("Il response non è ok")
        }
        } catch (error) {
            alert("E' presente un errore di tipo error")
        }
        
    }

    

    render() {
        return (
            <>


{/* {this.state.array0fMovies && this.state.array0fMovies.Search.map(movie => 
                <div onClick={(e) => this.showFilm(movie.imdbID)} className="col mb-2 px-1" key={movie.imdbID}>
                  <img className="img-fluid" src={movie.Poster} alt="" />
                </div>)} */}
                
                {console.log(this.state.selected)}
                {this.state.singleMovie && console.log(this.state.singleMovie.Title, "questo")}
                
                

                 {this.state.singleMovie  &&
                    
                        <div className={this.state.selected ? "ghostModale" : "modale"}>
                            <h1>{this.state.singleMovie.Title}</h1>
                            <div className="secondModalDiv">
                                <img className= "modalImg" src={this.state.singleMovie.Poster} alt="" />
                                <div className="modalRightSection">
                                    <p className="trama">{this.state.singleMovie.Plot}</p>
                                    <div>
                                        <button onClick={() => this.setState({selected: !this.state.selected})}>Chiudi</button>
                                        <button>Riproduci</button>
                                    </div>
                                    </div>
                            </div >
                        </div>
                    
               } 
               
            </>
            
        )
    }
}

export default CustomModal