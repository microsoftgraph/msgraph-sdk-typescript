import {createPresenceFromDiscriminatorValue} from './createPresenceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {Presence} from './presence';
import {PresenceCollectionResponse} from './presenceCollectionResponse';
import {serializePresence} from './serializePresence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPresenceCollectionResponse(presenceCollectionResponse: PresenceCollectionResponse | undefined = {} as PresenceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(presenceCollectionResponse),
        "value": n => { presenceCollectionResponse.value = n.getCollectionOfObjectValues<Presence>(createPresenceFromDiscriminatorValue); },
    }
}
