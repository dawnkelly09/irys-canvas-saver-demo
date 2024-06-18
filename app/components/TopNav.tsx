// src/components/TopNav.tsx
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const TopNav = () => {
	return (
		<nav className="flex items-center justify-between py-4 px-8 bg-black text-[#FEF4EE] shadow shadow-[#FEF4EE]">
			<div className="flex items-center">
				<Link href="/">
					<Image src="/irys-wordmark-white.png" alt="Irys Logo" width={50} height={50} className="cursor-pointer" />
				</Link>

				<Link
					href="/upload"
					className="ml-5 rounded-xl border border-[#FEF4EE] px-4 py-2 transition duration-300 ease-in-out hover:bg-[#FEF4EE] hover:text-black"
				>
					<span className="block">Upload</span>
				</Link>
				<Link
					href="/query"
					className="ml-5 rounded-xl border border-[#FEF4EE] px-4 py-2 transition duration-300 ease-in-out hover:bg-[#FEF4EE] hover:text-black"
				>
					<span className="block">Query</span>
				</Link>
			</div>
			<div className="flex items-center">
				<div className="w-full">
					<ConnectButton />
				</div>
			</div>
		</nav>
	);
};

export default TopNav;
