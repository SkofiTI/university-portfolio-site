import '../styles/TestComponent.scss';
import { updatePageHistory } from './historyFunctions';
import $ from 'jquery';

export default {
    name: 'TestComponent',
    data() {
        return {
            formData: {
                surname: '',
                name: '',
                lastname: '',
                group: '',
            },
            courses: [
                {
                    label: '1 курс',
                    options: [
                        { label: 'ИС-1', value: 'ИС-1' },
                        { label: 'ИТ-1', value: 'ИТ-1' },
                    ],
                },
                {
                    label: '2 курс',
                    options: [
                        { label: 'ИС-2', value: 'ИС-2' },
                        { label: 'ИТ-2', value: 'ИТ-2' },
                    ],
                },
                {
                    label: '3 курс',
                    options: [
                        { label: 'ИС/б-21-1-о', value: 'ИС/б-21-1-о' },
                        { label: 'ИТ/б-21-1-о', value: 'ИТ/б-21-1-о' },
                    ],
                },
            ],
        };
    },
    mounted() {
        const testForm = $('.test-component form');
        const textarea = $('#question1');
        const minWordCount = 30;

        const handleSubmit = (event) => {
            if (!this.validateTestForm()) {
                event.preventDefault();
                return;
            }
        
            const text = textarea.val().trim();
            const wordCount = text.split(/\s+/).length;
        
            if (wordCount < minWordCount) {
                alert('Минимальная длина ответа 30 слов.');
                textarea.focus();
                event.preventDefault();
            }
        };
        
        testForm.on('submit', handleSubmit);

        updatePageHistory();
    },
    methods: {
        validateTestForm() {
            const form = $('.test-component form');
            const inputs = form.find('input, select, textarea');
            let radioChecked = false;

            for (let i = 0; i < inputs.length; i++) {
                if (!inputs.eq(i).val()) {
                    alert('Пожалуйста, заполните все поля формы');
                    inputs.eq(i).focus();
                    return false;
                }

                if (inputs.eq(i).attr('type') === 'radio' && inputs.eq(i).prop('checked')) {
                    radioChecked = true;
                }
            }

            if (!radioChecked) {
                alert('Пожалуйста, заполните все поля формы');
                return false;
            }

            return true;
        },
    }
};