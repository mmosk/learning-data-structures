import "./style.css";

type Node = { value: number; children?: Node[] };
type Callback = (node: Node) => void;

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

class Tree {
  currentNode: Node;

  constructor(public root: Node) {
    this.currentNode = root;
  }

  async _traverse(ms: number, cb: Callback, node: Node) {
    cb(node);

    if (!node.children) return;

    for (const childNode of node.children) {
      await sleep(ms);

      await this._traverse(ms, cb, childNode);
    }
  }

  traverse(ms: number, cb: Callback) {
    this._traverse(ms, cb, this.currentNode);
  }
}

const tree = new Tree({
  value: 1,
  children: [
    { value: 2, children: [{ value: 3 }, { value: 4 }] },
    { value: 5 },
  ],
});

tree.traverse(1500, (node) => {
  console.log(node.value);
});
