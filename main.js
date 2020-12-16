let app = new Vue({
  el: "#app",
  data: {
    message: "",
    list: ["Accendi il PC", "Lancia Cyberpunk 2077", "Gioca"],
  },
  methods: {
    addTodo() {
      if (this.message.length >= 4) {
        this.list.push(this.message);
      } else {
        alert("Your text is too short.");
      }
    },
    removeTodo(index) {
      this.list.splice(index, 1);
    },
  },
  created() {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.addTodo();
      }
    });
  },
});
