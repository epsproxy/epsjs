import { Contract } from 'web3-eth-contract'
import contractABI from './abi/wassiePawnABI'

declare const window: any;

let Web3: any;
if (typeof process !== "undefined") {
    Web3  = require("web3")
} else {
    Web3 = window.Web3
}

export class WassiePawnHelper {
    private contract: Contract;
    private web3: typeof Web3;
    private contractAddress: string;

    constructor() {
        this.contractAddress = "0x778064DCbc663DCBB8DCfdeD2a929D60Ea540329";
    }

    static async init(provider: any) {
        const helper = new WassiePawnHelper();
        if (typeof provider.enable === "function") {
            await provider.enable()
        }
        helper.loadContract(provider);
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

    async getLoans(userAddress: string) {
        const values = await this.contract.methods.getLoans().call()
        const currentTimestamp: number = +new Date() / 1000;
        const validValues = values.filter((data: any) => {
            if (data[2] && data[3] === userAddress && data[5] > currentTimestamp) {
                return true
            }

            return false
        })

        return validValues
    }

}
