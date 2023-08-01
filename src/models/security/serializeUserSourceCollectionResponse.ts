import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeUserSource} from './serializeUserSource';
import type {UserSource} from './userSource';
import type {UserSourceCollectionResponse} from './userSourceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserSourceCollectionResponse(writer: SerializationWriter, userSourceCollectionResponse: UserSourceCollectionResponse | undefined = {} as UserSourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userSourceCollectionResponse)
        writer.writeCollectionOfObjectValues<UserSource>("value", userSourceCollectionResponse.value, serializeUserSource);
}
