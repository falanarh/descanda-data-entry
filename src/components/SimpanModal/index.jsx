import React from "react";

const SimpanModal = ({ isOpen, onClose, onDeactivate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-0 left-0 z-10 w-screen overflow-y-auto font-asap">
      {/* Overlay with blur effect */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[2px]"
        aria-hidden="true"
      ></div>

      <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
        <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-sm">
          <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-save"
                  viewBox="0 0 16 16"
                  strokeWidth="1"
                  stroke="currentColor"
                  color="#008000"
                >
                  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z" />
                </svg>
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  id="modal-title"
                  className="text-base font-semibold leading-6 text-gray-900"
                >
                  Simpan Data
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Anda yakin ingin mengimpan dan mengirim data kuesioner ini?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
              type="button"
              onClick={onDeactivate}
            >
              Yakin
            </button>
            <button
              className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpanModal;
