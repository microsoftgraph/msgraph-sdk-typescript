import { serializeTimeSlot } from '../../../../models/serializeTimeSlot';
import { type TimeSlot } from '../../../../models/timeSlot';
import { type TentativelyAcceptPostRequestBody } from './tentativelyAcceptPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTentativelyAcceptPostRequestBody(writer: SerializationWriter, tentativelyAcceptPostRequestBody: TentativelyAcceptPostRequestBody | undefined = {} as TentativelyAcceptPostRequestBody) : void {
        writer.writeStringValue("comment", tentativelyAcceptPostRequestBody.comment);
        writer.writeObjectValue<TimeSlot>("proposedNewTime", tentativelyAcceptPostRequestBody.proposedNewTime, serializeTimeSlot);
        writer.writeBooleanValue("sendResponse", tentativelyAcceptPostRequestBody.sendResponse);
        writer.writeAdditionalData(tentativelyAcceptPostRequestBody.additionalData);
}
