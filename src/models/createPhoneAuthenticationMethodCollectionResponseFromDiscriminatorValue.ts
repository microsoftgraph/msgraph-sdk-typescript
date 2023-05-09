import {deserializeIntoPhoneAuthenticationMethodCollectionResponse} from './deserializeIntoPhoneAuthenticationMethodCollectionResponse';
import {PhoneAuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhoneAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPhoneAuthenticationMethodCollectionResponse;
}
