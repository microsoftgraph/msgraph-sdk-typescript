import { type AuthenticationMethodTarget } from './authenticationMethodTarget';
import { AuthenticationMethodTargetType } from './authenticationMethodTargetType';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthenticationMethodTarget(authenticationMethodTarget: AuthenticationMethodTarget | undefined = {} as AuthenticationMethodTarget) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(authenticationMethodTarget),
        "isRegistrationRequired": n => { authenticationMethodTarget.isRegistrationRequired = n.getBooleanValue(); },
        "targetType": n => { authenticationMethodTarget.targetType = n.getEnumValue<AuthenticationMethodTargetType>(AuthenticationMethodTargetType); },
    }
}
