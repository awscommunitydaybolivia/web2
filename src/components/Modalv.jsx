import React from 'react';

const Modal = ({ vacancies, onClose }) => {
  return (
    <dialog open={vacancies.length > 0} className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <div id="modalContent" className="flex flex-col gap-6">
          {vacancies.map((vacancy, index) => (
            <div key={index} className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold text-white">{vacancy.title}</h3>
              <p className="text-gray-300 mt-2">{vacancy.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Close
        </button>
      </div>
    </dialog>
  );
};

export default Modal;