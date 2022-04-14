import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  //console.log(props);
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div> 
  )
};

const foodLike = [
  {
  id: 1,
  name: 'Kimchi',
  image: "https://img.koreatimes.co.kr/upload/newsV2/images/202106/88dbf0524fd74259b2d00f6cd7341349.jpg/dims/resize/740/optimize",
  rating: 5 
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: "https://src.hidoc.co.kr/image/lib/2021/8/27/1630049987719_0.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
    rating: 4.8
  },
  {
    id: 4,
    name: 'Doncasu',
    image: "http://th2.tmon.kr/thumbs/image/423/336/e17/1b1492318_700x700_95_FIT.jpg",
    rating: 4.5
  },
  {
    id: 5,
    name: 'Kimbap',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuk-uL2dPgvoGQTZQJjHPJlW_JR14RsEAqBgu7jDrT6Ky3zkEMi__imWE3TD16RzIANU&usqp=CAU",
    rating: 5
  }


];

function App() {
  return (
  <div>
    {foodLike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
