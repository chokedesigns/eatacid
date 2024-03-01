import {DAppClient as $gBMKs$DAppClient, NetworkType as $gBMKs$NetworkType} from "@airgap/beacon-sdk";


const $034b0e73acf1591a$var$dAppClient = new (0, $gBMKs$DAppClient)({
    name: "eatacid.xyz",
    preferredNetwork: (0, $gBMKs$NetworkType).GHOSTNET
});
async function $034b0e73acf1591a$export$43158100a9ac6874() {
    try {
        const network = {
            type: (0, $gBMKs$NetworkType).GHOSTNET,
            rpcUrl: "https://ghostnet.tezos.marigold.dev" // Ghostnet RPC URL
        };
        const permissions = await $034b0e73acf1591a$var$dAppClient.requestPermissions({
            network: network
        });
        console.log("Permissions:", permissions);
    } catch (error) {
        console.error("Error connecting to wallet:", error);
    }
}
// Event listener for the connect wallet button
document.addEventListener("DOMContentLoaded", ()=>{
    const connectButton = document.querySelector(".button-primary.w-button");
    if (connectButton) connectButton.addEventListener("click", function() {
        $034b0e73acf1591a$export$43158100a9ac6874();
    });
    else console.error("Connect wallet button not found");
});




//# sourceMappingURL=index.js.map
