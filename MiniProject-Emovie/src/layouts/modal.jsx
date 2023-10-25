import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Draggable from "react-draggable"; // Mengganti react-draggable

const Modal = ({ children, show_modal, onClick, custom_class, title }) => {
  const [currentPosition, setCurrentPosition] = useState({
    xRate: 41,
    yRate: 15,
  });

  const onDrag = (e, data) => {
    setCurrentPosition({ xRate: data.x, yRate: data.y });
  };

  return (
    <>
      {show_modal && (
        <>
          <div className="draggable fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-xl outline-none focus:outline-none p-5 inset-0">
            <div className={`relative mx-auto my-6 ${custom_class}`}>
              {/* {/content/} */}
              <Draggable
                position={{
                  x: currentPosition.xRate,
                  y: currentPosition.yRate,
                }}
                onDrag={onDrag}
              >
                <div className="relative flex flex-col w-full bg-white border-0 rounded-xl shadow-lg outline-none focus:outline-none">
                  {/* {/body/} */}
                  <div className="relative grid grid-cols-1 p-3">
                    <div className="lg:w-full col-span-2 text-end flex items-start justify-between border-b">
                      <h3 className="p-2 capitalize">{title} </h3>
                      <button
                        onClick={onClick}
                        className="hover:bg-gray-300 p-2 rounded-xl"
                      >
                        <AiOutlineClose className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="p-2 lg:w-full col-span-1">{children}</div>
                  </div>
                </div>
              </Draggable>
            </div>
          </div>
          <div className="fixed z-40 bg-black opacity-25 inset-0"></div>
        </>
      )}
    </>
  );
};

export default Modal;
