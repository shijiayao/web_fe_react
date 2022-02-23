import React from 'react';

class Hello extends React.Component {
  constructor() {
    super();

    // 创建 ref
    this.textRef = React.createRef();
  }

  getTextValue = () => {
    console.log('ref textRef 的值', this.textRef.current.value);
  };

  render() {
    return (
      <div>
        {/* 将 ref 对象添加到 UI */}
        <input type="text" ref={this.textRef}></input>
        <br></br>
        <br></br>
        <button onClick={this.getTextValue}>获取 ref textRef 的值</button>
      </div>
    );
  }
}

export default Hello;
