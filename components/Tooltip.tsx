import * as React from "react"

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [show, setShow] = React.useState(false);
  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
    >
      {children}
      {show && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap shadow-lg">
          {content}
        </span>
      )}
    </span>
  );
};
