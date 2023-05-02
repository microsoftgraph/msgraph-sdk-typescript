import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Presence} from './presence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPresence(presence: Presence | undefined = {} as Presence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(presence),
        "activity": n => { presence.activity = n.getStringValue(); },
        "availability": n => { presence.availability = n.getStringValue(); },
    }
}
