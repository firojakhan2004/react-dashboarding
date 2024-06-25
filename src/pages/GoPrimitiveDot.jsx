// GoPrimitiveDot.jsx
import React from 'react';

const GoPrimitiveDot = ({ size = 24, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
  >
    <circle cx="12" cy="12" r="6" />
  </svg>
);

export default GoPrimitiveDot;
