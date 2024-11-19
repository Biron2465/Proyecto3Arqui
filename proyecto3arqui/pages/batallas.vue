<template>
    <div class="batallas">
        <h1>Game of Thrones</h1>
        <div class="battle-list">
            <div class="battle-card" v-for="(batalla, index) in batallas" :key="index">
                <h3>{{ batalla.battleName }}</h3>
                <p><strong>Participantes:</strong> {{ batalla.participants.join(', ') }}</p>
                <p><strong>Resultado:</strong> {{ batalla.outcome }}</p>
                <p><strong>Ubicación:</strong> {{ batalla.location }}</p>
                <p><strong>Descripción:</strong> {{ batalla.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import batallasData from '~/data/batallas.json';

export default {
    data() {
        return {
            batallas: batallasData, // Use the imported JSON data
        };
    },
};
</script>

<style scoped>
.batallas {
    text-align: center;
    font-family: 'Arial', sans-serif;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.battle-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.battle-card {
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
