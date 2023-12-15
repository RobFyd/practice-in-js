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

  let hideDoneTasks = false;

  const addNewTask = (newTaskContent) => {
    tasks = [...tasks, { content: newTaskContent }];
    render();
  };

  const removeTask = (taskIndex) => {
    tasks = [...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)];
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      { ...tasks[taskIndex], done: !tasks[taskIndex].done },
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  };

  const toggleTaskHighLight = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      { ...tasks[taskIndex], important: !tasks[taskIndex].important },
      ...tasks.slice(taskIndex + 1),
    ];
    render();
  };

  const toggleHiddenTasksDone = () => {
    hideDoneTasks = !hideDoneTasks;
    render();
  };

  const toggleAllTasksDone = () => {
    tasks = tasks.map((task) => ({ ...task, done: true }));
    render();
  };

  const bindButtonsEvents = () => {
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

    if (!tasks.length) {
      return;
    } else {
      const removeTasksButton = document.querySelector(".js-completeAll");

      removeTasksButton.addEventListener("click", () => {
        toggleAllTasksDone();
      });
    }

    const hiddenTasksButton = document.querySelector(".js-hideCompleted");

    hiddenTasksButton.addEventListener("click", toggleHiddenTasksDone);
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
    const buttonsElement = document.querySelector(".js-buttons");

    if (!tasks.length) {
      buttonsElement.innerHTML = "";
      return;
    }

    buttonsElement.innerHTML = `
    <button class="button__hideCompleted js-hideCompleted">${
      hideDoneTasks ? "Show" : "Hide"
    } completed</button>

    <button class="button__completeAll js-completeAll" ${
      tasks.every(({ done }) => done) ? "disabled" : ""
    } >Complete all</button>
    `;
  };

  const renderTasks = () => {
    const taskToHTML = (task) => `
        <li class="list__item ${
          task.done && hideDoneTasks ? "list__item--done" : ""
        }${task.important ? " list__item--highLight" : ""}">

        <button class="task__highLight js-highLight ${
          task.important ? " task__highLight--active" : ""
        }">${task.important ? "💫" : "⭐"}</button>
        
        <button class="task__done js-done ${
          task.done ? " task__done--active" : ""
        }">${task.done ? "✅" : "✔️"}</button>
      
        <span class="task__content ${task.done ? "task__content--done" : ""}">${
      task.content
    }</span>

        <button class="task__remove js-remove">❌</button>
        </li>
    `;

    const tasksElement = document.querySelector(".js-tasks");
    tasksElement.innerHTML = tasks.map(taskToHTML).join("");
  };

  const renderStats = () => {
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
    renderStats();

    bindToggleHighLightEvents();
    bindButtonsEvents();
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
