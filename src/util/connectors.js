import { Connect, SimpleSigner } from 'uport-connect'

//export let uport = new Connect('TruffleBox')

export let uport = new Connect('mynewreactuportapp', { clientId: '2oemXCAUK2UTnNq4gainxc7bqsjTPWpYCQ7',
                                                  network: 'rinkeby',
                                                  signer: SimpleSigner('aa4bb6f2e86d4b8858cff25318db91b981c592600636e58a5ac2a5aacbb7336b') })
export const web3 = uport.getWeb3()
