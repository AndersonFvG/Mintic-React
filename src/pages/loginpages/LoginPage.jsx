import { Link } from "react-router-dom";
function LoginPage(){
    return (
        <div>
            <h1>Home</h1>
            <Link to="/register">
                <button>Ir a Registro</button>
            </Link>
            <Link to="/forgot">
                <button>Olvide mi contraseña</button>
            </Link>

              <Link to="/Hook">
                <button>Hooks</button>
            </Link>
              <Link to="/useState">
                <button>UseState</button>
            </Link>
        </div>
    );
}
export default LoginPage;