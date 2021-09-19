import React from 'react';
import Header from '../../components/Header';

import { ContainerAll, Title } from './styles';

export default function Dashboard(){
  return(
    <ContainerAll>
      <Header/>
      <Title>Screen Dashboard</Title>
    </ContainerAll>
  );
};