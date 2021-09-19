import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { ContainerAll, Title } from './styles';

export default function Header(){
  return(
    <ContainerAll>
      <FontAwesome5 name="dog" size={24} color="#FFF" />
      <Title>AppDogs</Title>
    </ContainerAll>
  );
};