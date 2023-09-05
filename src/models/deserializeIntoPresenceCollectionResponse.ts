import { createPresenceFromDiscriminatorValue } from './createPresenceFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type Presence } from './presence';
import { type PresenceCollectionResponse } from './presenceCollectionResponse';
import { serializePresence } from './serializePresence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPresenceCollectionResponse(presenceCollectionResponse: PresenceCollectionResponse | undefined = {} as PresenceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(presenceCollectionResponse),
        "value": n => { presenceCollectionResponse.value = n.getCollectionOfObjectValues<Presence>(createPresenceFromDiscriminatorValue); },
    }
}
