import { deserializeIntoFederatedIdentityCredentialCollectionResponse } from './deserializeIntoFederatedIdentityCredentialCollectionResponse';
import { type FederatedIdentityCredentialCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFederatedIdentityCredentialCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFederatedIdentityCredentialCollectionResponse;
}
