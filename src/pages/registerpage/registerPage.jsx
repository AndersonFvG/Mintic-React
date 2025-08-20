import { Link } from "react-router-dom";
function RegisterPage(){
    return (
        <div>
            <h1>Registro</h1>
            <Link to="/">
                <button>Volver al Login</button>
            </Link>
        </div>
    );
}
export default RegisterPage;