import {PhoneAuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhoneAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhoneAuthenticationMethodCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhoneAuthenticationMethodCollectionResponse();
}
