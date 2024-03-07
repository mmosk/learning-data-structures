import { tree1 } from "./data";

import "./style.css";
import Tree from "./tree";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (!ctx) throw "No rendering context";

const tree = new Tree(tree1, ctx);

tree.traverse(750, (node, info) => {
  console.log(`${info.depth}: ${node.value}`);
});
