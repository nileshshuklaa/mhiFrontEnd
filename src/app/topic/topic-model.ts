import { Personality } from '../shared/personality.model';

export class TopicModel {
   public title: string;
   public personalities: Personality[];
   public comments: string[];
   

  constructor(){
      this.title = "Who will be PM";
      this.comments = [
          "first comment",
          "seoncd comment",
          "third comment"
      ];

     this.personalities =[
       /* new Personality("Rahul Gandhi", "../../assets/rgandhi.jpg", "Vice President congress national party", 9.5,
        6 ),
        new Personality("Narendra Modi", "../../assets/nmodi.jpg", "Vice President congress national party", 9.5,
        6 ),
        new Personality("Arvind Kejriwal", "../../assets/akejiwal.jpg", "Vice President congress national party", 9.5,
        6 )*/
    ];
  }
}