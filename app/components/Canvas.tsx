'use client'
import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css'

const Canvas = () => {
    return (
        <div style={{ position: 'fixed', inset: 40, marginTop: 120 }}>
            <Tldraw />
            <button>Save Canvas</button>
        </div>
    )
}

export default Canvas