import './Message-modal.css';
import PropTypes from 'prop-types';
const MessageModal = ({ message }) => {
  return (
    <div className="response-message-container">
      <h1>{message}</h1>
    </div>
  );
};

MessageModal.propTypes = {
  message: PropTypes.string,
};
MessageModal.defaultProps = {
  active: '',
};

export default MessageModal;
