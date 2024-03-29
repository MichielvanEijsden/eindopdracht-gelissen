import {useNavigate} from "react-router-dom";

function ErrorPage(){
    const navigate = useNavigate();

    return (
        <section className="not-found-section outer-content-container">
            <div className="inner-content-container">
                <h1>404</h1>
                <h2>De pagina waar je naar zoekt bestaat niet</h2>
                <span>
                    <button type="button" onClick={() => navigate(-1)}>Ga Terug</button>
                </span>
            </div>
        </section>
    );
}
export default ErrorPage