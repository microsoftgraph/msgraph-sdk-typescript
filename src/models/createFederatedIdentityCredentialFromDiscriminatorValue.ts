import { deserializeIntoFederatedIdentityCredential } from './deserializeIntoFederatedIdentityCredential';
import { type FederatedIdentityCredential } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFederatedIdentityCredentialFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFederatedIdentityCredential;
}
