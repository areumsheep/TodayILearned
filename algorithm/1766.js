const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];
rl.on('line', (line) => data.push(line)).on('close', () => {
  console.log(solution(data));
  process.exit();
});

class Heap {
  constructor() {
    this.heap = []; // {key, value} 형태의 node들이 담긴다.
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childrenIndex) => Math.floor((childrenIndex - 1) / 2);
  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  };
  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;

      this.heap[index] = rootNode;
    }
  };

  peek = () => this.heap[0];
  insert = (key, value) => {
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp(); // 배열 가장 끝에 node를 넣고 다시 min heap의 형태로 갖춘다.
  };
  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  };
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}

const solution = (data) => {
  const [count] = data.shift().split(' ').map(Number);
  const graph = Array.from({ length: count + 1 }, () => []);
  const inDegrees = Array.from({ length: count + 1 }, () => 0);

  for (const item of data) {
    const [to, from] = item.split(' ').map(Number);
    inDegrees[from] += 1;
    graph[to].push(from);
  }

  const pq = new PriorityQueue();
  for (let i = 1; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      pq.enqueue(i, i);
    }
  }

  const result = [];
  while (!pq.isEmpty()) {
    const { key } = pq.dequeue();
    result.push(key);
    for (const item of graph[key]) {
      inDegrees[item]--;
      if (inDegrees[item] === 0) {
        pq.enqueue(item, item);
      }
    }
  }

  return result.join(' ');
};
