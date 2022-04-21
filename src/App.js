import PropTypes from "prop-types";

function Artist({name, picture, rating}) {
  //console.log(props);
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>Spotify Global Rank : {rating} over the world </h4>
    <img src={picture} alt={name}/>
  </div>
  )
};

const artistLike = [
  {
  id: 1,
  name: 'The Weeknd',
  image: "https://www.sound-wave.co.kr/shopimages/soundwave/0020020003553.jpg",
  rating: 3
  },
  {
    id: 2,
    name: 'Giveon',
    image: "https://i1.sndcdn.com/artworks-ObNj9Nyanm3z38i4-HXb5LQ-t500x500.jpg",
    rating: 103
  },
  {
    id: 3,
    name: 'Kanye West',
    image: "https://variety.com/wp-content/uploads/2020/10/kanye-west.jpg?w=681&h=383&crop=1",
    rating: 22
  },
  {
    id: 4,
    name: 'Bruno Mars',
    image: "https://cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/500x500.jpg",
    rating: 12
  },
  {
    id: 5,
    name: 'Frank Ocean',
    image: "https://i.discogs.com/PzVN9OcFAHmmgjin87jsahqFlV8nOgIqLG6hWwxtFXo/rs:fit/g:sm/q:90/h:450/w:450/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIwMTM4/NjgtMTQ5MjE4Njc4/OC0zNDc4LnBuZw.jpeg",
    rating: 166
  }


];

function App() {
  return (
  <div>
    {artistLike.map(dish => <Artist key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
  </div>
  );
}

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default App;