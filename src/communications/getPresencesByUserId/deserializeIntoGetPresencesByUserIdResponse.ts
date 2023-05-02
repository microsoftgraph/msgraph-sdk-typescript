import {createPresenceFromDiscriminatorValue} from '../../models/createPresenceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {Presence} from '../../models/presence';
import {serializePresence} from '../../models/serializePresence';
import {GetPresencesByUserIdResponse} from './getPresencesByUserIdResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPresencesByUserIdResponse(getPresencesByUserIdResponse: GetPresencesByUserIdResponse | undefined = {} as GetPresencesByUserIdResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getPresencesByUserIdResponse),
        "value": n => { getPresencesByUserIdResponse.value = n.getCollectionOfObjectValues<Presence>(createPresenceFromDiscriminatorValue); },
    }
}
