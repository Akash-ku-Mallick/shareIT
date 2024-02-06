import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const limit = 104857600; // 100mb in bytes = 104857600

const Send = () => {
  
  
  const [fileInputs, setFileInputs] = useState([[]]); // Initialize with one file input
  const [totalFileSize, setTotalFileSize] = useState(0);
  const [modal, setModal] = useState(false)

  const handleFileChange = (index, files) => {
    const newFileInputs = [...fileInputs];
    newFileInputs[index] = files;
    setFileInputs(newFileInputs);
  };

  const handleAddFileInput = () => {
    setFileInputs([...fileInputs, []]);
  };

  useEffect(() => {
    let totalSize = 0;
    fileInputs.forEach((files) => {
      if (files) {
        Array.from(files).forEach((file) => {
          totalSize += file.size;
        });
      }
    });
    setTotalFileSize(totalSize);

    const handleBeforeUnload = (event) => {
      const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
      event.returnValue = confirmationMessage; // Standard for most browsers
      return confirmationMessage; // For some older browsers Gecko + Webkit, Safari, Chrome etc.
    };

    if (totalSize > 0) {
      window.addEventListener('beforeunload', handleBeforeUnload);
    } else {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    }

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };

  }, [fileInputs]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    // popup box for setting time limit and password
    setModal(true)
  };

  const handleRemoveFileInput = (index) => {
    const newFileInputs = [...fileInputs];
    newFileInputs.splice(index, 1);
    setFileInputs(newFileInputs);
  };


  return (
    <motion.div className='main_body'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5, ease: 'easeIn', staggerChildren: 0.2}}>
      <h1>Send</h1>
      <form onSubmit={handleSubmit}>
      {/* Existing form elements go here */}
      
      {/* Map through fileInputs to render file input elements */}
      {fileInputs.map((files, index) => (
        <div key={index}>
        <input
      type="file"
      multiple
      onChange={(e) => handleFileChange(index, e.target.files)}
      />
        <button type="button" onClick={() => handleRemoveFileInput(index)}>
            Remove
          </button>
        </div>
      ))}

      {/* Button to add another file input */}
      <button disabled={totalFileSize>=limit} type="button" onClick={handleAddFileInput}>Add File Input</button>

      <div>
        Total File Size: {totalFileSize} bytes
      </div>

      <button type="submit" disabled={totalFileSize>=limit || totalFileSize<=0}>Submit</button>
    </form>
    {modal && <Modal setModal={setModal} />}
    </motion.div>
  )
}


export default Send


const Modal = (props) => {
  return (
    <motion.div className='modal'
    onDoubleClick={()=>props.setModal(false)}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.25, ease: 'easeIn'}}>
      <motion.div className='modal_content'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.25, ease: 'easeIn', delay: 0.25, staggerChildren: 0.2}}>
        <h2>Modal</h2>
        <p>Some text in the Modal..</p>
        <button onClick={()=>props.setModal(false)}>Close</button>
      </motion.div>
    </motion.div>
  )
}