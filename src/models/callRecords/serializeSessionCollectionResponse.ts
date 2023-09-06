import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { serializeSession } from './serializeSession';
import { type Session } from './session';
import { type SessionCollectionResponse } from './sessionCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSessionCollectionResponse(writer: SerializationWriter, sessionCollectionResponse: SessionCollectionResponse | undefined = {} as SessionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sessionCollectionResponse)
        writer.writeCollectionOfObjectValues<Session>("value", sessionCollectionResponse.value, serializeSession);
}
