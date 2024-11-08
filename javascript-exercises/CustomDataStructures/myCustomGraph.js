class MyGraph {
    constructor() {
      this.numberOfNodes = 0;
      this.adjacentList = {};
    }
  
    addVertex(node) {
      if (!this.adjacentList[node]) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
        return this;
      }
    }
  
    addEdges(node1, node2) {
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
      return this;
    }
  
    showConnections() {
      const allNodes = Object.keys(this.adjacentList);
      for (let node of allNodes) {
        let nodeConnections = this.adjacentList[node];
        let connections = "";
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        }
        console.log(node + "-->" + connections);
      }
    }
  }
  
  const myGraph = new MyGraph();
  myGraph.addVertex(0);
  myGraph.addVertex(1);
  myGraph.addVertex(2);
  myGraph.addVertex(3);
  myGraph.addEdges(0, 1);
  myGraph.addEdges(0, 2);
  myGraph.addEdges(1, 3);
  myGraph.addEdges(2, 3);
  myGraph.showConnections()
  