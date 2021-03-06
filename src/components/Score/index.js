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
} from "./styles.js";
import cobra from "../../images/cobra.svg";
import falcao from "../../images/falcao.svg";
import leao from "../../images/leao.svg";
import escudo from "../..//images/proteja-a-forma-branca-com-uma-fita.svg";
import texugo from "../../images/texugo.svg";

const Score = () => {
  const history = useHistory();
  const [house, setHouse] = useState([]);
  const [houseImg, setHouseImg] = useState();
  const student = useSelector((state) => state.student);
  console.log(student);
  useEffect(() => {
    if (student[0].house === "Gryffindor") {
      setHouse("Gryffindor");
      setHouseImg(leao);
    } else if (student[0].house === "Slythern") {
      setHouse("Slythern");
      setHouseImg({ cobra });
    } else if (student[0].house === "Hufflepuff") {
      setHouse("Hufflepuff");
      setHouseImg({ texugo });
    } else if (student[0].house === "Ravenclaw") {
      setHouse("Ravenclaw");
      setHouseImg({ falcao });
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
          <Input />
          <ButtonBox>
            <Gain>Gain</Gain> <Lose>Lose</Lose>{" "}
          </ButtonBox>
          <button onClick={() => history.push("/")}>ir pra o coisa</button>
        </BoxContent>
      </Box>
    </>
  );
};

export default Score;
