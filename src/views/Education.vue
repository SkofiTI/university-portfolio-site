<template>
    <div class="education-component">
        <h1 class="title">Севастопольский государственный университет</h1>
        <p class="department">Кафедра «Информационные системы»</p>
        <table class="plan-table">
            <caption>ПЛАН УЧЕБНОГО ПРОЦЕССА</caption>
            <thead>
                <tr>
                    <th rowspan="2">№</th>
                    <th rowspan="2">Дисциплина</th>
                    <th rowspan="2">Кафедра</th>
                    <th colspan="6">Всего часов</th>
                </tr>
                <tr>
                    <th>Всего</th>
                    <th>Ауд</th>
                    <th>Лк</th>
                    <th>Лб</th>
                    <th>Пр</th>
                    <th>СРС</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Экология</td>
                    <td>БЖ</td>
                    <td>54</td>
                    <td>27</td>
                    <td>18</td>
                    <td>0</td>
                    <td>9</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Высшая математика</td>
                    <td>ВМ</td>
                    <td>540</td>
                    <td>282</td>
                    <td>141</td>
                    <td>0</td>
                    <td>141</td>
                    <td>258</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Русский язык и культура речи</td>
                    <td>НГиГ</td>
                    <td>108</td>
                    <td>54</td>
                    <td>18</td>
                    <td>0</td>
                    <td>36</td>
                    <td>54</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Основы дискретной математики</td>
                    <td>ИС</td>
                    <td>216</td>
                    <td>139</td>
                    <td>87</td>
                    <td>0</td>
                    <td>52</td>
                    <td>77</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Основы программирования и алгоритмические языки</td>
                    <td>ИС</td>
                    <td>405</td>
                    <td>210</td>
                    <td>105</td>
                    <td>87</td>
                    <td>18</td>
                    <td>195</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Основы экологии</td>
                    <td>ПЭОП</td>
                    <td>54</td>
                    <td>27</td>
                    <td>18</td>
                    <td>0</td>
                    <td>9</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Теория вероятностей и математическая статистика</td>
                    <td>ИС</td>
                    <td>162</td>
                    <td>72</td>
                    <td>54</td>
                    <td>18</td>
                    <td>0</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Физика</td>
                    <td>Физики</td>
                    <td>324</td>
                    <td>194</td>
                    <td>106</td>
                    <td>88</td>
                    <td>0</td>
                    <td>130</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Основы электротехники и электроники</td>
                    <td>ИС</td>
                    <td>108</td>
                    <td>72</td>
                    <td>36</td>
                    <td>18</td>
                    <td>18</td>
                    <td>36</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Численные методы в информатике</td>
                    <td>ИС</td>
                    <td>189</td>
                    <td>89</td>
                    <td>36</td>
                    <td>36</td>
                    <td>17</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Методы исследования операций</td>
                    <td>ИС</td>
                    <td>216</td>
                    <td>104</td>
                    <td>52</td>
                    <td>35</td>
                    <td>17</td>
                    <td>112</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
    import '../styles/EducationComponent.scss';

    export default {
        name: 'EducationComponent'
    };
</script>