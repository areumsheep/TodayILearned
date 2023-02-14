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

class MinHeap {
  constructor() {
    this.heap = [];
  }

  #getLeftChildIndex = (index) => index * 2 + 1;
  #getRightChildIndex = (index) => index * 2 + 2;
  #getParentIndex = (index) => Math.floor((index - 1) / 2);

  #heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.#getParentIndex(index);

      if (this.heap[parentIndex] <= lastNode) break;
      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }

    this.heap[index] = lastNode;
  };
  #heapifyDown = () => {
    let index = 0;
    const rootNode = this.heap[index];

    while (this.#getLeftChildIndex(index) < this.heap.length) {
      const leftChildIndex = this.#getLeftChildIndex(index);
      const rightChildIndex = this.#getRightChildIndex(index);
      const smallerChildIndex =
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex] > rootNode) break;
      this.heap[index] = this.heap[smallerChildIndex];
      index = smallerChildIndex;
    }

    this.heap[index] = rootNode;
  };

  isEmpty = () => this.heap.length <= 0;
  insert = (value) => {
    this.heap.push(value);
    this.#heapifyUp();
  };
  delete = () => {
    const length = this.heap.length;
    const rootNode = this.heap[0];

    if (length <= 0) return null;
    if (length === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.#heapifyDown();
    }

    return rootNode;
  };
}

const solution = (data) => {
  const [count] = data.shift().split(' ').map(Number);
  const graph = Array.from({ length: count + 1 }, () => []);
  const inDegrees = Array.from({ length: count + 1 }, () => 0);
  const minHeap = new MinHeap();

  for (const item of data) {
    const [to, from] = item.split(' ').map(Number);
    inDegrees[from]++;
    graph[to].push(from);
  }

  for (let i = 1; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      minHeap.insert(i);
    }
  }

  const result = [];
  while (!minHeap.isEmpty()) {
    const key = minHeap.delete();
    result.push(key);

    for (const item of graph[key]) {
      inDegrees[item]--;
      if (inDegrees[item] === 0) {
        minHeap.insert(item);
      }
    }
  }
  return result.join(' ');
};
