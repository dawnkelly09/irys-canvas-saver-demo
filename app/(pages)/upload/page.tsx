import Image from "next/image";
import Uploader from "@/app/components/Uploader";
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full md:w-2/3 max-w-5xl items-center justify-center font-mono text-sm lg:flex">
				<Uploader />
			</div>
		</main>
	);
}
