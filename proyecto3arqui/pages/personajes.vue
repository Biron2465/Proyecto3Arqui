<template>
  <div class="personajes">
    <h1>Game of Thrones</h1>
    <div class="character-list">
      <div class="character-card" v-for="personaje in personajes" :key="personaje.id">
        <img :src="personaje.image" :alt="personaje.name" />
        <h3>{{ personaje.name }}</h3>
        <p><strong>Casa:</strong> {{ personaje.casa }}</p>
        <p><strong>Batallas:</strong> {{ personaje.batallas.join(', ') }}</p>
        <p><strong>Grupos:</strong> {{ personaje.grupos.join(', ') }}</p>
        <p><strong>Lugares:</strong> {{ personaje.lugares.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import datos from '~/data/personajes.json'; // Import your datos.json file

export default {
  data() {
    return {
      personajes: datos, // Use the imported data to populate personajes
    };
  },
};
</script>

<style scoped>
/* Your existing styles */
.personajes {
  text-align: center;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.character-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.character-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  text-align: left;
  transition: transform 0.3s;
}

.character-card:hover {
  transform: translateY(-10px);
}

img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

p {
  font-size: 0.9rem;
  color: #333;
  margin: 5px 0;
}

strong {
  font-weight: bold;
}
</style>
