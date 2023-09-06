import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type OutlookCategory } from './outlookCategory';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OutlookCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OutlookCategory[] | undefined;
}
