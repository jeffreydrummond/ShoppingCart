// use of "props" to set data
function NavBar(props) {
  
  const list = props.menuitems;

  const { Button } = ReactBootstrap;

  const handleClick = (e) => {
    alert(`You clicked: ' ${e.target.innerHTML}`);
  }

  // each item should have an unique key
  const updatedList = list.map((item, index) => {
    return <Button onClick={handleClick} key={index}>{item}</Button>;
  });
  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
