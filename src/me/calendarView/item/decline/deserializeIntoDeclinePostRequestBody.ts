import {createTimeSlotFromDiscriminatorValue} from '../../../../models/createTimeSlotFromDiscriminatorValue';
import {serializeTimeSlot} from '../../../../models/serializeTimeSlot';
import {TimeSlot} from '../../../../models/timeSlot';
import {DeclinePostRequestBody} from './declinePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeclinePostRequestBody(declinePostRequestBody: DeclinePostRequestBody | undefined = {} as DeclinePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { declinePostRequestBody.comment = n.getStringValue(); },
        "proposedNewTime": n => { declinePostRequestBody.proposedNewTime = n.getObjectValue<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
        "sendResponse": n => { declinePostRequestBody.sendResponse = n.getBooleanValue(); },
    }
}
