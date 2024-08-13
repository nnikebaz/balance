document.addEventListener('DOMContentLoaded', function() {
    function getDaysInMonth() {
        let currentDate = new Date;
        let currentMoth = currentDate.getMonth();
        currentDate.setMonth(currentMoth + 1, 1);
        currentDate.setDate(currentDate.getDate() - 1)
        let numberOfCurrentDaysInMonth = currentDate.getDate()
        return (numberOfCurrentDaysInMonth)
    }
    
    function currentDay() {
        let currentDate = new Date;
        let currentDay = currentDate.getDate()
        return currentDay
    }
    

    (function validation () {
        let currentBalance = document.getElementById('currentBalance')
        let button = document.getElementById('button')
        button.setAttribute('disabled', '')

        currentBalance.addEventListener('input', function(){
            if (currentBalance.value > 0) {
                button.removeAttribute('disabled')
            } else {
                button.setAttribute('disabled', '')
            }
        })

    })()

    function survival() {

        let button = document.getElementById('button')
        let differeneDay = getDaysInMonth() - currentDay();

        button.addEventListener('click', function () {
            let currentBalance = document.getElementById('currentBalance')
            let currentBalanceVal = +currentBalance.value
            let costs = document.getElementById('costs')
            let costsVal = +costs.value
            let resultVal = (currentBalanceVal - costsVal) / differeneDay
            let resultField = document.getElementById('result')

            let correctDay = () => {
                if (differeneDay === 1) {
                    return 'день'
                } else if (differeneDay > 1 && differeneDay < 5) {
                    return 'дня'
                } else if (differeneDay === 21) {
                    return 'день'
                } else if (differeneDay > 21 && differeneDay < 25 ) {
                    return 'дня'
                } else if (differeneDay === 31) {
                    return 'день'
                } else {
                    return 'дней'
                }
            }
            
            if (resultVal <= 500) {
                resultField.innerText = resultVal.toFixed(1) + ' ₽ в день на ' + differeneDay + ` ${correctDay()}: шансы выжить не очень :(`
            } else if (resultVal >= 500 && resultVal <= 800) {
                resultField.innerText = resultVal.toFixed(0) + ' ₽ в день на ' + differeneDay + ` ${correctDay()}: шансы выжить средние :|`
            } else if (resultVal >= 800 && resultVal <= 1200) {
                resultField.innerText = resultVal.toFixed(1) + ' ₽ в день на ' + differeneDay + ` ${correctDay()}: шансы выжить неплохие с:`
            } else {
                resultField.innerText = resultVal.toFixed(1) + ' ₽ в день на ' + differeneDay + ` ${correctDay()}: шансы выжить высокие! :)`
            } 
          })

    }
    
    survival()
    
})


