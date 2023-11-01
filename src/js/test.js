import '../styles/TestComponent.scss';
import { updatePageHistory } from './historyFunctions';
import $ from 'jquery';

export default {
    name: 'TestComponent',
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