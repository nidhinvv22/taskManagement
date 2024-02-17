import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ManageTasksService {
  toDoItems;
  constructor() {}
  getTask() {
    const storedTasks = JSON.parse(localStorage.getItem("TodoItems"));
    return storedTasks ? storedTasks : [];
  }
  createTask(taskData) {
    const storedTasks = this.getTask();
    localStorage.setItem(
      "TodoItems",
      JSON.stringify([...storedTasks, taskData])
    );
  }
  updateTask(updatedTaskList) {
    localStorage.setItem("TodoItems", JSON.stringify(updatedTaskList));
  }
  deleteTask(id)
  {
    const storedTasks = this.getTask();
    //deleting the item from the store
    storedTasks.splice(id, 1);
    localStorage.setItem('TodoItems', JSON.stringify(storedTasks));
  }
  getTaskDataById(index)
  {
    const storedTasks = this.getTask();
    return storedTasks[index];
  }
}
