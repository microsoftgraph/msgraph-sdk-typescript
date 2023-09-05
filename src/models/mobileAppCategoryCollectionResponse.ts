import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type MobileAppCategory } from './mobileAppCategory';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MobileAppCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MobileAppCategory[] | undefined;
}
