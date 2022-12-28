import { Container } from "./style";
import jsImg from "./js.svg";
import htmlImg from "./html.svg";
import cssImg from "./css.svg";
import nodeImg from "./node.svg";
import reactImg from "./react.svg";
import javaImg from "./java.svg";
export function Sobre() {
    return (
        <Container>
            <div className="Fundo">
                <h1 id="Sobre">Sobre Mim</h1>

                <div className="onePart">
                    <nav className="nav1">
                        <ul className="ulOne">
                            <h2>Quem sou?</h2>
                            <h2>Skills!</h2>
                        </ul>
                    </nav>
                        <div className="skills">
                            <nav className="nav2">
                                <ul className="ul2">
                    <p>Me chamo Enilson Neto, Sou da cidade de Caruaru-PE, Tenho 19 anos e atualmente trabalho como mêcanico de refrigeração automotiva.
                        Sempre fui uma pessoa apaixonada por tecnologia e sempre acreditei que um dia pudesse viver, através dela como principal atividade.
                         Estudo constantemente, gosto de jogos virtuais os quais sempre fizeram parte da minha infância e me divirto solucionando problemas,
                         acredito que desde pequeno fui condicionado a esta aréa a qual estou estudando atualmente, desejo um dia iniciar e me formar na área de (ADS),
                         assim que conseguir uma oportunidade no mercado de trabalho, já realzei alguns cursos técnicos tanto EAD quanto Presencial,
                         os que mais se destacaram de acordo com meu desenvolvivemento foram Rockeseat no seu modulo (Discover) onde obtive o primeiro contato,
                        e o outro pela instituição SENAC onde realizei através do EB (Exército Brasileiro) (tg 07-014 Caruaru-PE) ofertaram gratuitamento,
                    o curso de (ADS) - Nivel Técnico. Aguardo com expectativa uma chance de estar presente no mercado e enquanto este momento não chegar,
                       vou estar sempre me especializando e me preparando cada vez mais.
                    </p>
                    <div className="newFlex">

                                    <img src={htmlImg} alt="Html" /> 
                                    <img src={cssImg} alt="Css" />
                                    <img src={jsImg} alt="Javascript" />
                                    <img src={nodeImg} alt="node" />
                                    <img src={reactImg} alt="react" />
                                    <img src={javaImg} alt="java" />
                    </div>

                                </ul>
                            </nav>
                        </div>

                </div>

            </div>
        </Container>
    );
}