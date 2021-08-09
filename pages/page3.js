import Head from 'next/head';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import LinkCard from './components/LinkCard';
import Page3Text from './components/Page3Text';

export default function Page3() {
  return (
    <div>
      <Head>
        <title>IVAN ILLICH</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/if.svg' />
      </Head>

      <NavBar />

      <main>
        <div className={`hero2`}>
          <img className={`hero2-img`} src='hero2.png' />
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