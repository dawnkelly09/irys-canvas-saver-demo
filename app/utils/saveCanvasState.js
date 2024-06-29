import getIrys from './getIrys';

const blobToBuffer = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(Buffer.from(reader.result));
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(blob);
  });
};

export const saveCanvasState = (canvasState) => {
  return new Promise(async (resolve, reject) => {
    try {
      const irys = await getIrys();
      console.log('Irys instance:', irys); // Log the Irys instance

      if (typeof irys.upload !== 'function') {
        throw new Error("upload is not a function on the irys object");
      }

      const blob = new Blob([JSON.stringify(canvasState)], { type: 'application/json' });
      const buffer = await blobToBuffer(blob); // Convert Blob to Buffer
      const tags = [{ name: 'Content-Type', value: 'application/json' }];
      console.log('Uploading buffer:', buffer); // Log the buffer upload attempt

      const response = await irys.upload(buffer, tags);
      console.log('Upload response:', response); // Log the response

      if (response && response.id) {
        console.log('File uploaded successfully:', response.id);
        resolve(response);
      } else {
        console.error('File upload failed:', response.message || 'No message returned');
        reject(response.message || 'File upload failed without a message');
      }
    } catch (error) {
      console.error('Error saving canvas state:', error);
      reject(error);
    }
  });
};