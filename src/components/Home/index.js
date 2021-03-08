import { Link, useHistory } from "react-router-dom";
import cobra from "../../images/cobra.svg";
import falcao from "../../images/falcao.svg";
import leao from "../../images/leao.svg";
import escudo from "../..//images/proteja-a-forma-branca-com-uma-fita.svg";
import texugo from "../../images/texugo.svg";
import {
  CardHeaderStyled,
  StyledPaper,
  CardStyled,
  Box,
  ShieldImage,
  AnimalImage,
  Title,
  BoxName,
} from "./styles.js";
import { useSelector } from "react-redux";
import Students from "../Students";
const Home = () => {
  // const classes = useStyles();
  const history = useHistory();
  const score = useSelector((state) => state.houseScore).sort((a, b) => {
    if (a.score > b.score) {
      return -1;
    } else if (a.score < b.score) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log("romaneu", score);
  return (
    <div>
      <CardHeaderStyled>
        <CardStyled>
          <ShieldImage src={escudo} width="100px"></ShieldImage>
          <Title>Hogwarts Score Manager</Title>
        </CardStyled>
      </CardHeaderStyled>
      <Box>
        {/* <button onClick={() => history.push("/ScoreCard")}>ir pra o coisa</button> */}

        {score.map((house, index) => {
          if (house.name === "Gryffindor") {
            house.image = leao;
          }
          if (house.name === "Slytherin") {
            house.image = cobra;
          }
          if (house.name === "Hufflepuff") {
            house.image = texugo;
          }
          if (house.name === "Ravenclaw") {
            house.image = falcao;
          }
        })}

        {score.map((house, index) => (
          <StyledPaper key={index}>
            <div>{house.name}</div>
            <img src={house.image} width="200px" />
            <div>{house.score}</div>
          </StyledPaper>
        ))}

        {/* <StyledPaper>
          <img src={cobra} width="200px"></img>
        </StyledPaper>
        <StyledPaper>
          <img src={texugo} width="200px"></img>
          <div> {}</div>
        </StyledPaper>
        <StyledPaper>
          <img src={falcao} width="200px"></img>
        </StyledPaper>
        <StyledPaper>
          <img src={leao} width="200px"></img>
        </StyledPaper> */}
      </Box>
      <BoxName>
        <h2 style={{ paddingLeft: "5%", paddingTop: "2rem", color: "#5777A8" }}>
          Alunos
        </h2>

        <Students></Students>
      </BoxName>
    </div>
  );
};

export default Home;
