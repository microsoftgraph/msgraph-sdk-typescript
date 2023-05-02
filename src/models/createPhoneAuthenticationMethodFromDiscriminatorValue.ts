import {deserializeIntoPhoneAuthenticationMethod} from './deserializeIntoPhoneAuthenticationMethod';
import {PhoneAuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhoneAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPhoneAuthenticationMethod;
}
