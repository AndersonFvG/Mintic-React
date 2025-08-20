import { Link } from "react-router-dom";
function ForgotPage(){
    return (
        <div>
            <h1>Olvide Contraseña</h1>
            <Link to="/">
                <button>Volver al Login</button>
            </Link>
        </div>
    );
}
export default ForgotPage;