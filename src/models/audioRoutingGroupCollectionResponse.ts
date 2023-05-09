import {AudioRoutingGroup} from './audioRoutingGroup';
import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AudioRoutingGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: AudioRoutingGroup[] | undefined;
}
