import Head from 'next/head';
import MyNavbar from '../component/nav';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slideshow from '../component/slideshow';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>My Next.js Bootstrap App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="mt-5">Tailwind BC</h1>
        <button className="btn btn-primary">Just checking</button>
        <h1 className="text-3xl font-bold">Welcome to My Next.js App with Slideshow!</h1>
        <Slideshow />
      </main>
    </div>
  );
};

export default Home;
