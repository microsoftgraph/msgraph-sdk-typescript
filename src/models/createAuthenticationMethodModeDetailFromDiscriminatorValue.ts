import { deserializeIntoAuthenticationMethodModeDetail } from './deserializeIntoAuthenticationMethodModeDetail';
import { type AuthenticationMethodModeDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAuthenticationMethodModeDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationMethodModeDetail;
}
