const wassiePawnABI: any = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint128",
                "name": "_loanAmount",
                "type": "uint128"
            },
            {
                "internalType": "uint16",
                "name": "_termInDays",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "_repoAddress",
                "type": "address"
            },
            {
                "internalType": "uint64",
                "name": "_lendingFee",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "_extensionFee",
                "type": "uint64"
            },
            {
                "internalType": "uint16",
                "name": "_extensionHorizon",
                "type": "uint16"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
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
        }],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "Paused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "Sunrise",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "Sunset",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "Unpaused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "nftAddress",
            "type": "address"
        }],
        "name": "eligibleNFTAddressSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint256",
            "name": "deposit",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "effectiveDate",
            "type": "uint256"
        }],
        "name": "ethDeposited",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint256",
            "name": "withdrawal",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "effectiveDate",
            "type": "uint256"
        }],
        "name": "ethWithdrawn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint64",
            "name": "extensionFee",
            "type": "uint64"
        }],
        "name": "extensionFeeSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint16",
            "name": "extensionHorizon",
            "type": "uint16"
        }],
        "name": "extensionHorizonSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint64",
            "name": "lendingFee",
            "type": "uint64"
        }],
        "name": "lendingFeeSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint128",
            "name": "loanId",
            "type": "uint128"
        },
        {
            "indexed": true,
            "internalType": "uint256",
            "name": "transactionCode",
            "type": "uint256"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "borrower",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint16",
            "name": "tokenId",
            "type": "uint16"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "transactionValue",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "transactionFee",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "loanEndDate",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "effectiveDate",
            "type": "uint256"
        }],
        "name": "lendingTransaction",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint128",
            "name": "loanAmount",
            "type": "uint128"
        }],
        "name": "loanAmountSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "repoAddress",
            "type": "address"
        }],
        "name": "repoAddressSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint16",
            "name": "termInDays",
            "type": "uint16"
        }],
        "name": "termInDaysSet",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [{
            "internalType": "uint128",
            "name": "_loanId",
            "type": "uint128"
        }],
        "name": "extendLoan",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "extensionFee",
        "outputs": [{
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "extensionHorizon",
        "outputs": [{
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "extensionsAllowed",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getLoans",
        "outputs": [{
            "components": [{
                "internalType": "uint128",
                "name": "loanId",
                "type": "uint128"
            },
            {
                "internalType": "uint128",
                "name": "currentBalance",
                "type": "uint128"
            },
            {
                "internalType": "bool",
                "name": "isCurrent",
                "type": "bool"
            },
            {
                "internalType": "address payable",
                "name": "borrower",
                "type": "address"
            },
            {
                "internalType": "uint32",
                "name": "startDate",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "endDate",
                "type": "uint32"
            },
            {
                "internalType": "uint16",
                "name": "tokenId",
                "type": "uint16"
            }],
            "internalType": "struct Metalend.LoanItem[]",
            "name": "",
            "type": "tuple[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getParameters",
        "outputs": [{
            "internalType": "address",
            "name": "_tokenAddress",
            "type": "address"
        },
        {
            "internalType": "uint32",
            "name": "_loanTerm",
            "type": "uint32"
        },
        {
            "internalType": "uint128",
            "name": "_loanAmount",
            "type": "uint128"
        },
        {
            "internalType": "uint128",
            "name": "_loanFee",
            "type": "uint128"
        },
        {
            "internalType": "uint64",
            "name": "_extensionHorizon",
            "type": "uint64"
        },
        {
            "internalType": "uint128",
            "name": "_extensionFee",
            "type": "uint128"
        },
        {
            "internalType": "bool",
            "name": "_isPaused",
            "type": "bool"
        },
        {
            "internalType": "bool",
            "name": "_isSunset",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint128",
            "name": "_loanId",
            "type": "uint128"
        }],
        "name": "isWithinExtensionHorizon",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint128",
            "name": "_loanId",
            "type": "uint128"
        }],
        "name": "isWithinLoanTerm",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "itemsUnderLoan",
        "outputs": [{
            "internalType": "uint128",
            "name": "loanId",
            "type": "uint128"
        },
        {
            "internalType": "uint128",
            "name": "currentBalance",
            "type": "uint128"
        },
        {
            "internalType": "bool",
            "name": "isCurrent",
            "type": "bool"
        },
        {
            "internalType": "address payable",
            "name": "borrower",
            "type": "address"
        },
        {
            "internalType": "uint32",
            "name": "startDate",
            "type": "uint32"
        },
        {
            "internalType": "uint32",
            "name": "endDate",
            "type": "uint32"
        },
        {
            "internalType": "uint16",
            "name": "tokenId",
            "type": "uint16"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lendingFee",
        "outputs": [{
            "internalType": "uint64",
            "name": "",
            "type": "uint64"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "loanAmount",
        "outputs": [{
            "internalType": "uint128",
            "name": "",
            "type": "uint128"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint128",
            "name": "_loanId",
            "type": "uint128"
        }],
        "name": "makeLoanPayment",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        },
        {
            "internalType": "bytes",
            "name": "",
            "type": "bytes"
        }],
        "name": "onERC721Received",
        "outputs": [{
            "internalType": "bytes4",
            "name": "",
            "type": "bytes4"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
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
        "name": "repoAddress",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint128",
            "name": "_loanId",
            "type": "uint128"
        }],
        "name": "repossessItem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint128[]",
            "name": "repoItems",
            "type": "uint128[]"
        }],
        "name": "repossessItems",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint64",
            "name": "_extensionFee",
            "type": "uint64"
        }],
        "name": "setExtensionFee",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint16",
            "name": "_extensionHorizon",
            "type": "uint16"
        }],
        "name": "setExtensionHorizon",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint64",
            "name": "_lendingFee",
            "type": "uint64"
        }],
        "name": "setLendingFee",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint128",
            "name": "_loanAmount",
            "type": "uint128"
        }],
        "name": "setLoanAmount",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_repoAddress",
            "type": "address"
        }],
        "name": "setRepoAddress",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint16",
            "name": "_termInDays",
            "type": "uint16"
        }],
        "name": "setTermInDays",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "sunrise",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "sunset",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "sunsetModeActive",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint16",
            "name": "tokenId",
            "type": "uint16"
        }],
        "name": "takeLoan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "termInDays",
        "outputs": [{
            "internalType": "uint16",
            "name": "",
            "type": "uint16"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenContract",
        "outputs": [{
            "internalType": "contract IERC721",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_withdrawal",
            "type": "uint256"
        }],
        "name": "withdraw",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]

export default wassiePawnABI
