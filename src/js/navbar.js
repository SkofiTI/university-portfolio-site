import '../styles/NavbarComponent.scss';

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
        const interestsDropdown = document.querySelector('.interests-dropdown');
        const dropdown = document.querySelector('.dropdown-content');
        
        interestsDropdown.addEventListener('mouseenter', () => this.handleMouseEnter(dropdown));
        interestsDropdown.addEventListener('mouseleave', () => this.handleMouseLeave(dropdown));
        
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
        handleMouseEnter(dropdown) {
            const interests = [
                ['hobby', 'Мои хобби'],
                ['book', 'Мои любимые книги'],
                ['music', 'Моя любимая музыка'],
                ['films', 'Мои любимые фильмы']
            ];
        
            this.createInterests(interests, dropdown);
        },
        handleMouseLeave(dropdown) {
            dropdown.innerHTML = '';
        },
        createInterests(interests, dropdown) {
            const interestDropdown = document.createElement('ul');

            for (let [interest, name] of interests) {
                const itemDropdownLi = document.createElement('li');

                itemDropdownLi.innerHTML = `<a href="/interests#${interest}">${name}</a>`;

                interestDropdown.appendChild(itemDropdownLi);
            }
            
            dropdown.appendChild(interestDropdown);
        },
        scrollToHash() {
            const hash = window.location.hash;

            if (hash) {
                setTimeout(() => {
                    const element = document.querySelector(hash);

                    if (element) {
                        element.scrollIntoView();
                    }
                }, 0);
            }
        },
    },
};