import {AuthenticationMethodConfigurationsMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodConfigurationsMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodConfigurationsMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodConfigurationsMember1();
}
