import {Entity} from './entity';

export interface MobileAppCategory extends Entity{
    /** The name of the app category. */
    displayName?:string | undefined;
    /** The date and time the mobileAppCategory was last modified. */
    lastModifiedDateTime?:Date | undefined;
}
