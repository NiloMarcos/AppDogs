import React,{useState} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

import api from '../../services/api';

import { ContainerAll, Title, ListDogs, ContainerDogs, ContainerTextApi, TextApi } from './styles';

export default function Dashboard({navigate}){
  const [dogs, setDogs] = useState([]);

  async function handleDogs(){
    const response = await api.get('/v1/breeds');
    console.log(response.data);
    setDogs(response.data);
  }


  return(
    <ContainerAll>
      <Header/>
      <Title>Screen Dashboard</Title>
      <TouchableOpacity onPress={() => handleDogs()}>
        <Text>Buscar</Text>
      </TouchableOpacity>
      <ListDogs 
        howsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={dogs}
        keyExtractor={(dog) => String(dog.id)}
        renderItem={({ item }) => (
          <ContainerDogs onPress={() => navigation.navigate("Details", { id: item.id })}>
            {/* <Photo source={{ uri: item.image }} /> */}
            <ContainerTextApi>
              <TextApi>Nome: {item.name}</TextApi>
              <TextApi>Status: {item.bred_for}</TextApi>
              <TextApi>Specie: {item.id}</TextApi>
            </ContainerTextApi>
          </ContainerDogs>
        )}
      />

    </ContainerAll>
  );
};