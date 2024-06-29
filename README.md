# Irys + Coinbase Wallet + Tldraw Canvas storage

This project uses the [demo repo](https://github.com/lukecd/irys-coinbase-wallet) created by [Luke Cassady-Dorion](https://github.com/lukecd) (Developer Relations - Irys) which combines Irys + Coinbase Wallet. Out of the box, this repo came with buttons to upload files to & query Irys as well as the Coinbase Wallet connect button built into the Nav. I kept the Connect Wallet button and leveraged Luke's repo to accomplish the following:

1) Add tldraw canvas component to the landing page
2) Customize the Uploader component to: 
    -> incorporate the tldraw useEditor hook to store the current state of the tldraw canvas as a JSON object
    -> send that JSON object to Arweave for storage using Irys and paying with Base ETH/Sepolia
    -> return the Irys receipt information which allows the user to retrieve the JSON file from the Irys gateway url

These are exciting developments for me as a content creator. I love building educational canvases using tldraw but, I'm always nervous their snapshot links will break and I will lose my work. Now I don't have to worry! 

Next steps: add to my customization of tldraw to integrate: 

1) locating & retrieving these stored JSON objects for rendering correctly as a canvas
2) move the UI for the Canvas Upload into the tldraw menu for improved UX
3) share this tool with other content creators to gather feedback for additional canvas customizations they would find useful