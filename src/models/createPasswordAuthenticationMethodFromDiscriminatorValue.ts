import {PasswordAuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPasswordAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : PasswordAuthenticationMethod {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PasswordAuthenticationMethod();
}
