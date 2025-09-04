function customRender(reactElement,container){
    const elem = document.createElement(reactElement.type);
    elem.innerHTML = reactElement.Children;

    // elem.setAttribute('href',reactElement.props.href);
    // elem.setAttribute('target',reactElement.props.target);

    for (const prop in reactElement.props) {
        elem.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(elem);
}

const reactElement = {
    type : 'a',
    props : {
        href :'https://google.com',
        target : '_blank'
    },
    Children : 'Click to visit Google'
}


const mainContainer = document.querySelector("#root");
customRender(reactElement,mainContainer);