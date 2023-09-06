import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createSessionFromDiscriminatorValue } from './createSessionFromDiscriminatorValue';
import { serializeSession } from './serializeSession';
import { type Session } from './session';
import { type SessionCollectionResponse } from './sessionCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSessionCollectionResponse(sessionCollectionResponse: SessionCollectionResponse | undefined = {} as SessionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sessionCollectionResponse),
        "value": n => { sessionCollectionResponse.value = n.getCollectionOfObjectValues<Session>(createSessionFromDiscriminatorValue); },
    }
}
