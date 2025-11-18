export interface MenuItem {
  id: string
  nameSpanish: string
  nameEnglish?: string
  description?: string
  price: string
  spicy?: boolean
  mostLoved?: boolean
  image?: string
}

export interface MenuCategory {
  id: string
  name: string
  items: MenuItem[]
  comingSoon?: boolean
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'pintxos',
    name: 'Pintxos',
    items: [
      {
        id: 'p1',
        nameSpanish: 'Gilda',
        description: 'Anchovy, olive, guindilla pepper',
        price: '18 AED',
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'p2',
        nameSpanish: 'Txakoli Splash',
        description: 'Boquerón, olive, piparra',
        price: '20 AED',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'p3',
        nameSpanish: 'Jamón Ibérico de Bellota',
        price: '45 AED',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 'tapas-frias',
    name: 'Tapas Frías',
    items: [
      {
        id: 'tf1',
        nameSpanish: 'Ensalada Mixta',
        description: 'Mixed greens, tuna belly, tomato, onion, sherry vinaigrette',
        price: '48 AED',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tf2',
        nameSpanish: 'Ensalada de Remolacha',
        description: 'Roasted beets, goat cheese, pistachio, citrus vinaigrette',
        price: '52 AED',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tf3',
        nameSpanish: 'Tabla Mixta',
        description: 'Selection of Spanish cheeses & cured meats, quince, marcona almonds',
        price: '135 AED',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tf4',
        nameSpanish: 'Jamón Serrano 24 months',
        price: '85 AED',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tf5',
        nameSpanish: 'Jamón Ibérico de Bellota',
        description: 'Hand-carved',
        price: '175 AED',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 'tapas-calientes',
    name: 'Tapas Calientes',
    items: [
      {
        id: 'tc1',
        nameSpanish: 'Patatas Bravas',
        price: '42 AED',
        mostLoved: true,
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tc2',
        nameSpanish: 'Gambas al Ajillo',
        price: '78 AED',
        mostLoved: true,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tc3',
        nameSpanish: 'Pulpo a la Gallega',
        price: '115 AED',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tc4',
        nameSpanish: 'Albóndigas en Salsa Española',
        price: '68 AED',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tc5',
        nameSpanish: 'Croquetas de Jamón',
        description: '4 pcs',
        price: '55 AED',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tc6',
        nameSpanish: 'Datiles con Bacon',
        price: '62 AED',
        mostLoved: true,
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tc7',
        nameSpanish: 'Chorizo al Vino Tinto',
        price: '68 AED',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tc8',
        nameSpanish: 'Calamares a la Andaluza',
        price: '72 AED',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'tc9',
        nameSpanish: 'Tortilla Española',
        price: '48 AED',
        image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 'para-picar',
    name: 'Para Picar',
    items: [
      {
        id: 'pp1',
        nameSpanish: 'Pan con Tomate',
        price: '28 AED',
        image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'pp2',
        nameSpanish: 'Aceitunas Mixtas',
        price: '32 AED',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'pp3',
        nameSpanish: 'Marcona Almonds',
        price: '35 AED',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 'verduras',
    name: 'Verduras',
    items: [
      {
        id: 'v1',
        nameSpanish: 'Espinacas a la Catalana',
        price: '52 AED',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'v2',
        nameSpanish: 'Setas al Ajillo',
        price: '68 AED',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'v3',
        nameSpanish: 'Pimientos de Padrón',
        price: '55 AED',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'v4',
        nameSpanish: 'Escalivada Catalana',
        price: '58 AED',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 'del-mar',
    name: 'Del Mar',
    items: [
      {
        id: 'dm1',
        nameSpanish: 'Vieiras con Jamón',
        price: '115 AED',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'dm2',
        nameSpanish: 'Bacalao al Pil Pil',
        price: '125 AED',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'dm3',
        nameSpanish: 'Paella Valenciana',
        description: 'For 2',
        price: '295 AED',
        mostLoved: true,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'dm4',
        nameSpanish: 'Paella de Mariscos',
        description: 'For 2',
        price: '325 AED',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'dm5',
        nameSpanish: 'Fideuà Negra',
        description: 'For 2',
        price: '315 AED',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 'carnes',
    name: 'Carnes',
    items: [
      {
        id: 'c1',
        nameSpanish: 'Pollo al Chilindrón',
        price: '95 AED',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'c2',
        nameSpanish: 'Cordero Asado',
        description: 'Slow-roasted lamb leg',
        price: '165 AED',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'c3',
        nameSpanish: 'Chuleta de Cerdo Ibérico',
        price: '175 AED',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 'postres',
    name: 'Postres',
    items: [
      {
        id: 'po1',
        nameSpanish: 'Churros con Chocolate',
        price: '45 AED',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'po2',
        nameSpanish: 'Tarta de Santiago',
        price: '42 AED',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'po3',
        nameSpanish: 'Crema Catalana',
        price: '38 AED',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'po4',
        nameSpanish: 'Torrija con Helado',
        price: '45 AED',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  {
    id: 'shisha',
    name: 'Shisha',
    items: [],
    comingSoon: true,
  },
]

export const happyHour = {
  hours: 'Daily 4:00 PM - 7:00 PM',
  items: [
    'Selected Tapas: 29 AED each',
    'House Sangría: 29 AED',
    'House Wine: 29 AED',
    'Estrella Beer: 29 AED',
  ],
}
