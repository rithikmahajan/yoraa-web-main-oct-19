import { useState } from "react";

const ToolTip = ({ children, tooltip, leftClass }) => {
    const [showTooltip, setShowTooltip] = useState(false);
  
    return (
      <div 
        className="inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
        {tooltip && showTooltip && (
          <span
            className={`absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-black rounded-lg shadow-sm ${leftClass} top-1/2 -translate-y-1/2 transition-opacity duration-300`}
          >
            {tooltip}
            <div
              className="tooltip-arrow absolute h-2 w-2 bg-black rotate-45 -right-1 top-1/2 -translate-y-1/2"
              data-popper-arrow
            ></div>
          </span>
        )}
      </div>
    );
  };
  
  export default ToolTip;