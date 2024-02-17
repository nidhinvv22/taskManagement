import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateTaskComponent } from "./components/create-task/create-task.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskDetailsComponent } from "./components/task-details/task-details.component";

const routes: Routes = [
  { path: "", component: TaskListComponent },
  { path: "create", component: CreateTaskComponent },
  { path: "edit/:id", component: CreateTaskComponent },
  { path: "details/:id", component: TaskDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
