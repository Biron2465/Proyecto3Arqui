<template>
  <div class="grupos">
    <h1>Game of Thrones</h1>
    <div class="group-list">
      <div class="group-card" v-for="grupo in grupos" :key="grupo.id">
        <h3>{{ grupo.groupName }}</h3>
        <p><strong>Líder:</strong> {{ grupo.leader }}</p>
        <p><strong>Base de operaciones:</strong> {{ grupo.baseOfOperations }}</p>
        <p><strong>Miembros notables:</strong> {{ grupo.notableMembers.join(', ') }}</p>
        <p><strong>Aliados:</strong> {{ grupo.allies.join(', ') }}</p>
        <p><strong>Enemigos:</strong> {{ grupo.enemies.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import gruposData from '~/data/grupos.json';

export default {
  data() {
    return {
      grupos: gruposData, // Use the imported data directly
    };
  },
};
</script>

<style scoped>
.grupos {
  text-align: center;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.group-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.group-card {
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
