import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function ActiveLink({
  label,
  to,
  className,
  onClick = () => {},
  handleLinkColored = () => {},
}) {
  const location = useLocation();
  const isActive = location.pathname === to;

  function handlerColored(bool1, bool2) {
    onClick(bool1);
    handleLinkColored(bool2);
  }

  return (
    <Link
      to={to}
      style={{ color: isActive ? "#5d640b" : null }}
      className={className}
      onClick={() => handlerColored(false, true)}
    >
      {label}
    </Link>
  );
}

export default ActiveLink;

ActiveLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  handleLinkColored: PropTypes.func,
};
