let historyStore = [];
// ============================================================================

// =========================================================== Heart count
const element = document.getElementsByClassName('heartIcon');
for (const index of element) {
  index.addEventListener('click', function () {
    const heart = parseInt(
      document.getElementById('available-heart').innerText
    );
    const availableHeart = 1;
    const totalAvailableHeart = heart + availableHeart;
    document.getElementById('available-heart').innerText = totalAvailableHeart;
  });
}
// ============================================================================

// =========================================================== Call alert and Coins maintain
let classArrayIndex = document.getElementsByClassName('called');
for (let i = 0; i < classArrayIndex.length; i++) {
  let element = classArrayIndex[i];

  let title = document.getElementsByClassName('call-title')[i];
  let subTitle = document.getElementsByClassName('call-sub-title')[i];
  let emgNumber = document.getElementsByClassName('emg-number')[i];

  element.addEventListener('click', function () {
    const coins = parseInt(
      document.getElementById('available-coins').innerText
    );
    if (coins <= 0) {
      alert("You don't have enough coins. You need minimum 20 coins to call.");
      return;
    }
    const CoinMinus = 20;
    const totalAvailableCoins = coins - CoinMinus;
    alert(
      '📞 Calling ' + subTitle.innerText + ' ' + emgNumber.innerText + '...'
    );
    const data = {
      name: title.innerText,
      number: emgNumber.innerText,
      date: new Date().toLocaleTimeString(),
    };
    historyStore.push(data);
    document.getElementById('available-coins').innerText = totalAvailableCoins;
  });
}
// ============================================================================

// =========================================================== History feature
const hBtnClassArray = document.getElementsByClassName('history-button');
for (let i = 0; i < hBtnClassArray.length; i++) {
  let hBtnClassArrayIndex = hBtnClassArray[i];

  hBtnClassArrayIndex.addEventListener('click', function () {
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = '';

    for (const data of historyStore) {
      let div = document.createElement('div');
      div.innerHTML = `
      <div class="bg-[#FAFAFA] flex items-center p-3 justify-between rounded-lg mt-3">
            <div class="select-parent">
              <h5 class="font-semibold text-[16px] mb-1">${data.name}</h5>
              <p class="text-[16px]">${data.number}</p>
            </div>
            <div>
              <p class="text-[12px]">${data.date}</p>
            </div>
          </div>
      `;
      historyContainer.appendChild(div);
    }
  });
}

const historyClearBtn = document.getElementById('history-clear-btn');
historyClearBtn.addEventListener('click', function () {
  const historyContainer = document.getElementById('history-container');
  historyContainer.innerHTML = '';
  historyStore.length = 0;
});
// ============================================================================

// =========================================================== copy to click feature
const copyTextBtn = document.getElementsByClassName('copyTextBtn');
const copyText = document.getElementsByClassName('copyText');
for (let i = 0; i < copyTextBtn.length; i++) {
  let copyTextBtnIndex = copyTextBtn[i];
  let copyTextIndex = copyText[i].innerText;
  copyTextBtnIndex.addEventListener('click', function () {
    navigator.clipboard.writeText(copyTextIndex).then(() => {
      alert('Copied: ' + copyTextIndex);
    });
    const copyValue = parseInt(
      document.getElementById('available-copy').innerText
    );
    const availableCopy = 1;
    const totalAvailableCopy = copyValue + availableCopy;
    document.getElementById('available-copy').innerText = totalAvailableCopy;
  });
}
