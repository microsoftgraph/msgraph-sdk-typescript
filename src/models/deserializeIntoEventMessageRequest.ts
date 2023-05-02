import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {deserializeIntoEventMessage} from './deserializeIntoEventMessage';
import {EventMessageRequest} from './eventMessageRequest';
import {Location} from './location';
import {MeetingRequestType} from './meetingRequestType';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeLocation} from './serializeLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessageRequest(eventMessageRequest: EventMessageRequest | undefined = {} as EventMessageRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessage(eventMessageRequest),
        "allowNewTimeProposals": n => { eventMessageRequest.allowNewTimeProposals = n.getBooleanValue(); },
        "meetingRequestType": n => { eventMessageRequest.meetingRequestType = n.getEnumValue<MeetingRequestType>(MeetingRequestType); },
        "previousEndDateTime": n => { eventMessageRequest.previousEndDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "previousLocation": n => { eventMessageRequest.previousLocation = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
        "previousStartDateTime": n => { eventMessageRequest.previousStartDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "responseRequested": n => { eventMessageRequest.responseRequested = n.getBooleanValue(); },
    }
}
