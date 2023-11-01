import '../styles/HistoryComponent.scss';
import { getCookie } from './historyFunctions';
import $ from 'jquery';

export default {
    name: 'History',

    mounted() {
        const sessionHistoryJSON = localStorage.getItem('sessionHistory');
        const overallHistoryJSON = getCookie('overallHistory');

        const sessionHistoryTableBody = $('#sessionHistoryTableBody');
        const overallHistoryTableBody = $('#overallHistoryTableBody');

        sessionHistoryTableBody.html('<tr><td colspan="2">Нет данных для отображения</td></tr>');
        overallHistoryTableBody.html('<tr><td colspan="2">Нет данных для отображения</td></tr>');

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
            const tableBody = $('#' + tableId);
            tableBody.empty();
          
            $.each(history, function (path, visits) {
                const row = $('<tr></tr>');

                const pathCell = $('<td></td>');
                pathCell.text(path);

                const visitsCell = $('<td></td>');
                visitsCell.text(visits);
            
                row.append(pathCell);
                row.append(visitsCell);
            
                tableBody.append(row);
            });
        }
    },
}