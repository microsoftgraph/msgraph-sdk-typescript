import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ColumnLink} from './columnLink';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ColumnLinkCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ColumnLink[] | undefined;
}
