import { Component } from '@angular/core';
import { JiraService } from "./services/jira.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'metrix';

  constructor(private jiraService: JiraService) {
  }

  async onclick() {
    // let status = await this.jiraService.getFilter()
    // console.log(status)
    console.log("clicked")
    let resp = await this.jiraService.getChangelog()
    console.log(resp)
  }
}
