 import { Injectable } from '@angular/core';
 import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

	private goals = new BehaviorSubject<any>(['The inial goal', 'Another life goal']) ;
	goal = his.goal.asObservable()

  constructor() { }

  changeGoal(){
  	 this.goals.next(goal);
  }

}
