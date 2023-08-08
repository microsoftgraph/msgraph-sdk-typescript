import {createTimeOffReasonFromDiscriminatorValue} from './createTimeOffReasonFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTimeOffReason} from './serializeTimeOffReason';
import type {TimeOffReason} from './timeOffReason';
import type {TimeOffReasonCollectionResponse} from './timeOffReasonCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffReasonCollectionResponse(timeOffReasonCollectionResponse: TimeOffReasonCollectionResponse | undefined = {} as TimeOffReasonCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(timeOffReasonCollectionResponse),
        "value": n => { timeOffReasonCollectionResponse.value = n.getCollectionOfObjectValues<TimeOffReason>(createTimeOffReasonFromDiscriminatorValue); },
    }
}
