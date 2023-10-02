import '../styles/PhotoAlbumComponent.scss';
import { updatePageHistory } from './historyFunctions';

export const fotos = [
    "mohammed_1.jpg",
    "mohammed_2.jpg",
    "mohammed_3.jpg",
    "mohammed_4.jpg",
    "mohammed_5.jpg",
    "mohammed_6.jpg",
    "mohammed_7.jpg",
    "mohammed_8.jpg",
    "mohammed_9.jpg",
    "mohammed_10.jpg",
    "mohammed_11.jpg",
    "mohammed_12.jpg",
    "mohammed_13.jpg",
    "mohammed_14.jpg",
    "mohammed_15.jpg",
];

export const titles = [
    "Mohammed 1",
    "Mohammed 2",
    "Mohammed 3",
    "Mohammed 4",
    "Mohammed 5",
    "Mohammed 6",
    "Mohammed 7",
    "Mohammed 8",
    "Mohammed 9",
    "Mohammed 10",
    "Mohammed 11",
    "Mohammed 12",
    "Mohammed 13",
    "Mohammed 14",
    "Mohammed 15",
];

export default {
    name: "PhotoAlbumComponent",
    data() {
        return {
            photoAlbumElement: null,
        };
    },
    mounted() {
        updatePageHistory();
        this.createPhotoAlbum();
    },
    methods: {
        createPhotoAlbum() {
            const photoAlbumElement = document.querySelector('.photo-album-component');

            for (let index = 0; index < fotos.length; index++) {
                const photoItem = document.createElement("div");
                photoItem.classList.add("photo-item");

                const img = document.createElement("img");
                img.src = require(`../assets/album/${fotos[index]}`);
                img.alt = titles[index];
                img.classList.add("photo");

                const tooltip = document.createElement("div");
                tooltip.textContent = titles[index];
                tooltip.classList.add("tooltip");
                tooltip.style.pointerEvents = "none";

                const caption = document.createElement("div");
                caption.textContent = titles[index];
                caption.classList.add("caption");

                const modalImage = document.createElement("div");
                modalImage.classList.add("modal")
                modalImage.id = titles[index];

                const closeModalImage = document.createElement("span");
                closeModalImage.classList.add("close")
                closeModalImage.innerHTML = "&times;";

                const imageContentModal = document.createElement("img");
                imageContentModal.classList.add("modal-content");
                imageContentModal.id = fotos[index];
                imageContentModal.src = require(`../assets/album/${fotos[index]}`);

                modalImage.appendChild(closeModalImage);
                modalImage.appendChild(imageContentModal);

                photoItem.appendChild(img);
                photoItem.appendChild(tooltip);
                photoItem.appendChild(caption);
                photoItem.appendChild(modalImage);

                img.addEventListener('click', () => {
                    modalImage.style.display = "block";
                    document.body.style.overflow = "hidden";
                });

                closeModalImage.addEventListener('click', () => {
                    modalImage.style.display = "none";
                    document.body.style.overflow = "auto";
                });

                photoAlbumElement.appendChild(photoItem);
            }

            return photoAlbumElement;
        },
    },
};