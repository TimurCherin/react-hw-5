import './App.css';
import styled from 'styled-components';
import burgerImg from './images/burger.png'
import chickenbiryaniImg from './images/chickenbiryani.png'
import cookedpotato from './images/cookedpotato.png'
import spicypotatosalad from './images/spicypotatosalad.png'
import { Image, Title, TimeToCook, Servings, Weighs } from './components/infoList'
import { DifTitle, Difficulty, BtnList, EasyBtn, MediumBtn, HardBtn, EasyActiveBtn, MediumActiveBtn, HardActiveBtn } from './components/buttonList'
const Wrap = styled.div`
  padding: 250px;
  display: flex;
  background-color: darksalmon;
`;
const ItemWrap = styled.div`
  width: 200px;
  height: 544px;
  text-align: center;
  margin-right: 150px;
`
const ListWrap = styled.ul`
  padding: 10px 5px 10px 5px;
  width: 162px;
  height: 20px;
  display: flex;
  list-style: none;
  background-color: white;
  border-radius: 50px;
    margin-left: auto;
  margin-right: auto;
`;
function App() {
  return (
    <Wrap>
      <ItemWrap>
        <Image src={burgerImg} alt='Burger'></Image>
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
        <Image src={chickenbiryaniImg} alt='chickenbiryani'></Image>
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
        <Image src={cookedpotato} alt='cookedpotato'></Image>
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
        <Image src={spicypotatosalad} alt='spicypotatosalad'></Image>
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