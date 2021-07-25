import './Button.css';
import PropTypes from 'prop-types';
const Button = ({ active }) => {
  return <button className={active ? 'active' : ''}>Submit</button>;
};

Button.propTypes = {
  active: PropTypes.bool,
};
Button.defaultProps = {
  active: false,
};
export default Button;
