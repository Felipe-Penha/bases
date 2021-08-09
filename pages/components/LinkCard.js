import Link from 'next/link';

const LinkCard = () => {
  return (
    <div className={`link-card`}>
      <div className={`link-card-text`}>
        <Link href='/'>
          <a>Crítica à escola</a>
        </Link>

        <Link href='/page2'>
          <a>Sociedade sem escola</a>
        </Link>

        <Link href='/page3'>
          <a>Avaliação da proposta</a>
        </Link>
      </div>
    </div>
  );
};

export default LinkCard;
