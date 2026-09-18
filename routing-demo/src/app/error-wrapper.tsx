"use client";
import "./globals.css";

import { useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export const ErrorSimulator = ({
  message = "An error occurred",
  // children,
}: {
  message?: string;
  // children: React.ReactNode;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <div>
        <button
          title="Simulate an error"
          className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold text-sm hover:bg-red-900 transition"
          onClick={() => setError(true)}
        >
          Simulate Error
        </button>
        {/* {children} */}
    </div>
  );
};

// export const ErrorWrapper = ({ children }: WrapperProps) => {
//   return (
//     <div className="flex flex-col rounded-lg mt-8 relative p-4 border border-gray-300">
//       <div className="absolute top-0 left-4 -translate-y-1/2">
//         <ErrorSimulator message="Simulated error in root layout" />
//       </div>
//       {children}
//     </div>
//   );
// };