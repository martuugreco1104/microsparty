const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const dom = new JSDOM(html, { 
    url: "file://" + __dirname + "/index.html",
    runScripts: "dangerously", 
    resources: "usable",
    beforeParse(window) {
        window.matchMedia = () => ({ matches: false });
        window.console.log = console.log;
    }
});

dom.window.addEventListener("load", () => {
    try {
        const event = new dom.window.MouseEvent('click', { bubbles: true, cancelable: true });
        const bento = dom.window.document.querySelector('.bento-item img');
        bento.dispatchEvent(event);
        console.log("Gallery Modal classes:", dom.window.document.getElementById('gallery-modal').className);
    } catch (e) {
        console.error("Error clicking bento-item:", e);
    }
});
