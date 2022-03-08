import {MicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from './microsoftAuthenticatorAuthenticationMethodCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftAuthenticatorAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftAuthenticatorAuthenticationMethodCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftAuthenticatorAuthenticationMethodCollectionResponse();
}
