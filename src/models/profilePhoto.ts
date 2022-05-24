import {Entity} from './entity';

export interface ProfilePhoto extends Entity{
    /** The height of the photo. Read-only. */
    height?:number | undefined;
    /** The width of the photo. Read-only. */
    width?:number | undefined;
}
