// const heading = React.createElement("h1", {id:"heading1"}, "Hello from ReactJS");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
// root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "Hello from nested heading h1"),
    React.createElement("h2", {}, "Hello from nested heading h2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
