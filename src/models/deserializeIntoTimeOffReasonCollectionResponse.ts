import {createTimeOffReasonFromDiscriminatorValue} from './createTimeOffReasonFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeTimeOffReason} from './serializeTimeOffReason';
import {TimeOffReason} from './timeOffReason';
import {TimeOffReasonCollectionResponse} from './timeOffReasonCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeOffReasonCollectionResponse(timeOffReasonCollectionResponse: TimeOffReasonCollectionResponse | undefined = {} as TimeOffReasonCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(timeOffReasonCollectionResponse),
        "value": n => { timeOffReasonCollectionResponse.value = n.getCollectionOfObjectValues<TimeOffReason>(createTimeOffReasonFromDiscriminatorValue); },
    }
}
