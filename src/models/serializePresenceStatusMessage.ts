import { type DateTimeTimeZone } from './dateTimeTimeZone';
import { type ItemBody } from './itemBody';
import { type PresenceStatusMessage } from './presenceStatusMessage';
import { serializeDateTimeTimeZone } from './serializeDateTimeTimeZone';
import { serializeItemBody } from './serializeItemBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePresenceStatusMessage(writer: SerializationWriter, presenceStatusMessage: PresenceStatusMessage | undefined = {} as PresenceStatusMessage) : void {
        writer.writeObjectValue<DateTimeTimeZone>("expiryDateTime", presenceStatusMessage.expiryDateTime, serializeDateTimeTimeZone);
        writer.writeObjectValue<ItemBody>("message", presenceStatusMessage.message, serializeItemBody);
        writer.writeStringValue("@odata.type", presenceStatusMessage.odataType);
        writer.writeDateValue("publishedDateTime", presenceStatusMessage.publishedDateTime);
        writer.writeAdditionalData(presenceStatusMessage.additionalData);
}
