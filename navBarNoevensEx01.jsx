// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar({ menuitems }) {

  const { Button } = ReactBootstrap;

//x.filter(item => item%2) will keep only odd numbers.
//if item is even, item%2 will return 0 and the item will be removed by the filter.
  let odds = menuitems.filter(item => item%2);

  const updatedList = odds.map((listItems, index) => {
    return <Button key={index.toString()}>{listItems}</Button>;
  });

  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
