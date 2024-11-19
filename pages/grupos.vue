<template>
  <div class="grupos">
    <h1>Game of Thrones</h1>

    <!-- Detalles del elemento seleccionado -->
    <div v-if="selectedItem" class="details">
      <h2>{{ selectedItem.title }}</h2>
      <div v-for="(value, key) in selectedItem.details" :key="key">
        <!-- Mostrar la imagen correctamente -->
        <div v-if="key === 'image'">
          <img :src="value" :alt="selectedItem.title" />
        </div>
        <p v-else-if="key !== 'id'">
          <strong>{{ key }}:</strong>
          <span v-if="Array.isArray(value)">
            <span
              v-for="item in value"
              :key="item"
              @click="handleDetailClick(key, item)"
              class="interactive-link"
            >
              {{ item }}
            </span>
          </span>
          <span v-else :class="{ 'interactive-link': key === 'baseOfOperations' }" @click="key === 'baseOfOperations' ? handleDetailClick(key, value) : null">
            {{ value }}
          </span>
        </p>
      </div>
      <button @click="clearSelection">Volver a la lista</button>
    </div>

    <!-- Lista de grupos -->
    <div v-else class="group-list">
      <div class="group-card" v-for="grupo in grupos" :key="grupo.id">
        <h3 @click="selectItem({ title: grupo.groupName, details: grupo })">{{ grupo.groupName }}</h3>
        <p><strong>Líder:</strong> {{ grupo.leader }}</p>
        <p>
          <strong>Base de operaciones:</strong>
          <span @click="handleDetailClick('baseOfOperations', grupo.baseOfOperations)" class="interactive-link">
            {{ grupo.baseOfOperations }}
          </span>
        </p>
        <p>
          <strong>Miembros notables:</strong>
          <span
            v-for="miembro in grupo.notableMembers"
            :key="miembro"
            @click="handleDetailClick('miembros', miembro)"
            class="interactive-link"
          >
            {{ miembro }}
          </span>
        </p>
        <p>
          <strong>Aliados:</strong>
          <span
            v-for="aliado in grupo.allies"
            :key="aliado"
            @click="handleDetailClick('aliados', aliado)"
            class="interactive-link"
          >
            {{ aliado }}
          </span>
        </p>
        <p>
          <strong>Enemigos:</strong>
          <span
            v-for="enemigo in grupo.enemies"
            :key="enemigo"
            @click="handleDetailClick('enemigos', enemigo)"
            class="interactive-link"
          >
            {{ enemigo }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import gruposData from '~/data/grupos.json';
import personajesData from '~/data/personajes.json';
import casasData from '~/data/casas.json';
import lugaresData from '~/data/lugares.json';

export default {
  data() {
    return {
      grupos: gruposData,
      personajes: personajesData,
      casas: casasData,
      lugares: lugaresData,
      selectedItem: null,
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
    clearSelection() {
      this.selectedItem = null;
    },
    handleDetailClick(key, item) {
      // Maneja los clics dentro de los detalles
      if (key === 'miembros') {
        const personaje = this.personajes.find((p) => p.name === item);
        if (personaje) {
          this.selectItem({ title: personaje.name, details: personaje });
        }
      } else if (key === 'aliados' || key === 'enemigos') {
        const casa = this.casas.find((c) => c.houseName === item);
        if (casa) {
          this.selectItem({ title: casa.houseName, details: casa });
        }
      } else if (key === 'baseOfOperations') {
        const lugar = this.lugares.find((l) => l.locationName === item);
        if (lugar) {
          this.selectItem({ title: lugar.locationName, details: lugar });
        }
      }
    },
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
  transition: transform 0.3s;
  cursor: pointer;
}

.group-card:hover {
  transform: translateY(-5px);
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
  cursor: pointer;
}

p {
  font-size: 0.9rem;
  color: #555;
  margin: 5px 0;
}

.interactive-link {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  margin-right: 5px;
}

.details img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

.details {
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  margin: 0 auto;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

button {
  margin-top: 20px;
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

strong {
  font-weight: bold;
}
</style>
