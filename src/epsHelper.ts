import { Contract } from 'web3-eth-contract'
import contractABI from './abi'

declare const window: any;
declare const Web3: any;

export class EpsHelper {
    private contract: Contract;
    private web3: typeof Web3;
    private currentProvider: string;

    constructor(private contractAddress: string) {
        if (!window.ethereum) {
            throw new Error("Non ethereum enabled browser")
        }
        this.contractAddress = contractAddress;
        this.currentProvider = "metamask";
    }

    static async init(contractAddress: string, provider: any) {
        const helper = new EpsHelper(contractAddress);
        helper.loadContract(provider);
        return helper;
    }

    loadContract(provider: any) {
        this.web3 = new Web3(provider)
        this.contract = new this.web3.eth.Contract(contractABI, this.contractAddress);
    }

    async changeProvider(providerName: string, provider: any) {
        if (providerName === this.currentProvider) {
            return
        }
        this.currentProvider = providerName;
        this.web3 = new Web3(provider);
        this.contract = new this.web3.eth.Contract(contractABI, this.contractAddress);
    }

    async getAccount() {
        // if (this.currentProvider === 'walletconnect') {
        //     const user = {
        //         address: this.web3.currentProvider.accounts[0]
        //     };
        //     return user;
        // }

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

    fromWei(amount: number) {
        if (!amount) {
            return 0
        }
        return this.web3.utils.fromWei(amount + "")
    }

    deleteRecordByProxy(userAddress: string) {
        return this.contract.methods.deleteRecordByProxy().send({ from: userAddress })
    }

    updateDeliveryAddress(deliveryAddress: string, userAddress: string) {
        return this.contract.methods.updateDeliveryAddress(deliveryAddress).send({ from: userAddress })
    }

    deleteRecordByNominator(userAddress: string) {
        return this.contract.methods.deleteRecordByNominator().send({ from: userAddress })
    }

    makeNomination(proxyAddress: string, registerFee: number, userAddress: string) {
        return this.contract.methods.makeNomination(proxyAddress).send({ value: registerFee, from: userAddress })
    }

    acceptNomination(nominatingAddress: string, deliveryAddress: string, userAddress: string) {
        return this.contract.methods.acceptNomination(nominatingAddress, deliveryAddress).send({ from: userAddress })
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
