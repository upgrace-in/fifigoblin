"use strict"

var mint_count = 1;
var mint_costs = 0.005; // Change cost here
var chainId = 4; // Change it to 1 for real
var t_address = '0xeD58B20Fd8e99EA5E304a39C4451955f819c911a'; // address
var t_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"NEWFMC","type":"uint256"}],"name":"changeFMC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newsupply_","type":"uint256"}],"name":"changesupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"minter","type":"address"}],"name":"getFMC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mintowner","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newmaxperwallet","type":"uint256"}],"name":"setMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintRate","type":"uint256"}],"name":"setMintRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];
var startup = false;
let web3, contract;
let Web3Modal, WalletConnectProvider, web3Modal, provider, selectedAccount;
let providerOptions;

function truncateString(str, length) {
    return str.length > length ? str.substring(0, length - 1) + '.....' : str
}

function set_value(type) {
    if (type == 'increase') {
        if (mint_count != 5) {  
            mint_count++;
        }
    } else {
        if (mint_count != 1) {
            mint_count--;
        }
    }
    $('#mint_count').html(mint_count);
}

async function connectWeb3() {
    provider = await web3Modal.connect();

    web3 = new Web3(provider);
    contract = new web3.eth.Contract(t_abi, t_address);

    check_if_connected();

    provider.on("accountsChanged", (accounts) => {
        location.reload();
    });

    provider.on("chainChanged", (chainId) => {
        location.reload();
    });

    provider.on("networkChanged", (networkId) => {
        location.reload();
    });

}

function put_err(msg){
    alert(msg)
    $('#msg').html(msg)
}

function check_if_connected() {
    web3.eth.getAccounts().then(async (tx) => {
        if (tx[0] !== undefined) {
            selectedAccount = tx[0]
            $('#mint_btn').html("Mint")
            $('#mint_link').html('Connected : ' + truncateString(String(selectedAccount), 10));
            $('#connect_btn').hide();
            $('#mint_btn').show();
            if (window.ethereum.networkVersion == chainId) {
                // One TIME
                if (startup == false) {
                    startup = true;

                    $(".box-count").show()

                    $('#mint_btn').click(async () => {
                        await trigger_minting(parseFloat(mint_count)*parseFloat(mint_costs));
                    });
                    
                    // total supply
                    await contract.methods.totalSupply().call().then(function (res, err) {
                        if (res) {
                            $('#Counter').show();
                            
                            $('#total_supply').html(res)
                        }
                    });
                }
            } else {
                put_err("Connect to Rinkeyby")
            }
        } else {
            put_err('Connect Wallet');
        }
    });
}

async function trigger_minting(amt) {
    amt = (amt * Math.pow(10, 18)).toFixedSpecial(0)
    await contract.methods.mint(String(amt)).send({ from: selectedAccount, value: amt }).then(function (res, err) {
        if (res) {
            put_err("Minted Successfully...")
        } else {
            put_err("Minting Failed...")
        }
    });
}

// Render IT
$(document).ready(() => {
    Web3Modal = window.Web3Modal.default;
    WalletConnectProvider = window.WalletConnectProvider.default;

    providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: "c0db0b85222f4f5c82dd2bed1fc843f9",
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
    });

    $('#connect_btn').click(async () => {
        await connectWeb3();
    })

    $('#mint_btn').click(async () => {
        check_if_connected()
    })

    $('#max_btn').click((e) => {
        e.preventDefault();
        mint_count = 5;
        $('#mint_count').html(mint_count);
    })

    $('#increase_btn').click(() => {
        set_value('increase');
    })

    $('#decrease_btn').click(() => {
        set_value('decrease');
    })

    $('#mint_costs').html(mint_costs);

    set_value("increase")
});


Number.prototype.toFixedSpecial = function (n) {
    var str = this.toFixed(n);
    if (str.indexOf("e+") === -1) return str;

    str = str
        .replace(".", "")
        .split("e+")
        .reduce(function (p, b) {
            return p + Array(b - p.length + 2).join(0);
        });

    if (n > 0) str += "." + Array(n + 1).join(0);

    return str;
};