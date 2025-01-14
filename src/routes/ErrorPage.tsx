import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl">
        <h1 className="text-4xl font-bold text-red-500">An error occurred!</h1>
        <p className="text-lg mt-2">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <a
          href="/"
          className="text-md duration-500 text-zinc-500 hover:text-zinc-300 rounded"
        >
          Go back to Home
        </a>
      </div>
    </>
  );
};

export default ErrorPage;
