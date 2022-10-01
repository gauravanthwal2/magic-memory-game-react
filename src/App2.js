import React, { useState } from "react";
// import "./index.css";
import Tesseract from 'tesseract.js';

export default function App() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  
  const handleClick = () => {
   

  }

  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row  h-100">
        <div className="col-md-5 mx-auto d-flex flex-column align-items-center">
          {!isLoading && <h2 className="mt-5 mb-4">Image To Text</h2>}

          {/* form */}

          {!isLoading && !text && (
            <div>
              <input
                type="file"
                className="form-control"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
              />

              <input type="button" onClick={handleClick} className="form-control btn btn-primary mt-4 " value="Convert" />
            </div>
          )}
          {/* Loadig */}
          {
            isLoading && (
              <div>
                <p className="text-center mt-5">Converting :- {progress}%</p>
              </div>
            )
          }
          {/* text area */}
          {
            !isLoading && text && (
              <div>
                <textarea  className="form-control" rows="15" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
