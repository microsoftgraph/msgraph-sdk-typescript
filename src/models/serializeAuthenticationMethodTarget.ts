import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthenticationMethodTarget(authenticationMethodTarget: AuthenticationMethodTarget | undefined = {} as AuthenticationMethodTarget, writer: SerializationWriter) : void {
        serializeEntity(writer, authenticationMethodTarget)
        writer.writeBooleanValue("isRegistrationRequired", authenticationMethodTarget.isRegistrationRequired);
        writer.writeEnumValue<AuthenticationMethodTargetType>("targetType", authenticationMethodTarget.targetType);
}
