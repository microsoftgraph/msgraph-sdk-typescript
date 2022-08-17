import {FederatedIdentityCredential} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFederatedIdentityCredentialFromDiscriminatorValue(parseNode: ParseNode | undefined) : FederatedIdentityCredential {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FederatedIdentityCredential();
}
