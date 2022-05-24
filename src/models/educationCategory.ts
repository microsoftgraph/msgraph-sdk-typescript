import {Entity} from './entity';

export interface EducationCategory extends Entity{
    /** Unique identifier for the category. */
    displayName?:string | undefined;
}
