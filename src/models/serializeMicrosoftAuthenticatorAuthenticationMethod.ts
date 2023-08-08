import type {Device} from './device';
import type {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import {serializeAuthenticationMethod} from './serializeAuthenticationMethod';
import {serializeDevice} from './serializeDevice';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAuthenticatorAuthenticationMethod(writer: SerializationWriter, microsoftAuthenticatorAuthenticationMethod: MicrosoftAuthenticatorAuthenticationMethod | undefined = {} as MicrosoftAuthenticatorAuthenticationMethod) : void {
        serializeAuthenticationMethod(writer, microsoftAuthenticatorAuthenticationMethod)
        writer.writeDateValue("createdDateTime", microsoftAuthenticatorAuthenticationMethod.createdDateTime);
        writer.writeObjectValue<Device>("device", microsoftAuthenticatorAuthenticationMethod.device, serializeDevice);
        writer.writeStringValue("deviceTag", microsoftAuthenticatorAuthenticationMethod.deviceTag);
        writer.writeStringValue("displayName", microsoftAuthenticatorAuthenticationMethod.displayName);
        writer.writeStringValue("phoneAppVersion", microsoftAuthenticatorAuthenticationMethod.phoneAppVersion);
}
