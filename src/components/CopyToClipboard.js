<<<<<<< HEAD
import React, { useState } from 'react';

const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); // Reset the copied state after 1.5 seconds
  };

  return (
    <div className='z-50 flex flex-col justify-center items-center 2w-20'>
      <span className='text-sm  w-full break-all text-center' onClick={handleCopy} style={{ cursor: 'pointer' }}>
        {text}
      </span>
      {copied && <span style={{ marginLeft: '5px', color: 'green' }}>Copied!</span>}
    </div>
  );
};

export default CopyToClipboard;
=======
import React, { useState } from 'react';

const CopyToClipboard = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); // Reset the copied state after 1.5 seconds
  };

  return (
    <div className='z-50 flex flex-col justify-center items-center 2w-20'>
      <span className='text-sm  w-full break-all text-center' onClick={handleCopy} style={{ cursor: 'pointer' }}>
        {text}
      </span>
      {copied && <span style={{ marginLeft: '5px', color: 'green' }}>Copied!</span>}
    </div>
  );
};

export default CopyToClipboard;
>>>>>>> 5fd1b3f9d72408b6b7ccf6c9c04f66bf0f65cbe8
