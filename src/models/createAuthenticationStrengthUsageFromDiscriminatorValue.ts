import {AuthenticationStrengthUsage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationStrengthUsageFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationStrengthUsage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationStrengthUsage();
}
