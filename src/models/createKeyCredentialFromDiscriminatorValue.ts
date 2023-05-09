import {deserializeIntoKeyCredential} from './deserializeIntoKeyCredential';
import {KeyCredential} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyCredentialFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoKeyCredential;
}
