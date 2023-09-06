import { serializeTimeSlot } from '../../../../../models/serializeTimeSlot';
import { type TimeSlot } from '../../../../../models/timeSlot';
import { type DeclinePostRequestBody } from './declinePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeclinePostRequestBody(writer: SerializationWriter, declinePostRequestBody: DeclinePostRequestBody | undefined = {} as DeclinePostRequestBody) : void {
        writer.writeStringValue("comment", declinePostRequestBody.comment);
        writer.writeObjectValue<TimeSlot>("proposedNewTime", declinePostRequestBody.proposedNewTime, serializeTimeSlot);
        writer.writeBooleanValue("sendResponse", declinePostRequestBody.sendResponse);
        writer.writeAdditionalData(declinePostRequestBody.additionalData);
}
