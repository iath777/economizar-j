export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  store: string;
  distance: number;
  discount?: number;
  category: string;
}

export interface GasStation {
  id: string;
  name: string;
  brand: string;
  distance: number;
  gasoline: number;
  ethanol: number;
  diesel: number;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface OnlineDeal {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  marketplace: string;
  discount: number;
  freeShipping: boolean;
}

export const categories: Category[] = [
  { id: '1', name: 'Consumíveis', icon: 'ShoppingBasket', color: 'bg-orange-100 text-orange-600' },
  { id: '2', name: 'Farmácia', icon: 'Pill', color: 'bg-green-100 text-green-600' },
  { id: '3', name: 'Automotivo', icon: 'Car', color: 'bg-blue-100 text-blue-600' },
  { id: '4', name: 'Casa', icon: 'Home', color: 'bg-purple-100 text-purple-600' },
  { id: '5', name: 'Hardware', icon: 'Cpu', color: 'bg-slate-100 text-slate-600' },
  { id: '6', name: 'Vestuário', icon: 'Shirt', color: 'bg-pink-100 text-pink-600' },
  { id: '7', name: 'Pet Shop', icon: 'PawPrint', color: 'bg-amber-100 text-amber-600' },
  { id: '8', name: 'Eletrônicos', icon: 'Smartphone', color: 'bg-cyan-100 text-cyan-600' },
];

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Arroz Tio João 5kg',
    price: 24.90,
    originalPrice: 32.90,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&q=80',
    store: 'Mercado Extra',
    distance: 0.8,
    discount: 24,
    category: 'Consumíveis'
  },
  {
    id: '2',
    name: 'Dipirona 500mg 20cp',
    price: 8.90,
    originalPrice: 12.50,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&q=80',
    store: 'Drogasil',
    distance: 1.2,
    discount: 29,
    category: 'Farmácia'
  },
  {
    id: '3',
    name: 'Óleo Motor 5W30 1L',
    price: 45.90,
    originalPrice: 59.90,
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=200&q=80',
    store: 'AutoZone',
    distance: 2.1,
    discount: 23,
    category: 'Automotivo'
  },
  {
    id: '4',
    name: 'Detergente Ypê 500ml',
    price: 2.49,
    originalPrice: 3.29,
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=200&q=80',
    store: 'Atacadão',
    distance: 3.5,
    discount: 24,
    category: 'Casa'
  },
];

export const bestSellers: Product[] = [
  {
    id: '5',
    name: 'Coca-Cola 2L',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=200&q=80',
    store: 'Carrefour',
    distance: 1.5,
    category: 'Consumíveis'
  },
  {
    id: '6',
    name: 'Sabonete Dove',
    price: 4.29,
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=200&q=80',
    store: 'Drogaria SP',
    distance: 0.9,
    category: 'Farmácia'
  },
  {
    id: '7',
    name: 'Papel Higiênico 12un',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=200&q=80',
    store: 'Assaí',
    distance: 2.3,
    category: 'Casa'
  },
  {
    id: '8',
    name: 'Café Pilão 500g',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&q=80',
    store: 'Pão de Açúcar',
    distance: 1.8,
    category: 'Consumíveis'
  },
  {
    id: '9',
    name: 'Leite Integral 1L',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&q=80',
    store: 'Dia',
    distance: 0.6,
    category: 'Consumíveis'
  },
  {
    id: '10',
    name: 'Ração Dog Chow 15kg',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=200&q=80',
    store: 'Petz',
    distance: 3.2,
    category: 'Pet Shop'
  },
];

export const gasStations: GasStation[] = [
  {
    id: '1',
    name: 'Posto Shell Centro',
    brand: 'Shell',
    distance: 0.5,
    gasoline: 5.89,
    ethanol: 3.99,
    diesel: 5.49,
    updatedAt: 'Há 2 horas'
  },
  {
    id: '2',
    name: 'Auto Posto Ipiranga',
    brand: 'Ipiranga',
    distance: 1.2,
    gasoline: 5.79,
    ethanol: 3.89,
    diesel: 5.39,
    updatedAt: 'Há 1 hora'
  },
  {
    id: '3',
    name: 'Posto BR 24h',
    brand: 'Petrobras',
    distance: 1.8,
    gasoline: 5.69,
    ethanol: 3.79,
    diesel: 5.29,
    updatedAt: 'Há 30 min'
  },
  {
    id: '4',
    name: 'Posto Ale Express',
    brand: 'Ale',
    distance: 2.4,
    gasoline: 5.59,
    ethanol: 3.69,
    diesel: 5.19,
    updatedAt: 'Há 4 horas'
  },
];

export const onlineDeals: OnlineDeal[] = [
  {
    id: '1',
    name: 'Fone Bluetooth TWS Pro',
    price: 79.90,
    originalPrice: 159.90,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&q=80',
    marketplace: 'Mercado Livre',
    discount: 50,
    freeShipping: true
  },
  {
    id: '2',
    name: 'Smartwatch Fit Band',
    price: 89.90,
    originalPrice: 149.90,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80',
    marketplace: 'Amazon',
    discount: 40,
    freeShipping: true
  },
  {
    id: '3',
    name: 'Câmera Ring Doorbell',
    price: 299.90,
    originalPrice: 499.90,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=200&q=80',
    marketplace: 'Shopee',
    discount: 40,
    freeShipping: false
  },
  {
    id: '4',
    name: 'Echo Dot 5ª Geração',
    price: 249.00,
    originalPrice: 399.00,
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=200&q=80',
    marketplace: 'Amazon',
    discount: 38,
    freeShipping: true
  },
  {
    id: '5',
    name: 'Carregador Turbo 65W',
    price: 59.90,
    originalPrice: 119.90,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=200&q=80',
    marketplace: 'AliExpress',
    discount: 50,
    freeShipping: false
  },
  {
    id: '6',
    name: 'Headphone Gamer RGB',
    price: 129.90,
    originalPrice: 249.90,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=200&q=80',
    marketplace: 'Kabum',
    discount: 48,
    freeShipping: true
  },
];
