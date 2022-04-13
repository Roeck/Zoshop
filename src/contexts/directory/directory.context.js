import { createContext } from 'react';

const DirectoryContext = createContext({
  collections: [
    {
      title: 'Laptops',
      imageUrl: 'https://images.pexels.com/photos/2473183/pexels-photo-2473183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      id: 1,
      linkUrl: 'shop/laptops'
    },
    {
      title: 'Desktops',
      imageUrl: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      id: 2,
      linkUrl: 'shop/desktops'
    },
    {
      title: 'Keyboards',
      imageUrl: 'https://images.pexels.com/photos/7625410/pexels-photo-7625410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      id: 3,
      linkUrl: 'shop/keyboards'
    },
    {
      title: 'Audio',
      imageUrl: 'https://images.pexels.com/photos/2918997/pexels-photo-2918997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      id: 4,
      linkUrl: 'shop/audio'
    },
    {
      title: 'videogames',
      imageUrl: 'https://images.pexels.com/photos/5961235/pexels-photo-5961235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      id: 5,
      linkUrl: 'shop/videogames'
    }
  ]
});

export default DirectoryContext;
