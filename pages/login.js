import styles from "../styles/Login.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, signUp } from "../reducers/users";

function Login() {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.value);

  const [modalUpOpen, setModalUpOpen] = useState(false);
  const [modalInOpen, setModalInOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState();

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
        console.log(data);
        if (data.result) {
          dispatch(
            login({
              firstname: signUpFirstname,
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

  const handleLogin = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(
            login({
              firstname: signInUsername, //!
              password: signInPassword,
              token: data.token,
            })
          );
          setSignInUsername("");
          setSignInPassword("");
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
        onChange={(e) => setSignUpFirstname(e.target.value)}
        value={signUpFirstname}
        className={styles.inputStyle}
        placeholder="Firstname"
      />
      <input
        onChange={(e) => setSignUpUsername(e.target.value)}
        value={signUpUsername}
        className={styles.inputStyle}
        placeholder="Username"
      />
      <input
        onChange={(e) => setSignUpPassword(e.target.value)}
        value={signUpPassword}
        className={styles.inputStyle}
        placeholder="Password"
      />
      <button
        id="register"
        onClick={() => handleRegister()}
        className={styles.btnLogs}
      >
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
      <input
        onChange={(e) => setSignInUsername(e.target.value)}
        value={signInUsername}
        className={styles.inputStyle}
        placeholder="Username"
      />
      <input
        onChange={(e) => setSignInPassword(e.target.value)}
        value={signInPassword}
        className={styles.inputStyle}
        placeholder="Password"
      />
      <button onClick={() => handleLogin()} className={styles.btnLogs}>
        Sign in
      </button>
    </Modal>
  );
  return (
    <div>
      <Head>
        <title>Hackatweet - Login</title>
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
              <Link href={"/tweets"}>
                <Image
                  src="/twitterLogo.png"
                  alt="Logo"
                  width={60}
                  height={60}
                />
              </Link>
            </div>
          </div>
          <h1 className={styles.title}>
            See What's <br /> happening
          </h1>
          <h3 className={styles.subTitle}>Create your Hackatweet account</h3>
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

export default Login;
