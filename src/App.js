import './App.css';
import styled from 'styled-components';
const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 162px;
  height: 250px;
`;

const Title = styled.h2`
  font-size: 15px;
`;
const ItemWrap = styled.div`
  width: 162px;
  height: 544px;
  text-align: center;
  margin-right: 200px;
`
const Wrap = styled.div`
  padding: 250px;
  display: flex;
  background-color: darksalmon;
`;
const ListWrap = styled.ul`
  padding: 10px 5px 10px 5px;
  width: 162px;
  height: 20px;
  display: flex;
  list-style: none;
  background-color: white;
  border-radius: 50px;
`;
const TimeToCook = styled.li`
  font-size: 12px;
  margin-right: 5px;
`;
const Servings = styled.li`
  font-size: 12px;
  margin-right: 5px;
`;
const Weighs = styled.li`
  font-size: 12px;
`;
const DifTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`
const Difficulty = styled.div`
  width: 162px;
  height: 100px;
  padding: 5px;
  background-color: white;
  border-radius: 15px;
`
const BtnList = styled.div`
  display: flex;
  width: 162px;
  justify-content: space-around;
`
const EasyBtn = styled.button`
  width: 40px;
  height: 25px;
  color: black;
  background-color: wheat;
  padding: 0px;
  border-radius: 25px;
`
const MediumBtn = styled.button`
  width: 55px;
  height: 25px;
  color: black;
  background-color: wheat;
   padding: 0px;
   border-radius: 25px;
`
const HardBtn = styled.button`
  width: 40px;
  height: 25px;
  color: black;
  background-color: wheat;
  padding: 0px;
  border-radius: 25px;
`
const EasyActiveBtn = styled.button`
  width: 40px;
  height: 25px;
  color: white;
  background-color: pink;
  padding: 0px;
   border-radius: 25px;
`
const MediumActiveBtn = styled.button`
  width: 55px;
  height: 25px;
  color: white;
  background-color: pink;
  padding: 0px;
   border-radius: 25px;
`
const HardActiveBtn = styled.button`
  width: 40px;
  height: 25px;
  color: white;
  background-color: pink;
  padding: 0px;
   border-radius: 25px;
`
function App() {
  return (
    <Wrap>
      <ItemWrap>
        <Image src='../images/burger.png' alt='Burger'></Image>
        <Title>Tasty Burger</Title>
        <ListWrap>
          <TimeToCook>20 min</TimeToCook>
          <Servings>6 servings</Servings>
          <Weighs>210 calories</Weighs>
        </ListWrap>
        <Difficulty>
          <DifTitle>Difficulty</DifTitle>
          <BtnList>
            <EasyActiveBtn>Easy</EasyActiveBtn>
            <MediumBtn>Medium</MediumBtn>
            <HardBtn>Hard</HardBtn>
          </BtnList>
        </Difficulty>
      </ItemWrap>
      <ItemWrap>
        <Image src='../images/chickenbiryani.png' alt='chickenbiryani'></Image>
        <Title>Chicken Biryani</Title>
        <ListWrap>
          <TimeToCook>15 min</TimeToCook>
          <Servings>3 servings</Servings>
          <Weighs>600 calories</Weighs>
        </ListWrap>
        <Difficulty>
          <DifTitle>Difficulty</DifTitle>
          <BtnList>
            <EasyActiveBtn>Easy</EasyActiveBtn>
            <MediumBtn>Medium</MediumBtn>
            <HardBtn>Hard</HardBtn>
          </BtnList>
        </Difficulty>
      </ItemWrap>
      <ItemWrap>
        <Image src='../images/cookedpotato.png' alt='cookedpotato'></Image>
        <Title>Cooked Potato</Title>
        <ListWrap>
          <TimeToCook>30 min</TimeToCook>
          <Servings>2 servings</Servings>
          <Weighs>320 calories</Weighs>
        </ListWrap>
        <Difficulty>
          <DifTitle>Difficulty</DifTitle>
          <BtnList>
            <EasyBtn>Easy</EasyBtn>
            <MediumActiveBtn>Medium</MediumActiveBtn>
            <HardBtn>Hard</HardBtn>
          </BtnList>
        </Difficulty>
      </ItemWrap>
      <ItemWrap>
        <Image src='../images/spicypotatosalad.png' alt='spicypotatosalad'></Image>
        <Title>Spicy Potato Salad</Title>
        <ListWrap>
          <TimeToCook>40 min</TimeToCook>
          <Servings>4 servings</Servings>
          <Weighs>700 calories</Weighs>
        </ListWrap>
        <Difficulty>
          <DifTitle>Difficulty</DifTitle>
          <BtnList>
            <EasyBtn>Easy</EasyBtn>
            <MediumBtn>Medium</MediumBtn>
            <HardActiveBtn>Hard</HardActiveBtn>
          </BtnList>
        </Difficulty>
      </ItemWrap>
    </Wrap>
  );
}

export default App;