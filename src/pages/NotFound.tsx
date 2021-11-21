import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h3>Sorry, the page you are looking for does not exist</h3>
      <Link to="/">Home</Link>
    </>
  );
}
