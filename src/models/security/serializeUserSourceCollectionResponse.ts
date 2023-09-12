import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { serializeUserSource } from './serializeUserSource';
import { type UserSource } from './userSource';
import { type UserSourceCollectionResponse } from './userSourceCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserSourceCollectionResponse(writer: SerializationWriter, userSourceCollectionResponse: UserSourceCollectionResponse | undefined = {} as UserSourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userSourceCollectionResponse)
        writer.writeCollectionOfObjectValues<UserSource>("value", userSourceCollectionResponse.value, serializeUserSource);
}
