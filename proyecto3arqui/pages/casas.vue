<template>
    <div class="casas">
        <h1>Game of Thrones</h1>
        <div class="house-list">
            <div class="house-card" v-for="casa in casas" :key="casa.houseName">
                <h3>{{ casa.houseName }}</h3>
                <p><strong>Líder:</strong> {{ casa.leader }}</p>
                <p><strong>Territorio:</strong> {{ casa.territory }}</p>
                <p><strong>Lema:</strong> "{{ casa.motto }}"</p>
                <p><strong>Miembros Notables:</strong> {{ casa.notableMembers.join(', ') }}</p>
                <p><strong>Enemigos Históricos:</strong> {{ casa.historicalEnemies.join(', ') }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import casasData from '~/data/casas.json'; // Asegúrate de que la ruta sea correcta

export default {
    data() {
        return {
            casas: casasData, // Usar los datos importados
        };
    },
};
</script>

<style scoped>
.casas {
    text-align: center;
    font-family: 'Arial', sans-serif;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.house-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.house-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: 250px;
    text-align: left;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
}

p {
    font-size: 0.9rem;
    color: #555;
    margin: 5px 0;
}

strong {
    font-weight: bold;
}
</style>
