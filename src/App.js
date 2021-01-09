import './App.css';
import React, {useState} from 'react';






function App() {
  const [fileUpload, setFileUpload] = useState(null);
  const [testNum, setTestNum] = useState(0);

  const onClickHandler = () => {
    const data = new FormData() 
    data.append('file', fileUpload);
    console.log(data);
  }

  const handleFile = (event) => {
    setTestNum(4);
    console.log(event.target.files[0]);
    console.log(testNum);
    setFileUpload({file: event.target.files[0], loaded: 0});
  }
  return (
    <div>
      <input type="file" onChange={(event) => {handleFile(event)}}/>
      <button type="button" onClick={() => onClickHandler()}>Upload</button> 
    </div>
  );
}

export default App;
