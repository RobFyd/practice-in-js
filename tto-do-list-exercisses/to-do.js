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

  const bindRemoveEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const bindToggleDoneEvents = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const bindToggleHighLightEvents = () => {
    const toggleHighLightButtons = document.querySelectorAll(".js-highLight");

    toggleHighLightButtons.forEach((toggleHighLightButton, index) => {
      toggleHighLightButton.addEventListener("click", () => {
        toggleTaskHighLight(index);
      });
    });
  };

  const render = () => {
    let tasksListHTMLcontent = "";

    for (const task of tasks) {
      tasksListHTMLcontent += `
        <li class="list__item${task.done ? " list__item--done" : ""}${
        task.important ? " list__item--highLight" : ""
      }">

        <button class="js-highLight${
          task.important ? " js-highLight__active" : ""
        }">${task.important ? "💫" : "⭐"}</button>
        
        <button class="js-done${task.done ? " js-done__active" : ""}">${
        task.done ? "✅" : "✔️"
      }</button>
      
        ${task.content}
        <button class="js-remove">❌</button>
        </li>
    `;
    }

    document.querySelector(".js-tasks").innerHTML = tasksListHTMLcontent;

    document.querySelector(".js-stats").innerText = `
    Number of all tasks: ${tasks.length}\n
    Number of done tasks: ${tasks.filter((task) => task.done).length}\n
    Number of highLight tasks: ${
      tasks.filter((task) => task.important).length
    }\n
    `;

    bindToggleHighLightEvents();
    bindToggleDoneEvents();
    bindRemoveEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask");

    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskElement.value = "";
    }

    newTaskElement.focus();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();

  var button = document.querySelector(".js-clearAll");

  button.addEventListener("click", function () {
    button.classList.toggle("with-emoji");
  });
}
