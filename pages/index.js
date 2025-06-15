import Head from 'next/head';
import HomePage from '../src/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aussiemale – Men’s Health</title>
      </Head>
      <HomePage />
    </>
  );
}