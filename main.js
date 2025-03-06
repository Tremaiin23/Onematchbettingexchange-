document.addEventListener('DOMContentLoaded', () => {
  const betTypeSelect = document.getElementById('betType');
  const oddsInput = document.getElementById('odds');
  const stakeInput = document.getElementById('stake');
  const returnAmount = document.getElementById('returnAmount');
  const commissionAmount = document.getElementById('commissionAmount');
  const netProfitAmount = document.getElementById('netProfitAmount');
  const liabilityAmount = document.getElementById('liabilityAmount');
  const liabilityDiv = document.querySelector('.liability');
  const proceedBtn = document.getElementById('proceedBtn');
  const backBtn = document.getElementById('backBtn');

  const COMMISSION_RATE = 0.10; // 10% commission

  const calculateBet = () => {
    const betType = betTypeSelect.value;
    const odds = parseFloat(oddsInput.value) || 0;
    const stake = parseFloat(stakeInput.value) || 0;

    if (betType === 'back') {
      const potentialReturn = odds * stake;
      const profit = potentialReturn - stake;
      const commission = profit > 0 ? profit * COMMISSION_RATE : 0;
      const netProfit = profit - commission;

      returnAmount.textContent = `£${potentialReturn.toFixed(2)}`;
      commissionAmount.textContent = `£${commission.toFixed(2)}`;
      netProfitAmount.textContent = `£${netProfit.toFixed(2)}`;
      liabilityDiv.classList.add('hidden');
    } else {
      const liability = (odds - 1) * stake;
      const potentialReturn = stake;
      const profit = stake;
      const commission = profit * COMMISSION_RATE;
      const netProfit = profit - commission;

      returnAmount.textContent = `£${potentialReturn.toFixed(2)}`;
      commissionAmount.textContent = `£${commission.toFixed(2)}`;
      netProfitAmount.textContent = `£${netProfit.toFixed(2)}`;
      liabilityAmount.textContent = `£${liability.toFixed(2)}`;
      liabilityDiv.classList.remove('hidden');
    }
  };

  // Event listeners
  betTypeSelect.addEventListener('change', calculateBet);
  oddsInput.addEventListener('input', calculateBet);
  stakeInput.addEventListener('input', calculateBet);

  proceedBtn.addEventListener('click', () => {
    window.location.href = 'https://onematchbettingexchange.formaloo.co/s3eawp';
  });

  backBtn.addEventListener('click', () => {
    window.history.back();
  });

  // Initialize calculation
  calculateBet();
});