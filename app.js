class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bold: false
    };
  }

  onListItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold':'normal'
    };

    return <li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemHover.bind(this)}>{this.props.item}</li>;
  }

}

var GroceryList = (props) => (
  <ul>
    {
      props.items.map( (item) => (
        <GroceryListItem item={item}/>
      ))
    }
  </ul>
);

ReactDOM.render(<GroceryList items={['apple','pear','toilet paper', 'soap']}/> , document.getElementById("app"));
//
// class GroceryListItem extends React.Component {
//   constructor (props) {
//     super(props);
//
//     this.state = {
//       bold: false
//     };
//   }
//
//   onGroceryListItemHover () {
//      this.setState(
//        {bold: !this.state.bold}
//      );
//   }
//
//   render () {
//
//     var style = {
//       fontWeight: this.state.bold ? '800' : '200'
//     };
//
//     return <li style={style} onMouseOver={this.onGroceryListItemHover.bind(this)} onMouseOut={this.onGroceryListItemHover.bind(this)}>{this.props.item}</li>
//   }
//
// }
//
//
// var GroceryList = (props) => (
//   <ul>
//      {
//
//         props.items.map( (item) => (
//           <GroceryListItem item={item}/>
//         ))
//
//      }
//
//   </ul>
// );
//
