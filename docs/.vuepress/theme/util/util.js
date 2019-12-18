import Hocon from 'hocon-parser';
import Vis from "vis";
function processNode(rawId, raw) {
    return {
        id: rawId,
        label: raw['skill-id'],
        shape: 'box',
        shadow: {
            enabled: true
        },
        color: {
            background: '#e2950f',
            border: '#000000'
        },
        font: {
            size: 18
        },
        mass: 2.3,
        raw: {
          nodeId: rawId,
          skillId: raw['skill-id'],
          cost: raw.cost,
          cooldown: raw.cooldown,
          properties: convertPropertiesToArray(raw.properties)
        }
    };
}

function convertPropertiesToArray(properties) {
    return Object.keys(properties).map(propKey => {
       return { name: propKey, value: properties.propKey }
    });
}

function processEdge(raw) {
    const edge = {
        from: raw['parent-node'],
        to: raw['child-node'],
        smooth: false,
        color: {
            color: "#957e4c"
        },
        font: {
            strokeColor: "#aa3300"
        },
        raw: {
          ...raw,
          parentNode: raw['parent-node'],
          childNode: raw['child-node']
        }
    };

    if (raw.type == "UNIDIRECTIONAL") {
        edge.arrows = 'to';
    } else {
        edge.arrows = 'to, from';
    }

    if (raw.cost != null) {
        edge.label = "" + raw.cost;
    }

    return edge;
}

export function loadSkillTree(contents, format) {
    let skillTree = {};

    const skillNodesKey = 'skill-nodes';
    const skillLinksKey = 'skill-links';
    const skillRootKey = 'root-skill';

    skillTree = JSON.parse(contents);

    /*
    if (format == "json") {
        skillTree = JSON.parse(contents);
        skillLinksKey = 'skill-links';
    } else if (format == "conf" || format == "hocon") {
        skillTree = Hocon(contents);
        skillLinksKey = 'skill-links '; // the space is required because hocon-parser interprets this as a valid key...
    } else {
        alert("Unsupported file format. Please provide either a JSON ( ending in .json ) or HOCON ( ending in .conf ).");
        throw "Unsupported file format.";
    }
    */

    let rawNodes = skillTree[skillNodesKey];
    let rawEdges = skillTree[skillLinksKey];

    let nodes = [];
    let edges = [];

    // Iterate over all nodes as provided in configuration, process them and push them into the nodes collection
    Object.keys(rawNodes).forEach(key => nodes.push(processNode(key, rawNodes[key])));
    nodes.push(processNode(skillRootKey, skillTree[skillRootKey]));

    // Iterate over all links as provided in configuration, process them and push them into the edges collection
    rawEdges.forEach(rawEdge => {
        let newEdge = processEdge(rawEdge);
        if (getOtherDirection)
        edges.push(newEdge);
    });

    return { skillNodes: nodes, skillLinks: edges };
}

export function exportSkillTree(skillNodes, skillLinks) {
    let nodeArray = skillNodes.map(node => node.raw);
    let nodeMap = {};
    let rootNode;

    nodeArray.forEach(node => {
        let newProperties = {};
        node.properties.forEach(property => {
            newProperties[property.name] = property.value;
        });
        node.properties = newProperties;

        if (node.nodeId === 'root-skill') {
            rootNode = node;
        } else {
            nodeMap[node.nodeId] = node;
        }
    });

    let linkArray = [];
    skillLinks.forEach(link => {
        let newLink = {
            'child-node': skillNodes.get(link.to).raw.nodeId,
            'parent-node': skillNodes.get(link.from).raw.nodeId,
            'cost': link.raw.cost
        };

        let alreadyInArray = linkArray.filter(l => {
            return l['child-node']=== newLink['parent-node'] && l['parent-node'] === newLink['child-node'];
        });
        if (alreadyInArray.length > 0) return;

        let otherDirection = getOtherDirection(link, skillLinks.get());
        if (otherDirection.length > 0) {
            newLink.type = 'BIDIRECTIONAL';
        } else {
            newLink.type = 'UNIDIRECTIONAL';
        }
        linkArray.push(newLink);
    });
    
    let config = JSON.stringify({ 'skill-nodes': nodeMap, 'skill-links': linkArray, 'root-skill': rootNode }, excludeId, 2);
    config = config.replace(/skillId/g, "skill-id");

    return config;
}

function excludeId(key, value) {
    if (key === "nodeId") {
        return undefined;
    }
    return value;
}

export function getOtherDirection(skillLink, skillLinks) {
    let fromNode = skillLink.from;
    let toNode = skillLink.to;

    return skillLinks.filter(link => {
        return link.from === toNode && link.to === fromNode;
    });
}

export function getEmptyNode(nodeId) {
    return {
        nodeId: nodeId,
        skillId: "",
        cost: "",
        cooldown: "",
        properties: []
    }
}

const locales = {
    en: {
        edit: 'Edit Skill Tree',
        back: 'Back',
        del: 'Delete Selected',
        addNode: 'Add Skill Node',
        addEdge: 'Add Skill Link',
        addDescription: 'Click in an empty space to place a new node.',
        edgeDescription: 'Click on a node and drag the edge to another node to connect them.',
        editEdgeDescription: 'Click on the control points and drag them to a node to connect to it.',
        createEdgeError: 'Cannot link edges to a cluster.',
        deleteClusterError: 'Clusters cannot be deleted.',
        editClusterError: 'Clusters cannot be edited.'
    }
}

const nodes = {
    shape: 'box',
    shadow: {
        enabled: true
    },
    color: {
        background: '#e2950f',
        border:     '#000'
    },
    font: {
        size: 18
    },
}

const edges = {
    smooth: false,
    color: {
        color: '#957e4c'
    },
    font: {
        strokeColor: '#aa3300'
    },
    arrows: 'to'
}

export const options = {
    nodes: nodes,
    edges: edges,
    locales: locales,
    physics: {
        enabled: false
    },
    interaction: {
        selectConnectedEdges: false
    }
}

export function templater(strings, ...keys) {
    return function(data) {
        let temp = strings.slice();
        keys.forEach((key, i) => {
            temp[i] = temp[i] + data[key];
        });
        return temp.join('');
   }
}

export function downloadFile(string, fileName, elementId) {
    let text = new Blob([string], {type: "text/plain;charset=utf-8"});
    let link = document.getElementById(elementId);
    link.href = window.URL.createObjectURL(text);
    link.download = fileName;
    link.click();
}