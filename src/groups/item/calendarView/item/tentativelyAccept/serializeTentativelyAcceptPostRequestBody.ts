import {serializeTimeSlot} from '../../../../../models/serializeTimeSlot';
import {TimeSlot} from '../../../../../models/timeSlot';
import {TentativelyAcceptPostRequestBody} from './tentativelyAcceptPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTentativelyAcceptPostRequestBody(writer: SerializationWriter, tentativelyAcceptPostRequestBody: TentativelyAcceptPostRequestBody | undefined = {} as TentativelyAcceptPostRequestBody) : void {
        writer.writeStringValue("comment", tentativelyAcceptPostRequestBody.comment);
        writer.writeObjectValue<TimeSlot>("proposedNewTime", tentativelyAcceptPostRequestBody.proposedNewTime, serializeTimeSlot);
        writer.writeBooleanValue("sendResponse", tentativelyAcceptPostRequestBody.sendResponse);
        writer.writeAdditionalData(tentativelyAcceptPostRequestBody.additionalData);
}
