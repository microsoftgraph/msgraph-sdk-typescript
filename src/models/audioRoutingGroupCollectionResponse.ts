import type {AudioRoutingGroup} from './audioRoutingGroup';
import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AudioRoutingGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AudioRoutingGroup[] | undefined;
}
