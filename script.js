const task = document.querySelector(".list");
console.log(task.textContent);

const text = document.querySelector(".text");
console.log(text.placeholder);
const list = document.querySelector(".list");
const button = document.querySelector(".button");

function addTask() {
    if (text.value === "") {
        return;
    }

    const task = document.createElement("li");
    task.innerHTML = `
    <input type="checkbox" class="checkbox">
    <label>${text.value}</label>
    <button class="deleteBtn">🗑️</button>
    `

    // "deleteBtn" to control deleting
    const deleteBtn = task.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function() {
        task.remove();
    });

    const checkbox = task.querySelector(".checkbox");
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            task.style.textDecoration = "line-through";
            task.style.color = "grey";
            list.append(task);
        } else {
            task.style.textDecoration = "none";
            task.style.color = "";
            task.prepend(task);
        }
    });
    list.append(task);
    text.value = "";
}

button.addEventListener("click", addTask);

// "keyup" is triggered when a key is released
text.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
})