import React from "react";
import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";

const AnimeCard = ({ title, images, setAnimeId, mal_id }) => {

  return (
    <Card style={{ width: "18rem", margin: 10 }} onClick={()=> setAnimeId(mal_id)}>
    <Link to={`/details/${mal_id}`}>
      <Card.Img
        variant="top"
        src={images?.jpg?.image_url}
        style={styles.image}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      </Link>
    </Card>
  );
};

const styles = {
  image: {
    height: 400,
    width: "100%",
  },
};

export default AnimeCard;
