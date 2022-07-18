import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  const router =useRouter();
  const handleClick = () => {
    router.push("/test","/base/test")
  }
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <Link href="/test" as="/base/test">Link test</Link>
        <button onClick={handleClick}>Btton test</button>
      </main>
    </>
  );
};

export default Home;