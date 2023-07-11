import {BaseCollectionPaginationCountResponse} from '../../../models/baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAuditCategoriesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: string[] | undefined;
}
