import { useState } from "react";

function ListaZakupow() {
    const [produkty, setProdukty] = useState([]);
    const [nowyTekst, setNowyTekst] = useState("");

    function dodajProdukt(e) {
        e.preventDefault();

        if (nowyTekst.trim() === "") {
            return;
        }
        const nowyProdukt = { id: Date.now(), nazwa: nowyTekst };
        setProdukty([...produkty, nowyProdukt]);
        setNowyTekst("");
    }

    function usunProdukt(id) {
        setProdukty(produkty.filter((p) => p.id !== id));
    }

    return (
        <div className="lista-zakupow">
            <h2>Lista zakupów</h2>

            <form onSubmit={dodajProdukt}>
                <input
                    placeholder="Wpisz nowy produkt"
                    value={nowyTekst}
                    onChange={(e) => setNowyTekst(e.target.value)}
                />
                <button type="submit">Dodaj</button>
            </form>
            {produkty.length === 0 && <p>Lista jest pusta</p>}
            <ul>
                {produkty.map((produkt) => (
                    <li key={produkt.id}>
                        {produkt.nazwa}
                        <button onClick={() => usunProdukt(produkt.id)}>Usuń</button>
                    </li>
                ))}
            </ul>
            <p>Liczba produktów: {produkty.length}</p>
        </div>
    );
}

export default ListaZakupow;