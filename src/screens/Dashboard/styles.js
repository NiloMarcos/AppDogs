import styled from 'styled-components/native';

export const ContainerAll = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: 'Poppins_700Bold';
`;

export const ListDogs = styled.FlatList`
  margin-left: 7px;
`;

export const ContainerDogs = styled.TouchableOpacity`
  flex-direction: row;
  width: 95%;
  background-color: #caf0f8;
  margin-top: 8px;
  align-items: center;
  border-radius: 8px;
`;

export const ContainerTextApi = styled.Text`
  margin-left: 8px;
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