import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center text-2xl items-center gap-5 max-w-[1440px] mx-auto p-[200px]">
      <h1>Not Found ...</h1>
      <Link
        to="/"
        className="flex justify-center items-center gap-[5px] hover:text-accent transition-transform text-3xl underline"
      >
        Go to home
      </Link>
    </div>
  );
};

export default NotFound;
