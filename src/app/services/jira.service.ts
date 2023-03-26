import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import { SearchResponse } from "../model/searchResponse";
import { Item } from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class JiraService {

  constructor(private httpservice: HttpService) {
  }

  async getChangelog(): Promise<Item[]> {
    let respo = await this.httpservice.get<SearchResponse>("https://jira.tarent.de/rest/api/2/search?jql=assignee=mmeltz&expand=changelog")
    return respo.changelog.histories[0].items
  }
}
