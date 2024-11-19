<template>
    <div class="lugares">
        <h1>Game of Thrones</h1>
        <div class="location-list">
            <div class="location-card" v-for="lugar in lugares" :key="lugar.id">
                <h3>{{ lugar.locationName }}</h3>
                <p><strong>Ubicación:</strong> {{ lugar.ubicacion }}</p>
                <p><strong>Casa principal:</strong> {{ lugar.casaPrincipal }}</p>
                <p><strong>Personajes Importantes:</strong> {{ lugar.personajesImportantes.join(', ') }}</p>
                <p><strong>Batallas Relevantes:</strong> {{ lugar.batallasRelevantes.join(', ') }}</p>
                <p><strong>Descripción:</strong> {{ lugar.descripcion }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import lugaresData from '~/data/lugares.json';

export default {
    data() {
        return {
            lugares: lugaresData, // Utiliza los datos importados desde el archivo JSON
        };
    },
};
</script>

<style scoped>
.lugares {
    text-align: center;
    font-family: 'Arial', sans-serif;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.location-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}

.location-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: 300px;
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