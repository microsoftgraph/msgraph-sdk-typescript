import { type Presence } from './presence';
import { type PresenceStatusMessage } from './presenceStatusMessage';
import { serializeEntity } from './serializeEntity';
import { serializePresenceStatusMessage } from './serializePresenceStatusMessage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePresence(writer: SerializationWriter, presence: Presence | undefined = {} as Presence) : void {
        serializeEntity(writer, presence)
        writer.writeStringValue("activity", presence.activity);
        writer.writeStringValue("availability", presence.availability);
        writer.writeObjectValue<PresenceStatusMessage>("statusMessage", presence.statusMessage, serializePresenceStatusMessage);
}
