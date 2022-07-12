import {AuthenticationMethodsPolicyMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodsPolicyMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodsPolicyMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodsPolicyMember1();
}
