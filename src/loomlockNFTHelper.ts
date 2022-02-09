import { Contract } from 'web3-eth-contract'
import contractABI from './abi/loomlocknftABI'
import sigil from './json/sigil.json'
import { WassiePawnHelper } from './wassiePawnHelper';

declare const window: any;

let Web3: any;
if (typeof process !== "undefined") {
    Web3  = require("web3")
} else {
    Web3 = window.Web3
}

export class LoomLockNFTHelper {
    private contract: Contract;
    private web3: typeof Web3;
    private contractAddress: string;
    private wassieHelper: WassiePawnHelper;

    constructor() {
        this.contractAddress = "0x1D20A51F088492A0f1C57f047A9e30c9aB5C07Ea";
    }

    static async init(provider: any) {
        const helper = new LoomLockNFTHelper();
        if (typeof provider.enable === "function") {
            await provider.enable()
        }
        helper.loadContract(provider);
        helper.wassieHelper = await WassiePawnHelper.init(provider)
        return helper;
    }

    loadContract(provider: any) {
        this.web3 = new Web3(provider)
        this.contract = new this.web3.eth.Contract(contractABI, this.contractAddress);
    }

    async changeProvider(provider: any) {
        if (typeof provider.enable === "function") {
            await provider.enable()
        }
        this.web3 = new Web3(provider);
        this.contract = new this.web3.eth.Contract(contractABI, this.contractAddress);
    }

    async getAccount() {
        const userAddress = await this.web3.eth.getAccounts();
        if (userAddress && userAddress.length === 0) {
            throw new Error("No connected user")
        }

        const user = {
            address: userAddress[0],
        }

        return user;
    }

    fromWei(amount: number) {
        if (!amount) {
            return 0
        }
        return this.web3.utils.fromWei(amount + "")
    }

    async getNetworkType() {
        return this.web3.eth.net.getNetworkType()
    }

    async addressSigils(userAddress: string) {
        const sigils = await this.contract.methods.addressHoldings(userAddress).call()
        const loans = await this.wassieHelper.getLoans(userAddress);
        let wassieTokenIds = []
        for (const loan of loans) {
            wassieTokenIds.push(loan[6])
        }
        const tokenIds = [...sigils, ...wassieTokenIds]
        if (!tokenIds || tokenIds.length === 0) {
            return []
        }

        let result = []
        for (const id of tokenIds) {
            result.push({
                tokenId: id,
                sigil: getSigil(sigil[id])
            })
        }

        return result
    }

}

function getSigil(index: number) {
    const ref = ["Unique", "Couch", "Outcast", "Cloud", "Sparkle", "Moon", "Star", "Lightning", "Sun"]
    if (index === -1 || !ref[index]) {
        return "None"
    }
    return ref[index]
}
