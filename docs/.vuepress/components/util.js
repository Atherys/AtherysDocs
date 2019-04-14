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
        raw: raw
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
        raw: raw
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

    const skillGraphKey = 'skill-graph';
    const skillNodesKey = 'skill-nodes';
    let skillLinksKey = 'skill-links';

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

    if (skillTree['skill-graph']) {
        let rawNodes = skillTree[skillGraphKey][skillNodesKey];
        let rawEdges = skillTree[skillGraphKey][skillLinksKey];

        let nodes = [];
        let edges = [];

        // Iterate over all nodes as provided in configuration, process them and push them into the nodes collection
        Object.keys(rawNodes).forEach((key) => nodes.push(processNode(key, rawNodes[key])));

        // Iterate over all links as provided in configuration, process them and push them into the edges collection
        rawEdges.forEach((rawEdge) => edges.push(processEdge(rawEdge)));

        return { skillNodes: nodes, skillLinks: edges };
    }
}

const locales = {
    en: {
      edit: 'Edit Skill Tree',
      back: 'Back',
      del: 'Delete selected',
      addNode: 'Add Skill Node',
      addEdge: 'Add Skill Link',
      editNode: 'Edit Skill Node',
      editEdge: 'Edit Skill Link',
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
    locales: locales
}