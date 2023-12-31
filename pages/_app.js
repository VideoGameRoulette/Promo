import '@/styles/globals.css';
import Head from 'next/head';
import Layout from "components/Layout";
import VideoBG from 'components/VideoBG';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Promos | NoReset</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={`GitHub repositories for test`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <VideoBG />
    </div>
  )
}
