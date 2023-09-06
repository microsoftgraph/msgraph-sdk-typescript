import { AuthenticationMethodKeyStrength } from './authenticationMethodKeyStrength';
import { type Device } from './device';
import { serializeAuthenticationMethod } from './serializeAuthenticationMethod';
import { serializeDevice } from './serializeDevice';
import { type WindowsHelloForBusinessAuthenticationMethod } from './windowsHelloForBusinessAuthenticationMethod';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsHelloForBusinessAuthenticationMethod(writer: SerializationWriter, windowsHelloForBusinessAuthenticationMethod: WindowsHelloForBusinessAuthenticationMethod | undefined = {} as WindowsHelloForBusinessAuthenticationMethod) : void {
        serializeAuthenticationMethod(writer, windowsHelloForBusinessAuthenticationMethod)
        writer.writeDateValue("createdDateTime", windowsHelloForBusinessAuthenticationMethod.createdDateTime);
        writer.writeObjectValue<Device>("device", windowsHelloForBusinessAuthenticationMethod.device, serializeDevice);
        writer.writeStringValue("displayName", windowsHelloForBusinessAuthenticationMethod.displayName);
        writer.writeEnumValue<AuthenticationMethodKeyStrength>("keyStrength", windowsHelloForBusinessAuthenticationMethod.keyStrength);
}
