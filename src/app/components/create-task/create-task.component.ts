import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ManageTasksService } from "src/app/services/manage-tasks.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrls: ["./create-task.component.scss"],
})
export class CreateTaskComponent implements OnInit {
  taskForm = this.fb.group({
    title: ["", Validators.required],
    description: ["", Validators.required],
    dueDate: ["", this.validateDate],
    isComplete: false,
  });
  isEditMode=false;
  noDetailsFound=false;
  constructor(
    private fb: FormBuilder,
    private tasksService: ManageTasksService,
    private route:ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.isEditMode = this.route.snapshot.url.some((segment) => segment.path === 'edit');
    if(this.isEditMode){
     const id=this.route.snapshot.paramMap.get('id');
      this.taskForm.patchValue(this.tasksService.getTaskDataById(id))
    }
  }

  createTask() {
    this.tasksService.createTask(this.taskForm.value);
    this.snackBar.open('Task Created Successfully', 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  isValid(formControl) {
    return (
      this.taskForm.get(formControl) &&
      this.taskForm.get(formControl).invalid &&
      (this.taskForm.get(formControl).dirty ||
        this.taskForm.get(formControl).touched)
    );
  }
  validateDate(control) {
    if (!control.value) {
      // setting required validator to true if date is not selected
      return { required: true };
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(control.value);

    if (selectedDate < today) {
      return { lessThanToday: true };
    }

    return null;
  }
}
