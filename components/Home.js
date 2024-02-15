import styles from "../styles/Home.module.css";
import Modal from "react-modal";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ModalUp from "./ModalUp";

function Home() {
  const dispatch = useDispatch();
  
  const [modalUpOpen, setModalUpOpen] = useState(false);
  const [modalInOpen, setModalInOpen] = useState(false);
  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  useEffect(() => {});

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              firstname: firstname,
              username: signUpUsername,
              token: data.token,
            })
          );
          setSignUpFirstname("");
          setSignUpUsername("");
          setSignUpPassword("");
          setIsModalVisible(false);
        }
      });
  };

  const customStyles = {
    content: {
      width: "50rem",
      height: "35rem",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      borderRadius: "20px",
      backgroundColor: "#161D28",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setModalUpOpen(true);
  }
  function closeModal() {
    setModalUpOpen(false);
  }
  function openModalIn() {
    setModalInOpen(true);
  }
  function closeModalIn() {
    setModalInOpen(false);
  }

  const modalUp = (
    <Modal
      isOpen={modalUpOpen}
      onRequestClose={closeModal}
      style={customStyles}
      constentLabel="ExampleModal"
    >
      <p className={styles.closX} onClick={closeModal}>
        X
      </p>
      <input
        onChange={(e) => setSignUpFirstname}
        className={styles.inputStyle}
        placeholder="Firstname"
      />
      <input
        onChange={(e) => setSignInUsername}
        className={styles.inputStyle}
        placeholder="Username"
      />
      <input
        onChange={(e) => setSignUpPassword}
        className={styles.inputStyle}
        placeholder="Password"
      />
      <button onClick={() => handleRegister()} className={styles.btnLogs}>
        Sign up
      </button>
    </Modal>
  );
  const modalIn = (
    <Modal
      isOpen={modalInOpen}
      onRequestClose={closeModalIn}
      style={customStyles}
      constentLabel="ExampleModal"
    >
      <p className={styles.closX} onClick={closeModalIn}>
        X
      </p>
      <input className={styles.inputStyle} placeholder="Username" />
      <input className={styles.inputStyle} placeholder="Password" />
      <button className={styles.btnLogs}>Sign up</button>
    </Modal>
  );

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
          <button onClick={openModalIn} className={styles.btnLogs}>
            Sign in
          </button>
          <div className={styles.modalIn}>{modalUp}</div>
          <div className={styles.modalIn}>{modalIn}</div>
        </div>
      </main>
    </div>
  );
}

export default Home;
