import React, { FormEvent, Fragment, ReactNode, useState } from "react";

interface Props {
  heading: string;
  mainButtonTitle: string;
  submitButtonTitle: string;
  children: ReactNode;
  handleSubmit: (e: FormEvent) => void;
}

const FormModal = ({
  heading,
  mainButtonTitle,
  submitButtonTitle, 
  children,
  handleSubmit,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <button
        className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {mainButtonTitle}
      </button>
      {showModal ? (
        <Fragment>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4">
                <div className="prose min-w-[600px] p-6 overflow-y-auto">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    {heading}
                  </h2>
                  <form
                    className="space-y-8 flex flex-col justify-between"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    {children}
                    <div className="flex align-items justify-end p-4 gap-4 flex-row">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm"
                      >
                        {submitButtonTitle}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default FormModal;
