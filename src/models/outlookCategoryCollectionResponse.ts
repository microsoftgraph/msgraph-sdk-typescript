import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {OutlookCategory} from './outlookCategory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OutlookCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OutlookCategory[] | undefined;
}
