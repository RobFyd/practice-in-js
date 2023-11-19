console.log("test");

{
  const tasks = [
    {
      content: "example task 1",
      done: false,
      important: true,
    },
    {
      content: "example task 2",
      done: true,
      important: false,
    },
  ];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const toggleTaskHighLight = (taskIndex) => {
    tasks[taskIndex].important = !tasks[taskIndex].important;
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });

    const toggleHighLightButtons = document.querySelectorAll(".js-highLight");

    toggleHighLightButtons.forEach((toggleHighLightButton, index) => {
      toggleHighLightButton.addEventListener("click", () => {
        toggleTaskHighLight(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="list__item${task.done ? " list__item--done" : ""}${task.important ? " list__item--highLight" : ""}">
        <button class="js-highLight${task.important ? " js-highLight__active" : ""}">⭐</button>
        <button class="js-done${task.done ? " js-done__active" : ""}">✅</button>
        ${task.content}
        <button class="js-remove">❌</button>
        </li>
    `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    document.querySelector(".js-newTask").focus();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    
    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();


  
  var button = document.querySelector(".js-clearAll");

  button.addEventListener("click", function() {
    button.classList.toggle("with-emoji");
  });
}
