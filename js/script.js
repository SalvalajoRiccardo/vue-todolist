const app = new Vue({
    el: '#app',
    data: {
        listaNote: ['fare la spesa', 'mangiare più verdure', 'fare benzina', 'fare sport', 'lavare i piatti'],
        newList: ''
    },

    methods: {
        addNote(obj) {
            if ( obj != false){
                this.listaNote.push(this.newList);
                this.newList = '' ;
            }
        }
    }
});