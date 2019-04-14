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
        mass: 2.3
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