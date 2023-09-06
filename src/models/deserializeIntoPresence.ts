import { createPresenceStatusMessageFromDiscriminatorValue } from './createPresenceStatusMessageFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Presence } from './presence';
import { type PresenceStatusMessage } from './presenceStatusMessage';
import { serializePresenceStatusMessage } from './serializePresenceStatusMessage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPresence(presence: Presence | undefined = {} as Presence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(presence),
        "activity": n => { presence.activity = n.getStringValue(); },
        "availability": n => { presence.availability = n.getStringValue(); },
        "statusMessage": n => { presence.statusMessage = n.getObjectValue<PresenceStatusMessage>(createPresenceStatusMessageFromDiscriminatorValue); },
    }
}
