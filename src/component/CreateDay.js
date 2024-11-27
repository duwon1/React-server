import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
  const days = useFetch("https://hagfish-true-promptly.ngrok-free.app/days");
  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  function addDay() {
    fetch(`https://hagfish-true-promptly.ngrok-free.app/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료 되었습니다");
        navigate(`/`); // history.push 대신 navigate 사용
      }
    });
  }

  return (
      <div>
        <h3>현재 일수 : {days.length}일</h3>
        <button onClick={addDay}>Day 추가</button>
      </div>
  );
}
