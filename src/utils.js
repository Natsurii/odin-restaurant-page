
const createDiv = () => document.createElement('div');
const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

export {
    createDiv,
    removeChilds
}