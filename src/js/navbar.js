import '../styles/NavbarComponent.scss';
import $ from 'jquery';

const interests = [
    ['hobby', 'Мои хобби'],
    ['book', 'Мои любимые книги'],
    ['music', 'Моя любимая музыка'],
    ['films', 'Мои любимые фильмы']
];

export default {
    name: 'NavbarComponent',
  
    watch: {
        '$route'() {
            this.scrollToHash();
        },
    },
    data() {
        return {
            currentDateTime: ''
        };
    },
    mounted() {
        const interestsDropdown = $('.interests-dropdown');
        const dropdown = $('.dropdown-content');
        
        interestsDropdown.on('mouseenter', () => this.createInterests(interests, dropdown));
        interestsDropdown.on('mouseleave', () => {dropdown.empty()});
        
        this.scrollToHash();
        this.updateDateTime();
        setInterval(this.updateDateTime, 1000);
    },
  
    methods: {
        updateDateTime() {
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.toLocaleString('default', { month: 'long' });
            const year = currentDate.getFullYear();
            
            this.currentDateTime = `${day} ${month} ${year}`;
        },
        createInterests(interests, dropdown) {
            const interestDropdown = $('<ul></ul>');

            for (let [interest, name] of interests) {
                const itemDropdownLi = $('<li></li>');

                itemDropdownLi.html(`<a href="/interests#${interest}">${name}</a>`);

                interestDropdown.append(itemDropdownLi);
            }
            
            dropdown.append(interestDropdown);
        },
        scrollToHash() {
            const hash = window.location.hash;

            if (hash) {
                setTimeout(() => {
                    const element = $(hash);

                    if (element.length > 0) {
                        $('interests-content').animate({
                            scrollTop: element.offset().top
                        }, 0);
                    }
                }, 0);
            }
        },
    },
};