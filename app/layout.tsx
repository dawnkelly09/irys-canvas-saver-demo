import type { Metadata } from "next";
import Body from "./components/Body";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";

import TopNav from "@/app/components/TopNav";
const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Base + Irys",
	description: "Build Onchain Summer II Together",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Body>
					<TopNav />
					{children}
				</Body>
			</body>
		</html>
	);
}
