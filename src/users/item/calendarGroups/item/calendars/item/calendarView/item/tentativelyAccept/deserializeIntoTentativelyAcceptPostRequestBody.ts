import {createTimeSlotFromDiscriminatorValue} from '../../../../../../../../../models/createTimeSlotFromDiscriminatorValue';
import {serializeTimeSlot} from '../../../../../../../../../models/serializeTimeSlot';
import type {TimeSlot} from '../../../../../../../../../models/timeSlot';
import type {TentativelyAcceptPostRequestBody} from './tentativelyAcceptPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTentativelyAcceptPostRequestBody(tentativelyAcceptPostRequestBody: TentativelyAcceptPostRequestBody | undefined = {} as TentativelyAcceptPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { tentativelyAcceptPostRequestBody.comment = n.getStringValue(); },
        "proposedNewTime": n => { tentativelyAcceptPostRequestBody.proposedNewTime = n.getObjectValue<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
        "sendResponse": n => { tentativelyAcceptPostRequestBody.sendResponse = n.getBooleanValue(); },
    }
}
