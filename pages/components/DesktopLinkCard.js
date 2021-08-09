import Link from 'next/link';

const DesktopLinkCard = () => {
  return (
    <div className={`desktop-link-card `}>
      <div className={`desktop-link-card-text`}>
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

export default DesktopLinkCard;
