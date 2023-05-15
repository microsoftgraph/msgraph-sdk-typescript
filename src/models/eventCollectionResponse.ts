import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Event} from './event';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EventCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Event[] | undefined;
}
