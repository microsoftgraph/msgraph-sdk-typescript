import {PasswordCredentialRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordCredentialRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordCredentialRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordCredentialRequestBodyImpl();
}
