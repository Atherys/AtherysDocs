import Hocon from 'hocon-parser';
function processNode(rawId, raw) {
    return {
        id: rawId,
        label: raw['skill-id'],
        shape: 'box',
        shadow: {
            enabled: true
        },
        color: {
            background: '#aa3300',
            border: '#000000'
        },
        font: {
            size: 18
        },
        mass: 2.3,
        raw: {
          ...raw,
          nodeId: rawId,
          skillId: raw['skill-id']
        }
    };
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
    let skillLinksKey = 'skill-links';

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

    // Iterate over all links as provided in configuration, process them and push them into the edges collection
    rawEdges.forEach(rawEdge => edges.push(processEdge(rawEdge)));

    return { skillNodes: nodes, skillLinks: edges };
}

export function exportSkillTree(skillNodes, skillLinks) {
  let nodeArray = skillNodes.map(node => node.raw);
  let nodeMap = {};

  nodeArray.forEach(node => {
    nodeMap[node.nodeId] = node;
  });

  let linkArray = skillLinks.map(link => link.raw);
  
  let config = JSON.stringify({'skill-nodes': nodeMap, 'skill-links': linkArray}, excludeId, 2);
  config = config.replace(/skillId/g, "skill-id")
                 .replace(/childNode/g, "child-node")
                 .replace(/parentNode/g, "parent-node");

  return config;
}

function excludeId(key, value) {
  if (key === "nodeId") {
    return undefined;
  }
  return value;
}

const locales = {
    en: {
      edit: 'Edit Skill Tree',
      back: 'Back',
      del: 'Delete selected',
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
    mass: 2.3
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