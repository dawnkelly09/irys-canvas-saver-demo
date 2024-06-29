"use client";

import React, { useEffect, useState } from "react";
//import { fundAndUpload } from "../utils/fundAndUpload";
import getReceipt from "../utils/getReceipt";

interface UploaderProps {
    handleSaveCanvas: () => Promise<void>;
}

interface FileWrapper {
  file: File;
  isUploaded: boolean;
  id: string;
  previewURL: string;
  loadingReceipt: boolean;
}

const Uploader: React.FC<UploaderProps> = ({ handleSaveCanvas }) => {
  const [files, setFiles] = useState<FileWrapper[]>([]);
  const [receipt, setReceipt] = useState<string>("");
  const [txProcessing, setTxProcessing] = useState(false);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setMessage("");
  }, []);

  const handleCanvasUpload = async () => {
    setMessage("");
    setTxProcessing(true);

    try {
      await handleSaveCanvas();
      setMessage("Canvas saved successfully!");
    } catch (e) {
      setMessage("Error saving canvas: " + e.message);
    } finally {
      setTxProcessing(false);
    }
  };

  const showReceipt = async (fileIndex: number, receiptId: string) => {
    console.log({ fileIndex });
    console.log({ receiptId });

    let updatedFiles = [...files];
    updatedFiles[fileIndex].loadingReceipt = true;
    setFiles(updatedFiles);
    try {
      const receipt = await getReceipt(receiptId);
      console.log({ receipt });

      setReceipt(JSON.stringify(receipt));
    } catch (e) {
      console.log("Error fetching receipt: " + e);
    }
    updatedFiles = [...files];
    updatedFiles[fileIndex].loadingReceipt = false;
    setFiles(updatedFiles);
  };

  return (
    <div style={{ padding: '10px', position: 'fixed', top: '6px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000 }}>
      <button onClick={handleCanvasUpload} 
              disabled={txProcessing}
              style={{ border: '1px solid #FEF4EE', borderRadius: '12px', backgroundColor: 'black', color: '#FEF4EE', padding: '12px' }}
      >
        {txProcessing ? "Processing..." : "Upload Canvas"}
      </button>
      {message && <p style={{ color: '#FEF4EE' }}>{message}</p>}
    </div>
  );
};

export default Uploader;
