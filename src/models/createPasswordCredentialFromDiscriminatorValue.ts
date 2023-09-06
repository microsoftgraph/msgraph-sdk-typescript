import { deserializeIntoPasswordCredential } from './deserializeIntoPasswordCredential';
import { type PasswordCredential } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPasswordCredentialFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPasswordCredential;
}
