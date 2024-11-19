<template>
    <div class="lugares">
      <h1>Game of Thrones</h1>
  
      <!-- Detalles del elemento seleccionado -->
      <div v-if="selectedItem" class="details">
        <h2>{{ selectedItem.title }}</h2>
        <div v-for="(value, key) in selectedItem.details" :key="key">
          <p v-if="key !== 'id'">
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
  
      <!-- Lista de lugares -->
      <div v-else class="location-list">
        <div class="location-card" v-for="lugar in lugares" :key="lugar.id">
          <h3 @click="selectItem({ title: lugar.locationName, details: lugar })">{{ lugar.locationName }}</h3>
          <p><strong>Ubicación:</strong> {{ lugar.ubicacion }}</p>
          <p>
            <strong>Casa principal:</strong>
            <span @click="handleDetailClick('casaPrincipal', lugar.casaPrincipal)" class="interactive-link">
              {{ lugar.casaPrincipal }}
            </span>
          </p>
          <p>
            <strong>Personajes Importantes:</strong>
            <span
              v-for="personaje in lugar.personajesImportantes"
              :key="personaje"
              @click="handleDetailClick('personajesImportantes', personaje)"
              class="interactive-link"
            >
              {{ personaje }}
            </span>
          </p>
          <p>
            <strong>Batallas Relevantes:</strong>
            <span
              v-for="batalla in lugar.batallasRelevantes"
              :key="batalla"
              @click="handleDetailClick('batallasRelevantes', batalla)"
              class="interactive-link"
            >
              {{ batalla }}
            </span>
          </p>
          <p><strong>Descripción:</strong> {{ lugar.descripcion }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import lugaresData from '~/data/lugares.json';
  import casasData from '~/data/casas.json';
  import personajesData from '~/data/personajes.json';
  import batallasData from '~/data/batallas.json';
  
  export default {
    data() {
      return {
        lugares: lugaresData,
        casas: casasData,
        personajes: personajesData,
        batallas: batallasData,
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
        // Maneja los clics en los detalles de los lugares
        if (key === 'casaPrincipal') {
          const casa = this.casas.find((c) => c.houseName === item);
          if (casa) {
            this.selectItem({ title: casa.houseName, details: casa });
          }
        } else if (key === 'personajesImportantes') {
          const personaje = this.personajes.find((p) => p.name === item);
          if (personaje) {
            this.selectItem({ title: personaje.name, details: personaje });
          }
        } else if (key === 'batallasRelevantes') {
          const batalla = this.batallas.find((b) => b.battleName === item);
          if (batalla) {
            this.selectItem({ title: batalla.battleName, details: batalla });
          }
        }
      },
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
    transition: transform 0.3s;
    cursor: pointer;
  }
  
  .location-card:hover {
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
  