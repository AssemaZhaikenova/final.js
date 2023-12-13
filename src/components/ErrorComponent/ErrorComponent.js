import React from 'react';

const ErrorComponent = ({ message }) => (
  <div style={{ color: 'red', margin: '10px 0' }}>
    <strong>Error:</strong> {message}
  </div>
);

export default ErrorComponent;