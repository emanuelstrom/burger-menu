import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hamburger menu</title>
      </Head>
      <div>
        <img
          src="https://www.svgrepo.com/show/115503/burger.svg"
          alt="burger icon"
        />
        <h1>Hello. This is a burger menu</h1>
        <a
          href="https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/"
          target="_blank"
        >
          Made with css-tricks
        </a>
      </div>
    </div>
  );
};

export default Home;
