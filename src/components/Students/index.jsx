import axios from "axios";
import { useEffect, useState } from "react";
import { List, Tr } from "./styles.js";
import scroll from "../../images/scroll.svg";
import { useHistory } from "react-router-dom";
import { checkStudentThunk } from "../../store/modules/student/thunk.js";
import { useDispatch } from "react-redux";
const Students = () => {
  const [students, setStudents] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => setStudents(response.data));
  }, []);

  return (
    <List>
      <Tr>
        <th style={{ width: "60%" }}>name</th>
        <th>image</th>
        <th>{"  "}</th>
      </Tr>

      {students?.map((student, index) => (
        <>
          <Tr>
            <td>{student.name}</td>
            <td>{student.house}</td>
            <td style={{ textAlign: "right" }}>
              <button
                onClick={() => (
                  history.push("/ScoreCard"),
                  dispatch(checkStudentThunk(student))
                )}
                style={{ border: 0, outline: 0, padding: 0, cursor: "pointer" }}
              >
                <img src={scroll} alt="scroll" width="20px" />
              </button>
            </td>
          </Tr>
        </>
      ))}
    </List>
  );
};

export default Students;
