var $hoiiz$airgapbeaconsdk = require("@airgap/beacon-sdk");


const $bc66fb7cfd9ce5fc$var$dAppClient = new (0, $hoiiz$airgapbeaconsdk.DAppClient)({
    name: "eatacid.xyz",
    preferredNetwork: (0, $hoiiz$airgapbeaconsdk.NetworkType).GHOSTNET
});
async function $bc66fb7cfd9ce5fc$export$43158100a9ac6874() {
    try {
        const network = {
            type: (0, $hoiiz$airgapbeaconsdk.NetworkType).GHOSTNET,
            rpcUrl: "https://ghostnet.tezos.marigold.dev" // Ghostnet RPC URL
        };
        const permissions = await $bc66fb7cfd9ce5fc$var$dAppClient.requestPermissions({
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
        $bc66fb7cfd9ce5fc$export$43158100a9ac6874();
    });
    else console.error("Connect wallet button not found");
});




//# sourceMappingURL=index.js.map
