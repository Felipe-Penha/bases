import Head from 'next/head';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import LinkCard from './components/LinkCard';
import Page3Text from './components/Page3Text';
import Image from 'next/image';
import hero3 from '../public/hero3.png';
import DesktopCard from '../pages/components/DesktopCard';
import DesktopLinkCard from '../pages/components/DesktopLinkCard';

export default function Page3() {
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
        <div className={`hero3`}>
          <DesktopCard />
          <Image
            className={`hero3-img`}
            src={hero3}
            objectFit='cover'
            layout='fill'
          />
        </div>
        <div className={`cards`}>
          <Card />
          <LinkCard />
        </div>

        <Page3Text />
      </main>

      <Footer />
    </div>
  );
}
