import {PasswordCredentialPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordCredentialPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordCredentialPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordCredentialPostRequestBodyImpl();
}
