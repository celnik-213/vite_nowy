import {useState} from "react";


function Formularz(){
    const [zalogowano, setZalogowano] = useState(false);
    function logowanie(){
        const login = document.getElementById("login");
        const LoginBlad = document.getElementById("LoginBlad");
        const HasloBlad = document.getElementById("HasloBlad");
        const haslo = document.getElementById("haslo");
        if(login.value.trim().length > 0) {
            setZalogowano(true);
            LoginBlad.innerHTML = "";
        }else{
            setZalogowano(false);
            LoginBlad.innerHTML = "Błąd, login nie moze być pusty lub składać się ze znaku spacja!";
        }
        if(haslo.value.trim().length >= 5) {
            setZalogowano(true);
            HasloBlad.innerHTML = "";
        }else{
            setZalogowano(false);
            HasloBlad.innerHTML = "Błąd, hasło musi składać się z minimum 5 znaków!";
        }
    }
    return(
        <div>
            <input placeholder="Podaj login" id="login"/>
            <p id="LoginBlad"></p>
            <input placeholder="Podaj hasło" id="haslo"/>
            <p id="HasloBlad"></p>
            <button onClick={logowanie}>Zaloguj</button>
            <h2>{zalogowano ? "Pomyslnie zalogowano" : "Nieudało się zalogować"}</h2>

        </div>
    );
}
export default Formularz;