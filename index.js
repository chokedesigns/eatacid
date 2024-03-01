var $3QSB0$airgapbeaconsdk = require("@airgap/beacon-sdk");


const $94b494f3f635b11a$var$dAppClient = new (0, $3QSB0$airgapbeaconsdk.DAppClient)({
    name: "eatacid.xyz",
    preferredNetwork: (0, $3QSB0$airgapbeaconsdk.NetworkType).GHOSTNET
});
async function $94b494f3f635b11a$export$43158100a9ac6874() {
    try {
        const network = {
            type: (0, $3QSB0$airgapbeaconsdk.NetworkType).GHOSTNET,
            rpcUrl: "https://ghostnet.tezos.marigold.dev" // Ghostnet RPC URL
        };
        const permissions = await $94b494f3f635b11a$var$dAppClient.requestPermissions({
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
        $94b494f3f635b11a$export$43158100a9ac6874();
    });
    else console.error("Connect wallet button not found");
});




//# sourceMappingURL=index.js.map
