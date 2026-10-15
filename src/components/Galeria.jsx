import KartaZdjec from "./KartaZdjec.jsx";

function Galeria(){
    return(
        <>
        <KartaZdjec
            psource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ebHgdsBBTIQubRsFFga1w-JWXZCINFboNDRLiLQViWsFOsKtsSTR0GY&s=10"
            pnazwa="Audi a4"
            pnumer={100}>
        </KartaZdjec>
        <KartaZdjec
            psource="https://emea-dam.audi.com/adobe/assets/urn:aaid:aem:d01a193d-c4b8-493c-9360-a32da58f8ac8/as/A5_2023_6318_2-L.jpg"
            pnazwa="Audi a5"
            pnumer={200}>
        </KartaZdjec>
            <KartaZdjec
                psource="https://d-pa.ppstatic.pl/frames/pa-def/91/de/il20251202_951498655_original.jpg"
                pnazwa="Audi a6"
                pnumer={237}>
            </KartaZdjec>
        </>

    );
}
export default Galeria;