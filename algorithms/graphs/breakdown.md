# Examples in Detail

### Graph
**Vertices:** {1, 2, 3}  
**Edges:** { (1, 2), (1, 3), (2, 3) }

### Edge List
```javascript
const edgeList = [
    [1, 2],
    [1, 3],
    [2, 3]
];
```

### Adjacency List
```javascript
const adjacencyList = {
    1: [2, 3],
    2: [1, 3],
    3: [1, 2]
};
```

### Adjacency Map
```javascript
const adjacencyMap = {
    1: { 2: 5, 3: 2 }, // Edge weights: 1-2 has weight 5, 1-3 has weight 2
    2: { 1: 5, 3: 4 },
    3: { 1: 2, 2: 4 }
};
```


### Adjacency Matrix
```javascript
const adjacencyMatrix = [
    [0, 1, 1], // Vertex 1 is connected to 2 and 3
    [1, 0, 1], // Vertex 2 is connected to 1 and 3
    [1, 1, 0]  // Vertex 3 is connected to 1 and 2
];
```

---

## Choosing the Best Representation

### Use Case
| **Use Case**                | **Recommended Representation** |
|-----------------------------|---------------------------------|
| Sparse graph (few edges)    | Edge List, Adjacency List       |
| Dense graph (many edges)    | Adjacency Matrix               |
| Weighted graph              | Adjacency Map                  |
| Frequent edge existence queries | Adjacency Matrix          |
| Graph traversal (DFS, BFS)  | Adjacency List, Adjacency Map  |
| Compact storage for sparse graphs | Edge List              |

---

## Graph Representations with Complexity Analysis

| **Representation** | **Storage Format** | **Space Complexity** | **Edge Addition/Removal** | **Edge Existence** | **Neighbor Traversal** | **Use Cases** |
|---------------------|--------------------|-----------------------|---------------------------|--------------------|------------------------|---------------|
| **Edge List**       | List of edges: [(u, v), (v, w)] | O(E) | O(1) (append/remove) | O(E) (linear scan) | O(E) | Compact for sparse graphs, useful when edges are added/removed frequently. |
| **Adjacency List**   | Map of vertex to list of neighbors: {u: [v, w], ...} | O(V + E) | O(1) (append/remove) | O(degree) | O(degree) | Efficient for traversals, sparse graphs with unweighted edges. |
| **Adjacency Map**    | Map of vertex to a map of neighbors and weights: {u: {v: weight, ...}, ...} | O(V + E) | O(1) | O(1) | O(degree) | Weighted graphs, efficient edge existence checks and traversal of weighted edges. |
| **Adjacency Matrix** | 2D array of size V x V: [[0, 1, ...], ...] | O(V²) | O(1) | O(1) | O(V) | Dense graphs, efficient for edge existence queries and algorithms that require matrix operations. |

---

## Detailed Operations

| **Operation**               | **Edge List** | **Adjacency List** | **Adjacency Map** | **Adjacency Matrix** |
|-----------------------------|---------------|--------------------|-------------------|----------------------|
| **Space Complexity**        | O(E)          | O(V + E)           | O(V + E)          | O(V²)               |
| **Edge Addition (u, v)**    | O(1)          | O(1)               | O(1)              | O(1)                |
| **Edge Removal (u, v)**     | O(E)          | O(degree)          | O(1)              | O(1)                |
| **Edge Existence Check (u, v)** | O(E)      | O(degree)          | O(1)              | O(1)                |
| **Neighbor Traversal**      | O(E)          | O(degree)          | O(degree)         | O(V)                |
| **Graph Traversal (DFS/BFS)** | O(V + E)    | O(V + E)           | O(V + E)          | O(V²)               |

---


### Types of Edges in a undirected BFS tree 
| **Edge Type**        | **Description**         
|-----------------------|--------------------------------------------------------------------------------------------------
| **Tree Edge**         | An edge that is part of the BFS tree. It connects a vertex to its discovered child in the BFS.   
| **Cross Edge**        | An edge that connects two vertices already discovered, but they do not share a parent-child relationship in the 

### Types of edges in a undirected DFS tree 
# Types of Edges in an Undirected DFS Tree

| **Edge Type**      | **Definition**                                                           | **Explanation**                                                                                                         |
|--------------------|--------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| **Tree Edge**      | Edge that is part of the DFS tree.                                       | These edges are discovered while performing DFS and connect a vertex to a previously unvisited vertex.                 |
| **Back Edge**      | Edge that connects a vertex to one of its ancestors in the DFS tree.     | Indicates a cycle in the graph; the ancestor is an already visited vertex in the current DFS path.                     |
| **Forward Edge**   | Not applicable in an undirected graph.                                   | Forward edges exist only in directed graphs and connect a vertex to a descendant in the DFS tree.                      |
| **Cross Edge**     | Not applicable in an undirected graph.                                   | Cross edges exist only in directed graphs and connect two vertices that do not have an ancestor-descendant relationship.|

#### Notes:
- In an undirected graph, only **Tree Edges** and **Back Edges** are possible in a DFS tree.
- The existence of **Back Edges** indicates the presence of cycles in the undirected graph.
