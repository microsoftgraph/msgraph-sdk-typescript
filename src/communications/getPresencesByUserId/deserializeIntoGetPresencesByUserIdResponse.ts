import { createPresenceFromDiscriminatorValue } from '../../models/createPresenceFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import { type Presence } from '../../models/presence';
import { serializePresence } from '../../models/serializePresence';
import { type GetPresencesByUserIdResponse } from './getPresencesByUserIdResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPresencesByUserIdResponse(getPresencesByUserIdResponse: GetPresencesByUserIdResponse | undefined = {} as GetPresencesByUserIdResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getPresencesByUserIdResponse),
        "value": n => { getPresencesByUserIdResponse.value = n.getCollectionOfObjectValues<Presence>(createPresenceFromDiscriminatorValue); },
    }
}
