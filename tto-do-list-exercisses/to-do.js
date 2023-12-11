console.log("test");

{
  let tasks = [
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

  let hideDoneTasks = false; // zmienna globalna pod nowe przyciski

  const addNewTask = (newTaskContent) => {
    tasks = [...tasks, { content: newTaskContent }];

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

  const renderButtons = () => {
    document.querySelector(".js-buttons").innerHTML = `
    <button class="button__hideCompleted js-hideCompleted">Hide completed</button>

    <button class="button__completeAll js-completeAll ${
      tasks.every(({ done }) => done) ? "disabled" : ""
    }">Complete all</button>
    `;
  };

  const renderTasks = () => {
    let tasksListHTMLcontent = "";

    for (const task of tasks) {
      tasksListHTMLcontent += `
        <li class="list__item${task.done ? " list__item--done" : ""}${
        task.important ? " list__item--highLight" : ""
      }">

        <button class="task__highLight js-highLight${
          task.important ? " task__highLight--active" : ""
        }">${task.important ? "💫" : "⭐"}</button>
        
        <button class="task__done js-done${
          task.done ? " task__done--active" : ""
        }">${task.done ? "✅" : "✔️"}</button>
      
        <span class="task__content ${task.done ? "task__content--done" : ""}">${
        task.content
      }</span>

        <button class="task__remove js-remove">❌</button>
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
  };

  const render = () => {
    renderTasks();
    renderButtons();


    // bindButtonsEvents = () => {};  eventListener na przyciskach, bedzie potrzebny if
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
}

{
  const showThumbUp = () => {
    button.classList.toggle("with-emoji");
  };
  const button = document.querySelector(".js-thumbUp");

  button.addEventListener("click", showThumbUp);
}
