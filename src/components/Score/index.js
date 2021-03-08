import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Windown,
  Image,
  HouseName,
  StudantName,
  Input,
  Lose,
  Gain,
  ButtonBox,
  BoxContent,
  BoxImage,
  StudantImage,
  InputBox,
} from "./styles.js";
import cobra from "../../images/cobra.svg";
import falcao from "../../images/falcao.svg";
import leao from "../../images/leao.svg";
import escudo from "../..//images/proteja-a-forma-branca-com-uma-fita.svg";
import texugo from "../../images/texugo.svg";
import { useDispatch } from "react-redux";
import { updateScoreThunk } from "../../store/modules/houseScore/thunk.js";
const Score = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [house, setHouse] = useState([]);
  const [houseImg, setHouseImg] = useState();
  const [score, setScore] = useState(0);
  const student = useSelector((state) => state.student);
  console.log(student[0].house);
  useEffect(() => {
    if (student[0].house === "Gryffindor") {
      setHouse("Gryffindor");
      setHouseImg(leao);
    } else if (student[0].house === "Slytherin") {
      setHouse("Slytherin");
      setHouseImg(cobra);
    } else if (student[0].house === "Hufflepuff") {
      setHouse("Hufflepuff");
      setHouseImg(texugo);
    } else if (student[0].house === "Ravenclaw") {
      setHouse("Ravenclaw");
      setHouseImg(falcao);
    }
  }, [student]);

  return (
    <>
      <Windown></Windown>
      <Box>
        <BoxImage>
          <StudantImage src={student[0].image} />
        </BoxImage>
        <BoxContent>
          <Image src={houseImg} width="300px"></Image>
          <HouseName>{house} </HouseName>
          {student?.map((studant, index) => (
            <StudantName key={index}>{studant.name}</StudantName>
          ))}
          <InputBox>
            <Input type="number" onChange={(e) => setScore(e.target.value)} />{" "}
          </InputBox>

          <ButtonBox>
            <Gain
              onClick={() => (
                dispatch(updateScoreThunk([house, score])), history.push("/")
              )}
            >
              Gain
            </Gain>
            <Lose
              onClick={() => (
                dispatch(updateScoreThunk([house, score * -1])),
                history.push("/")
              )}
            >
              Lose
            </Lose>
          </ButtonBox>
        </BoxContent>
      </Box>
    </>
  );
};

export default Score;
