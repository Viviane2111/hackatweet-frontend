import styles from "../styles/Home.module.css";
import Modal from "react-modal";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

function Home() {
  const [modallsOpen, setlsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "20%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setlsOpen(true);
  }
  function closeModal() {
    setlsOpen(false);
  }

  return (
    <div>
      <Head>
        <title>Hackatweet - Home</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.leftside}>
          <div className={styles.bgimg}>
            <Image src="/twitterLogo.png" alt="Logo" width={400} height={400} />
          </div>
        </div>

        <div className={styles.rightside}>
          <div className={styles.rightLogo}>
            <div className={styles.tLogo}>
              <Image src="/twitterLogo.png" alt="Logo" width={80} height={80} />
            </div>
          </div>
          <h1 className={styles.title}>Create your Hackatweet account</h1>
          <h3>Join Hackatweet today</h3>

          <button onClick={openModal} className={styles.btnLogs}>
            Sign up
          </button>
          <p>Already have an account ?</p>
          <Modal
            isOpen={modallsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            constentLabel="ExampleModal"
          >
            <p className={styles.closX} onClick={closeModal}>X</p>
            <input placeholder="Username" />
            <input placeholder="Password" />
            <button className={styles.btnLogs}>Sign in</button>
          </Modal>
          <button className={styles.btnLogs}>Sign in</button>
        </div>
      </main>
    </div>
  );
}

export default Home;
