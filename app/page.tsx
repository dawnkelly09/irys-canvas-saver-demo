import Image from "next/image";
import Link from "next/link";
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
				<Image src="/onchain-cover.jpeg" width={600} height={200} alt="logo" />
			</div>
			<div className="container mx-auto p-4">
				<h1 className="text-3xl font-bold mb-4">hirys!</h1>

				<p className="mb-4">
					This is a starter repository built using NextJS and TypeScript, use it to kickstart your project for Base
					Onchain Summer II. It includes components to:
					<ul className="list-disc list-inside mb-4 mt-5">
						<li>
							<Link className="underline" href="/upload">
								Upload data
							</Link>
						</li>
						<li>
							<Link className="underline" href="/query">
								Query transactions
							</Link>
						</li>
					</ul>
				</p>
				<p className="mb-5">
					Any questions?{" "}
					<Link href="https://discord.irys.xyz" className="text-blue-500 underline">
						Join our Discord
					</Link>{" "}
					where you can connect with our developers, and check out the starter code{" "}
					<Link href="https://docs.irys.xyz" className="text-blue-500 underline">
						in our docs.
					</Link>{" "}
				</p>
			</div>
		</main>
	);
}
