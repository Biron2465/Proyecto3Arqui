<template>
    <div class="casas">
        <h1>Game of Thrones Houses</h1>

        <div v-if="selectedCasa" class="house-details">
            <h2>{{ selectedCasa.houseName }}</h2>
            <p>
                <strong>Líder:</strong>
                <span @click="selectLider(selectedCasa.leader)" class="leader-link">
                    {{ selectedCasa.leader }}
                </span>
            </p>
            <p><strong>Territorio:</strong> {{ selectedCasa.territory }}</p>
            <p><strong>Lema:</strong> "{{ selectedCasa.motto }}"</p>
            <p><strong>Miembros Notables:</strong> {{ selectedCasa.notableMembers.join(', ') }}</p>
            <p>
                <strong>Enemigos Históricos:</strong>
                <span v-for="enemigo in selectedCasa.historicalEnemies" :key="enemigo" @click="selectEnemigo(enemigo)"
                    class="enemy-link">
                    {{ enemigo }}
                </span>
            </p>
            <button @click="clearCasaSelection">Volver a la lista</button>
        </div>

        <div v-else-if="selectedPersonaje" class="personaje-details">
            <h2>{{ selectedPersonaje.name }}</h2>
            <p><strong>Casa:</strong> {{ selectedPersonaje.casa }}</p>
            <p><strong>Batallas:</strong> {{ selectedPersonaje.batallas.join(', ') }}</p>
            <p><strong>Grupos:</strong> {{ selectedPersonaje.grupos.join(', ') }}</p>
            <p><strong>Lugares:</strong> {{ selectedPersonaje.lugares.join(', ') }}</p>
            <p><strong>Descripción:</strong> {{ selectedPersonaje.descripcion }}</p>
            <button @click="clearPersonajeSelection">Volver a las casas</button>
        </div>

        <div v-else-if="selectedEnemigoCasa" class="enemy-house-details">
            <h2>{{ selectedEnemigoCasa.houseName }}</h2>
            <p><strong>Líder:</strong> {{ selectedEnemigoCasa.leader }}</p>
            <p><strong>Territorio:</strong> {{ selectedEnemigoCasa.territory }}</p>
            <p><strong>Lema:</strong> "{{ selectedEnemigoCasa.motto }}"</p>
            <p><strong>Miembros Notables:</strong> {{ selectedEnemigoCasa.notableMembers.join(', ') }}</p>
            <p><strong>Enemigos Históricos:</strong> {{ selectedEnemigoCasa.historicalEnemies.join(', ') }}</p>
            <button @click="clearEnemigoCasaSelection">Volver a las casas</button>
        </div>

        <div v-else class="house-list">
            <div class="house-card" v-for="casa in casas" :key="casa.houseName">
                <h3 @click="selectCasa(casa)">{{ casa.houseName }}</h3>
                <p>
                    <strong>Líder:</strong>
                    <span @click="selectLider(casa.leader)" class="leader-link">
                        {{ casa.leader }}
                    </span>
                </p>
                <p><strong>Territorio:</strong> {{ casa.territory }}</p>
                <p><strong>Lema:</strong> "{{ casa.motto }}"</p>
                <p><strong>Miembros Notables:</strong> {{ casa.notableMembers.join(', ') }}</p>
                <p>
                    <strong>Enemigos Históricos:</strong>
                    <span v-for="enemigo in casa.historicalEnemies" :key="enemigo" @click="selectEnemigo(enemigo)"
                        class="enemy-link">
                        {{ enemigo }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import casasData from '~/data/casas.json';
import personajesData from '~/data/personajes.json';

export default {
    data() {
        return {
            casas: casasData,
            personajes: personajesData,
            selectedCasa: null,
            selectedPersonaje: null,
            selectedEnemigoCasa: null,
        };
    },
    methods: {
        selectCasa(casa) {
            this.selectedCasa = casa;
        },
        clearCasaSelection() {
            this.selectedCasa = null;
        },
        selectLider(liderName) {
            const personaje = this.personajes.find((personaje) => personaje.name === liderName);
            if (personaje) {
                this.selectedPersonaje = personaje;
                this.selectedCasa = null; // Clear the selected house
            }
        },
        clearPersonajeSelection() {
            this.selectedPersonaje = null;
        },
        selectEnemigo(enemigoName) {
            const enemigoCasa = this.casas.find((casa) => casa.houseName === enemigoName);
            if (enemigoCasa) {
                this.selectedEnemigoCasa = enemigoCasa;
                this.selectedCasa = null; // Clear the selected house
                this.selectedPersonaje = null; // Clear the selected character
            }
        },
        clearEnemigoCasaSelection() {
            this.selectedEnemigoCasa = null;
        },
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
    cursor: pointer;
    transition: transform 0.3s;
}

.house-card:hover {
    transform: translateY(-5px);
}

.house-details,
.personaje-details,
.enemy-house-details {
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

.leader-link,
.enemy-link {
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