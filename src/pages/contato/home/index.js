import React from "react";
import Header from "../../../components/header/header";
import './index.css'
import Video from '../../../assets/Halo 4 - Trailer oficial de Lançamento.mp4'
import Cards from "../../../components/cards";
import Footer from "../../../components/footer/footer";



function Home(){
    return(
        <>
        <div>
            <Header />        
        </div>

        <div id='banner'></div>

        <div id='trailer-container'>
            <div className="content">
                <video controls className="trailer">
                    <source src={Video}/>
                    seu navegador nao possui suporte para videos
                </video>
            <div id='sinopse'>
                <p className="description">
                  O jogador assume o papel de Master Chief, que luta contra uma nova facção que se separou dos 
                remanescentes do Covenant, uma antiga aliança militar de raças alienígenas, e contra os guerreiros mecânicos do império Forerunner, 
                conhecidos como Prometheans que são liderados pelo forerunner conhecido como Didact.
                </p>
                <button className="button">Comprar Jogo</button>
                </div>
            </div>
        </div>
        <Cards />
        <Footer/>
        
        

        </>
    )
}

export default Home;