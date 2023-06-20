import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {Identity} from './identity';
import {IdentityCollectionResponse} from './identityCollectionResponse';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityCollectionResponse(identityCollectionResponse: IdentityCollectionResponse | undefined = {} as IdentityCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityCollectionResponse)
        writer.writeCollectionOfObjectValues<Identity>("value", identityCollectionResponse.value, serializeIdentity);
}
