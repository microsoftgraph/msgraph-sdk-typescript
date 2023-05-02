import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeSession} from './serializeSession';
import {Session} from './session';
import {SessionCollectionResponse} from './sessionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSessionCollectionResponse(writer: SerializationWriter, sessionCollectionResponse: SessionCollectionResponse | undefined = {} as SessionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sessionCollectionResponse)
        writer.writeCollectionOfObjectValues<Session>("value", sessionCollectionResponse.value, serializeSession);
}
