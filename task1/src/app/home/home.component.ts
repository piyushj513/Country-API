import { Component, OnInit } from '@angular/core';
import { DjangoService } from '../django.service';
import { Task } from '../country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: DjangoService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
