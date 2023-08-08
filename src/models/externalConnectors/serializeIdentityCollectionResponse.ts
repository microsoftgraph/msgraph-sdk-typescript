import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {Identity} from './identity';
import type {IdentityCollectionResponse} from './identityCollectionResponse';
import {serializeIdentity} from './serializeIdentity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityCollectionResponse(writer: SerializationWriter, identityCollectionResponse: IdentityCollectionResponse | undefined = {} as IdentityCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityCollectionResponse)
        writer.writeCollectionOfObjectValues<Identity>("value", identityCollectionResponse.value, serializeIdentity);
}
