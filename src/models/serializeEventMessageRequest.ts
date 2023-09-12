import { type DateTimeTimeZone } from './dateTimeTimeZone';
import { type EventMessageRequest } from './eventMessageRequest';
import { type Location } from './location';
import { MeetingRequestType } from './meetingRequestType';
import { serializeDateTimeTimeZone } from './serializeDateTimeTimeZone';
import { serializeEventMessage } from './serializeEventMessage';
import { serializeLocation } from './serializeLocation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEventMessageRequest(writer: SerializationWriter, eventMessageRequest: EventMessageRequest | undefined = {} as EventMessageRequest) : void {
        serializeEventMessage(writer, eventMessageRequest)
        writer.writeBooleanValue("allowNewTimeProposals", eventMessageRequest.allowNewTimeProposals);
        writer.writeEnumValue<MeetingRequestType>("meetingRequestType", eventMessageRequest.meetingRequestType);
        writer.writeObjectValue<DateTimeTimeZone>("previousEndDateTime", eventMessageRequest.previousEndDateTime, serializeDateTimeTimeZone);
        writer.writeObjectValue<Location>("previousLocation", eventMessageRequest.previousLocation, serializeLocation);
        writer.writeObjectValue<DateTimeTimeZone>("previousStartDateTime", eventMessageRequest.previousStartDateTime, serializeDateTimeTimeZone);
        writer.writeBooleanValue("responseRequested", eventMessageRequest.responseRequested);
}
