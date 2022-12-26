import React, { useEffect, } from "react";
import Card from "./components/Card";
import { connect } from "react-redux";
import * as actions from "./redux/actions";

const Home = ({ fetchAnimeList, animeList, setAnimeId }) => {
  
  useEffect(() => {
    fetchAnimeList();
  }, [fetchAnimeList]);

  console.log(["animeList", animeList]);

  return (
    <div style={styles.animeGrid}>
      <div style={styles.AnimeGrid}>
        {animeList?.map((item) => {
          return <Card {...item} key={item?.mal_id} setAnimeId={setAnimeId} />;
        })}
      </div>
    </div>
  );
};

const styles = {
  animeGrid: {
    backgroundColor: "black",
  },
  AnimeGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

const mapStateToProps = (state) => {
  return {
    animeList: state.animeReducer.animeList,
  };
};

export default connect(mapStateToProps, actions)(Home);
