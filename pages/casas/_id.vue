<template>
    <div class="house-details">
        <h1>{{ house.houseName }}</h1>
        <p><strong>Líder:</strong> {{ house.leader }}</p>
        <p><strong>Territorio:</strong> {{ house.territory }}</p>
        <p><strong>Lema:</strong> "{{ house.motto }}"</p>
        <p><strong>Miembros Notables:</strong> {{ house.notableMembers.join(', ') }}</p>
        <p><strong>Enemigos Históricos:</strong> {{ house.historicalEnemies.join(', ') }}</p>
    </div>
</template>

<script>
import casasData from '~/data/casas.json';

export default {
    async asyncData({ params }) {
        // Normaliza el nombre de la casa en params.id para asegurar coincidencias correctas
        const houseName = params.id.toLowerCase(); // Convierte a minúsculas si es necesario
        const house = casasData.find(
            h => h.houseName.toLowerCase() === houseName
        );

        if (!house) {
            // Maneja el caso en el que la casa no se encuentre
            throw new Error('House not found');
        }

        return { house };
    },
};
</script>

<style scoped>
.house-details {
    text-align: center;
    font-family: 'Arial', sans-serif;
}

h1 {
    font-size: 2rem;
    margin-bottom: 15px;
}

p {
    font-size: 1rem;
    color: #444;
    margin: 5px 0;
}

strong {
    font-weight: bold;
}
</style>
