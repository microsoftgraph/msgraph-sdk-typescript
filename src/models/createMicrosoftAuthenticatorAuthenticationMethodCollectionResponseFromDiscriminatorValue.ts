import {deserializeIntoMicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from './deserializeIntoMicrosoftAuthenticatorAuthenticationMethodCollectionResponse';
import {MicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftAuthenticatorAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMicrosoftAuthenticatorAuthenticationMethodCollectionResponse;
}
