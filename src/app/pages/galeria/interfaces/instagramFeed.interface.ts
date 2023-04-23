export interface InstagramFeed {
    data: Data[]
    paging: Paging
  }
  
  export interface Data {
    media_url: string
    media_type: string
    permalink: string
    id: string
  }
  
  export interface Paging {
    cursors: Cursors
  }
  
  export interface Cursors {
    before: string
    after: string
  }
  