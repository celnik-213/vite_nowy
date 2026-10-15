import "./WyborKoloru.css"
import {useState} from "react";

function WyborKoloru(){
        const [kolor, setKolor] = useState("white");
    return(
        <div className="panel" style={{backgroundColor: kolor}}>
            <p>Aktualny kolor: {kolor}</p>
            <button onClick={()=> setKolor("green")}>Zielony</button>
            <button onClick={()=> setKolor("red")}>Czerwony</button>
            <button onClick={()=> setKolor("blue")}>Niebieski</button>
        </div>
    );
}
export default WyborKoloru