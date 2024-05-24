import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import DirectoryComponent from "@/components/directory-component/directory-component";
import SearcchFile from "@/components/searchFile/search-file";
import { treeData } from '../Api/data'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} ${styles.mainContainer}`}>
        <DirectoryComponent treeData={treeData}/>
        <SearcchFile treeData={treeData}/>
      </main>
    </>
  );
}
