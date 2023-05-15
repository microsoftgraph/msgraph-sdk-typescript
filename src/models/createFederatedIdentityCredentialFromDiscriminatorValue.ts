import {deserializeIntoFederatedIdentityCredential} from './deserializeIntoFederatedIdentityCredential';
import {FederatedIdentityCredential} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFederatedIdentityCredentialFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFederatedIdentityCredential;
}
