var $7KnBk$airgapbeaconsdk = require("@airgap/beacon-sdk");


const $7bd4dc5f754c3852$var$dAppClient = new (0, $7KnBk$airgapbeaconsdk.DAppClient)({
    name: "eatacid.xyz",
    preferredNetwork: (0, $7KnBk$airgapbeaconsdk.NetworkType).GHOSTNET
});
async function $7bd4dc5f754c3852$export$43158100a9ac6874() {
    try {
        const network = {
            type: (0, $7KnBk$airgapbeaconsdk.NetworkType).GHOSTNET,
            rpcUrl: "https://ghostnet.tezos.marigold.dev" // Ghostnet RPC URL
        };
        const permissions = await $7bd4dc5f754c3852$var$dAppClient.requestPermissions({
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
        $7bd4dc5f754c3852$export$43158100a9ac6874();
    });
    else console.error("Connect wallet button not found");
});




//# sourceMappingURL=index.js.map
