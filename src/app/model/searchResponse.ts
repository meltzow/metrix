import { Item } from "./item";

export interface SearchResponse {
  startAt: number
  maxResults: number
  total: number
  issues: {
    expand: string,
    fields: {
      created: Date
    }
  }[]
  changelog: {
    startAt: number
    maxResults: number
    total: number
    histories: {
      created: Date
      items: Item[]
    }[]
  }

}
