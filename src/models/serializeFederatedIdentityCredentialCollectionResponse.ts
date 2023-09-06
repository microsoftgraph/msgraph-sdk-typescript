import { type FederatedIdentityCredential } from './federatedIdentityCredential';
import { type FederatedIdentityCredentialCollectionResponse } from './federatedIdentityCredentialCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeFederatedIdentityCredential } from './serializeFederatedIdentityCredential';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFederatedIdentityCredentialCollectionResponse(writer: SerializationWriter, federatedIdentityCredentialCollectionResponse: FederatedIdentityCredentialCollectionResponse | undefined = {} as FederatedIdentityCredentialCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, federatedIdentityCredentialCollectionResponse)
        writer.writeCollectionOfObjectValues<FederatedIdentityCredential>("value", federatedIdentityCredentialCollectionResponse.value, serializeFederatedIdentityCredential);
}
