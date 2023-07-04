import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {TimeOffReason} from './timeOffReason';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TimeOffReasonCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TimeOffReason[] | undefined;
}
