import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageTasksService } from 'src/app/services/manage-tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  task: any;

  constructor(
    private route: ActivatedRoute,
    private tasksService: ManageTasksService
  ) { }

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.tasksService.getTaskDataById(taskId);
  }

}
