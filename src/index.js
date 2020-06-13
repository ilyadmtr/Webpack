import "./style.css";
import "./index.html";
import Counter from "./plugins/counter";

new Counter ({
    item: document.querySelector("#counter-1")
})
new Counter({
    item: document.querySelector("#counter-2"),
    initialValue: 0,
    step: 50,
})