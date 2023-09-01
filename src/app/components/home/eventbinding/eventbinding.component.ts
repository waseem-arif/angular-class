import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.sass']
})
export class EventbindingComponent {
  noOfProjects :number = 1
  nameOfTeamMember :string = 'Arooj'
  workingStatus :boolean = true
  changeStatus = () :void => {
    this.workingStatus = ! this.workingStatus
  }
}
