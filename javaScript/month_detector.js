// Month Detector JavaScript
function detectMonth() {
    const monthInput = document.getElementById('monthInput').value.trim();
    const resultElement = document.getElementById('result');

    if (!monthInput) {
        resultElement.textContent = 'Please select or enter a month name.';
        return;
    }

    const monthName = monthInput.toLowerCase();
    const monthDays = {
        january: 31,
        february: 28,
        march: 31,
        april: 30,
        may: 31,
        june: 30,
        july: 31,
        august: 31,
        september: 30,
        october: 31,
        november: 30,
        december: 31,
    };

    if (!(monthName in monthDays)) {
        resultElement.textContent = 'Please enter a valid month name like January, February, or March.';
        return;
    }

    const days = monthDays[monthName];
    const displayMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    const extra = monthName === 'february' ? ' (28 days, 29 in a leap year)' : '';

    resultElement.textContent = `${displayMonth} has ${days} days${extra}.`;
}

// make result display when submit button is clicked
const submitButton = document.getElementById('submitBtn');
if (submitButton) {
    submitButton.addEventListener('click', detectMonth);
}




