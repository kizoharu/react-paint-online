import React from 'react';
import Canvas from '../components/Canvas';
import SettingBar from '../components/SettingBar';
import Toolbar from '../components/Toolbar';

const Main = () => {
  return (
    <>
      <Toolbar/>
      <SettingBar/>
      <Canvas/>
    </>
  );
};

export default Main;