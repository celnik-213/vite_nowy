import "./Produkt.css"

function Produkt(){
    const nazwa = "klawiatura";
    var cena = 5.00;
    const czyDostepna = true;
    return (
      <div className="produkt">
        <p>{nazwa} - {cena} zł dostępny: {czyDostepna ? "Tak" : "Nie"}</p>
        <p>Cena wraz z VAT: {cena * 1.23}</p>
      </div>
    );
}
export default Produkt;