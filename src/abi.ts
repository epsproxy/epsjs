const abi: any = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nominator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_delivery",
                "type": "address"
            }
        ],
        "name": "acceptNomination",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "deleteRecordByNominator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "deleteRecordByProxy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_proxy",
                "type": "address"
            }
        ],
        "name": "makeNomination",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_registerFee",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_treasury",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bool",
                "name": "bypassStatus",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "BypassSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "delivery",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldDelivery",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DeliveryUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "delivery",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "NominationAccepted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "initiator",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "NominationDeleted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "NominationMade",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "initiator",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "delivery",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "RecordDeleted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "registerFee",
                "type": "uint256"
            }
        ],
        "name": "RegisterFeeSet",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "setBypassOff",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "setBypassOn",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_registerFee",
                "type": "uint256"
            }
        ],
        "name": "setRegisterFee",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_treasuryAddress",
                "type": "address"
            }
        ],
        "name": "setTreasuryAddress",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "treasuryAddress",
                "type": "address"
            }
        ],
        "name": "TreasuryAddressSet",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_delivery",
                "type": "address"
            }
        ],
        "name": "updateDeliveryAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "Withdrawal",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_receivedAddress",
                "type": "address"
            }
        ],
        "name": "addressIsActive",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "addressIsActiveForCaller",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_receivedAddress",
                "type": "address"
            }
        ],
        "name": "getAddresses",
        "outputs": [
            {
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "delivery",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isProxied",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAddressesForCaller",
        "outputs": [
            {
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "delivery",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "isProxied",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBypass",
        "outputs": [
            {
                "internalType": "bool",
                "name": "bypassStatus",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nominator",
                "type": "address"
            }
        ],
        "name": "getNomination",
        "outputs": [
            {
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getNominationForCaller",
        "outputs": [
            {
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nominator",
                "type": "address"
            }
        ],
        "name": "getNominatorRecord",
        "outputs": [
            {
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "delivery",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getNominatorRecordForCaller",
        "outputs": [
            {
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "delivery",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_proxy",
                "type": "address"
            }
        ],
        "name": "getProxyRecord",
        "outputs": [
            {
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "delivery",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getProxyRecordForCaller",
        "outputs": [
            {
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "proxy",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "delivery",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRegisterFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_registerFee",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_roleAddress",
                "type": "address"
            }
        ],
        "name": "getRole",
        "outputs": [
            {
                "internalType": "string",
                "name": "currentRole",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRoleForCaller",
        "outputs": [
            {
                "internalType": "string",
                "name": "currentRole",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTreasuryAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "_treasuryAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nominator",
                "type": "address"
            }
        ],
        "name": "nominationExists",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nominationExistsForCaller",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nominator",
                "type": "address"
            }
        ],
        "name": "nominatorRecordExists",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nominatorRecordExistsForCaller",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_proxy",
                "type": "address"
            }
        ],
        "name": "proxyRecordExists",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "proxyRecordExistsForCaller",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export default abi
