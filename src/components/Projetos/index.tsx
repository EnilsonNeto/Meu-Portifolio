import { Container } from "./style";
import porsche from "./porsche.png";
import think from "./think.png";
import cep from "./cep.png";
import money from "./money.png";
import tabela from "./tabela.png";
import multipli from "./multipli.png";
import comming from "./comming.png";
import port from "./port.png";


export function Project() {
    return (
        <Container>
            <div className="Fundo">
                <div className="apresentation">
                    <h1>Projetos</h1>
                    <p>Link para repositorio do github ou diretamente para o projeto.</p>
                </div>
                <div className="allCompounds">
                    <div className="compounds">
                        <div className="porsche">
                            <a href="https://porsche-project.vercel.app/" target="_blank" rel="norerferrer" ><img src={porsche} alt="" />
                            </a>
                            <h4>Project Porsche</h4>
                            <p>Meu primeiro projeto durante o curso de ADS no SENAC.</p>
                        </div>
                        <div className="think">
                            <a href="https://projeto-thinker2-0.vercel.app/index.html" target="_blank" rel="norerferrer" ><img src={think} alt="" />
                            </a>
                            <h4>Project Thinker2.0</h4>
                            <p>Projeto final no modelo website realizado durante curso no SENAC.</p>
                        </div>
                        <div className="tabelamulti">
                            <a href="https://github.com/EnilsonNeto/Tabela_De_Numeros" target="_blank" rel="norerferrer" ><img src={multipli} alt="" />
                            </a>
                            <h4>Tabela de multiplicação de valores</h4>
                            <p>Tabela de multiplicação com variaveis , codigo direto com JAVA.</p>
                        </div>
                        <div className="money">
                            <a href="https://money-e-s.vercel.app/" target="_blank" rel="norerferrer" ><img src={money} alt="" />
                            </a>
                            <h4>Money E.S (Controle de Finanças)</h4>
                            <p>Meu primeiro projeto em react com intuito em ajudar pessoas em seu controle financeiro.</p>
                        </div>
                        <div className="cep">
                            <a href="https://buscador-de-cep-kohl.vercel.app/" target="_blank" rel="norerferrer" ><img src={cep} alt="" />
                            </a>
                            <h4>Buscador de CEP</h4>
                            <p>Meu primeiro projeto desafio criado desenvolvido com react.</p>
                        </div>
                        <div className="tabela">
                            <a href="https://github.com/EnilsonNeto/Media_Alunos" target="_blank" rel="norerferrer" ><img src={tabela} alt="" />
                            </a>
                            <h4>Tabela de soma de notas escolar</h4>
                            <p>Tabela de soma de notas criando com a linguagem java, projeto simples e interessante.</p>
                        </div>
                        <div className="port">
                            <a href="https://meu-portifolio-wheat.vercel.app/" target="_blank" rel="norerferrer" ><img src={port} alt="" />
                            </a>
                            <h4>Meu Portifólio</h4>
                            <p>Pagina atual, na qual explica sobre minha carreira na programação.</p>
                        </div>
                        <div className="breve">
                            <a href="#" target="_blank" rel="norerferrer" ><img src={comming} alt="" />
                            </a>
                            <h4>EM BREVE....</h4>
                            <p>PROJETO EM ANDAMENTO...</p>
                        </div>
                    </div>


                </div>
            </div>
        </Container>
    )
}