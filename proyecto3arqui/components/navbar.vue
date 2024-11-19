<!-- components/Navbar.vue -->
<template>
    <nav class="navbar">
        <nuxt-link to="/" exact-active-class="active">Inicio</nuxt-link>
        <nuxt-link to="/personajes" exact-active-class="active">Personajes</nuxt-link>
        <nuxt-link to="/casas" exact-active-class="active">Casas</nuxt-link>
        <nuxt-link to="/batallas" exact-active-class="active">Batallas</nuxt-link>
        <nuxt-link to="/grupos" exact-active-class="active">Grupos</nuxt-link>
        <nuxt-link to="/lugares" exact-active-class="active">Lugares</nuxt-link>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: center;
    gap: 200px;
    background-color: #333;
    padding: 10px;
    color: white;
}

.navbar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

.navbar a.active {
    color: #26C931;
    /* Color dorado para resaltar la página activa */
}

.navbar a:hover {
    color: #ff6347;
    /* Color tomate para el hover */
}
</style>