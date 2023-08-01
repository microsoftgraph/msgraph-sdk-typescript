import type {Presence} from './presence';
import type {PresenceCollectionResponse} from './presenceCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePresence} from './serializePresence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePresenceCollectionResponse(writer: SerializationWriter, presenceCollectionResponse: PresenceCollectionResponse | undefined = {} as PresenceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, presenceCollectionResponse)
        writer.writeCollectionOfObjectValues<Presence>("value", presenceCollectionResponse.value, serializePresence);
}
