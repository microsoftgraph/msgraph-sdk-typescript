import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {MobileAppCategory} from './mobileAppCategory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MobileAppCategory[] | undefined;
}
