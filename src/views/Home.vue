<template>
    <div class="home__root">
        <div class="home__container">
            <h1>📈 Bienvenue sur HaloDashboard 📈</h1>
            <h3>Sélectionnez votre jeu dans le menu de navigation ↗</h3>
        </div>
    </div>
</template>

<style lang="scss">
.home {
    &__root{
        background: url("../assets/home_background.jpg");
        height: 93vh;
        color: #000000
    }

    &__container {
        background-color: #272727;
        color : #edf5f0;
        position: absolute;
        top: 46%;
        left: 37%;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 5px 5px 15px 5px #272727;
    }
}
</style>