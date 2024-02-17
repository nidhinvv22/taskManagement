import { TestBed } from '@angular/core/testing';
import { ManageTasksService } from './manage-tasks.service';

fdescribe('ManageTasksService', () => {
  let service: ManageTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageTasksService],
    });

    service = TestBed.get(ManageTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTask', () => {
    it('Should return an empty array if there is no Data', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      const result = service.getTask();
      expect(result).toEqual([]);
    });

    it('should return stored tasks if they exist', () => {
      const mockStoredTasks = [
        { title: 'Task 1', description: 'Description 1', dueDate: '2024-02-18', isComplete: false },
        { title: 'Task 2', description: 'Description 2', dueDate: '2024-02-7', isComplete: true },
      ];
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockStoredTasks));
      const result = service.getTask();
      expect(result).toEqual(mockStoredTasks);
    });
  });

  
});
