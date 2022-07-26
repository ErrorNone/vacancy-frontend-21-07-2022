import Head from "next/head";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import Main from "../src/components/main/Main";
import cl from "../src/styles/style.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>vacancy-frontend-21-07-2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={cl.page}>
        <div className={cl.page__inner}>
          <div className={cl.page__container}>
            <div className={cl.page__content}>
              <Header />
              <Main />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
