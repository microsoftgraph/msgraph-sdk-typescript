import {KeyCredential} from './keyCredential';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyCredentialFromDiscriminatorValue(parseNode: ParseNode | undefined) : KeyCredential {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KeyCredential();
}
