import styled from 'styled-components/native';

export const Img = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border-width: 4px;
  border-color: #fff;
`;
export const Content = styled.View`
  width: 260px;
  padding: 5px;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
export const Bio = styled.Text`
  color: #666;
  font-size: 15px;
  margin-top: 5px;
`;

export const Techs = styled.Text`
  margin-top: 5px;
`;
export const Form = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
`;

export const Box = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  background: #fff;
  color: #333;
  border-radius: 25px;
  padding: 5px 20px;
  font-size: 16px;
`;
export const Btn = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: #ff9000;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-left: 15px;
`;

export const Info = styled.Text`
  text-align: center;
  margin-top: 6px;
  font-size: 16px;
  font-weight: bold;
`;
