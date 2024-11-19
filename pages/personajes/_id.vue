<template>
    <div class="personaje-detalle">
      <h1>{{ personaje.name }}</h1>
      <img :src="personaje.image" :alt="personaje.name" />
      <p><strong>Casa:</strong> {{ personaje.casa }}</p>
      <p><strong>Batallas:</strong> {{ personaje.batallas.join(', ') }}</p>
      <p><strong>Grupos:</strong> {{ personaje.grupos.join(', ') }}</p>
      <p><strong>Lugares:</strong> {{ personaje.lugares.join(', ') }}</p>
    </div>
  </template>
  
  <script>
  import personajesData from '~/data/personajes.json';
  
  export default {
    async asyncData({ params }) {
      // Buscar el personaje por id en los datos importados
      const personaje = personajesData.find(p => p.id === parseInt(params.id));
      if (!personaje) {
        throw new Error('Personaje no encontrado');
      }
      return { personaje };
    },
  };
  </script>
  
  <style scoped>
  .personaje-detalle {
    text-align: center;
    font-family: 'Arial', sans-serif;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  img {
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1rem;
    color: #444;
    margin: 5px 0;
  }
  
  strong {
    font-weight: bold;
  }
  </style>
  