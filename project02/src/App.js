import "./App.css";
import MenuItem from "./components/MenuItem";

function App() {

  /*
    Component (컴포넌트)
    - 반복된느 코드를 하나로 묶어서 컴포넌트로 만든다
    - 내가 원하는 코드를 묶어서 '태그화' 시킨다.
    ** 반드시 대문자로 시작을 해야한다. 
      => 기존 HTML 태그(DOM요소)와 구분하기 위함!
    
    ** export - import 는 필수!

    
  */
  

  /*
    Props (프로퍼티, 프롭스)
  */

  return (
    <div>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </div>
  );
}

export default App;
