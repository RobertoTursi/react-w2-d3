import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";

class Carousel extends Component{

    state= {
      array0fMovies: null,
      loading: true,
      error: false,
      errorMessage: "",
      movieId: null,
      
    }

    movieFetch = async () => {
      try {
        const response = await fetch("https://www.omdbapi.com/?apikey=de0e22be&s=" + this.props.movie)
          if(response.ok) {
            const data = await response.json()
            console.log(data, "data")
            this.setState(
              {
                array0fMovies: data,
                loading: false
              }
            )
            
          } else {
            alert("Il response non è ok")
            this.setState(
              {                                
                  loading: false,
                  error: true,
                  errorMessage: `"E' presente un errore di tipo" ${response.status}`
              }
          )
          }
        
      } catch (error) {
        
        this.setState(
          {
              loading: false,
              error: true,
              errorMessage: "Qualcosa è andato storto nel caricamento"
          }
      )
      }
    }

    componentDidMount(){
      this.movieFetch()
      
    }

    showFilm = (e) => {

      
      this.setState({movieId: e})
      console.log(this.state.movieId)
      

    
      
    }

    render() {
        return(
         <>
            
            
            {this.state.error && <Alert variant="danger">{this.state.errorMessage}</Alert>}
            {this.state.loading && <div className="text-center"><Spinner animation="border" variant="success" /></div >}
            {this.state.movieId && <CustomModal film= {this.state.movieId} />}
            

            <h4>La saga di {this.props.movie}</h4>
            {/* <div
          class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center"
        >
          <div class="col mb-2 px-1">
            <img class="img-fluid" src="assets/13.png" alt="movie picture" />
          </div> */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">

                

                 {this.state.array0fMovies && this.state.array0fMovies.Search.map(movie => 
                <Link to={"/MovieDetails/" + movie.imdbID} className="col mb-2 px-1" key={movie.imdbID}>
                  <img className="img-fluid" src={movie.Poster} alt="" />
                </Link>)} 
              

              

            </div>
         </>
        )
    }
  }
 export default Carousel