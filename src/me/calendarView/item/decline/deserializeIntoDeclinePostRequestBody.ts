import {createTimeSlotFromDiscriminatorValue} from '../../../../models/createTimeSlotFromDiscriminatorValue';
import {serializeTimeSlot} from '../../../../models/serializeTimeSlot';
import type {TimeSlot} from '../../../../models/timeSlot';
import type {DeclinePostRequestBody} from './declinePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeclinePostRequestBody(declinePostRequestBody: DeclinePostRequestBody | undefined = {} as DeclinePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { declinePostRequestBody.comment = n.getStringValue(); },
        "proposedNewTime": n => { declinePostRequestBody.proposedNewTime = n.getObjectValue<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
        "sendResponse": n => { declinePostRequestBody.sendResponse = n.getBooleanValue(); },
    }
}
