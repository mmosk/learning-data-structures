import { sleep } from "./utils";

type Node = { value: number; children?: Node[] };
type Info = { depth: number };
type Callback = (node: Node, info: Info) => void;

export default class Tree {
  constructor(
    public rootNode: Node,
    public ctx: CanvasRenderingContext2D,
  ) {}

  async _traverse(ms: number, cb: Callback, node: Node, depth: number) {
    cb(node, { depth });

    if (!node.children) return;

    for (const childNode of node.children) {
      await sleep(ms);

      await this._traverse(ms, cb, childNode, depth + 1);
    }
  }

  traverse(ms: number, cb: Callback) {
    this._traverse(ms, cb, this.rootNode, 1);
  }
}

