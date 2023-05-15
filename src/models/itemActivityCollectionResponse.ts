import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ItemActivity} from './itemActivity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActivityCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: ItemActivity[] | undefined;
}
