import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.sass']
})
export class DatabindingComponent {
  noOfProjects :number = 1
  nameOfTeamMember :string = 'Arooj'
  workingStatus :boolean = true
}
