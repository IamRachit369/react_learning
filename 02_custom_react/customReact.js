function customRender(element, container)
{
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.Children
    for (const prop in element.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])        
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href : 'https://www.google.com',
        target: '_blank'
    },
    Children: 'Click me to visit Google'
}

const root = document.querySelector("#root")

customRender(reactElement, root)