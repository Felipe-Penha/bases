import Image from 'next/image';
import arthur from '../../public/arthur.png';
import natasha from '../../public/natasha.png';
import leonardo from '../../public/leonardo.png';

const Group = () => {
  return (
    <div className={`group`}>
      <h2 className={`group-title`}>Grupo</h2>
      <div className={`group-cards`}>
        <div className={`group-card`}>
          <Image className={`group-card-img`} src={arthur} />
          <h2 className={`group-card-text`}>Arthur Ferreira</h2>
        </div>

        <div className={`group-card`}>
          <Image className={`group-card-img`} src={natasha} />
          <h2 className={`group-card-text`}>Natasha Oliveira</h2>
        </div>

        <div className={`group-card`}>
          <Image className={`group-card-img`} src={leonardo} />
          <h2 className={`group-card-text`}>Leonardo Dalbem</h2>
        </div>
      </div>
    </div>
  );
};

export default Group;
