<template>
    <div class="photo-album-component">
        <h1 class="title">Фотоальбом</h1>
        <div class="slider">
            <div class="slider-track">
            </div>
            <div class="prev"><a><img src="../assets/arrow-circle-right.svg"></a></div>
            <div class="next"><a><img src="../assets/arrow-circle-left.svg"></a></div>
        </div>
        <div class="modal" v-if="modalVisible">
            <span class="close" @click="closeModal">&times;</span>
            <img :src="modalImageSrc" class="modal-content">
        </div>
    </div>
</template>

<script src="../js/photoAlbum.js"></script>