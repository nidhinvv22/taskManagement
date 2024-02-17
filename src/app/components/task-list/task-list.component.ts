import { Component, OnInit } from "@angular/core";
import { ManageTasksService } from "src/app/services/manage-tasks.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent implements OnInit {
  taskList = [];
  constructor(private tasksService: ManageTasksService) {}

  ngOnInit() {
    this.taskList = this.tasksService.getTask();
  }
  updateState(index) {
    console.log("Index", index);
    this.taskList[index].isComplete = !this.taskList[index].isComplete;
    this.tasksService.updateTask(this.taskList);
  }
  deleteTask(index) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (isConfirmed) {
      this.tasksService.deleteTask(index);
      this.taskList = this.tasksService.getTask();
    }
  }
}
