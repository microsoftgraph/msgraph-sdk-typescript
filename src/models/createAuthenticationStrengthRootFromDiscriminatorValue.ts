import {AuthenticationStrengthRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationStrengthRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationStrengthRoot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationStrengthRoot();
}
