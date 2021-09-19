import React,{useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';

import api from '../../services/api';

export default function Details({route, navigation,}){
  const { id } = route.params;

  const [dogs, setDogs] = useState([]);


  useEffect(() => {
    handleDogs();
  },[])

  async function handleDogs(){
    const response = await api.get(`/v1/breeds/${id}`);
    // console.log(response.data);
    setDogs(response.data);
  }


  return(
    <View>
      <Header />
      <Text>{dogs.name}</Text>
    </View>
  );
};