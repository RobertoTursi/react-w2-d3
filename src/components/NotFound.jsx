import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <h2>Nessuna pagina trovata, <Link to="/">torna alla pagina principale</Link ></h2>
    )
}

export default NotFound