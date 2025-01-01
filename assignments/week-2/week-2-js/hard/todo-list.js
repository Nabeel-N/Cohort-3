/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(req, res) {
      const { todo } = req.body;
    if (todo) {
      this.todos.push(todo);
      res.status(201).json({ message: 'Todo added successfully', todo });
    } else {
      res.status(400).json({ error: 'Todo content is required' });
    }
  }

  remove(req, res) {
    const { index } = req.params;
    const indexOfTodo = parseInt(index);
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      const removedTodo = this.todos.splice(indexOfTodo, 1)[0];
      res.status(200).json({ message: 'Todo removed successfully', removedTodo });
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  }

  update(req, res) {
    const { index } = req.params;
    const { updatedTodo } = req.body;
    const todoIndex = parseInt(index);
    if (todoIndex >= 0 && todoIndex < this.todos.length && updatedTodo) {
      this.todos[todoIndex] = updatedTodo;
      res.status(200).json({ message: 'Todo updated successfully', updatedTodo });
    } else {
      res.status(404).json({ error: 'Todo not found or update content missing' });
    }
  }

  getAll(req, res) {
    res.status(200).json(this.todos);
  }

  get(req, res) {
    const { index } = req.params;
    const indexOfTodo = parseInt(index);
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      res.status(200).json(this.todos[indexOfTodo]);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  }

  clear(req, res) {
    this.todos = [];
    res.status(200).json({ message: 'All todos cleared successfully' });
  }
}

module.exports = Todo;
console.log("im nabeel")



