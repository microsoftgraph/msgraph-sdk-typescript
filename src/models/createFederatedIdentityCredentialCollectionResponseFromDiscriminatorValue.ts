import {deserializeIntoFederatedIdentityCredentialCollectionResponse} from './deserializeIntoFederatedIdentityCredentialCollectionResponse';
import {FederatedIdentityCredentialCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFederatedIdentityCredentialCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFederatedIdentityCredentialCollectionResponse;
}
