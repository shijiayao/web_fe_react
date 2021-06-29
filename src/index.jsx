import React from 'react';
import ReactDom from 'react-dom';

let num = 5566;

let str = '这是一段字符串';

let title_01 = '标签title';

let title_02 = '数组标题H2';

let H1 = <h1>标题H1</h1>;

let class_name = 'class_name';

let obj = {
  p: <p>一段文本</p>,
  num: 10
};

let nodeArr = [
  <h1 className="H1" title={title_01} key="01">
    数组标题H1
  </h1>,
  <h2 className="H2" key="02">
    {title_02}
  </h2>,
  <h3 id="H3" key="03">
    {'标题' + 'H3' + (1 + 2 + 3)}
  </h3>
];

let arr = ['大娃', '二娃', '三娃', '四娃', '五娃', '六娃', '七娃'];

ReactDom.render(
  <section className={class_name} title={title_01}>
    {H1}
    <p className=""></p>
    <hr></hr>
    {num}
    <hr></hr>
    {str}
    {nodeArr}
    <hr></hr>
    {arr.map((element, index) => {
      return <h3 key={element}>{`${index + 1} ----- ${element}`}</h3>;
    })}
    <hr></hr>
    {obj.p}
    <hr></hr>
    {
      // 单行注释
    }
    <br />
    {/* 多行注释 */}
    <label htmlFor="id_box"></label>
  </section>,
  document.getElementById('main_app')
);
