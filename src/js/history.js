import '../styles/HistoryComponent.scss';
import { getCookie } from './historyFunctions';

export default {
    name: 'History',

    mounted() {
        const sessionHistoryJSON = localStorage.getItem('sessionHistory');
        const overallHistoryJSON = getCookie('overallHistory');

        const sessionHistoryTableBody = document.getElementById('sessionHistoryTableBody');
        const overallHistoryTableBody = document.getElementById('overallHistoryTableBody');

        sessionHistoryTableBody.innerHTML = '<tr><td colspan="2">Нет данных для отображения</td></tr>';
        overallHistoryTableBody.innerHTML = '<tr><td colspan="2">Нет данных для отображения</td></tr>';

        if (sessionHistoryJSON) {
            const sessionHistory = JSON.parse(sessionHistoryJSON);
            this.fillHistoryTable(sessionHistory, 'sessionHistoryTableBody');
        }
        
        if (overallHistoryJSON) {
            const overallHistory = JSON.parse(overallHistoryJSON);
            this.fillHistoryTable(overallHistory, 'overallHistoryTableBody');
        }
    },
    methods: {
        fillHistoryTable(history, tableId) {
            const tableBody = document.getElementById(tableId);
            tableBody.innerHTML = '';
          
            for (const [path, visits] of Object.entries(history)) {
                const row = document.createElement('tr');

                const pathCell = document.createElement('td');
                pathCell.textContent = path;

                const visitsCell = document.createElement('td');
                visitsCell.textContent = visits;
            
                row.appendChild(pathCell);
                row.appendChild(visitsCell);
            
                tableBody.appendChild(row);
            }
        }
    },
}