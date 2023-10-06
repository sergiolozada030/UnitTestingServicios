import { CreateProductDTO, Product } from 'src/app/models/product.model';

export const MOCK_NEW_PRODUCT: CreateProductDTO = {
  title: 'Es Nuevo',
  price: 100,
  description: 'Lorem ipsum dolor',
  images: ['111'],
  categoryId: 1,
};

export const MOCK_PRODUCTOS: Product[] = [
  {
    id: 204,
    title: 'Nuevo Titulo',
    price: 100,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur magnam dolorem earum nemo cupiditate a voluptates fugiat ipsa voluptatibus!',
    images: [
      'https://source.unsplash.com/random',
      'https://picsum.photos/536/354',
      'https://randompicturegenerator.com/img/picture-generator/54e6d4414a5bb10ff3d8992cc12c30771037dbf85254794e722e7ed3974f_640.jpg',
    ],
    creationAt: '2023-10-03T19:52:30.000Z',
    updatedAt: '2023-10-03T20:59:16.000Z',
    category: {
      id: 1,
      name: 'phone',
      image: 'https://i.imgur.com/DumuKkD.jpeg',
      creationAt: '2023-10-03T19:00:54.000Z',
      updatedAt: '2023-10-03T19:37:04.000Z',
    },
  },
  {
    id: 205,
    title: 'Nuevo Titulo',
    price: 2000,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur magnam dolorem earum nemo cupiditate a voluptates fugiat ipsa voluptatibus!',
    images: [
      'https://source.unsplash.com/random',
      'https://picsum.photos/536/354',
      'https://randompicturegenerator.com/img/picture-generator/54e6d4414a5bb10ff3d8992cc12c30771037dbf85254794e722e7ed3974f_640.jpg',
    ],
    creationAt: '2023-10-03T19:54:26.000Z',
    updatedAt: '2023-10-03T20:59:28.000Z',
    category: {
      id: 1,
      name: 'phone',
      image: 'https://i.imgur.com/DumuKkD.jpeg',
      creationAt: '2023-10-03T19:00:54.000Z',
      updatedAt: '2023-10-03T19:37:04.000Z',
    },
  },
  {
    id: 205,
    title: 'Nuevo Titulo',
    price: -100,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur magnam dolorem earum nemo cupiditate a voluptates fugiat ipsa voluptatibus!',
    images: [
      'https://source.unsplash.com/random',
      'https://picsum.photos/536/354',
      'https://randompicturegenerator.com/img/picture-generator/54e6d4414a5bb10ff3d8992cc12c30771037dbf85254794e722e7ed3974f_640.jpg',
    ],
    creationAt: '2023-10-03T19:54:26.000Z',
    updatedAt: '2023-10-03T20:59:28.000Z',
    category: {
      id: 1,
      name: 'phone',
      image: 'https://i.imgur.com/DumuKkD.jpeg',
      creationAt: '2023-10-03T19:00:54.000Z',
      updatedAt: '2023-10-03T19:37:04.000Z',
    },
  },
];
