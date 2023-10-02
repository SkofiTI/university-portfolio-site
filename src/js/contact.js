import '../styles/ContactComponent.scss';

const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];

let selectedBirthDay = 0;
let selectedBirthMonth = 0;
let selectedBirthYear = 0;

export default {
    name: 'ContactComponent',

    mounted() {
        const dateInput = document.getElementById('date');
        const calendar = document.getElementById('calendar');

        const birthYearSelect = document.getElementById('birth-year');
        const birthMonthSelect = document.getElementById('birth-month');

        const nowDate = new Date();
        const nowYear = nowDate.getFullYear();
        
        // Генератор годов
        for (let year = nowYear; year >= 1900; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            birthYearSelect.appendChild(option);
        }

        // Генератор месяцев
        for (let i = 0; i < monthNames.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = monthNames[i];
            birthMonthSelect.appendChild(option);
        }

        // Слушатели событий на изменение месяца и года
        birthYearSelect.addEventListener('change',
            () => this.updateCalendar(birthYearSelect, birthMonthSelect));
        birthMonthSelect.addEventListener('change',
            () => this.updateCalendar(birthYearSelect, birthMonthSelect));

        // Инициализация календаря
        this.setCalendar(birthYearSelect.value, Number(birthMonthSelect.value));

        // Слушатели событий на открытие/закрытие календаря
        dateInput.addEventListener('click', (event) => {
            event.stopPropagation();
            let computedStyles = getComputedStyle(calendar);
            let calendarDisplay = computedStyles.display;

            if (calendarDisplay === 'block') {
                calendar.style.display = 'none';
            } else if (calendarDisplay === 'none') {
                calendar.style.display = 'block';
            }
        });
        
        document.addEventListener('click', (event) => {
            if (!calendar.contains(event.target) && event.target != calendar) {
                calendar.style.display = 'none';
            }
        });

        // Валидация
        const form = document.querySelector('.contact-component form');

        form.addEventListener('input', (event) => {
            const target = event.target;

            if (target.id === 'name') {
                this.validateName(target);
            } else if (target.id === 'phone') {
                this.validatePhone(target);
            } else if (target.id === 'email') {
                this.validateEmail(target);
            }

            this.checkFormValidate(form);
        });

        const days = form.querySelector('.days');
        days.addEventListener('click', () => this.checkFormValidate(form));

        const resetButton = form.querySelector('#clear');
        resetButton.addEventListener('click', () => {
            setTimeout(() => {
                this.checkFormValidate(form);
            }, 0);
        });
    },
    methods: {
        checkFormValidate(form) {
            const nameInput = form.querySelector('#name');
            const phoneInput = form.querySelector('#phone');
            const emailInput = form.querySelector('#email');
            const dateInput = form.querySelector('#date');
            const ageInput = form.querySelector('#age');
            const radioInputs = form.querySelectorAll('input[type="radio"]');
            const sendButton = form.querySelector('#send');
            let isFormValid = true;
        
            if (!this.validateName(nameInput) |
                !this.validatePhone(phoneInput) |
                !this.validateEmail(emailInput) |
                dateInput.value === '' ||
                ageInput.value === '') {
                isFormValid = false;
            }
        
            let isRadioSelected = false;
            for (let i = 0; i < radioInputs.length; i++) {
                if (radioInputs[i].checked) {
                    isRadioSelected = true;
                    break;
                }
            }

            if (!isRadioSelected) {
                isFormValid = false;
            }
        
            sendButton.disabled = !isFormValid;
        },
        regexName(name) {
            const nameRegex = /^([а-яА-ЯёЁ]+\s[а-яА-ЯёЁ]+\s[а-яА-ЯёЁ]+|[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+)$/;
            return nameRegex.test(name);
        },
        regexPhone(phone) {
            const phoneRegex = /^(?:\+7|\+3)\d{9,11}$/;
            return phoneRegex.test(phone);
        },
        regexEmail(email) {
            const emailRegex = /^\S+@\S+\.\S+$/;
            return emailRegex.test(email);
        },
        validateName(nameInput) {
            if (nameInput.value != '') {
                if (!this.regexName(nameInput.value)) {
                    if (!nameInput.classList.contains('error')) {
                        nameInput.classList.remove('success');
                        nameInput.classList.add('error');
                        
                        nameInput.nextElementSibling.textContent = 'Введите ФИО в формате "Фамилия Имя Отчество"';
                        
                        return false;
                    }
                } else {
                    nameInput.classList.remove('error');
                    nameInput.classList.add('success');

                    nameInput.nextElementSibling.textContent = '';

                    return true;
                }
            } else {
                nameInput.classList.remove('error');
                nameInput.classList.remove('success');
                nameInput.nextElementSibling.textContent = '';
            }
        },
        validatePhone(phoneInput) {
            if (phoneInput.value != '') {
                if (!this.regexPhone(phoneInput.value)) {
                    if (!phoneInput.classList.contains('error')) {
                        phoneInput.classList.remove('success');
                        phoneInput.classList.add('error');
                        
                        phoneInput.nextElementSibling.textContent = 'Введите правильный номер телефона +7/+3xxxxxxxxx';
                    
                        return false;
                    }
                } else {
                    phoneInput.classList.remove('error');
                    phoneInput.classList.add('success');

                    phoneInput.nextElementSibling.textContent = '';

                    return true;
                }
            } else {
                phoneInput.classList.remove('error');
                phoneInput.classList.remove('success');
                phoneInput.nextElementSibling.textContent = '';
            }
        },
        validateEmail(emailInput) {
            if (emailInput.value != '') {
                if (!this.regexEmail(emailInput.value)) {
                    if (!emailInput.classList.contains('error')) {
                        emailInput.classList.remove('success');
                        emailInput.classList.add('error');
                        
                        emailInput.nextElementSibling.textContent = 'Введите корректный email-адрес';

                        return false;
                    }
                } else {
                    emailInput.classList.remove('error');
                    emailInput.classList.add('success');

                    emailInput.nextElementSibling.textContent = '';

                    return true;
                }
            } else {
                emailInput.classList.remove('error');
                emailInput.classList.remove('success');
                emailInput.nextElementSibling.textContent = '';
            }
        },
        setCalendar(year, month) { // Функция генерации календаря
            const container = document.getElementById('calendar');
            const monthContainer = container.querySelector('.month-name');
            const yearContainer = container.querySelector('.year-name');
            const daysContainer = container.querySelector('.days');

            let monthDays = new Date(year, month + 1, 0).getDate(), // Количество дней в текущем месяце
                monthPrefix = new Date(year, month, 0).getDay(), // Количество дней прошлого месяца в текущей неделе
                monthDaysText = '';

            monthContainer.textContent = monthNames[month];
            yearContainer.textContent = year;
            daysContainer.innerHTML = '';
            
            if (monthPrefix > 0){
                for (let i = 1  ; i <= monthPrefix; i++){
                    monthDaysText += '<li class="empty-day"></li>';
                }
            }

            for (let i = 1; i <= monthDays; i++){
                monthDaysText += '<li>' + i + '</li>';
            }

            daysContainer.innerHTML = monthDaysText;

            this.setDayCalendar(year, month, daysContainer);
        },
        setDayCalendar(year, month, daysContainer) { // Функция выбора определённого дня в календаре
            const days = daysContainer.getElementsByTagName('li');
            const calendar = document.getElementById('calendar');

            for (let i = 0; i < days.length; i++) {
                const day = days[i];

                if ((year == selectedBirthYear) && (month == selectedBirthMonth) && (day.textContent == selectedBirthDay)) {
                    day.classList.add('selected-day');
                }

                day.addEventListener('click', () => {
                    const selectedDay = day.textContent;

                    if (selectedDay === '') {
                        return;
                    }

                    for (let i = 0; i < days.length; i++) {
                        days[i].classList.remove('selected-day');
                    }

                    const formattedDate = `${selectedDay}.${month + 1}.${year}`;
                    
                    const dateInput = document.getElementById('date');
                    dateInput.value = formattedDate;
                    
                    selectedBirthDay = selectedDay;
                    selectedBirthMonth = month;
                    selectedBirthYear = year;

                    day.classList.add('selected-day');
                    calendar.style.display = 'none';
                });
            }
        },
        updateCalendar(birthYearSelect, birthMonthSelect) { // Функция обновления календаря
            const selectedYear = parseInt(birthYearSelect.value);
            const selectedMonth = parseInt(birthMonthSelect.value);
            this.setCalendar(selectedYear, selectedMonth);
        },
    },
};