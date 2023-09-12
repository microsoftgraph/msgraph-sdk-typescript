import { createFederatedIdentityCredentialFromDiscriminatorValue } from './createFederatedIdentityCredentialFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type FederatedIdentityCredential } from './federatedIdentityCredential';
import { type FederatedIdentityCredentialCollectionResponse } from './federatedIdentityCredentialCollectionResponse';
import { serializeFederatedIdentityCredential } from './serializeFederatedIdentityCredential';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFederatedIdentityCredentialCollectionResponse(federatedIdentityCredentialCollectionResponse: FederatedIdentityCredentialCollectionResponse | undefined = {} as FederatedIdentityCredentialCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(federatedIdentityCredentialCollectionResponse),
        "value": n => { federatedIdentityCredentialCollectionResponse.value = n.getCollectionOfObjectValues<FederatedIdentityCredential>(createFederatedIdentityCredentialFromDiscriminatorValue); },
    }
}
