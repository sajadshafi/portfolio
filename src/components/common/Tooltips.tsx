import React from 'react';

const TooltipTop = ({
  text,
  position,
  children,
}: {
  text: string;
  position: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative group flex items-center justify-center">
      {children}
      <span
        className={`tooltip${position} w-max lowercase absolute scale-0 bottom-[110%] left-1/2 -translate-x-1/2 z-20 scale-1 group-hover:scale-100 text-colorWhite px-[4px] py-[1px] text-[13px] font-medium origin-bottom transition-transform duration-300 text-white bg-colorPrimary rounded-md`}>
        {text}
      </span>
    </div>
  );
};

const TooltipBottom = ({ text }: { text: string }) => {
  return (
    <div>
      {/* Show tooltip on right */}
      <button
        data-tooltip-target="tooltip-right"
        data-tooltip-placement="right"
        type="button"
        className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Tooltip right
      </button>
      <div
        id="tooltip-right"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Tooltip on right
        <div
          className="tooltip-arrow"
          data-popper-arrow
        />
      </div>
      {/* Show tooltip on bottom */}
      <button
        data-tooltip-target="tooltip-bottom"
        data-tooltip-placement="bottom"
        type="button"
        className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Tooltip bottom
      </button>
      <div
        id="tooltip-bottom"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        {text}
        <div
          className="tooltip-arrow"
          data-popper-arrow
        />
      </div>
    </div>
  );
};

const TooltipLeft = ({ text }: { text: string }) => {
  return (
    <div>
      {/* Show tooltip on left */}
      <button
        data-tooltip-target="tooltip-left"
        data-tooltip-placement="left"
        type="button"
        className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Tooltip left
      </button>
      <div
        id="tooltip-left"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        {text}
        <div
          className="tooltip-arrow"
          data-popper-arrow
        />
      </div>
    </div>
  );
};

const TooltipRight = ({ text }: { text: string }) => {
  return (
    <div>
      {/* Show tooltip on right */}
      <button
        data-tooltip-target="tooltip-right"
        data-tooltip-placement="right"
        type="button"
        className="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Tooltip right
      </button>
      <div
        id="tooltip-right"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        {text}
        <div
          className="tooltip-arrow"
          data-popper-arrow
        />
      </div>
    </div>
  );
};

const Tooltip = {
  Top: TooltipTop,
  Right: TooltipRight,
  Bottom: TooltipBottom,
  Left: TooltipLeft,
};

export default Tooltip;
