import {AuthenticationMethodKeyStrength} from './authenticationMethodKeyStrength';
import {createDeviceFromDiscriminatorValue} from './createDeviceFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {Device} from './device';
import {serializeDevice} from './serializeDevice';
import {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsHelloForBusinessAuthenticationMethod(windowsHelloForBusinessAuthenticationMethod: WindowsHelloForBusinessAuthenticationMethod | undefined = {} as WindowsHelloForBusinessAuthenticationMethod) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(windowsHelloForBusinessAuthenticationMethod),
        "createdDateTime": n => { windowsHelloForBusinessAuthenticationMethod.createdDateTime = n.getDateValue(); },
        "device": n => { windowsHelloForBusinessAuthenticationMethod.device = n.getObjectValue<Device>(createDeviceFromDiscriminatorValue); },
        "displayName": n => { windowsHelloForBusinessAuthenticationMethod.displayName = n.getStringValue(); },
        "keyStrength": n => { windowsHelloForBusinessAuthenticationMethod.keyStrength = n.getEnumValue<AuthenticationMethodKeyStrength>(AuthenticationMethodKeyStrength); },
    }
}
