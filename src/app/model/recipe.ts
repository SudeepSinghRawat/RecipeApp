export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {
    public id: number;
    public title: string;
    public description: string;
    public feedThisMany: number;
    public preparationTime: number;
    public ingredient: Ingredient[];
    public instruction: Instruction[];
    public coverPhoto: string;
    public keywords: string[];

    constructor(id: number, t: string, des: string, feed: number, pre: number, ing: Ingredient[], ins: Instruction[], cp: string,
         keywords: string[]) {
        this.id = id;
        this.title = t;
        this.description = des;
        this.feedThisMany = feed;
        this.preparationTime = pre;
        this.ingredient = ing;
        this.instruction = ins;
        this.coverPhoto = cp;
        this.keywords = keywords;
    }
    public static recipeFromJSON(obj: any): Recipe {
        return new Recipe(obj.id, obj.title, obj.description, obj.feeds_this_many, obj.preparation_time,
            obj.ingredients, obj.instructions, obj.cover_photo, obj.keywords);
    }

    public static createBlank() {
        return new Recipe(-1, '', '', 1, 1, [], [], null, null);
    }
}
