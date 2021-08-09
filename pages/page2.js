import Head from 'next/head';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import LinkCard from './components/LinkCard';
import Page2Text from './components/Page2Text';
import Image from 'next/image';
import hero2 from '../public/hero2.png';
import DesktopCard from './components/DesktopCard';
import DesktopLinkCard from './components/DesktopLinkCard';

export default function Page2() {
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
        <div className={`hero2`}>
          <DesktopCard />
          <Image
            className={`hero2-img`}
            src={hero2}
            objectFit='cover'
            layout='fill'
          />
        </div>
        <div className={`cards`}>
          <Card />
          <LinkCard />
        </div>

        <Page2Text />
      </main>

      <Footer />
    </div>
  );
}
