import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "./redux/actions";
import moment from 'moment'

const AnimeDetails = (props) => {
  const { animeId, animeDetails, news, getAnimeById, getNews } = props;
  console.log(["props", props]);
  useEffect(() => {
    if (animeId) {
      getAnimeById(animeId);
    }
  }, [animeId, getAnimeById]);

  useEffect(() => {
    if (animeId) {
      getNews(animeId);
    }
  }, [animeId, getNews]);

  console.log(["animeDetails, news", animeDetails, news]);

  return (
    <Container style={{ paddingTop: 32 }}>
      <Row>
        <Col sm={4}>
          <Card style={{ width: "18rem", margin: 10 }}>
            <Card.Img
              variant="top"
              src={animeDetails?.images?.jpg?.image_url}
              style={{ height: 400, width: "100%" }}
            />
            <Card.Body>
              <Card.Title>{animeDetails?.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8}>
          <h2>Anime Full Details</h2>
          <Card border="light" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
                Synopsis
              </Card.Title>
              <Card.Text style={{ textAlign: "left" }}>
                {animeDetails?.synopsis}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="light" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
              Background
              </Card.Title>
              <Card.Text style={{ textAlign: "left" }}>
                {animeDetails?.background}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card border="light" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
              Recent News
              </Card.Title>
            </Card.Body>
            <hr />
            {news && news.length > 0 &&  news.map((item)=> {
                return (<Row>
                    <Col sm={3}>
                    <Card style={{ width: 200, margin: 10 }}>
                <Card.Img
                  variant="top"
                  src={item?.images?.jpg?.image_url}
                  style={{ height: 200, width: "100%" }}
                />
              </Card>
                    </Col>
                    <Col sm={9}>
                    <Card.Body>
                  <Card.Text style={{color: 'blue', fontSize: 16, fontWeight: 'bold', textAlign: 'left'}}>{item?.title}</Card.Text>
                  <Card.Text style={{color: 'black', fontSize: 16, fontWeight: '400', textAlign: 'left'}}>{item?.excerpt}</Card.Text>
                  <Card.Text style={{color: 'black', fontSize: 16, fontWeight: '400', textAlign: 'left'}}>{moment(item?.date).format("Do MMM YYYY HH:mm A")} by {item?.author_username
}</Card.Text>
                </Card.Body>
                    </Col>
                    <hr />
                </Row>)
            })}
          </Card>
          <br />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    animeId: state.animeReducer.animeId,
    animeDetails: state.animeReducer.animeDetails,
    news: state.animeReducer.news,
  };
};

export default connect(mapStateToProps, actions)(AnimeDetails);
