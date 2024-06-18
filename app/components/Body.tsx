"use client";
import React, { ReactNode } from "react";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
const config = getDefaultConfig({
	appName: "Irys + Base",
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
	chains: [baseSepolia],
	ssr: true, // If your dApp uses server side rendering (SSR)
});

type BodyProps = {
	children: ReactNode;
};

const Body: React.FC<BodyProps> = ({ children }) => {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider initialChain={baseSepolia}>
					<div className="">{children}</div>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
};

export default Body;
