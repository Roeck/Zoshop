import './categories.styles.scss';

const App = () => {
  const categories = [
    {
      "id": 1,
      "title": "Laptops",
      "imageUrl": "https://images.pexels.com/photos/2473183/pexels-photo-2473183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      "id": 2,
      "title": "Desktops",
      "imageUrl": "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      "id": 3,
      "title": "Keyboards",
      "imageUrl": "https://images.pexels.com/photos/7625410/pexels-photo-7625410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      "id": 4,
      "title": "Audio",
      "imageUrl": "https://images.pexels.com/photos/2918997/pexels-photo-2918997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      "id": 5,
      "title": "Videogames",
      "imageUrl": "https://images.pexels.com/photos/5961235/pexels-photo-5961235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ]

  return (
    <div className='categories-container'>
      {categories.map(({ title, id, imageUrl }) => (
        <div key={id} className='category-container'>
          <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
          }} />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;