import '../styles/ContactComponent.scss';
import { updatePageHistory } from './historyFunctions';
import $ from 'jquery';

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
        updatePageHistory();

        const modal = $('#modalSubmit');
        const sendModalButton = $('#send-modal');
        const closeModalButton = $('#close-modal');

        const dateInput = $('#date');
        const calendar = $('#calendar');

        const birthYearSelect = $('#birth-year');
        const birthMonthSelect = $('#birth-month');

        const nowDate = new Date();
        const nowYear = nowDate.getFullYear();
        
        // Генератор годов
        for (let year = nowYear; year >= 1900; year--) {
            birthYearSelect.append($('<option>', {
                value: year,
                text: year
            }));
        }

        // Генератор месяцев
        $.each(monthNames, function (i, monthName) {
            birthMonthSelect.append($('<option>', {
                value: i,
                text: monthName
            }));
        });

        // Слушатели событий на изменение месяца и года
        birthYearSelect.on('change',
            () => this.updateCalendar(birthYearSelect, birthMonthSelect));
        birthMonthSelect.on('change',
            () => this.updateCalendar(birthYearSelect, birthMonthSelect));

        // Инициализация календаря
        this.setCalendar(birthYearSelect.val(), parseInt(birthMonthSelect.val()));

        // Слушатели событий на открытие/закрытие календаря
        dateInput.on('click', (event) => {
            event.stopPropagation();
            let calendarDisplay = calendar.css('display');

            if (calendarDisplay === 'block') {
                calendar.css('display', 'none');
            } else if (calendarDisplay === 'none') {
                calendar.css('display', 'block');
            }
        });
        
        $(document).on('click', (event) => {
            if (!$(event.target).closest(calendar).length) {
                calendar.css('display', 'none');
            }
        });

        // Валидация
        const form = $('.contact-component form');

        form.on('input', (event) => {
            const target = $(event.target);

            if (target.id === 'name') {
                this.validateName(target);
            } else if (target.id === 'phone') {
                this.validatePhone(target);
            } else if (target.id === 'email') {
                this.validateEmail(target);
            }

            this.checkFormValidate(form);
        });

        const days = form.find('.days');
        days.on('click', () => {
            this.checkFormValidate(form);
        });

        const resetButton = form.find('#clear');
        resetButton.on('click', () => {
            setTimeout(() => {
                this.checkFormValidate(form);
            }, 0);
        });

        // Слушатель события на открытие popover окна
        form.find('input').on('mouseenter', (event) => {
            const target = $(event.currentTarget);
            if (target.siblings('.popover').length === 0) {
                this.showPopover(target);
            }
        });

        // Отправка формы
        const sendButton = $('#send');

        sendButton.on('click', (event) => {
            event.preventDefault();
            modal.css('display', 'flex');
            $('body').css('overflow', 'hidden');
        });

        sendModalButton.on('click', () => {
            if (this.checkFormValidate(form)) {
                form.trigger('submit');
                modal.css('display', 'none');
                $('body').css('overflow', 'scroll');
            }
        });

        closeModalButton.on('click', () => {
            modal.css('display', 'none');
            $('body').css('overflow', 'scroll');
        });
    },
    methods: {
        showPopover(target){
            const formItem = target.closest('.form-item');
            const popoverText = target.attr('data-popover');

            if (!popoverText) {
                return;
            }

            const popover = $('<div>').addClass('popover').text(popoverText);
          
            formItem.append(popover);
          
            const inputPosition = target.position();
            const popoverPosition = {
                top: inputPosition.top + target.outerHeight() / 2 - popover.outerHeight() / 2,
                left: inputPosition.left + target.outerWidth() + 10,
            };
          
            popover.css(popoverPosition);

            target.on('mouseleave', () => {
                setTimeout(() => {
                    popover.remove();
                }, 2000);
            });
        },
        checkFormValidate(form) {
            const nameInput = form.find('#name');
            const phoneInput = form.find('#phone');
            const emailInput = form.find('#email');
            const dateInput = form.find('#date');
            const ageInput = form.find('#age');
            const radioInputs = form.find('input[type="radio"]');
            const sendButton = form.find('#send');
            let isFormValid = true;
        
            if (!this.validateName(nameInput) |
                !this.validatePhone(phoneInput) |
                !this.validateEmail(emailInput) |
                dateInput.val() === '' ||
                ageInput.val() === '') {
                isFormValid = false;
            }
        
            let isRadioSelected = false;
            radioInputs.each(function () {
                if ($(this).prop('checked')) {
                    isRadioSelected = true;
                    return false;
                }
            });

            if (!isRadioSelected) {
                isFormValid = false;
            }
        
            sendButton.prop('disabled', !isFormValid);
            
            return isFormValid;
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
            if (nameInput.val() != '') {
                if (!this.regexName(nameInput.val())) {
                    if (!nameInput.hasClass('error')) {
                        nameInput.removeClass('success');
                        nameInput.addClass('error');
                        nameInput.next().text('Введите ФИО в формате "Фамилия Имя Отчество"');
                        
                        return false;
                    }
                } else {
                    nameInput.removeClass('error');
                    nameInput.addClass('success');

                    nameInput.next().text('');

                    return true;
                }
            } else {
                nameInput.removeClass('error');
                nameInput.removeClass('success');
                nameInput.next().text('');
            }
        },
        validatePhone(phoneInput) {
            if (phoneInput.val() !== '') {
                if (!this.regexPhone(phoneInput.val())) {
                    if (!phoneInput.hasClass('error')) {
                        phoneInput.removeClass('success');
                        phoneInput.addClass('error');
                        phoneInput.next().text('Введите правильный номер телефона +7/+3xxxxxxxxx');
                        return false;
                    }
                } else {
                    phoneInput.removeClass('error');
                    phoneInput.addClass('success');
                    phoneInput.next().text('');
                    return true;
                }
            } else {
                phoneInput.removeClass('error');
                phoneInput.removeClass('success');
                phoneInput.next().text('');
            }
        },
        validateEmail(emailInput) {
            if (emailInput.val() !== '') {
                if (!this.regexEmail(emailInput.val())) {
                    if (!emailInput.hasClass('error')) {
                        emailInput.removeClass('success');
                        emailInput.addClass('error');
                        emailInput.next().text('Введите корректный email-адрес');
                        return false;
                    }
                } else {
                    emailInput.removeClass('error');
                    emailInput.addClass('success');
                    emailInput.next().text('');
                    return true;
                }
            } else {
                emailInput.removeClass('error');
                emailInput.removeClass('success');
                emailInput.next().text('');
            }
        },
        setCalendar(year, month) { // Функция генерации календаря
            const container = $('#calendar');
            const monthContainer = container.find('.month-name');
            const yearContainer = container.find('.year-name');
            const daysContainer = container.find('.days');

            let monthDays = new Date(year, month + 1, 0).getDate(), // Количество дней в текущем месяце
                monthPrefix = new Date(year, month, 0).getDay(), // Количество дней прошлого месяца в текущей неделе
                monthDaysText = '';

                monthContainer.text(monthNames[month]);
                yearContainer.text(year);
                daysContainer.empty();
            
            if (monthPrefix > 0){
                for (let i = 1  ; i <= monthPrefix; i++){
                    monthDaysText += '<li class="empty-day"></li>';
                }
            }

            for (let i = 1; i <= monthDays; i++){
                monthDaysText += '<li>' + i + '</li>';
            }

            daysContainer.html(monthDaysText);

            this.setDayCalendar(year, month, daysContainer);
        },
        setDayCalendar(year, month, daysContainer) { // Функция выбора определённого дня в календаре
            const days = daysContainer.find('li');
            const calendar = $('#calendar');

            days.each(function () {
                const day = $(this);

                if ((year == selectedBirthYear) && (month == selectedBirthMonth) && (day.text() == selectedBirthDay)) {
                    day.addClass('selected-day');
                }

                day.on('click', function () {
                    const selectedDay = day.text();

                    if (selectedDay === '') {
                        return;
                    }

                    days.removeClass('selected-day');

                    const formattedDate = `${selectedDay}.${month + 1}.${year}`;

                    const dateInput = $('#date');
                    dateInput.val(formattedDate);

                    selectedBirthDay = selectedDay;
                    selectedBirthMonth = month;
                    selectedBirthYear = year;

                    day.addClass('selected-day');
                    calendar.css('display', 'none');
                });
            });
        },
        updateCalendar(birthYearSelect, birthMonthSelect) { // Функция обновления календаря
            const selectedYear = parseInt(birthYearSelect.val());
            const selectedMonth = parseInt(birthMonthSelect.val());
            this.setCalendar(selectedYear, selectedMonth);
        },
    },
};