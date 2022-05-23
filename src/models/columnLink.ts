import {Entity} from './entity';

export interface ColumnLink extends Entity{
    /** The name of the column  in this content type. */
    name?:string | undefined;
}
