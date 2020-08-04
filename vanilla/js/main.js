//two-way binding
const createState = (state) => {
  return new Proxy(state, {
    set(target, property, value) {
      target[property] = value;
      render();
      return true;
    }
  });
};

const shadowDOMs = [document];

//data
const model = createState({label: 'Name'});

addListeners = (root) => {
  if (!root) {
    return;
  }
  root.querySelectorAll('[data-fromview]').forEach((listener) => {
    const name = listener.dataset.fromview;
    listener.addEventListener('keyup', (event) => {
      model[name] = listener.value;
    });
  });
}

render = () => {
  shadowDOMs.forEach(root => {
    root.querySelectorAll('[data-fromview],[data-toview]').forEach(el => {
      let property;
      if (el.dataset.fromview) {
        property = el.dataset.fromview;
        el.value = model[property] ? model[property] : "";
      } else if (el.dataset.toview) {
        property = el.dataset.toview;
        el.innerHTML = model[property] ? model[property] : "";
      }
    });
  });
};

//non-shadow
addListeners(document);
render();

//create elements
Array.from(document.querySelectorAll('template')).map(
        template => {
          if (!template.id) {
            return;
          }
          customElements.define(template.id,
                  class extends HTMLElement {

                    constructor() {
                      super();
                      const templateContent = template.content;
                      this.attachShadow({mode: 'open'}).appendChild(
                              templateContent.cloneNode(true)
                      );
                      //add listeners
                      addListeners(this.shadowRoot);
                      shadowDOMs.push(this.shadowRoot);
                      render();
                    }
                  }
          );
        });



