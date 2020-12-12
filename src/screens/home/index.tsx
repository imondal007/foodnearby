import Head from "src/components/head";
import Header from "src/components/Header";

const Home: React.FC = () => (
  <>
    <Head title="Home" />
    <div className="bg-gray-50 min-h-screen">
      <Header />
    </div>
  </>
);

export default Home;
