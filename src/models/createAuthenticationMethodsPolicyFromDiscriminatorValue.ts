import {deserializeIntoAuthenticationMethodsPolicy} from './deserializeIntoAuthenticationMethodsPolicy';
import {AuthenticationMethodsPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodsPolicy;
}
