fetch("/add-person", {
  method: "POST",
  headers: {
    "content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Krzysiek",
    surname: "Dabrowskiki",
  }),
});
