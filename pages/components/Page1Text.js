import Image from 'next/image';
import ivan from '../../public/ivan.png';
import anotherBrick from '../../public/anotherBrick.png';

const Page1Text = () => {
  return (
    <div className={`text1-block`}>
      <h2 className={`page1-title`}>Crítica à Escola</h2>
      <p className={`page1-p1`}>
        No decorrer dos anos as escolas passaram e adquiriram diversas fases. A
        escola nova quis revolucionar os métodos onde eles renovaram a escola
        tradicional por demais petrificada, esclerosada e classista. Contudo o
        seu ideal de democracia não foi atingido.
      </p>

      <div className={`quotation70`}>
        <div className={`quotation-img70`}></div>

        <div className={`quotation-text70-container`}>
          <h2 className={`quotation-title70`}>Anos 70</h2>

          <p className={`quotation-text70`}>
            Foi fértil em críticas à escola e propostas para alterar o quadro
            sombrio. Ivan Illich surge com a proposta de desescolarizar a
            sociedade.
          </p>
        </div>
      </div>
      <p className={`page1-p2`}>
        Ivan Illich acredita que um dos grandes mitos da nossa época está na
        crescente institucionalização. Para ele a saúde, nutrição, educação,
        transporte, bem-estar, equilíbrio psicológico, comunicação foram
        colocados nas mãos dos especialistas e tecnocratas, retirando assim do
        indivíduo a capacidade de decidir por si mesmo.
      </p>

      <div className={`side-card`}>
        <Image className={`side-card-img`} src={anotherBrick} />
        <div className={`side-card-text`}>
          <div className={`side-card-signature`}>Pink Floyd</div>
          <div className={`side-card-description`}>
            Another Brick To The Wall
          </div>
        </div>
      </div>

      <p className={`page1-p1`}>
        Assim, a separação estabelecida entre competentes e incompetentes de
        certo forma infantiliza o homem, sempre dependendo de especialistas e
        incapaz de gerir sua própria vida já que estaria colocando tudo nas mãos
        de outros. Em um mundo marcado pelo controle das instituições, as
        escolas escravizam mais que a família, por sua estrutura sistemática,
        hierarquia aos rituais das provas e o mito do diploma.
      </p>

      <div className={`quotation`}>
        <div className={`quotation-img`}></div>

        <p className={`quotation-text`}>
          A escola agrupa pessoas segundo a idade, fundamentando-se em três
          premissas consideradas inquestionáveis: o lugar das crianças é na
          escola; as crianças aprendem na escola; só se pode ensinar as crianças
          na escola
        </p>
      </div>
      <p className={`page1-p3`}>
        Ivan Ilich não acreditava que as crianças aprendessem na escola, mas sim
        que os alunos realizavam a maior parte de seu aprendizado fora dela.
        Quando se diz que só se pode aprender na escola, são criadas
        expectativas prejudiciais já que a escola promete que não é capaz de
        cumprir. llich acreditava que a escola ajuda a alimentar o mito do
        progresso, da competência e do consumo.
      </p>
      <div className={`side-card`}>
        <Image className={`side-card-img`} src={ivan} />
        <div className={`side-card-text`}>
          <div className={`side-card-signature`}>Ivan Illich</div>
          <div className={`side-card-description`}>
            A escola é um rito iniciatório que introduz o neófito a carreira
            sagrada do consumo progressivo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1Text;
