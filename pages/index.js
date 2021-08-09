import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../pages/components/NavBar';
import Footer from './components/Footer';
import LinkCard from '../pages/components/LinkCard';
import Group from '../pages/components/Group';
import Page1Text from './components/Page1Text';
import Card from './components/Card';

export default function Home() {
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
        <div className={`hero1`}>
          <img className={`img`} src='hero1.png' />
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
