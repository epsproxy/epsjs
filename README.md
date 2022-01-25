# EPS js Library

This package is the integration helper for EPS app that implement EPS Contract ABI.

## How to install

Install the package with the following command

```
npm install --save @epsproxy/epsjs
```

After installation is complete, you can use the library like below.

```javascript
import { EpsHelper } from '@epsproxy/epsjs'

const contractAddress = "0x0000000000000000"
const provider = Web3.givenProvider

// init
const epsHelper = await EpsHelper.init(contractAddress, provider)

// call method
const status = await epsHelper.getRole(userAddress)
console.log({ status })
```

## React Helper

To use with a React application, add the provider from the lib.

```jsx
import { EpsProvider } from '@epsproxy/epsjs'

<EpsProvider contractAddress={contractAddress} provider={provider}>
    <App/>
</EpsProvider>
```

In your app use the context API to access the method
```
import { useEps } from '@epsproxy/epsjs'

// init
const {
    helper,
} = useEps();

// call method
const status = await helper.getRole(userAddress)
console.log({ status })
```
