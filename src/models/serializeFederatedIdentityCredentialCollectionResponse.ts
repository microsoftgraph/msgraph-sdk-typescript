import {FederatedIdentityCredential} from './federatedIdentityCredential';
import {FederatedIdentityCredentialCollectionResponse} from './federatedIdentityCredentialCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeFederatedIdentityCredential} from './serializeFederatedIdentityCredential';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFederatedIdentityCredentialCollectionResponse(federatedIdentityCredentialCollectionResponse: FederatedIdentityCredentialCollectionResponse | undefined = {} as FederatedIdentityCredentialCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, federatedIdentityCredentialCollectionResponse)
        writer.writeCollectionOfObjectValues<FederatedIdentityCredential>("value", federatedIdentityCredentialCollectionResponse.value, serializeFederatedIdentityCredential);
}
