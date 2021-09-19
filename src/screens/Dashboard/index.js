import React,{useState, useEffect} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

import api from '../../services/api';

import { ContainerAll, Title, ListDogs, ContainerDogs, ContainerTextApi, TextApi, Photo } from './styles';

export default function Dashboard({navigation}){
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    handleDogs();
  },[])

  async function handleDogs(){
    const response = await api.get('/v1/breeds');
    console.log(response.data);
    setDogs(response.data);
  }

  return(
    <ContainerAll>
      <Header/>
      <Title>Screen Dashboard</Title>

      <ListDogs 
        howsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={dogs}
        keyExtractor={(dog) => String(dog.id)}
        renderItem={({ item }) => (
          <ContainerDogs onPress={() => navigation.navigate("Details", { id: item.id })}>
            <Photo source={{ uri: item.image.url }} />
            <ContainerTextApi>
              <TextApi>Nome: {item.name}</TextApi>{'\n'}
              <TextApi>Tempo de vida: {item.life_span}</TextApi>{'\n'}
              <TextApi>Cidade Natal: {item.country_code}</TextApi>{'\n'}
            </ContainerTextApi>
          </ContainerDogs>
        )}
      />

    </ContainerAll>
  );
};