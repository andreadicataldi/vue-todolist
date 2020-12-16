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
      }
    },
    removeTodo() {
      this.list.pop();
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
