import { type AuthenticationMethodTarget } from './authenticationMethodTarget';
import { AuthenticationMethodTargetType } from './authenticationMethodTargetType';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodTarget(writer: SerializationWriter, authenticationMethodTarget: AuthenticationMethodTarget | undefined = {} as AuthenticationMethodTarget) : void {
        serializeEntity(writer, authenticationMethodTarget)
        writer.writeBooleanValue("isRegistrationRequired", authenticationMethodTarget.isRegistrationRequired);
        writer.writeEnumValue<AuthenticationMethodTargetType>("targetType", authenticationMethodTarget.targetType);
}
