import { Link } from "react-router";
import PageNotFoundImage from "../assets/images/pagenotfound.png";

export const NotFound404 = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-body dark:text-white my-2">404, Opps</p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="page not found image"
            />
          </div>
        </div>
        <div className="flex flex-col items-center my-4">
          <Link to="/">
            <button className="w-auto text-xl bg-gradient-to-r from-blue-500 to-blue-900 rounded text-white p-3 cusor hover:from-blue-900 to-blue-500">
              Back Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
