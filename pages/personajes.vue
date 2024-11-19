<template>
  <div class="personajes">
    <h1>Game of Thrones</h1>

    <!-- Detalles del elemento seleccionado -->
    <div v-if="selectedItem" class="details">
      <h2>{{ selectedItem.title }}</h2>
      <div v-for="(value, key) in selectedItem.details" :key="key">
        <!-- Ocultar el campo 'id' y mostrar la imagen correctamente -->
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
          <span v-else>{{ value }}</span>
        </p>
      </div>
      <button @click="clearSelection">Volver a la lista</button>
    </div>

    <!-- Lista de personajes -->
    <div v-else class="character-list">
      <div
        class="character-card"
        v-for="personaje in personajes"
        :key="personaje.id"
      >
        <img :src="personaje.image" :alt="personaje.name" />
        <h3 @click="selectItem({ title: personaje.name, details: personaje })">{{ personaje.name }}</h3>
        <p>
          <strong>Casa:</strong>
          <span @click="selectCasa(personaje.casa)" class="interactive-link">{{ personaje.casa }}</span>
        </p>
        <p>
          <strong>Batallas:</strong>
          <span
            v-for="batalla in personaje.batallas"
            :key="batalla"
            @click="selectBatalla(batalla)"
            class="interactive-link"
          >
            {{ batalla }}
          </span>
        </p>
        <p>
          <strong>Grupos:</strong>
          <span
            v-for="grupo in personaje.grupos"
            :key="grupo"
            @click="selectGrupo(grupo)"
            class="interactive-link"
          >
            {{ grupo }}
          </span>
        </p>
        <p>
          <strong>Lugares:</strong>
          <span
            v-for="lugar in personaje.lugares"
            :key="lugar"
            @click="selectLugar(lugar)"
            class="interactive-link"
          >
            {{ lugar }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import datos from '~/data/personajes.json';
import casas from '~/data/casas.json';
import batallas from '~/data/batallas.json';
import grupos from '~/data/grupos.json';
import lugares from '~/data/lugares.json';

export default {
  data() {
    return {
      personajes: datos,
      casas: casas,
      batallas: batallas,
      grupos: grupos,
      lugares: lugares,
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
    selectCasa(casaName) {
      const casa = this.casas.find((casa) => casa.houseName === casaName);
      if (casa) {
        this.selectItem({ title: casa.houseName, details: casa });
      }
    },
    selectBatalla(batallaName) {
      const batalla = this.batallas.find((batalla) => batalla.battleName === batallaName);
      if (batalla) {
        this.selectItem({ title: batalla.battleName, details: batalla });
      }
    },
    selectGrupo(grupoName) {
      const grupo = this.grupos.find((grupo) => grupo.groupName === grupoName);
      if (grupo) {
        this.selectItem({ title: grupo.groupName, details: grupo });
      }
    },
    selectLugar(lugarName) {
      const lugar = this.lugares.find((lugar) => lugar.locationName === lugarName);
      if (lugar) {
        this.selectItem({ title: lugar.locationName, details: lugar });
      }
    },
    handleDetailClick(key, item) {
      // Maneja los clics dentro de los detalles
      if (key === 'casa') {
        this.selectCasa(item);
      } else if (key === 'batallas') {
        this.selectBatalla(item);
      } else if (key === 'grupos') {
        this.selectGrupo(item);
      } else if (key === 'lugares') {
        this.selectLugar(item);
      }
    },
  },
};
</script>

<style scoped>
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

.details img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  cursor: pointer;
}

.interactive-link {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  margin-right: 5px;
}

.details {
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  margin: 0 auto;
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
