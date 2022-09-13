import React from 'react';

interface IOutput {
  output?: string | number | boolean | object;
}

export const Output: React.FC<IOutput> = ({ output }) => (
  <div className="border border-bkg-4 bg-bkg-6 font-poppins text-left p-2 rounded-md outline-none overflow-x">
    <pre>{output}</pre>
  </div>
);
