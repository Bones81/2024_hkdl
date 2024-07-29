import { useRouteError } from "react-router-dom";
import Footer from "./footer/footer";
import Header from "./header/header";

const PageNotFound = () => {
  const error = useRouteError()
  console.error(error)

    return (
      <div>
        <div id="tree-background"></div>
        <Header />
        <h2>Page Not Found</h2>
        <p>The page you are looking for is not available.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Footer />
      </div>
    );
};

export default PageNotFound