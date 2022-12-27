import { Container } from "./style";
// import js from './Vector.png';
export function Sobre() {
    return (
        <Container>
            <div className="Fundo">
                <h1>Sobre Mim</h1>

                <div className="onePart">
                    <nav>
                        <ul>
                            <h2>Quem sou?</h2>
                            <h2>Skills!</h2>
                            {/* <img src={js} alt="" /> */}
                        </ul>
                    </nav>
                    <p>Me chamo Enilson Neto, Sou da cidade de Caruaru-PE, Tenho 19 anos e atualmente trabalho como mêcanico de refrigeração automotiva. <br />
                        Sempre fui uma pessoa apaixonado por tecnologia e sempre acreditei que um dia pudesse viver, através dela como principal atividade.
                        <br /> Estudo constantemente, gosto de jogos virtuais os quais sempre fizeram parte da minha infância e me divirto solucionando problemas,
                        <br /> acredito que desde pequeno fui condicionado a esta aréa a qual estou estudando atualmente, desejo um dia iniciar e me formar na área de (ADS),
                        <br /> assim que conseguir uma oportunidade no mercado de trabalho, já realzei alguns cursos técnicos tanto EAD quanto Presencial,
                        <br /> os que mais se destacaram de acordo com meu desenvolvivemento foram Rockeseat no seu modulo (Discover) onde obtive o primeiro contato,
                        <br /> e o outro pela instituição SENAC onde realizei através do EB (Exército Brasileiro) (tg 07-014 Caruaru-PE) ofertaram gratuitamento,
                        <br /> o curso de (ADS) - Nivel Técnico. Aguardo com expectativa um chance de estar presente no mercado e enquanto este momento não chegar,
                        <br /> vou estar sempre me especializando e me preparando cada vez mais.
                    </p>

                </div>

            </div>
        </Container>
    );
}