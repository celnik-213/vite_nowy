function KartaZdjec({pnazwa, psource, pnumer}){
    let nazwa = pnazwa;
    let source = psource;
    let number = pnumer;

    return(
        <div>
            <p>{nazwa}</p>
            <img src={source} alt={nazwa}/>
            <p>{number > 100 ? "popularne" : ""}</p>
        </div>
    );
}
export default KartaZdjec;