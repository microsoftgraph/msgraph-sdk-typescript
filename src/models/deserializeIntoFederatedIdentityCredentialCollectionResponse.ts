import {createFederatedIdentityCredentialFromDiscriminatorValue} from './createFederatedIdentityCredentialFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {FederatedIdentityCredential} from './federatedIdentityCredential';
import {FederatedIdentityCredentialCollectionResponse} from './federatedIdentityCredentialCollectionResponse';
import {serializeFederatedIdentityCredential} from './serializeFederatedIdentityCredential';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFederatedIdentityCredentialCollectionResponse(federatedIdentityCredentialCollectionResponse: FederatedIdentityCredentialCollectionResponse | undefined = {} as FederatedIdentityCredentialCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(federatedIdentityCredentialCollectionResponse),
        "value": n => { federatedIdentityCredentialCollectionResponse.value = n.getCollectionOfObjectValues<FederatedIdentityCredential>(createFederatedIdentityCredentialFromDiscriminatorValue); },
    }
}
