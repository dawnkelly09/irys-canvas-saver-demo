// src/components/TopNav.tsx
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const TopNav = () => {
	return (
		<nav className="flex items-center justify-between py-4 px-8 bg-black text-[#FEF4EE] shadow shadow-[#FEF4EE]">
			<div className="flex items-center">
				<Link href="/">
					<Image src="/MindPalace.png" alt="Irys Logo" width={50} height={50} className="cursor-pointer" style={{ borderRadius: '12px'}}/>
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
