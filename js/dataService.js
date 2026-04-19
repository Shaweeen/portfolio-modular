// js/dataService.js

const axios = require('axios');

const SHEETDB_URL = 'https://sheetdb.io/api/v1/YOUR-SHEETDB-ID';

const dataService = {
    fetchData: async function() {
        try {
            const response = await axios.get(SHEETDB_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    },

    calculateTotals: function(data) {
        return data.reduce((totals, item) => {
            totals.totalAmount += item.amount || 0;
            return totals;
        }, { totalAmount: 0 });
    },

    filterByStatus: function(data, status) {
        return data.filter(item => item.status === status);
    },

    getRecentUpdates: function(data) {
        const currentDate = new Date();
        return data.filter(item => new Date(item.updated_at) > currentDate.setDate(currentDate.getDate() - 7));
    }
};

module.exports = dataService;  
