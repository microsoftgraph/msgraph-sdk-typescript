import {Entity} from './entity';
import {OutlookCategory} from './outlookCategory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookUser extends Entity, Parsable {
    /**
     * A list of categories defined for the user.
     */
    masterCategories?: OutlookCategory[] | undefined;
}
