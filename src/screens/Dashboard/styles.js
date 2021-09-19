import styled from 'styled-components/native';

export const ContainerAll = styled.View`
  flex: 1;
`;

export const Title = styled.Text`

`;

export const ListDogs = styled.FlatList`
  margin-left: 10px;
`;

export const ContainerDogs = styled.TouchableOpacity`
  flex-direction: row;
  width: 95%;
  background-color: #c4c4c4;
  margin-top: 8px;
  align-items: center;
  border-radius: 8px;
`;

export const ContainerTextApi = styled.Text`
  margin-left: 15px;
  justify-content: center;

`;

export const TextApi = styled.Text`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: #000;
`;

export const Photo = styled.Image`
  width: 110px;
  height: 110px;
  margin-left: 15px;
`;