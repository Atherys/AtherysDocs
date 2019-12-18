import Vis from "vis";
import Hocon from "hocon-parser";
export default ({
    Vue
}) => {
    Vue.use(Vis);
    Vue.use(Hocon);
}