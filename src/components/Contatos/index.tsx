import { Container } from "./style";
import link from "./in.png";
import git from "./git.png";
import mail from "./mail.png";
import zap from "./zap.png";
import insta from "./insta.png";

export function Contato () {
    return (
        <Container>
            <div className="Fundo">
                <div className="Apresentation">
                    <h1>Contatos</h1>
                </div>

                <div className="contacts">
                    <a href="https://www.linkedin.com/in/enilson-neto-7b354a245/" target="_blank" rel="norerferrer" ><img src={link} alt="linkedln" /></a>
                    <a href="https://github.com/EnilsonNeto" target="_blank" rel="norerferrer" ><img src={git} alt="gitHub" /></a>
                    <a href="mailto:enilsonneto8@gmail.com"><img src={mail} alt="E-mail" /></a>
                    <a href="https://api.whatsapp.com/send/?phone=5581991443303&text=Ol%C3%A1+tudo+bem+gostaria+de+contratar+a+Think.am+como+gestora+do+site+da+minha+empresa.&type=phone_number&app_absent=0" target="_blank" rel="norerferrer" ><img src={zap} alt="whatsapp" /></a>
                    <a href="https://www.instagram.com/santana_.des/" target="_blank" rel="norerferrer" ><img src={insta} alt="instagram" /></a>
                </div>
                <p>
                <br />
                <br />
                <br />
                </p>

            </div>
        </Container>
    )
}
