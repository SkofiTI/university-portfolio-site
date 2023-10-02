import '../styles/HomeComponent.scss'
import { updatePageHistory } from '../js/historyFunctions';

export default {
    name: 'HomeComponent',

    mounted() {
        updatePageHistory();
    },
};