import React from 'react';

export default function Hello(props) {
  // return null;

  // 不论是 Vue 还是 React 传递数据的 props 都是只读的
  console.log(props);

  return (
    <section id={props.domID}>
      <ol>
        {Object.keys(props).map((element, index) => {
          return <li key={index}>{props[element]}</li>;
        })}
      </ol>
    </section>
  );
}
