let Addbtn = document.querySelector(".Addbtn");
let inpBox = document.querySelector("#inp-box");
let listContainer = document.querySelector("#listContainer");

Addbtn.addEventListener("click", () => {
    if (inpBox.value === "") {
        alert("Input Box can't be empty. Please fill it!");
    } else {
        let li = document.createElement("li");
        li.textContent = inpBox.value;
        li.classList.add("text-[17px]", "p-[12px_8px_12px_50px]", "select-none", "cursor-pointer", "relative", "before:content-['']", "before:absolute", "before:h-[28px]", "before:w-[28px]", "before:rounded-[50%]", "before:bg-unchecked", "before:top-[12px]", "before:left-[8px]");
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);

        inpBox.value = "";
        saveData();

    }
});

listContainer.addEventListener(("click"), (el) => {
    if (el.target.tagName === "LI") {
        el.target.classList.toggle("checked")
        el.target.classList.toggle("before:checked")
        saveData();

    } else if (el.target.tagName === "SPAN") {
        el.target.parentElement.remove();
        saveData();
    }
})

let saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

let loadData = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}

loadData();