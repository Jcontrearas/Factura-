// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      // Define tu estado inicial aquí
    
      comprasrealizadas : [],

      productos : [
        {
            imagen : 'https://http2.mlstatic.com/D_Q_NP_2X_861752-MLU73202177120_122023-E.webp',
            precio :  60000,
            titulo : 'Ésika ',
            descripcion : 'Volumen de la unidad: 90 mL',
            id : 1
        },
        {
          imagen : 'https://http2.mlstatic.com/D_NQ_NP_805218-MLU74113017620_012024-O.webp',
          precio : 
          229001,
          titulo : 'Perfume Moschino',
          descripcion : 'Perfume Moschino I Love Love Cheap & Chic 100 ml EDT para mujer',
          id : 2

       },
       {
        imagen : 'https://http2.mlstatic.com/D_NQ_NP_728157-MLA48255169685_112021-O.webp',
        precio : 
        176997,
        titulo : 'Avenue Elizabeth Arden',
        descripcion : 'Perfume 5th Avenue Elizabeth Arden EDP 125 ml para mujer',
        id : 3

     } ,
     {
        imagen : 'https://http2.mlstatic.com/D_NQ_NP_892224-MLU72861927647_112023-O.webp',
        precio : 
        253272,
        titulo : 'Perfume Bvlgari',
        descripcion : 'Eau de toilette femenino con esencia floral-frutal en envase de 65 mL.',
        id : 4

     },
     {
      imagen : 'https://http2.mlstatic.com/D_NQ_NP_711722-MLU75763186134_042024-O.webp',
      precio : 246415,
      titulo : 'Perfume Reyane',
      descripcion : 'Volumen de la unidad: 100 mL',
      id : 4

   }, 
   {
    imagen : 'https://http2.mlstatic.com/D_NQ_NP_767870-MLU74747083657_022024-O.webp',
    precio : 
    1379988,
    titulo : 'Tom Ford',
    descripcion : 'Volumen de la unidad: 100 mL',
    id : 4

 },
 {
  imagen : 'https://http2.mlstatic.com/D_NQ_NP_913148-MLU74827867349_022024-O.webp',
  precio : 339500,
  titulo : 'Perfume Carolina Herrera',
  descripcion : 'Perfume Carolina Herrera CH HC EDT 100 ml para mujer',
  id : 4

},
{
  imagen : 'https://http2.mlstatic.com/D_NQ_NP_926791-MLU70500849572_072023-O.webp',
  precio : 109900,
  titulo : 'Benetton United Dreams',
  descripcion : 'Perfume Benetton United Dreams Live Free 80 Ml Edt Mujer 10',
  id : 4

},
{
  imagen : 'https://http2.mlstatic.com/D_NQ_NP_861945-MCO31090286863_062019-O.webp',
  precio : 89900,
  titulo : 'Perfume Original Colors De Benetton Para Mujer 100ml ',
  descripcion : ' Volumen de la unidad: 100 mL',
  id : 4

},
{
  imagen : 'https://http2.mlstatic.com/D_NQ_NP_660082-MLU73681462619_122023-O.webp',
  precio : 73119,
  titulo : 'Natura Meu Primeiro Femenino 75ml Humor 1 Rojo',
  descripcion : 'Perfume vegano y libre de crueldad animal.',
  id : 4

},
{
  imagen : 'https://http2.mlstatic.com/D_NQ_NP_781325-MLA74806226487_022024-O.webp',
  precio : 
  60199
  ,
  titulo : 'Natura Ekos Frescor Maracuyá Colonia 150 ml para mujer',
  descripcion : 'Perfume vegano y libre de crueldad animal.',
  id : 4

},
{
  imagen : 'https://http2.mlstatic.com/D_NQ_NP_738535-MLU72572224142_112023-O.webp',
  precio : 223912,
  titulo : 'Moschino Toy Boy 100 ml hombre',
  descripcion : 'Notas de fondo: ambermax.',
  id : 4

},
    
       
      
      ]

    };
  },
  mutations: {
    incrementarCantidad(state, id) {
        const index = state.comprasrealizadas.findIndex(item => item.id === id);
        if (index !== -1) {
            state.comprasrealizadas[index].cantidad += 1;
        }
    },
    decrementarCantidad(state, id) {
        const index = state.comprasrealizadas.findIndex(item => item.id === id);
        if (index !== -1 && state.comprasrealizadas[index].cantidad > 1) {
            state.comprasrealizadas[index].cantidad -= 1;
        }
    },
    agregarcompra(state, producto) {
        state.comprasrealizadas.push(producto);
    }
},
actions: {
    incrementarCantidad({ commit }, id) {
        commit('incrementarCantidad', id);
    },
    decrementarCantidad({ commit }, id) {
        commit('decrementarCantidad', id);
    },
    agregarcompra({ commit }, producto) {
        commit('agregarcompra', producto);
    }
},

  
  getters: {
    totalCompras: (state) => {
      return state.comprasrealizadas.reduce((total, item) => total + item.cantidad * item.precio, 0);
    },
    count: (state) => state.count,
    productos: (state) => state.productos,
    compras: (state) => {
      const cantidad = state.comprasrealizadas.reduce((accumulator, objeto) => {
        return accumulator + objeto.cantidad;
      }, 0); 
      return cantidad
    },
    procomprados: (state) => state.comprasrealizadas,

    getProductoById: (state) => (id) => {
        return state.comprasrealizadas.findIndex(pro => pro.id === id);
    }

  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
  return {
    provide: {
      store: store
    }
  }
})

