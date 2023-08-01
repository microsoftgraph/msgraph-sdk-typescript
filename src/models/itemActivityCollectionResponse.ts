import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ItemActivity} from './itemActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ItemActivity[] | undefined;
}
