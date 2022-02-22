import React from 'react';
import ReactDom from 'react-dom';

import Hello from './Hello.jsx';

const dog = {
  name: '来福',
  age: '三岁',
  gender: '雄性',
  desc: '我一进门就看见常威在打来福',
  domID: 'dom-id'
};

ReactDom.render(
  <section id="box">
    <Hello {...dog}></Hello>
  </section>,
  document.getElementById('main_app')
);
