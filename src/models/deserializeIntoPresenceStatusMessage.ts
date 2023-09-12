import { createDateTimeTimeZoneFromDiscriminatorValue } from './createDateTimeTimeZoneFromDiscriminatorValue';
import { createItemBodyFromDiscriminatorValue } from './createItemBodyFromDiscriminatorValue';
import { type DateTimeTimeZone } from './dateTimeTimeZone';
import { type ItemBody } from './itemBody';
import { type PresenceStatusMessage } from './presenceStatusMessage';
import { serializeDateTimeTimeZone } from './serializeDateTimeTimeZone';
import { serializeItemBody } from './serializeItemBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPresenceStatusMessage(presenceStatusMessage: PresenceStatusMessage | undefined = {} as PresenceStatusMessage) : Record<string, (node: ParseNode) => void> {
    return {
        "expiryDateTime": n => { presenceStatusMessage.expiryDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "message": n => { presenceStatusMessage.message = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "@odata.type": n => { presenceStatusMessage.odataType = n.getStringValue(); },
        "publishedDateTime": n => { presenceStatusMessage.publishedDateTime = n.getDateValue(); },
    }
}
