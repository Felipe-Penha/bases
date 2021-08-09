import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../pages/components/NavBar';
import Footer from './components/Footer';
import LinkCard from '../pages/components/LinkCard';
import Group from '../pages/components/Group';
import Page1Text from './components/Page1Text';
import Card from './components/Card';
import hero1 from '../public/hero1.png';
import DesktopCard from '../pages/components/DesktopCard';
import DesktopLinkCard from './components/DesktopLinkCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>IVAN ILLICH</title>
        <meta
          name='description'
          content='Bases Sócio-Filosóficas da Educação, Concepções da Educação, Arthur, Natasha, Leonardo'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/if.svg' />
      </Head>

      <NavBar />

      <main>
        <DesktopLinkCard />
        <div className={`hero1`}>
          <DesktopCard />
          <Image
            className={`img`}
            src={hero1}
            objectFit='cover'
            layout='fill'
          />
        </div>
        <div className={`cards`}>
          <Card />
          <LinkCard />
        </div>

        <Group />

        <Page1Text />
      </main>

      <Footer />
    </div>
  );
}
