import styles from "../styles/Home.module.css";
import Modal from "react-modal";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ModalUp from "./ModalUp";
import Login from "./Login";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Head>
        <title>Hackatweet - Home</title>
      </Head>

      {/* <Header /> */}

      <Login />
    </div>
  );
}

export default Home;
