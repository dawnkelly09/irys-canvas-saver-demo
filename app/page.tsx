import Image from "next/image";
import Link from "next/link";
import Canvas from './components/Canvas'

export default function Home() {
	return (
		<main className="">
			Hello, World!
			<div>
				<Canvas />
			</div>
		</main>
	);
}
