import {serializeTimeSlot} from '../../../../../../../models/serializeTimeSlot';
import {TimeSlot} from '../../../../../../../models/timeSlot';
import {DeclinePostRequestBody} from './declinePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeclinePostRequestBody(declinePostRequestBody: DeclinePostRequestBody | undefined = {} as DeclinePostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("comment", declinePostRequestBody.comment);
        writer.writeObjectValue<TimeSlot>("proposedNewTime", declinePostRequestBody.proposedNewTime, serializeTimeSlot);
        writer.writeBooleanValue("sendResponse", declinePostRequestBody.sendResponse);
        writer.writeAdditionalData(declinePostRequestBody.additionalData);
}
