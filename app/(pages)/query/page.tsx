import Image from "next/image";
import Uploader from "@/app/components/Uploader";
import TransactionFeed from "@/app/components/TransactionFeed";
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
				<TransactionFeed />
			</div>
		</main>
	);
}
