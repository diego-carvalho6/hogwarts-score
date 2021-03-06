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
import Students from "../Students";
const Home = () => {
  // const classes = useStyles();
  const history = useHistory();
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
        <StyledPaper first={"first"} left="45">
          <img src={cobra} width="200px"></img>
        </StyledPaper>
        <StyledPaper second={"second"} left="486">
          <img src={texugo} width="200px"></img>
        </StyledPaper>
        <StyledPaper third={"third"} left="930">
          <img src={falcao} width="200px"></img>
        </StyledPaper>
        <StyledPaper fourth={"fourth"} left="1368">
          <img src={leao} width="200px"></img>
        </StyledPaper>
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
