import {AuthenticationMethodModeDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodModeDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : AuthenticationMethodModeDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AuthenticationMethodModeDetail();
}
