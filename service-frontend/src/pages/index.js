import Head from 'next/head';
import Link from 'next/link';

import axios from "src/config/axios";

import Circle from "public/images/circle-accent-1.svg";

import Header from 'src/parts/Header';

function Home({data}) { 

    return (
        <>
            <Head>
                <title> ProjectMicro </title>
                <Link a=""></Link>
            </Head>

            <main>
                <section className="pt-10"></section>
                <Circle className="absolute left-0 bottom-0"></Circle>
                <div className="sunshine"></div>
                <div className="container mx-auto">
                    <Header></Header>
                </div>
            </main>
        </>
    );
}

Home.getInitialProps = async () => {
    try {
      const data = await axios.get(`/courses`)
      return {data: data.data.data}
    } catch (error) {
      return error;
    }
}

export default Home;