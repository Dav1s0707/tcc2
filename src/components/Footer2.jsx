import insta from '../imgs/instagram.svg'
import tt from '../imgs/twitter.svg'
import linkedin from '../imgs/linkedin.svg'
function Footer2() {
    return (
        <div className="footer2">
            <div className='footerl1'>
                <h3>Gerencia</h3>
                <h3>Sobre</h3>
            </div>
            <hr />
            <div className="footerl2">
                <div className='icones'>
                    <img src={insta} alt="instagram" />
                    <img src={tt} alt="twitter" />
                    <img src={linkedin} alt="linkedin" />
                </div>
                <div className='termos'>
                    <h3 className='dwivvi'>Termo de uso</h3>
                    <h3>Politica de Privacidade</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer2