import React from 'react';
import PropTypes from 'prop-types';
import WindowCloseIcon from 'mdi-react/WindowCloseIcon';

function Whiteboard({ show, onClose }) {
  if (!show) {
    return null;
  }
  return (
    <div className="whiteboard-container">
      <div className="whiteboard-header">
        <div>Miro</div>
        <WindowCloseIcon onClick={onClose} style={{ cursor: 'pointer' }} />
      </div>
      <iframe
        src="https://miro.com/app/live-embed/o9J_lSWCCok=/?embedAutoplay=true&moveToViewport=-23165,-5837,13803,7546"
      ></iframe>
    </div>
  );
}

Whiteboard.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Whiteboard;
