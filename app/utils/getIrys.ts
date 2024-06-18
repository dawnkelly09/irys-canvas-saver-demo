import { WebIrys } from "@irys/sdk";
import { createWalletClient, custom } from "viem";
import { baseSepolia } from "viem/chains";

const getIrys = async (): Promise<WebIrys> => {
	const [account] = await window.ethereum.request({ method: "eth_requestAccounts" });

	const client = createWalletClient({
		account,
		chain: baseSepolia,
		transport: custom(window.ethereum),
	});
	const rpcUrl = "https://sepolia.base.org";

	const wallet = { rpcUrl: rpcUrl, name: "viemv2", provider: client };
	const webIrys = new WebIrys({ network: "devnet", token: "base-eth", wallet });
	await webIrys.ready();

	console.log(`Connected to webIrys from ${webIrys.address}`);
	return webIrys;
};

export default getIrys;
