import React from "react";
import styles from "../styles/Tweets.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Tweets() {
  return (
    <div>
      <Head>
        <title>Hackatweet - Tweets</title>
      </Head>
      <div className={styles.tweets}>
        <div className={styles.leftSide}>
          <div className={styles.tLogo}>
            <Link href={"/login"}>
              <Image src="/twitterLogo.png" alt="Logo" width={60} height={60} />
            </Link>
          </div>
          <h1>Coucou 💫</h1>
          <div>
            <FontAwesomeIcon className={styles.userImg} icon={faUser} />
          </div>
        </div>
        <div className={styles.middleSide}>
          <div className={styles.commonHeaded}>
            <h3 className={styles.homeTitle}>Home</h3>
            <div className={styles.inputTweet}>
              <input className={styles.input} placeholder="What's up?" />
            </div>
          </div>

          <div className={styles.lastTweets}>
            <div className={styles.userIm}>
              <FontAwesomeIcon className={styles.userlogo} icon={faUser} />
            </div>
            {/* <h2>Hello</h2> */}
            <p className={styles.tweet}>Destiné à devenir un "con - ponent"</p>
            <div className={styles.lol}>❤️ 🗑️</div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <h3>Trends</h3>
          <div>
            <p>#unNouveauJour</p>
            <p>#uneAideBienvenue</p>
          </div>
        </div>
      </div>
    </div>
  );
}
