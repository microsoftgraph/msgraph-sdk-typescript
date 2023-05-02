import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TimeOffRequest} from './timeOffRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: TimeOffRequest[] | undefined;
}
