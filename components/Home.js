import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

function Home() {
  return (
    <div>
      <Head>
        <title>Hackatweet - Home</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.leftside}></div>
        <div className={styles.rightside}>
          <h1 className={styles.title}>Create your Hackatweet account</h1>
          <h3>Join Hackatweet today</h3>
          <button onClick={showModal()} className={styles.btnLogs}>
            Sign up
          </button>
          <p>Already have an account ?</p>
          <button className={styles.btnLogs}>Sign in</button>
        </div>
      </main>
    </div>
  );
}

export default Home;
