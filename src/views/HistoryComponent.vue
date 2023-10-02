<template>
    <div class="history-component">
        <h1 class="title">История посещений</h1>
        <div class="history-tables">
            <table>
                <caption>История сессии</caption>
                <thead>
                <tr>
                    <th>Путь</th>
                    <th>Количество посещений</th>
                </tr>
                </thead>
                <tbody id="sessionHistoryTableBody"></tbody>
            </table>
            <table>
                <caption>История за всё время</caption>
                <thead>
                <tr>
                    <th>Путь</th>
                    <th>Количество посещений</th>
                </tr>
                </thead>
                <tbody id="overallHistoryTableBody"></tbody>
            </table>
        </div>
    </div>
</template>

<script src="../js/history.js"></script>