var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
class Index extends React.Component {

	componentWillMount(){
		//定义你的逻辑即可
		console.log("Index - componentWillMount");
	}

	componentDidMount(){
		console.log("Index - componentDidMount");
	}

	render() {
		/*
		var component;
		if (用户已登录) {
			component = <ComponentLoginedHeader/>
		}
		else{
			component = <ComponentHeader/>
		}
		*/
		return (
			<div>
				<ComponentHeader/>
				<BodyIndex/>
				<ComponentFooter/>
			</div>
		);
	}
}
ReactDOM.render(
	<Index/>, document.getElementById('example'));
