export class personality {
   public name: string;
   public imagePath: string;
   public title: string;
   public loveScore: number;
   public hateScore: number;

   constructor(name: string, imagePath: string, title: string, 
                loveScore: number, hateScore:number){

        this.name = name;
        this.imagePath = imagePath;
        this.title = title;
        this.loveScore = loveScore;
        this.hateScore = hateScore;
                
    }
}