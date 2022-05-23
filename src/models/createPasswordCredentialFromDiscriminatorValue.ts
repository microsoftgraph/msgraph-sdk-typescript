import {PasswordCredentialImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordCredentialFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordCredentialImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordCredentialImpl();
}
