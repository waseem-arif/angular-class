import { Component } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.sass']
})
export class StringComponent {
  noOfProjects :number = 1
  nameOfTeamMember :string = 'Arooj'
  workingStatus :boolean = false
}
