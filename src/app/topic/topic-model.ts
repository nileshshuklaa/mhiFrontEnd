import { Personality } from '../shared/personality.model';

export class TopicModel {
    public title: string;
    public details: string;
    public tags: string;
    public videoLink: string;
    public personalities: Personality[];
    public comments: string[];
   

  constructor(title: string, details: string, tags: string, videoLink: string){
      this.title = title;
      this.details = details;
      this.tags = tags;
      this.videoLink = videoLink;
  }
}