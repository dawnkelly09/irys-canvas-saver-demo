'use client'
import { useEditor } from 'tldraw';
import Uploader from './Uploader';
import { saveCanvasState } from '../utils/saveCanvasState';

const UploaderWithEditor: React.FC = () => {
    const editor = useEditor();

    const handleSaveCanvas = async () => {
        const state = editor.store.serialize(); // capture the current state of the canvas
        await saveCanvasState(state);
        console.log("Canvas state saved");
    };

    return (
        <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
            <Uploader handleSaveCanvas={handleSaveCanvas} />
        </div>
    );
};

export default UploaderWithEditor;
