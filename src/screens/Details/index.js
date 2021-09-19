import React,{useState, useEffect} from 'react';
import Header from '../../components/Header';
import { AntDesign } from '@expo/vector-icons';

import api from '../../services/api';

import { ContainerAll, BackButton, Title, ContainerDog, Name, TimeLife, Race, Created, Temperament } from './styles';

export default function Details({route, navigation,}){
  const { id } = route.params;

  const [dogs, setDogs] = useState([]);


  useEffect(() => {
    handleDogs();
  },[])

  async function handleDogs(){
    const response = await api.get(`/v1/breeds/${id}`);
    console.log(response.data);
    setDogs(response.data);
  }


  return(
    <ContainerAll>
      <Header />
      <BackButton onPress={() => navigation.navigate('Dashboard')}>
        <AntDesign name="arrowleft" size={24} color="#FFF" />
      </BackButton>
      
      <Title>Detalhes dos cachorros</Title>

      <ContainerDog>
        <Name>Nome: {dogs.name}</Name>
        <TimeLife>Vida: {dogs.life_span}</TimeLife>
        <Race>Raça: {dogs.breed_group}</Race>
        <Created>Criado: {dogs.bred_for}</Created>
        <Temperament>Temperamento: {dogs.temperament}</Temperament>
      </ContainerDog>


    </ContainerAll>
  );
};