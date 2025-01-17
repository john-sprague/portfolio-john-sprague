
/**
 * Builds an undirected adjacency list from a list of edges.
 * 
 * This function takes an array of edges, where each edge is represented as a 
 * two-element array `[source, dest]`, and returns an adjacency list where each 
 * index represents a node, and the value at each index is an array of adjacent nodes.
 * 
 * @param {Array<[number, number]>} edgeList - The list of edges where each edge is 
 *                                             represented by a pair of nodes `[source, dest]`.
 * @returns {Array<Array<number>>} An adjacency list where each index contains an array of 
 *                                adjacent nodes for the corresponding node.
 * 
 * @example
 * const edges = [[0, 1], [1, 2], [2, 0]];
 * const adjList = buildAdjList(edges);
 * console.log(adjList); // [[1, 2], [0, 2], [1, 0]]
 */
const buildAdjList = (edgeList) => {
    const adjList = Array.from({length: edgeList.length}, () => [])
    if (!edgeList.length) {
        return adjList
    }

    for (const [source, dest] in edgeList) {
        adjList[source].push(dest);
        adjList[dest].push(source); 
    }

    return adjList;
}