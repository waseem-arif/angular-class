import { Component } from '@angular/core';

@Component ( {
  selector   : 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls  : [ './twowaybinding.component.sass' ]
} )
export class TwowaybindingComponent
{
  noOfProjects: number = 1
  nameOfTeamMember: string = 'Arooj'
  workingStatus: boolean = true

  changeStatus = (): void =>
  {
    this.workingStatus = !this.workingStatus
  }

  inputChange = (event: Event) : void => {
    this.nameOfTeamMember = (<HTMLInputElement>event.target).value
  }
}
