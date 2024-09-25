import React from 'react';
import { Link } from 'react-router-dom';

const FloatingBackButton = () => {
  return (
    <Link
      to="/"
      className="fixed bottom-4 right-4 z-50 p-4 bg-primary-primary text-base-base-white rounded-full shadow-lg hover:bg-chocolate focus:outline-none focus:ring-2 focus:ring-primary-primary flex items-center no-underline font-bold"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span className="font-aws-cd-bo-1-desktop-body-caption-regular ">Volver al Inicio</span>
    </Link>
  );
};

export default FloatingBackButton;