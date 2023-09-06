import { deserializeIntoKeyCredential } from './deserializeIntoKeyCredential';
import { type KeyCredential } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createKeyCredentialFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKeyCredential;
}
