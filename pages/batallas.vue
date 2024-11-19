<template>
    <div class="batallas">
      <h1>Game of Thrones</h1>
  
      <!-- Detalles de la Batalla -->
      <div v-if="selectedBatalla" class="battle-details">
        <h2>{{ selectedBatalla.battleName }}</h2>
        <p>
          <strong>Participantes:</strong>
          <span
            v-for="participant in selectedBatalla.participants"
            :key="participant"
            @click="selectParticipant(participant)"
            class="participant-link"
          >
            {{ participant }}
          </span>
        </p>
        <p><strong>Resultado:</strong> {{ selectedBatalla.outcome }}</p>
        <p>
          <strong>Ubicación:</strong>
          <span @click="selectLugar(selectedBatalla.location)" class="location-link">
            {{ selectedBatalla.location }}
          </span>
        </p>
        <p><strong>Descripción:</strong> {{ selectedBatalla.description }}</p>
        <button @click="clearBattleSelection">Volver a la lista</button>
      </div>
  
      <!-- Detalles del Personaje -->
      <div v-else-if="selectedPersonaje" class="personaje-details">
        <h2>{{ selectedPersonaje.name }}</h2>
        <p>
          <strong>Casa:</strong>
          <span @click="selectCasa(selectedPersonaje.casa)" class="casa-link">
            {{ selectedPersonaje.casa }}
          </span>
        </p>
        <p>
          <strong>Batallas:</strong>
          <span
            v-for="batalla in selectedPersonaje.batallas"
            :key="batalla"
            @click="selectBatallaByName(batalla)"
            class="battle-link"
          >
            {{ batalla }}
          </span>
        </p>
        <p>
          <strong>Grupos:</strong>
          {{ selectedPersonaje.grupos.join(', ') }}
        </p>
        <p>
          <strong>Lugares:</strong>
          <span
            v-for="lugar in selectedPersonaje.lugares"
            :key="lugar"
            @click="selectLugar(lugar)"
            class="location-link"
          >
            {{ lugar }}
          </span>
        </p>
        <p><strong>Descripción:</strong> {{ selectedPersonaje.descripcion }}</p>
        <button @click="clearPersonajeSelection">Volver a las batallas</button>
      </div>
  
      <!-- Detalles de la Casa -->
      <div v-else-if="selectedCasa" class="casa-details">
        <h2>{{ selectedCasa.houseName }}</h2>
        <p><strong>Líder:</strong> {{ selectedCasa.leader }}</p>
        <p><strong>Territorio:</strong> {{ selectedCasa.territory }}</p>
        <p><strong>Lema:</strong> "{{ selectedCasa.motto }}"</p>
        <p>
          <strong>Miembros Notables:</strong>
          <span
            v-for="member in selectedCasa.notableMembers"
            :key="member"
            @click="selectParticipant(member)"
            class="participant-link"
          >
            {{ member }}
          </span>
        </p>
        <p>
          <strong>Enemigos Históricos:</strong>
          <span
            v-for="enemy in selectedCasa.historicalEnemies"
            :key="enemy"
            @click="selectCasaByName(enemy)"
            class="casa-link"
          >
            {{ enemy }}
          </span>
        </p>
        <button @click="clearCasaSelection">Volver a las batallas</button>
      </div>
  
      <!-- Detalles del Lugar -->
      <div v-else-if="selectedLugar" class="location-details">
        <h2>{{ selectedLugar.locationName }}</h2>
        <p><strong>Ubicación:</strong> {{ selectedLugar.ubicacion }}</p>
        <p><strong>Casa Principal:</strong> {{ selectedLugar.casaPrincipal }}</p>
        <p>
          <strong>Personajes Importantes:</strong>
          <span
            v-for="personaje in selectedLugar.personajesImportantes"
            :key="personaje"
            @click="selectParticipant(personaje)"
            class="participant-link"
          >
            {{ personaje }}
          </span>
        </p>
        <p>
          <strong>Batallas Relevantes:</strong>
          <span
            v-for="batalla in selectedLugar.batallasRelevantes"
            :key="batalla"
            @click="selectBatallaByName(batalla)"
            class="battle-link"
          >
            {{ batalla }}
          </span>
        </p>
        <p><strong>Descripción:</strong> {{ selectedLugar.descripcion }}</p>
        <button @click="clearLugarSelection">Volver a las batallas</button>
      </div>
  
      <!-- Lista de Batallas -->
      <div v-else class="battle-list">
        <div class="battle-card" v-for="(batalla, index) in batallas" :key="index">
          <h3 @click="selectBatalla(batalla)">{{ batalla.battleName }}</h3>
          <p>
            <strong>Participantes:</strong>
            <span
              v-for="participant in batalla.participants"
              :key="participant"
              @click="selectParticipant(participant)"
              class="participant-link"
            >
              {{ participant }}
            </span>
          </p>
          <p><strong>Resultado:</strong> {{ batalla.outcome }}</p>
          <p>
            <strong>Ubicación:</strong>
            <span @click="selectLugar(batalla.location)" class="location-link">
              {{ batalla.location }}
            </span>
          </p>
          <p><strong>Descripción:</strong> {{ batalla.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import batallasData from '~/data/batallas.json';
  import personajesData from '~/data/personajes.json';
  import lugaresData from '~/data/lugares.json';
  import casasData from '~/data/casas.json';
  
  export default {
    data() {
      return {
        batallas: batallasData,
        personajes: personajesData,
        lugares: lugaresData,
        casas: casasData,
        selectedBatalla: null,
        selectedPersonaje: null,
        selectedLugar: null,
        selectedCasa: null,
      };
    },
    methods: {
      selectBatalla(batalla) {
        this.selectedBatalla = batalla;
        this.clearSelectionsExcept('selectedBatalla');
      },
      selectBatallaByName(battleName) {
        const batalla = this.batallas.find((batalla) => batalla.battleName === battleName);
        if (batalla) {
          this.selectBatalla(batalla);
        }
      },
      clearBattleSelection() {
        this.selectedBatalla = null;
      },
      selectParticipant(participantName) {
        const personaje = this.personajes.find((personaje) => personaje.name === participantName);
        if (personaje) {
          this.selectedPersonaje = personaje;
          this.clearSelectionsExcept('selectedPersonaje');
        }
      },
      clearPersonajeSelection() {
        this.selectedPersonaje = null;
      },
      selectLugar(locationName) {
        const lugar = this.lugares.find((lugar) => lugar.locationName === locationName);
        if (lugar) {
          this.selectedLugar = lugar;
          this.clearSelectionsExcept('selectedLugar');
        }
      },
      clearLugarSelection() {
        this.selectedLugar = null;
      },
      selectCasa(casaName) {
        const casa = this.casas.find((casa) => casa.houseName === casaName);
        if (casa) {
          this.selectedCasa = casa;
          this.clearSelectionsExcept('selectedCasa');
        }
      },
      selectCasaByName(casaName) {
        this.selectCasa(casaName);
      },
      clearCasaSelection() {
        this.selectedCasa = null;
      },
      clearSelectionsExcept(except) {
        if (except !== 'selectedBatalla') this.selectedBatalla = null;
        if (except !== 'selectedPersonaje') this.selectedPersonaje = null;
        if (except !== 'selectedLugar') this.selectedLugar = null;
        if (except !== 'selectedCasa') this.selectedCasa = null;
      },
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
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .battle-card:hover {
    transform: translateY(-5px);
  }
  
  .battle-details, .personaje-details, .location-details, .casa-details {
    text-align: left;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: 300px;
    margin: 0 auto;
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
  
  .participant-link, .location-link, .battle-link, .casa-link {
    color: #007bff;
    cursor: pointer;
    text-decoration: underline;
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
  