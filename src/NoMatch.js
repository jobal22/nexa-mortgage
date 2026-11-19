import { useLocation } from "react-router-dom";
import './index.css'

function NoMatch() {
  const location = useLocation();

  return (
    <h3 className="noMatch-container">
      No match for <code>{location.pathname}</code>
    </h3>
  );
}

export default NoMatch;