import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Navbar from "../src/components/navbar/Navbar";

const Paragraph = styled.p`
  font-size: 50px;
  color: red;
  font-weight: bold;
`;

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Paragraph>Hello World</Paragraph>
      </main>
    </div>
  );
}
