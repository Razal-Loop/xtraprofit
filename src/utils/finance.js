/**
 * Finance.js implementation for XtraProfit
 * Institutional-grade financial calculation logic
 */

class Finance {
    /**
     * Calculate Equated Monthly Installment (EMI)
     * @param {number} amount - Principal loan amount
     * @param {number} rate - Annual interest rate (%)
     * @param {number} tenure - Loan tenure (years)
     * @returns {number} - Monthly EMI amount
     */
    calculateEMI(amount, rate, tenure) {
        const monthlyRate = rate / 12 / 100;
        const months = tenure * 12;
        const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        return parseFloat(emi.toFixed(2));
    }

    /**
     * Calculate Future Value (Investment)
     * @param {number} principal - Initial investment
     * @param {number} rate - Annual interest rate (%)
     * @param {number} years - Investment duration (years)
     * @param {number} periodic - Monthly contribution
     * @returns {Object} - Returns total amount, total contribution, and interest earned
     */
    calculateInvestment(principal, rate, years, periodic = 0) {
        const monthlyRate = rate / 12 / 100;
        const months = years * 12;

        // FV of Principal
        const fvPrincipal = principal * Math.pow(1 + monthlyRate, months);

        // FV of Annuity (periodic contributions)
        let fvAnnuity = 0;
        if (periodic > 0) {
            fvAnnuity = periodic * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
        }

        const totalValue = fvPrincipal + fvAnnuity;
        const totalInvested = principal + (periodic * months);
        const interestEarned = totalValue - totalInvested;

        return {
            totalValue: parseFloat(totalValue.toFixed(2)),
            totalInvested: parseFloat(totalInvested.toFixed(2)),
            interestEarned: parseFloat(interestEarned.toFixed(2))
        };
    }
}

export const finance = new Finance();
