import {Entity} from './entity';
import {OutlookCategory} from './outlookCategory';

export interface OutlookUser extends Entity{
    /** A list of categories defined for the user. */
    masterCategories?:OutlookCategory[] | undefined;
}
