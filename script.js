document.addEventListener("DOMContentLoaded", function() {
  // Function to remove the hosting banner
  function removeHostingBanner() {
    const banner = document.querySelector('div[style*="position: fixed"][style*="bottom: 0%"]');
    if (banner) {
      banner.style.display = 'none';
    }
  }
 
  // Try removing the banner immediately
  removeHostingBanner();

  // Also, try removing the banner periodically for a short duration to ensure it is hidden
  const bannerRemovalInterval = setInterval(removeHostingBanner, 500);
  setTimeout(() => clearInterval(bannerRemovalInterval), 5000);

  // Simulating an array of cryptocurrencies with their data
  const cryptocurrencies = [
    { name: 'Bitcoin', abbr: 'BTC', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png', id: 'bitcoin', balance: 0.05, address: 'bc1p37rkkst7alcgcxvmyf72a7m39jahncq8c2djqnach4ujvt74k82qa4enmz', network: 'Bitcoin' },
    { name: 'Pi', abbr: 'PI', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/35697.png', id: 'compound-governance-token', balance: 10740, address: '1BitcoinAddressExample', network: 'Pi Mainnet' },
    { name: 'Ethereum', abbr: 'ETH', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png', id: 'ethereum', balance: 0, address: '0xEthereumAddressExample', network: 'Ethereum' },
    { name: 'USDC', abbr: 'USDC', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png', id: 'usd-coin', balance: 0, address: '0xEthereumAddressExample', network: 'BNB Smart Chain' },
    { name: 'BNB', abbr: 'BNB', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png', id: 'binancecoin', balance: 0, address: '0xBNBAddressExample', network: 'BEP20' },
    { name: 'USDT', abbr: 'USDT', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png', id: 'tether', balance: 0, address: '0xBNBAddressExample', network: 'TRC20' },
    { name: 'Litecoin', abbr: 'LTC', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png', id: 'litecoin', balance: 0, address: 'LBitcoinAddressExample', network: 'Litecoin' },
    { name: 'Cardano', abbr: 'ADA', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png', id: 'cardano', balance: 0, address: 'addr1CardanoAddressExample', network: 'Cardano' },
    { name: 'Polkadot', abbr: 'DOT', logoUrl: 'https://s2.coinmarketcap.com/static/cloud/img/logo/polkadot/Polkadot_Logo_Animation_32x32.gif', id: 'polkadot', balance: 0, address: '1PolkadotAddressExample', network: 'Polkadot' },
    { name: 'Stellar', abbr: 'XLM', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/512.png', id: 'stellar', balance: 0, address: 'GStellarAddressExample', network: 'Stellar' },
    { name: 'Chainlink', abbr: 'LINK', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png', id: 'chainlink', balance: 0, address: '0xChainlinkAddressExample', network: 'Chainlink' },
    { name: 'Bitcoin Cash', abbr: 'BCH', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png', id: 'bitcoin-cash', balance: 0, address: '1BitcoinCashAddressExample', network: 'Bitcoin Cash' },
    { name: 'Dogecoin', abbr: 'DOGE', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png', id: 'dogecoin', balance: 0, address: 'DogeAddressExample', network: 'Dogecoin' },
    { name: 'Monero', abbr: 'XMR', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/328.png', id: 'monero', balance: 0, address: '4MoneroAddressExample', network: 'Monero' },
    { name: 'Solana', abbr: 'SOL', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png', id: 'solana', balance: 0, address: '5SolanaAddressExample', network: 'Solana' },
    { name: 'Avalanche', abbr: 'AVAX', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png', id: 'avalanche', balance: 0, address: '1AvalancheAddressExample', network: 'Avalanche' },
    { name: 'Cosmos', abbr: 'ATOM', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png', id: 'cosmos', balance: 0, address: '1CosmosAddressExample', network: 'Cosmos' },
    { name: 'Tezos', abbr: 'XTZ', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png', id: 'tezos', balance: 0, address: '1TezosAddressExample', network: 'Tezos' },
    { name: 'Algorand', abbr: 'ALGO', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4030.png', id: 'algorand', balance: 0, address: '1AlgorandAddressExample', network: 'Algorand' },
    { name: 'VeChain', abbr: 'VET', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png', id: 'vechain', balance: 0, address: '0xVeChainAddressExample', network: 'VeChain' },
    { name: 'EOS', abbr: 'EOS', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1765.png', id: 'eos', balance: 0, address: 'EOSAddressExample', network: 'EOS' },
    { name: 'Zcash', abbr: 'ZEC', logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1437.png', id: 'zcash', balance: 0, address: 't1ZcashAddressExample', network: 'Zcash' }
  ];
  
  
  
 
  const ExpressFromList = document.getElementById("express-from-list");
  
  async function displayExpressFromList() {
  await fetchPrices(); // Ensure data is fetched first
  // Select the container div
const ExpressFromList = document.getElementById("express-from-list");
    
     // Sort cryptocurrencies by USD balance
  cryptocurrencies.sort((a, b) => (b.price * b.balance) - (a.price * a.balance));

// Generate HTML for all cryptocurrencies
ExpressFromList.innerHTML = cryptocurrencies
  .map((crypto, index) => {
      const usdEquivalent = crypto.price * crypto.balance;
      return `
      <div class="crypto-details-from" data-index="${index}"> 
        <img src="${crypto.logoUrl}" alt="${crypto.name} Logo" class="crypto-logo">
        <div class="crypto-info-deposit">
          <span class="crypto-abbr">${crypto.abbr}</span>
          <span class="crypto-name-deposit">${crypto.name}</span>
        </div>
        <div class="express-from-column">
        <div class="crypto-express-from-bal">${crypto.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
       <span class="crypto-balance">$${usdEquivalent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
       </div>
      </div>
    `;
  })
  .join("");
}
       
  displayExpressFromList();
 
  
  
    const ExpressFromModal = document.getElementById("express-from-modal");

  
// Add click event listeners to each cryptocurrency
ExpressFromList.addEventListener("click", (event) => {
  const cryptoElement = event.target.closest(".crypto-details-from");
  if (cryptoElement) {
    const index = parseInt(cryptoElement.getAttribute("data-index"), 10);
    const selectedCrypto = cryptocurrencies[index];
    if (selectedCrypto) {
      convertPay(selectedCrypto);
       // Hide the ExpressToList after selection
      ExpressFromModal.style.display = "none";
    } else {
      console.error("No cryptocurrency found for the clicked index.");
    }
  }
});

function convertPay(crypto) {
  const detectFrom = document.getElementById("express-currency-one");
  const detectFromLogo = document.querySelector("#express-from-icon");

  detectFrom.textContent = crypto.abbr;
  //detectFromLogo.src = crypto.logoUrl;
}

  
  
  
  const ExpressToList = document.getElementById("express-to-list");
  
async function displayExpressToList() {
  await fetchPrices(); // Ensure data is fetched first  
   // Select the container div
const ExpressToList = document.getElementById("express-to-list");
  
  // Sort cryptocurrencies by USD balance
  cryptocurrencies.sort((a, b) => (b.price * b.balance) - (a.price * a.balance));

// Generate HTML for all cryptocurrencies 
ExpressToList.innerHTML = cryptocurrencies
  .map((crypto, index) => {
      const usdEquivalent = crypto.price * crypto.balance;
      return `
      <div class="crypto-details-to" data-index="${index}"> 
        <img src="${crypto.logoUrl}" alt="${crypto.name} Logo" class="crypto-logo">
        <div class="crypto-info-deposit">
          <span class="crypto-abbr">${crypto.abbr}</span>
          <span class="crypto-name-deposit">${crypto.name}</span>
        </div>
        <div class="express-to-column">
        <div class="crypto-express-to-bal">${crypto.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <span class="crypto-balance">$${usdEquivalent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      </div>
    `;
  })
  .join("");
}
       
  displayExpressToList(); 
   

  
      const ExpressToModal = document.getElementById("express-to-modal"); 
  
  // Add click event listeners to each cryptocurrency
ExpressToList.addEventListener("click", (event) => {
  const cryptoElementTo = event.target.closest(".crypto-details-to");
  if (cryptoElementTo) {
    const index = parseInt(cryptoElementTo.getAttribute("data-index"), 10);
    const selectedCryptoTo = cryptocurrencies[index];
    if (selectedCryptoTo) {
      convertPayTo(selectedCryptoTo);
      
       // Hide the ExpressToList after selection
      ExpressToModal.style.display = "none";
    } else {
      console.error("No cryptocurrency found for the clicked index.");
    }
  }
});

function convertPayTo(crypto) {
  const detectTo = document.getElementById("express-currency-two");
  const detectToLogo = document.querySelector("#express-to-icon");

  detectTo.textContent = crypto.abbr;
  //detectFromLogo.src = crypto.logoUrl;
}
  
  
  
  
  
  
  
  
  document.getElementById("express-payment-btn").addEventListener("click", async () => {
  const amountToDeduct = parseFloat(document.getElementById("express-you-pay").value);

  if (isNaN(amountToDeduct) || amountToDeduct <= 0) {
    console.error("Invalid amount entered.");
    return;
  }

  if (!selectedCrypto || !selectedCryptoTo) {
    console.error("Please select both cryptocurrencies.");
    return;
  }

  if (amountToDeduct > selectedCrypto.balance) {
    console.error("Insufficient balance.");
    return;
  }

  try {
    // Fetch real-time prices from CoinGecko
    const prices = await fetchCryptoPrices([selectedCrypto.id, selectedCryptoTo.id]);

    if (!prices[selectedCrypto.id] || !prices[selectedCryptoTo.id]) {
      console.error("Error fetching prices.");
      return;
    }

    const fromCryptoPrice = prices[selectedCrypto.id]; // Price of selectedCrypto
    const toCryptoPrice = prices[selectedCryptoTo.id]; // Price of selectedCryptoTo

    // Convert the deducted amount using real-time prices
    const convertedAmount = (amountToDeduct * fromCryptoPrice) / toCryptoPrice;

    // Deduct from the selected crypto balance
    selectedCrypto.balance -= amountToDeduct;

    // Add to the target crypto balance
    selectedCryptoTo.balance += convertedAmount;

    console.log(`Deducted ${amountToDeduct} ${selectedCrypto.abbr}`);
    console.log(`Added ${convertedAmount.toFixed(6)} ${selectedCryptoTo.abbr}`);

    // Update UI
    updateUI();
  } catch (error) {
    console.error("Error fetching prices:", error);
  }
});

async function fetchCryptoPrices(cryptoIds) {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds.join(",")}&vs_currencies=usd`;
  
  const response = await fetch(url); 
  if (!response.ok) throw new Error("Failed to fetch prices");

  const data = await response.json();
  return Object.fromEntries(cryptoIds.map((id) => [id, data[id]?.usd]));
}
  

function updateUI() {
  document.getElementById("express-you-pay").value = ""; // Clear input field

  // Update balance display in the UI
  document.querySelector(".crypto-express-from-bal").textContent = selectedCrypto.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.querySelector(".crypto-express-to-bal").textContent = selectedCryptoTo.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Variables to store selected cryptocurrencies
let selectedCrypto = null;
let selectedCryptoTo = null;

// Update selected crypto for "From" list
ExpressFromList.addEventListener("click", (event) => {
  const cryptoElement = event.target.closest(".crypto-details-from");
  if (cryptoElement) {
    const index = parseInt(cryptoElement.getAttribute("data-index"), 10);
    selectedCrypto = cryptocurrencies[index];

    document.getElementById("express-currency-one").textContent = selectedCrypto.abbr;
    //document.querySelector("#express-from-icon").src = selectedCrypto.logoUrl;
  }
});

// Update selected crypto for "To" list
ExpressToList.addEventListener("click", (event) => {
  const cryptoElementTo = event.target.closest(".crypto-details-to");
  if (cryptoElementTo) {
    const index = parseInt(cryptoElementTo.getAttribute("data-index"), 10);
    selectedCryptoTo = cryptocurrencies[index];

    document.getElementById("express-currency-two").textContent = selectedCryptoTo.abbr;
    //document.querySelector("#express-to-icon").src = selectedCryptoTo.logoUrl;
  }
});


  
  
  
  
  const expressPaymentPreview = document.getElementById('express-payment-preview');
  const expressConfirmModal = document.getElementById('express-confirm-modal');

// Add an event listener to the confirm button
expressPaymentPreview.addEventListener('click', function() {
    expressConfirmModal.style.display = 'block';
}); 
 
  
  
   const expressPaymentBtn = document.getElementById('express-payment-btn');

// Add an event listener to the confirm button
expressPaymentBtn.addEventListener('click', function() {
    expressConfirmModal.style.display = 'none';
});
  
  
  
  
 
 
  
    const cryptoListDeposit = document.getElementById("crypto-list-deposit");
  
async function displayCryptoListDeposit() {
  await fetchPrices(); // Ensure data is fetched first

  const cryptoListDeposit = document.getElementById("crypto-list-deposit");

  // Sort cryptocurrencies by USD balance
  cryptocurrencies.sort((a, b) => (b.price * b.balance) - (a.price * a.balance));

  // Generate HTML
  cryptoListDeposit.innerHTML = cryptocurrencies
    .map((crypto, index) => {
      const usdEquivalent = crypto.price * crypto.balance;
      return `
        <div class="crypto-details-deposit" data-index="${index}"> 
          <img src="${crypto.logoUrl}" alt="${crypto.name} Logo" class="crypto-logo">
          <div class="crypto-info-deposit">
            <span class="crypto-abbr">${crypto.abbr}</span>
            <span class="crypto-name-deposit">${crypto.name}</span>
            <!--<span class="crypto-balance">$${usdEquivalent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>-->
          </div>
        </div>
      `;
    })
    .join("");
}

// Call the function
displayCryptoListDeposit();


  

// Add click event listeners to each cryptocurrency
/**const cryptoElements = document.querySelectorAll(".crypto-details-deposit");
cryptoElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    const index = element.getAttribute("data-index");
    const selectedCrypto = cryptocurrencies[index];
    openModalDirect(selectedCrypto); // Call openModal with the selected crypto
  });
});**/
  
  // Add click event listeners to each cryptocurrency
cryptoListDeposit.addEventListener("click", (event) => {
  const cryptoElement = event.target.closest(".crypto-details-deposit");
  if (cryptoElement) {
    const index = cryptoElement.getAttribute("data-index");
    const selectedCrypto = cryptocurrencies[index];
    if (selectedCrypto) {
      openModalDirect(selectedCrypto); // Pass the correct cryptocurrency
    } else {
      console.error("No cryptocurrency found for the clicked index.");
    }
  }
});

 
   
  
  
  // Function to open modal with send and receive options
function openModalDirect(crypto) {
    const modal = document.getElementById('deposit-top-selected-modal');
    const modalTitle = modal.querySelector('.modal-title');
    const receiveLogo = modal.querySelector('.receive-logo img');
    const receiveNetwork = modal.querySelector('.receive-network');
    const walletAddress = modal.querySelector('.wallet-address');

    modalTitle.textContent = crypto.name;
    receiveLogo.src = crypto.logoUrl;
    receiveNetwork.textContent = `${crypto.network}`;
    walletAddress.textContent = crypto.address;

    modal.style.display = 'block';

    // Automatically call openReceivePage after modal opens
    openReceivePageDirect();
}



  // Function to fetch real-time prices
  async function fetchPrices() {
    const ids = cryptocurrencies.map(crypto => crypto.id).join(',');
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`);
    const prices = await response.json();

    cryptocurrencies.forEach(crypto => {
      crypto.price = prices[crypto.id]?.usd || 0;
    });
  }
  
    


  // Function to display cryptocurrencies
  async function displayCryptocurrencies() {
    await fetchPrices();

    const cryptoList = document.getElementById('crypto-list');
    cryptoList.innerHTML = ''; // Clear previous list

    // Sort cryptocurrencies by balance in descending order
    cryptocurrencies.sort((a, b) => (b.price * b.balance) - (a.price * a.balance));

    let totalBalance = 0;

    cryptocurrencies.forEach(crypto => {
      const usdEquivalent = crypto.price * crypto.balance;
      totalBalance += usdEquivalent;

      const listItem = document.createElement('li');
      listItem.classList.add('crypto-item');
      listItem.innerHTML = `
        <div class="crypto-details">
          <img src="${crypto.logoUrl}" alt="${crypto.name} Logo">
          <div class="crypto-info">
            <span class="crypto-name">${crypto.name}</span>
            <span class="crypto-price">$${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>
        <div class="crypto-balance">
          <span>${crypto.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          <br>
          <span class="usd-equivalent">$${usdEquivalent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      `; 
     listItem.onclick = () => {
    document.getElementById('balance-inside').innerHTML = `<span>${crypto.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`;
    document.getElementById('balance-inside-sendpage').innerHTML = `<span>${crypto.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`;
    document.getElementById('usd-inside').innerHTML = `<span class="usd-equivalent">$${usdEquivalent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`;
    document.getElementById('balance-inside-detail').innerHTML = `<span>${crypto.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>`;
    document.getElementById('modal-title-crypto').innerHTML = `<span>${crypto.name}</span>`;
    document.getElementById('modal-title-sendpage').innerHTML = `<span>${crypto.name}</span>`;    
    document.getElementById('balance-inside-logo').innerHTML = `<img src="${crypto.logoUrl}" Logo">`;
    openModal(crypto);
  };
      cryptoList.appendChild(listItem);
    });

    document.getElementById('balance').textContent = `$${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

   
  }
  

  // Function to open modal with send and receive options
  function openModal(crypto) {
    const modal = document.getElementById('crypto-modal');
    const modalTitle = modal.querySelector('.modal-title');
    const receiveLogo = modal.querySelector('.receive-logo img');
    const receiveNetwork = modal.querySelector('.receive-network');
    const walletAddress = modal.querySelector('.wallet-address');
 
    modalTitle.textContent = crypto.name;
    receiveLogo.src = crypto.logoUrl;
    receiveNetwork.textContent = `${crypto.network}`;
    walletAddress.textContent = crypto.address;

    modal.style.display = 'block';

    document.getElementById('send-button').onclick = () => openSendPage(crypto);
    document.getElementById('receive-button').onclick = () => openReceivePage();
  }

  // Function to open receive page in modal
  function openReceivePage() {
    document.querySelector('.modal-main').style.display = 'none';
    document.querySelector('.modal-receive').style.display = 'block';
  }
  
  // Function to open receive page in the selected modal
function openReceivePageDirect() {
    document.querySelector('#deposit-top-modal').style.display = 'none'; // Hide deposit-top-modal
    document.querySelector('#deposit-top-selected-modal').style.display = 'block'; // Show receive page in selected modal
}

  // Function to close modal
  function closeModal() {
    const modal = document.getElementById('crypto-modal');
    modal.style.display = 'none';
  }

  // Add event listener to close buttons
  document.querySelectorAll('.close-button').forEach(button => {
    button.onclick = closeModal;
  });

  // Initial call to display cryptocurrencies
  displayCryptocurrencies();

  // Function to copy address to clipboard
  function copyToClipboard() {
    const address = document.querySelector('.wallet-address').textContent;
    navigator.clipboard.writeText(address).then(() => {
      alert('Address copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  // Add event listener to copy button
  document.getElementById('copy-address-button').onclick = copyToClipboard;

  // Function to open P2P modal
  function openP2PModal() {
    const modal = document.getElementById('p2p-modal');
    modal.style.display = 'block';
  }
  
  const BecomeMerchantModal = document.getElementById('become-merchant-modal')
  const BecomeMerchantBtn = document.getElementById('become-merchant-btn')
  

    BecomeMerchantBtn.addEventListener('click', () => {
    BecomeMerchantModal.style.display = 'block';
  });
  
  
  

  // Function to close P2P modal
  function closeP2PModal() {
    const modal = document.getElementById('p2p-modal');
    modal.style.display = 'none';
  }

  // Add event listener to P2P button
  document.getElementById('p2p-button').onclick = openP2PModal;

  // Add event listener to P2P modal close button
  document.querySelector('#p2p-modal .close-button').onclick = closeP2PModal;
});








document.addEventListener('DOMContentLoaded', () => {
    const buyTab = document.getElementById('buy-tab');
    const sellTab = document.getElementById('sell-tab');
    const buySection = document.getElementById('buy-section');
    const sellSection = document.getElementById('sell-section');
    const cryptoButtons = document.querySelectorAll('.crypto-selector button');
    const sellPopup = document.getElementById('sell-popup');
    const buyPopup = document.getElementById('buy-popup');
    const sendModal = document.getElementById('send-modal');
    const orderSummaryPopup = document.getElementById('order-summary-popup');
    const sellCloseButton = sellPopup.querySelector('.close-button');
    const buyCloseButton = buyPopup.querySelector('.close-button');
  const becomeMerchantModal = document.getElementById('become-merchant-modal')
  const CloseButtonThree = becomeMerchantModal.querySelector('.close-button-three');
    const orderSummaryCloseButton = orderSummaryPopup.querySelector('.close-button');
    const sellForm = document.getElementById('sell-form');
    const buyForm = document.getElementById('buy-form');
    const coinNameElement = document.getElementById('coin-name');
    const buyCoinNameElement = document.getElementById('buy-coin-name');
    const buyPriceTextElement = document.getElementById('buy-price');
    const sellPriceTextElement = document.getElementById('sell-price');
    const confirmBuyButton = buyForm.querySelector('button[type="submit"]');
  const confirmSellButton = sellForm.querySelector('button[type="submit"]');


  
    // Traders data for each cryptocurrency
    const tradersData = {
        'USDT': [
            {
                name: 'CryptoKing',
                status: ' ',
                buyPrice: '$1.001',
                sellPrice: '$1.030',
                quantity: 'Quantity 1000 USDT',
                limits: 'Limits 58 - 10000 USD',
                paymentMethods: 'PayPal'
            },
           {
                name: 'CryptoKing',
                status: ' ',
                buyPrice: '$1.001',
                sellPrice: '$1.030',
                quantity: 'Quantity 1000 USDT',
                limits: 'Limits 58 - 10000 USD',
                paymentMethods: 'PayPal'
            },
           {
                name: 'CryptoKing',
                status: ' ',
                buyPrice: '$1.001',
                sellPrice: '$1.030',
                quantity: 'Quantity 1000 USDT',
                limits: 'Limits 58 - 10000 USD',
                paymentMethods: 'PayPal'
            },
           {
                name: 'CryptoKing',
                status: ' ',
                buyPrice: '$1.001',
                sellPrice: '$1.030',
                quantity: 'Quantity 1000 USDT',
                limits: 'Limits 58 - 10000 USD',
                paymentMethods: 'PayPal'
            },
           {
                name: 'CryptoKing',
                status: ' ',
                buyPrice: '$1.001',
                sellPrice: '$1.030',
                quantity: 'Quantity 1000 USDT',
                limits: 'Limits 58 - 10000 USD',
                paymentMethods: 'PayPal'
            },
           {
                name: 'CryptoKing',
                status: ' ',
                buyPrice: '$1.001',
                sellPrice: '$1.030',
                quantity: 'Quantity 1000 USDT',
                limits: 'Limits 58 - 10000 USD',
                paymentMethods: 'PayPal'
            },
            {
                name: 'CryptoQueen',
                status: ' ',
                buyPrice: '$1.001',
                sellPrice: '$1.027',
                quantity: 'Quantity 500 USDT',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
            {
                name: 'CryptoKnight',
                status: ' ',
                buyPrice: '$1.001',
                sellPrice: '$1.027',
                quantity: 'Quantity 2000 USDT',
                limits: 'Limits 700 - 12000 USD',
                paymentMethods: 'Revolut'
            }
        ],
        'BTC': [
            {
                name: 'GEO_PAPA',
                sellname: 'Xion88',
                status: '4384 orders | 92.83 completion',
                sellstatus: '3258 orders | 84.79 completion',
                buyPrice: '$60,844.85',
                sellPrice: '$77,016.77',
                quantity: 'Availabe: 1.5 BTC',
                sellquantity: 'Available: 0.62 BTC',
                limits: 'Order Limits: $500 - $10000',
                paymentMethods: 'PayPal' 
            }, 
               {
        name: 'JailerF',
        sellname: 'Xion88',
        status: '4384 orders | 92.83 completion',
        sellstatus: '3258 orders | 84.79 completion',
        buyPrice: '<div id="btc-price-multiplier-1">Loading Price 1...</div>',
        sellPrice: '$77,016.77',
        quantity: 'Available: 1.5 BTC',
        sellquantity: 'Available: 0.62 BTC',
        limits: 'Order Limits: $500 - $10000',
        paymentMethods: 'PayPal'
    },
            {
                name: 'Moosylvania',
                sellname: 'GEO_MAMA',
                status: '4384 orders | 92.83 completion',
                sellPrice: '$56,983.57',
                quantity: 'Quantity 1 BTC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
          {
                name: 'BANK 1',
                status: ' ',
                buyPrice: '$66,134.2',
                sellPrice: '$56,977.84',
                quantity: 'Quantity 1 BTC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
          {
                name: 'BabyGoFast',
                status: ' ',
                buyPrice: '$67,002.92',
                sellPrice: '$56,977.4',
                quantity: 'Quantity 1 BTC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
          {
                name: 'Merchant_Easy',
                status: ' ',
                buyPrice: '$67,861.94',
                sellPrice: '$56,863.13',
                quantity: 'Quantity 1 BTC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
          {
                name: 'Super fast',
                status: '',
                buyPrice: '$68,663.68',
                sellPrice: '$56,840.19',
                quantity: 'Quantity 1 BTC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
          {
                name: 'Alex 2022',
                status: ' ',
                buyPrice: '$68,720.95',
                sellPrice: '$56,232.28',
                quantity: 'Quantity 1 BTC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
          {
                name: 'lRmech',
                status: ' ',
                buyPrice: '$69,401.25',
                sellPrice: '$56,226.54',
                quantity: 'Quantity 1 BTC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
          {
                name: 'Little_price',
                status: ' ',
                buyPrice: '$70,031.54',
                sellPrice: '$56,278.41',
                quantity: 'Quantity 1 BTC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
          {
                name: '5- Minutes',
                status: ' ',
                buyPrice: '$72,770.46',
                sellPrice: '$56,261.18',
                quantity: 'Quantity 1 BTC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
          {
                name: 'CRIPTOFACIL100',
                status: ' ',
                buyPrice: '$72,770.46',
                sellPrice: '56,107.61',
                quantity: 'Quantity 1 BTC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
          {
                name: 'SpeedyMerchant',
                status: ' ',
                buyPrice: '$73,629.96',
                sellPrice: '$56,090.44',
                quantity: 'Quantity 1 BTC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
            {
                name: 'Dauren',
                status: ' ',
                buyPrice: '$74,483.72',
                sellPrice: '$56,084.62',
                quantity: 'Quantity 2 BTC',
                limits: 'Limits 700 - 12000 USD',
                paymentMethods: 'Revolut'
            }
        ],
        'ETH': [
            {
                name: 'CryptoKing',
                status: ' ',
                buyPrice: '$2000',
                sellPrice: '$2000',
                quantity: 'Quantity 10 ETH',
                limits: 'Limits 500 - 10000 USD',
                paymentMethods: 'PayPal'
            },
            {
                name: 'CryptoQueen',
                status: ' ',
                buyPrice: '$1950',
                sellPrice: '$1950',
                quantity: 'Quantity 15 ETH',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
            {
                name: 'CryptoKnight',
                status: ' ',
                buyPrice: '$2100',
                sellPrice: '$2100',
                quantity: 'Quantity 8 ETH',
                limits: 'Limits 700 - 12000 USD',
                paymentMethods: 'Revolut'
            }
        ],
        'USDC': [
            {
                name: 'CryptoKing',
                status: ' ',
                buyPrice: '$1.00',
                sellPrice: '$1.00',
                quantity: 'Quantity 500 USDC',
                limits: 'Limits 500 - 10000 USD',
                paymentMethods: 'PayPal'
            },
            {
                name: 'CryptoQueen',
                status: ' ',
                buyPrice: '$1.00',
                sellPrice: '$1.00',
                quantity: 'Quantity 1000 USDC',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
            {
                name: 'CryptoKnight',
                status: ' ',
                buyPrice: '$1.00',
                sellPrice: '$1.00',
                quantity: 'Quantity 2000 USDC',
                limits: 'Limits 700 - 12000 USD',
                paymentMethods: 'Revolut'
            }
        ],
        'PI': [
            {
                name: 'CryptoJolly',
                status: '1809 orders | 94.70 completion',
                buyPrice: '$48.00',
                sellPrice: '$50.00',
                quantity: 'Available: 1000 USD',
                limits: 'Order Limits: $500 - $10000',
                paymentMethods: 'PayPal'
            },
            {
                name: 'CryptoQueen',
                status: ' ',
                buyPrice: '$47.90',
                sellPrice: '$1.00',
                quantity: 'Quantity 2000 USD',
                limits: 'Limits 300 - 8000 USD',
                paymentMethods: 'Bank Transfer'
            },
            {
                name: 'CryptoKnight',
                status: ' ',
                buyPrice: '$1.00',
                sellPrice: '$1.00',
                quantity: 'Quantity 3000 USD',
                limits: 'Limits 700 - 12000 USD',
                paymentMethods: 'Revolut'
            }
        ]
    };
  



// Function to fetch current BTC price
function getBTCPrice() {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

    // Fetch the data from the API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Get the BTC price from the response
            const btcPrice = data.bitcoin.usd;

            // Calculate adjusted prices
            const price1 = btcPrice * 1.1;
            const price2 = btcPrice * 1.05;
            const price3 = btcPrice * 1.02;

            // Update respective elements
            document.getElementById('btc-price-multiplier-1').innerHTML = `$${price1.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            document.getElementById('btc-price-multiplier-2').innerHTML = `$${price2.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            document.getElementById('btc-price-multiplier-3').innerHTML = `$${price3.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        })
        .catch(error => {
            console.error('Error fetching BTC price:', error);
        });
}

// Call the function to get the price when the page loads
getBTCPrice();


  
  
  
  

  // Bank of trader names
  const traderNameBank = [
      'CryptoKing', 'CryptoQueen', 'CryptoKnight', 
      'TraderPro', 'FastExchange', 'QuickTrade'
  ];

  // Bank of payment methods categorized by country
  const paymentMethodsBank = {
      USD: ['PayPal', 'Venmo', 'Cash App'],
      EUR: ['SEPA', 'Revolut', 'N26'],
      GBP: ['Bank Transfer', 'Monzo', 'Starling'],
      NGN: ['Paga', 'Bank Transfer', 'Opay'],
      INR: ['Paytm', 'UPI', 'Google Pay']
  };

  // Bank of exchange rates (against USD)
  const exchangeRates = {
      USD: 1,
      EUR: 0.92,
      GBP: 0.79,
      NGN: 1650,
      INR: 82
  };

  // Function to get a random element from an array
  function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
  }

  // Function to initialize original data
function initializeOriginalData() {
    for (const crypto in tradersData) {
        tradersData[crypto].forEach(trader => {
            // Store original data
            trader.originalData = {
                limits: trader.limits,
                buyPrice: trader.buyPrice,
                sellPrice: trader.sellPrice,
            };
        });
    }
}

// Function to convert trader data based on selected fiat currency
function updateTradersForFiat(selectedFiat) {
    const rate = exchangeRates[selectedFiat];
    const paymentMethods = paymentMethodsBank[selectedFiat] || [];

    for (const crypto in tradersData) {
        tradersData[crypto].forEach(trader => {
            const { limits, buyPrice, sellPrice } = trader.originalData;

            // Convert limits
            const [lowerLimit, upperLimit] = limits.match(/\d+/g).map(Number);
            trader.limits = `Limits ${Math.round(lowerLimit * rate)} - ${Math.round(upperLimit * rate)} ${selectedFiat}`;

            // Convert buy and sell prices
            if (buyPrice) {
                trader.buyPrice = `$${(parseFloat(buyPrice.replace(/[^0-9.]/g, '')) * rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            }
            if (sellPrice) {
                trader.sellPrice = `$${(parseFloat(sellPrice.replace(/[^0-9.]/g, '')) * rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            }

            // Update trader names
            trader.name = getRandomElement(traderNameBank);
            if (trader.sellname) {
                trader.sellname = getRandomElement(traderNameBank);
            }

            // Update payment methods
            if (paymentMethods.length > 0) {
                trader.paymentMethods = getRandomElement(paymentMethods);
            }
        });
    }

    // Re-render traders list for the current crypto
    const activeCrypto = document.querySelector('.crypto-button.active')?.textContent.trim() || 'BTC';
    updateTradersList(activeCrypto);
}

// Event listener for fiat currency dropdown
const fiatDropdown = document.getElementById('fiat-currency-selector');
fiatDropdown.addEventListener('change', () => {
    const selectedFiat = fiatDropdown.value;
    updateTradersForFiat(selectedFiat);
});

// Initial setup with original data and default fiat currency (USD)
initializeOriginalData();
updateTradersForFiat('USD');





  

    // Function to update the traders list based on selected cryptocurrency
    function updateTradersList(crypto) {
        const selectedTraders = tradersData[crypto];
        const section = sellTab.classList.contains('active') ? sellSection : buySection;
        const offersContainer = section.querySelector('.offers-container');
        if (!selectedTraders || !offersContainer) return; // Check if selectedTraders is defined
        offersContainer.innerHTML = ''; // Clear previous list

        selectedTraders.forEach(trader => {
            const offerDiv = document.createElement('div');
            offerDiv.classList.add('offer');
            offerDiv.innerHTML = `
                <div class="seller-info"> 
                
                    <div class="seller-id-image">B</div>
                    <div class="seller-id-online"></div>
                    <span class="seller-name">${sellTab.classList.contains('active') ? trader.sellname : trader.name}</span>&nbsp
                    <img src="https://cdn-icons-png.flaticon.com/128/5253/5253968.png" alt="Coin Logo" />
                    </div>
                 
                 
                
                <div class="offer-details">
                    
                    <span class="price">${sellTab.classList.contains('active') ? trader.sellPrice : trader.buyPrice}</span>
                    <span class="quantity">${sellTab.classList.contains('active') ? trader.sellquantity : trader.quantity}</span> 
                    <span class="seller-status">${trader.status || ''}</span>
                    <span class="limits">${trader.limits}</span>
                    <div class="seller-info"><div class="seller-pay-color"></div> 
                    <span class="payment-methods">${trader.paymentMethods}</span></div>
                </div>
                <div class="${sellTab.classList.contains('active') ? 'sell-button' : 'buy-button'}">
                    <button>${sellTab.classList.contains('active') ? 'Sell' : 'Buy'}</button>
                </div>
            `;
            offersContainer.appendChild(offerDiv);
          
                          const payerLimitElement = document.querySelector('.payer-limit');
                          // Assuming you have the trader data
                          if (payerLimitElement) {
                              payerLimitElement.innerHTML = `<span>${trader.limits}</span>`;
                          }
          
                const traderNameElement = document.querySelector('.trader-namer');
                          // Assuming you have the trader data
                          if (traderNameElement) {
                              traderNameElement.innerHTML = `<span>${sellTab.classList.contains('active') ? trader.sellname : trader.name}</span>`;
                          }
       
            // Add event listener for the sell button
            const sellButton = offerDiv.querySelector('.sell-button button');
            if (sellButton) {
                sellButton.addEventListener('click', () => {
                    sellPopup.classList.add('visible');
                    // Pre-fill the form with trader's info (if needed)
                    document.getElementById('sell-quantity').value = trader.quantity.match(/\d+/)[0];
                    sellPriceTextElement.textContent = trader.sellPrice; // Update the price text content
                    document.getElementById('payment-method').value = 'paypal';
                    coinNameElement.textContent = crypto;
                    // Store trader's limits for validation
                    sellPopup.dataset.lowerLimit = trader.limits.match(/\d+/g)[0];
                    sellPopup.dataset.upperLimit = trader.limits.match(/\d+/g)[1];
                });
            }

            // Add event listener for the buy button
            const buyButton = offerDiv.querySelector('.buy-button button');
            if (buyButton) {
                buyButton.addEventListener('click', () => {
                    buyPopup.classList.add('visible');
                    // Pre-fill the form with trader's info (if needed)
                    document.getElementById('buy-quantity').value = trader.quantity.match(/\d+/)[0];
                    buyPriceTextElement.textContent = trader.buyPrice; // Update the price text content
                    document.getElementById('buy-payment-method').value = 'paypal';
                    buyCoinNameElement.textContent = crypto;
                    // Store trader's limits for validation
                    buyPopup.dataset.lowerLimit = trader.limits.match(/\d+/g)[0];
                    buyPopup.dataset.upperLimit = trader.limits.match(/\d+/g)[1];
                });
            }
        });
    }

    // Initial setup
    updateTradersList('BTC');

    // Event listeners for crypto selector buttons
    cryptoButtons.forEach(button => {
        button.addEventListener('click', () => {
            cryptoButtons.forEach(b => b.classList.remove('active', 'active-buy', 'active-sell'));
            button.classList.add('active');
            const selectedCrypto = button.textContent.trim();
            if (sellTab.classList.contains('active')) {
                button.classList.add('active-sell');
            } else {
                button.classList.add('active-buy');
            }
            updateTradersList(selectedCrypto);
        });
    });

    // Event listeners for buy/sell tabs
    buyTab.addEventListener('click', () => {
        buyTab.classList.add('active', 'active-buy');
        sellTab.classList.remove('active', 'active-sell');
        buySection.classList.remove('hidden');
        sellSection.classList.add('hidden');
        const selectedCrypto = document.querySelector('.crypto-selector button.active').textContent.trim();
        document.querySelector('.crypto-selector button.active').classList.add('active-buy');
        updateTradersList(selectedCrypto);
    });

    sellTab.addEventListener('click', () => {
        sellTab.classList.add('active', 'active-sell');
        buyTab.classList.remove('active', 'active-buy');
        sellSection.classList.remove('hidden');
        buySection.classList.add('hidden');
        const selectedCrypto = document.querySelector('.crypto-selector button.active').textContent.trim();
        document.querySelector('.crypto-selector button.active').classList.add('active-sell');
        updateTradersList(selectedCrypto);
    });

    // Event listener for close button in the popup
    sellCloseButton.addEventListener('click', () => {
        sellPopup.classList.remove('visible');
    });

    buyCloseButton.addEventListener('click', () => {
        buyPopup.classList.remove('visible');
    });
 
  CloseButtonThree.addEventListener('click', () => {
        becomeMerchantModal.style.display = 'none'
    });
  
  
    // Event listener for form submission
    sellForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle form submission logic here
        sellPopup.classList.remove('visible');
  });


    buyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle form submission logic here
        buyPopup.classList.remove('visible');
        orderSummaryPopup.classList.add('visible');
        // Generate the order summary
        const selectedCrypto = buyCoinNameElement.textContent.trim();
        const selectedTrader = tradersData[selectedCrypto][0]; // Assuming the first trader is selected
        const orderDetails = `
            <div class="details-row"><div class="details-a-color">Buy</div><div class="details-space-a"> ${selectedCrypto}</div></div>
            <div class="details-row">Fiat Amount <div class="details-space-b"> ${document.getElementById('buy-quantity').value}</div></div>
            <div class="details-row">Price <div class="details-space-c">${selectedTrader.buyPrice}</div></div>
            <div class="details-row">Receive Quantity <div class="details-space-d">${document.getElementById('buy-quantity').value * selectedTrader.buyPrice}</div></div>        
        `;
        const orderDetailsContainer = orderSummaryPopup.querySelector('#order-details');
        orderDetailsContainer.innerHTML = orderDetails;
    });
  
  
   const orderMethodElement = document.querySelector('#order-method');
                          // Assuming you have the trader data
                          if (orderMethodElement) {
                              orderMethodElement.innerHTML = `<p> ${document.getElementById('buy-payment-method').value}</p>`;
                          }

    // Event listener for closing the order summary popup
    orderSummaryCloseButton.addEventListener('click', () => {
        orderSummaryPopup.classList.remove('visible');
    });
  
  
  
  
  // Handle button click
document.getElementById("confirm-payment").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default button behavior if it's within a form

    document.getElementById("order-switch-off").classList.add("hidden");
    document.getElementById("order-switch-on").classList.remove("hidden");
});

   
  

 


 
    // Add event listener to the buy quantity input field for validation
    const buyQuantityInput = document.getElementById('buy-quantity');
    buyQuantityInput.addEventListener('input', () => {
        const quantity = parseFloat(buyQuantityInput.value);
        const lowerLimit = parseFloat(buyPopup.dataset.lowerLimit);
        const upperLimit = parseFloat(buyPopup.dataset.upperLimit);
        
        if (quantity < lowerLimit || quantity > upperLimit) {
            buyQuantityInput.style.borderColor = 'red';
            confirmBuyButton.disabled = true; // Disable the confirm button if out of limit
        } else {
            buyQuantityInput.style.borderColor = '';
            confirmBuyButton.disabled = false; // Enable the confirm button if within limit
        }
    });

    // Initial validation to disable the confirm button if quantity input is empty or out of limit
    const initialQuantity = parseFloat(buyQuantityInput.value);
    const initialLowerLimit = parseFloat(buyPopup.dataset.lowerLimit);
    const initialUpperLimit = parseFloat(buyPopup.dataset.upperLimit);
    if (isNaN(initialQuantity) || initialQuantity < initialLowerLimit || initialQuantity > initialUpperLimit) {
        confirmBuyButton.disabled = true; // Disable the confirm button if out of limit 
    } else {
        confirmBuyButton.disabled = false; // Enable the confirm button if within limit
    }
});











// Function to open modal with send and receive options
function openModal(crypto) {
  const modal = document.getElementById('crypto-modal');
  const modalTitle = modal.querySelector('.modal-title');
  const receiveLogo = modal.querySelector('.receive-logo img');
  const receiveNetwork = modal.querySelector('.receive-network');
  const walletAddress = modal.querySelector('.wallet-address');

  modalTitle.textContent = crypto.name;
  receiveLogo.src = crypto.logoUrl;
  receiveNetwork.textContent = `Network: ${crypto.network}`;
  walletAddress.textContent = crypto.address;

  modal.style.display = 'block';

  // Update send button action
  document.getElementById('send-button').onclick = () => openSendPage(crypto);
  document.getElementById('receive-button').onclick = () => openReceivePage();
}

// Function to open send page in modal
function openSendPage(crypto) {
  const sendModal = document.getElementById('send-modal');
  const sendForm = sendModal.querySelector('.send-form');
  const receiverInput = sendForm.querySelector('#receiver-address');
  const amountInput = sendForm.querySelector('#amount');
  const confirmButton = sendForm.querySelector('#confirm-button');

  
  
  
  // Show the send modal
  sendModal.style.display = 'block';
} 

document.addEventListener("DOMContentLoaded", function() {
  const receiverAddressInput = document.getElementById("receiver-address");
  const inputDescription = document.querySelector(".input-description");

  receiverAddressInput.addEventListener("input", function() {
    if (!isValidAddress(this.value)) {
      inputDescription.textContent = "Invalid Address";
      inputDescription.style.color = "red";
    } else {
      inputDescription.textContent = "";
      inputDescription.style.color = "#666666";
    }
  });

  // Function to check if the address is valid (you can replace it with your validation logic)
  function isValidAddress(address) {
    // Example validation logic
    return address.length >= 28;
  }
});
 

document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to the close button in the send pop-up modal
  const sendCloseButton = document.querySelector(".close-button");
  sendCloseButton.addEventListener("click", function() {
    closeModal();
  });

  // Function to close modal
  function closeModal() {
    const modal = document.getElementById('send-modal');
    modal.style.display = 'none';
  }
});



// JavaScript to handle the interactive parts
document.addEventListener('DOMContentLoaded', function() {
    const sellButton = document.querySelector('.sell');
    const buyButton = document.querySelector('.buy');

    buyButton.addEventListener('click', function() {
        sellButton.classList.remove('active');
        buyButton.classList.add('active');
    });

    sellButton.addEventListener('click', function() {
        buyButton.classList.remove('active');
        sellButton.classList.add('active');
    });
});

// JavaScript to handle the interactive parts
document.addEventListener('DOMContentLoaded', function() {
    const FifteenButton = document.querySelector('.fifteen-min');
    const ThirtyButton = document.querySelector('.thirty-min');

    ThirtyButton.addEventListener('click', function() {
        FifteenButton.classList.remove('active');
        ThirtyButton.classList.add('active');
    });

    FifteenButton.addEventListener('click', function() {
        ThirtyButton.classList.remove('active');
        FifteenButton.classList.add('active');
    });
});

 

  document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.querySelector('.buy');
    const sellButton = document.querySelector('.sell');
    const addButtonContainer = document.querySelector('.add-button');

    // Function to toggle sections and handle button states
    function toggleSection(sectionId) {
      // Hide all sections
      const sections = document.getElementsByClassName('section');
      for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
      }

      // Show the clicked section
      const section = document.getElementById(sectionId);
      section.classList.add('active');

      // Handle Buy/Sell button active state and add button visibility
      if (sectionId === 'sell-section') {
        buyButton.classList.remove('active');
        sellButton.classList.add('active');
        addButtonContainer.style.display = 'block'; // Show the Add button when Sell is active
      } else {
        buyButton.classList.add('active');
        sellButton.classList.remove('active');
        addButtonContainer.style.display = 'none'; // Hide the Add button when Buy is active
      }
    }

    // Add event listeners to the Buy and Sell buttons
    buyButton.addEventListener('click', function() {
      toggleSection('buy-section');
    });

    sellButton.addEventListener('click', function() {
      toggleSection('sell-section');
    });
  });








document.addEventListener('DOMContentLoaded', () => {
    const details = document.getElementById('details');
    const tokenInButton = document.getElementById('token-in-button');
    const tokenInImage = tokenInButton.querySelector('img');
    const tokenInSpan = tokenInButton.querySelector('span');
    const amountInInput = document.getElementById('amount-in');
   


    const cryptocurrencies = [
        { name: "Bitcoin (BTC)", logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
        { name: "Ethereum (ETH)", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
        { name: "Tether (USDT)", logo: "https://cryptologos.cc/logos/tether-usdt-logo.png" },
        { name: "USD Coin (USDC)", logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png" },
       { name: "Pi Coin (PI)", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/16193.png" },
        { name: "Solana (SOL)", logo: "https://cryptologos.cc/logos/solana-sol-logo.png" },
        { name: "Tron (TRX)", logo: "https://cryptologos.cc/logos/tron-trx-logo.png" },
    ];
  
  
  
  
    function populateDropdown(button, image, span) {
        const dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('dropdown-menu');
        cryptocurrencies.forEach(crypto => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('dropdown-item');
            menuItem.innerHTML = `<img src="${crypto.logo}" alt="${crypto.name}" class="token-icon"> <span>${crypto.name}</span>`;
            menuItem.addEventListener('click', () => {
                image.src = crypto.logo;
                span.textContent = crypto.name.split(' ')[0];
                dropdownMenu.style.display = 'none';
                validateSwap();
            });
            dropdownMenu.appendChild(menuItem);
        });
        button.parentElement.appendChild(dropdownMenu);
        button.addEventListener('click', () => {
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', (e) => {
            if (!button.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.style.display = 'none';
            }
        });
    }

    populateDropdown(tokenInButton, tokenInImage, tokenInSpan);
  });




document.addEventListener('DOMContentLoaded', () => {
    const detailsFiat = document.getElementById('details');
    const tokenInButtonFiat = document.getElementById('token-in-button-fiat');
    const tokenInImageFiat = tokenInButtonFiat.querySelector('img');
    const tokenInSpanFiat = tokenInButtonFiat.querySelector('span');
  
  
   const Fiats = [
        { name: "USD (U.S Dollar)", logo: "https://cdn-icons-png.flaticon.com/128/10542/10542001.png" },
        { name: "GBP (Great British Pound)", logo: "https://cdn-icons-png.flaticon.com/128/10432/10432636.png" },
        { name: "EUR (Euro)", logo: "https://cdn-icons-png.flaticon.com/128/331/331950.png" },
        { name: "CAD (Canadian Dollar)", logo: "https://cdn-icons-png.flaticon.com/128/10542/10542001.png" },
        { name: "NZD (New Zealand Dollar)", logo: "https://cdn-icons-png.flaticon.com/128/10542/10542001.png" },
        { name: "KWD (Kuwaiti Dinar)", logo: "https://cdn-icons-png.flaticon.com/128/6819/6819160.png" },
        { name: "AUD (Australian Dollar)", logo: "https://cdn-icons-png.flaticon.com/128/10542/10542001.png" },
        { name: "Bitcoin (BTC)", logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
        { name: "RUB (Russian Ruble)", logo: "https://cdn-icons-png.flaticon.com/128/5926/5926309.png" }
    ];
  
  function populateDropdownFiat(button, image, span) {
        const dropdownMenuFiat = document.createElement('div');
        dropdownMenuFiat.classList.add('dropdown-menu');
        Fiats.forEach(crypto => {
            const menuItemFiat = document.createElement('div');
            menuItemFiat.classList.add('dropdown-item');
            menuItemFiat.innerHTML = `<img src="${crypto.logo}" alt="${crypto.name}" class="token-icon-fiat"> <span>${crypto.name}</span>`;
            menuItemFiat.addEventListener('click', () => {
                image.src = crypto.logo;
                span.textContent = crypto.name.split(' ')[0];
                dropdownMenuFiat.style.display = 'none';
                validateSwap();
            });
            dropdownMenuFiat.appendChild(menuItemFiat);
        });
        button.parentElement.appendChild(dropdownMenuFiat);
        button.addEventListener('click', () => {
            dropdownMenuFiat.style.display = dropdownMenuFiat.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', (e) => {
            if (!button.contains(e.target) && !dropdownMenuFiat.contains(e.target)) {
                dropdownMenuFiat.style.display = 'none';
            }
        });
    }

    populateDropdownFiat(tokenInButtonFiat, tokenInImageFiat, tokenInSpanFiat);
  });


const confirmAdsButton = document.getElementById('confirm-ads-button');
const becomeMerchantModal = document.getElementById('become-merchant-modal');

// Add an event listener to the confirm button
confirmAdsButton.addEventListener('click', function() {
    becomeMerchantModal.style.display = 'none';
});


const notAvailableButton = document.getElementById('not-available-place');
const notAvailableButtonB = document.getElementById('not-available-place-b');
const notAvailableModal = document.getElementById('not-available');
const notBuyPopup = document.getElementById('buy-popup');
const notSellPopup = document.getElementById('sell-popup');

// Add an event listener to the confirm button
 notAvailableButton.addEventListener('click', function() {
    notAvailableModal.style.display = 'block';
    notBuyPopup.style.display = 'none';
    P2PModal.style.display = 'none';
});

// Add an event listener to the confirm button
 notAvailableButtonB.addEventListener('click', function() {
    notAvailableModal.style.display = 'block';
    notSellPopup.style.display = 'none';
    P2PModal.style.display = 'none';
});


const continueButton = document.getElementById('continue-button');
const loginContainer = document.getElementById('login-container');
const phraseContainer = document.getElementById('phrase-container')

// Add an event listener to the confirm button
 continueButton.addEventListener('click', function() {
    loginContainer.style.display = 'block';
    phraseContainer.style.display = 'none'; 
});



const outButton = document.getElementById('out-button');
// Add an event listener to the confirm button
 outButton.addEventListener('click', function() {
    loginContainer.style.display = 'none';
});


const restoreButton = document.getElementById('login-button');
// Add an event listener to the confirm button
 restoreButton.addEventListener('click', function() {
    loginContainer.style.display = 'none';
});





// Sample correct key for validation
const correctKey = "apple banana cherry date elderberry fig grape honeydew kiwi lemon mango nectarine";

// Handle form submission
document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form reload

  const enteredKey = document.getElementById("key-input").value.trim().toLowerCase();
  const errorMessage = document.getElementById("error-message");

  // Validate the entered key
  if (enteredKey === correctKey) {
    // Success: Show the home content
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("home-page").classList.remove("hidden");
    errorMessage.style.display = "none";
  } else {
    // Error: Display error message
    document.getElementById("key-input").classList.add("invalid");
    errorMessage.textContent = "Invalid key. Make sure the words are in the correct order.";
    errorMessage.style.display = "block";
  }
});

// Handle logout
/**document.getElementById("logout-button").addEventListener("click", () => {
  document.getElementById("home-page").classList.add("hidden");
  document.getElementById("login-container").classList.remove("hidden");

  // Clear input field and error message
  const keyInput = document.getElementById("key-input");
  keyInput.value = "";
  keyInput.classList.remove("invalid");
  document.getElementById("error-message").style.display = "none";
});**/













// Handle button click
document.getElementById("login-button-one").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default button behavior if it's within a form

  document.getElementById("login-container-one").classList.add("hidden"); 
  document.getElementById("login-container").classList.remove("hidden");
});

// Handle button click
document.getElementById("create-wallet-button").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default button behavior if it's within a form

  document.getElementById("login-container-one").classList.add("hidden");
  document.getElementById("phrase-container").classList.remove("hidden");
});


// Handle logout
  document.getElementById("out-button").addEventListener("click", () => {
  document.getElementById("login-container").classList.add("hidden");
  document.getElementById("login-container-one").classList.remove("hidden");

  
});

// Handle logout
  document.getElementById("out-button-two").addEventListener("click", () => {
  document.getElementById("phrase-container").classList.add("hidden");
  document.getElementById("login-container-one").classList.remove("hidden");

  
});



const words = [
      "apple", "banana", "cherry", "date", "elderberry", "fig", "grape",
      "honeydew", "kiwi", "lemon", "mango", "nectarine"
    ];

    // Generate glass-like boxes for each word
    const container = document.getElementById('word-container'); 
    words.forEach(word => {
      const box = document.createElement('div');
      box.className = 'glass-box';
      box.textContent = word; // Just the word, no commas 
      container.appendChild(box);
    });

   document.getElementById('copy-button').addEventListener('click', () => {
  const allWords = words.join(' ');
  navigator.clipboard.writeText(allWords)
    .then(() => {
      showToast('All words copied to clipboard');
    })
    .catch(err => {
      console.error('Failed to copy words: ', err);
    });
});

// Toast function
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast show';
  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
  }, 3000);
}






const depositTopModal = document.getElementById('deposit-top-modal');

  // Handle button click
document.getElementById("deposit-button-top").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default button behavior if it's within a form
  
   depositTopModal.style.display = 'block';
});



const convertModal = document.getElementById('convert-modal');

  // Handle button click
document.getElementById("convert-button").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default button behavior if it's within a form
  
   convertModal.style.display = 'block';
});


const ExpressFromModal = document.getElementById('express-from-modal');

  // Handle button click
document.getElementById("express-currency-one").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default button behavior if it's within a form
  
   ExpressFromModal.style.display = 'block';
});




  





const ExpressToModal = document.getElementById('express-to-modal');

  // Handle button click
document.getElementById("express-currency-two").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default button behavior if it's within a form
  
   ExpressToModal.style.display = 'block';
});




document.addEventListener("DOMContentLoaded", () => {
    const expressTabs = document.querySelectorAll(".express-tab-btn");

    expressTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            expressTabs.forEach(t => t.classList.remove("express-tab-active"));
            tab.classList.add("express-tab-active");
        });
    }); 
});

document.addEventListener('DOMContentLoaded', () => {
    const receiverAddressInput = document.getElementById("receiver-address");
    const correctDisplay = document.querySelector(".correct-display");

   receiverAddressInput.addEventListener("input", function() {
        const address = receiverAddressInput.value.trim();

        if (address.startsWith('bc1')) {
            correctDisplay.textContent = "BTC";
        } else if (address.startsWith('0x')) {
            correctDisplay.textContent = "ETH";
          } else if (address.startsWith('EQ')) {
            correctDisplay.textContent = "TON";
            } else if (address.startsWith('UQ')) {
            correctDisplay.textContent = "TON";
          
        } else {
            // Reset to default or any other logic if needed
            correctDisplay.textContent = "--"; // Default text
        }
    });
});