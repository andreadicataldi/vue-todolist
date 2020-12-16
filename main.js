let app = new Vue({
  el: "#app",
  data: {
    message: "",
    list: [],
  },
  methods: {
    addTodo() {
      if (this.message.length >= 4) {
        this.list.push(this.message);
      }
    },
    removeTodo() {
      this.list.pop(this.message);
    },
  },
});
