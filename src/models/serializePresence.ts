import {Presence} from './presence';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePresence(writer: SerializationWriter, presence: Presence | undefined = {} as Presence) : void {
        serializeEntity(writer, presence)
        writer.writeStringValue("activity", presence.activity);
        writer.writeStringValue("availability", presence.availability);
}
