import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type TimeOffReason } from './timeOffReason';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface TimeOffReasonCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TimeOffReason[] | undefined;
}
