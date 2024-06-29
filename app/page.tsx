import Image from "next/image";
import Link from "next/link";
import Canvas from './components/Canvas'

export default function Home() {
	return (
		<main className="text-center">
			<p>Save Tldraw canvas JSON files to Arweave using Irys & Base</p>
			<p>Be sure to open the console for your receipt data!</p>
			<div>
				<Canvas />
			</div>
		</main>
	);
}
