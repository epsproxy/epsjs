import { Contract } from 'web3-eth-contract'
import contractABI from './abi/epsABI'

declare const window: any;

let Web3: any;
if (typeof process !== "undefined") {
    Web3  = require("web3")
} else {
    Web3 = window.Web3
}

export class EpsHelper {
    private contract: Contract;
    private web3: typeof Web3;
    private contractAddress: string;
    private provider: any

    constructor(contractAddress: string, provider: any) {
        this.contractAddress = contractAddress;
        this.provider = provider
    }

    async init() {
        this.loadContract(this.provider);
    }

    loadContract(provider: any) {
        this.web3 = new Web3(provider)
        this.contract = new this.web3.eth.Contract(contractABI, this.contractAddress);
    }

    async changeProvider(provider: any) {
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

    async getRegisterFee() {
        return this.contract.methods.getRegisterFee().call()
    }

    async getProxyRecord(userAddress: string) {
        return this.contract.methods.getProxyRecord(userAddress).call()
    }

    async getRole(userAddress: string) {
        return this.contract.methods.getRole(userAddress).call();
    }

    async getNomination(nominatingAddress: string) {
        return this.contract.methods.getNomination(nominatingAddress).call()
    }

    async addressIsActive(address: string) {
        return this.contract.methods.addressIsActive(address).call()
    }

    formatUnits(amount: number) {
        if (!amount) {
            return 0
        }
        return this.web3.utils.fromWei(amount + "")
    }

    deleteRecordByProxy(userAddress: string, providerCode?: number) {
        if (!providerCode) {
            providerCode = 0
        }
        return this.contract.methods.deleteRecordByProxy(providerCode).send({ from: userAddress })
    }

    updateDeliveryAddress(deliveryAddress: string, userAddress: string, providerCode?: number) {
        if (!providerCode) {
            providerCode = 0
        }
        return this.contract.methods.updateDeliveryAddress(deliveryAddress, providerCode).send({ from: userAddress })
    }

    deleteRecordByNominator(userAddress: string, providerCode?: number) {
        if (!providerCode) {
            providerCode = 0
        }
        return this.contract.methods.deleteRecordByNominator(providerCode).send({ from: userAddress })
    }

    makeNomination(proxyAddress: string, registerFee: number, userAddress: string, providerCode?: number) {
        if (!providerCode) {
            providerCode = 0
        }
        return this.contract.methods.makeNomination(proxyAddress, providerCode).send({ value: registerFee, from: userAddress })
    }

    acceptNomination(nominatingAddress: string, deliveryAddress: string, userAddress: string, providerCode?: number) {
        if (!providerCode) {
            providerCode = 0
        }
        return this.contract.methods.acceptNomination(nominatingAddress, deliveryAddress, providerCode).send({ from: userAddress })
    }

    async getNetworkType() {
        return this.web3.eth.net.getNetworkType()
    }

    async getAddresses(address: string) {
        return this.contract.methods.getAddresses(address).call()
    }
}

export const getFormattedAddress = (addr: string, char: number) => {
    const len = addr.length;
    const first = addr.substr(0, char - 11)
    const dots = "..."
    const last = addr.substr(len - 4)
    return first + dots + last;
}

export const isAddress = (addr: string) => {
    if (!Web3.utils.isAddress(addr) || addr === "0x0000000000000000000000000000000000000000") {
        return false
    }

    return true
}

export const getChainId = (networkType: string) => {
    let chainId = 1;
    switch (networkType) {
        case "main":
            chainId = 1
            break;
        case "ropsten":
            chainId = 3
            break;
        case "kovan":
            chainId = 42
            break;
        case "rinkeby":
            chainId = 4
            break;
        case "goerly":
            chainId = 5
            break;
        default:
            chainId = 1;
    }

    return chainId;
}

