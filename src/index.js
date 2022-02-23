import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    // 创建时（挂载阶段）
    // constructor 创建组件时，最先执行；初始化 state，为事件处理程序绑定 this。
    console.log('父组件', '创建时（挂载阶段）', '生命周期钩子函数： constructor');

    this.props = props;

    this.state = {
      isInit: true,
      flag: true,
      count: 0
    };
  }

  componentDidMount() {
    // 创建时（挂载阶段）
    // componentDidMount 组件挂载（完成 DOM 渲染）后；发送网络请求，DOM 操作。
    console.log('父组件', '创建时（挂载阶段）', '生命周期钩子函数： componentDidMount');
    console.log(document.getElementById('test_box'));

    this.setState({
      isInit: false
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('父组件', '更新时（更新阶段）', '生命周期钩子函数： shouldComponentUpdate', '在 render 之前', '最新的数据', nextProps, nextState, '当前的数据', this.props, this.state);

    /**
     * 通过返回值决定该组件是否重新渲染
     * 返回 true 表示重新渲染
     * 返回 false 表示不重新渲染
     */
    return true;
  }

  componentDidUpdate(prevProps) {
    // 更新时（更新阶段）
    // componentDidUpdate 组件更新（完成 DOM 渲染）后；发送网络请求，DOM 操作，注意：如果要 `setState()` 必须放在一个条件中（会递归）
    console.log('父组件', '更新时（更新阶段）', '生命周期钩子函数： componentDidUpdate', '上一次的 props', prevProps, '当前的 props', this.props);

    // 每使用一次 setState 都会触发一次 更新阶段 导致无限递归，需要加条件判断使用
    if (prevProps.props !== this.props.props) {
      // this.setState({});
      // 发送请求
    }
  }

  componentWillUnmount() {
    // 卸载时（卸载阶段）
    // componentWillUnmount 组件卸载（从页面中消失）；执行清理工作（比如：清理定时器）
    console.log('父组件', '卸载时（卸载阶段）', '生命周期钩子函数： componentWillUnmount');
  }

  handleClickAdd = () => {
    this.setState({
      count: this.state.count + 1
    });

    // 强制更新
    // this.forceUpdate();
  };

  handleClickFlag = () => {
    this.setState({
      flag: !this.state.flag,
      count: this.state.flag ? this.state.count : 0
    });
  };

  render() {
    // 创建时（挂载阶段） / 更新时（更新阶段）
    // render 每次组件渲染都会触发；渲染 UI（注意：不能调用 `setState()`）。
    console.log('父组件', this.state.isInit ? '创建时（挂载阶段）' : '更新时（更新阶段）', '生命周期钩子函数： render');

    // 一般来说禁止在 render 中使用 setState，每使用一次 setState 都会触发一次 更新阶段 导致无限递归

    return (
      <div id="test_box">
        <h3>吃饭，睡觉，打豆豆。。。</h3>
        {this.state.flag ? <PlayPeas count={this.state.count}></PlayPeas> : <p>豆豆挂了</p>}
        <button onClick={this.handleClickAdd}>打豆豆</button>
        <br></br>
        <hr></hr>
        <br></br>
        <button onClick={this.handleClickFlag}>{this.state.flag ? '豆豆挂了' : '复活豆豆'}</button>
      </div>
    );
  }
}

class PlayPeas extends React.Component {
  constructor(props) {
    super(props);

    // 创建时（挂载阶段）
    // constructor 创建组件时，最先执行；初始化 state，为事件处理程序绑定 this。
    console.log('子组件', '创建时（挂载阶段）', '生命周期钩子函数： constructor');

    this.props = props;

    this.state = {
      isInit: true
    };
  }

  componentDidMount() {
    // 创建时（挂载阶段）
    // componentDidMount 组件挂载（完成 DOM 渲染）后；发送网络请求，DOM 操作。
    console.log('子组件', '创建时（挂载阶段）', '生命周期钩子函数： componentDidMount');

    this.setState({
      isInit: false
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('子组件', '更新时（更新阶段）', '生命周期钩子函数： shouldComponentUpdate', '在 render 之前', '最新的数据', nextProps, nextState, '当前的数据', this.props, this.state);

    /**
     * 通过返回值决定该组件是否重新渲染
     * 返回 true 表示重新渲染
     * 返回 false 表示不重新渲染
     */
    return true;
  }

  componentDidUpdate(prevProps) {
    // 更新时（更新阶段）
    // componentDidUpdate 组件更新（完成 DOM 渲染）后；发送网络请求，DOM 操作，注意：如果要 `setState()` 必须放在一个条件中（会递归）
    console.log('子组件', '更新时（更新阶段）', '生命周期钩子函数： componentDidUpdate', '上一次的 props', prevProps, '当前的 props', this.props);

    // 每使用一次 setState 都会触发一次 更新阶段 导致无限递归，需要加条件判断使用
    if (prevProps.props !== this.props.props) {
      // this.setState({});
      // 发送请求
    }
  }

  componentWillUnmount() {
    // 卸载时（卸载阶段）
    // componentWillUnmount 组件卸载（从页面中消失）；执行清理工作（比如：清理定时器）
    console.log('子组件', '卸载时（卸载阶段）', '生命周期钩子函数： componentWillUnmount');
  }

  render() {
    // 创建时（挂载阶段） / 更新时（更新阶段）
    // render 每次组件渲染都会触发；渲染 UI（注意：不能调用 `setState()`）。
    console.log('子组件', this.state.isInit ? '创建时（挂载阶段）' : '更新时（更新阶段）', '生命周期钩子函数： render');

    return <p>打了{this.props.count}次豆豆</p>;
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));
