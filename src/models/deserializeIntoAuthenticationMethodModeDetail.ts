import { type AuthenticationMethodModeDetail } from './authenticationMethodModeDetail';
import { BaseAuthenticationMethod } from './baseAuthenticationMethod';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodModeDetail(authenticationMethodModeDetail: AuthenticationMethodModeDetail | undefined = {} as AuthenticationMethodModeDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationMethodModeDetail),
        "authenticationMethod": n => { authenticationMethodModeDetail.authenticationMethod = n.getEnumValue<BaseAuthenticationMethod>(BaseAuthenticationMethod); },
        "displayName": n => { authenticationMethodModeDetail.displayName = n.getStringValue(); },
    }
}
