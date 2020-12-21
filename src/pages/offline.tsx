import { useRouter } from "next/router";

import Head from "src/components/head";
import Header from "src/components/header";
import ErrorView from "src/components/error-view";

const Start = () => {
  const router = useRouter();

  const handleSearch = (q: string) => {
    router.push({
      pathname: "/",
      query: { q },
    });
  };

  return (
    <>
      <Head title="Food Nearby" description="Find nearby restaurant list" />
      <div className="bg-gray-50 min-h-screen relative flex">
        <Header onSearch={handleSearch} q="" />
        <div className="container flex mx-auto max-w-5xl flex-1">
          <div className="flex flex-wrap justify-center md:justify-start p-4 pt-20 md:pt-24 lg:pt-28 flex-1">
            <ErrorView
              title="You are offline, check internet connection"
              btnText="Try again"
              onClick={() => router.reload()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
