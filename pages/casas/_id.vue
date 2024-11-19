<template>
    <div class="casa-detalle">
        <h1>{{ casa.nombre }}</h1>
        <p><strong>Líder:</strong> {{ casa.lider }}</p>
        <p><strong>Territorio:</strong> {{ casa.territorio }}</p>
        <p><strong>Lema:</strong> "{{ casa.lema }}"</p>
        <p><strong>Miembros Notables:</strong> {{ casa.miembrosNotables.join(', ') }}</p>
        <p><strong>Enemigos Históricos:</strong> {{ casa.enemigosHistoricos.join(', ') }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            casas: {
                stark: {
                    nombre: 'Casa Stark',
                    lider: 'Eddard Stark',
                    territorio: 'Invernalia',
                    lema: 'El invierno está llegando',
                    miembrosNotables: ['Jon Snow', 'Arya Stark', 'Sansa Stark', 'Bran Stark'],
                    enemigosHistoricos: ['Casa Lannister', 'Casa Bolton'],
                },
                targaryen: {
                    nombre: 'Casa Targaryen',
                    lider: 'Daenerys Targaryen',
                    territorio: 'Desembarco del Rey',
                    lema: 'Fuego y Sangre',
                    miembrosNotables: ['Daenerys Targaryen', 'Aegon Targaryen'],
                    enemigosHistoricos: ['Casa Baratheon', 'Casa Lannister'],
                },
                lannister: {
                    nombre: 'Casa Lannister',
                    lider: 'Tywin Lannister',
                    territorio: 'Roca Casterly',
                    lema: 'Oye mi rugido',
                    miembrosNotables: ['Tyrion Lannister', 'Cersei Lannister', 'Jaime Lannister'],
                    enemigosHistoricos: ['Casa Stark', 'Casa Targaryen', 'Casa Baratheon'],
                },
            },
            casa: {},
        };
    },
    mounted() {
        const id = this.$route.params.id;
        this.casa = this.casas[id];
    },
};
</script>

<style scoped>
.casa-detalle {
    text-align: center;
    font-family: 'Arial', sans-serif;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

p {
    font-size: 1rem;
    color: #333;
    margin: 10px 0;
}
</style>