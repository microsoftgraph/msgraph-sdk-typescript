import {PhoneAuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhoneAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhoneAuthenticationMethod {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhoneAuthenticationMethod();
}
