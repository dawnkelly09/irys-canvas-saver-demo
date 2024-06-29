'use client'
import { Tldraw, TldrawEditor } from 'tldraw';
import 'tldraw/tldraw.css'
import UploaderWithEditor from './UploaderWithEditor';

function Canvas() {
    return (
        <div style={{ position: 'relative', height: '80vh', width: '100vw'  }}>
            <TldrawEditor>
                <Tldraw>
                    <UploaderWithEditor />
                </Tldraw>
            </TldrawEditor>
        </div>
    );
}

export default Canvas;