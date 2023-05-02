import {createDeviceFromDiscriminatorValue} from './createDeviceFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {Device} from './device';
import {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import {serializeDevice} from './serializeDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAuthenticatorAuthenticationMethod(microsoftAuthenticatorAuthenticationMethod: MicrosoftAuthenticatorAuthenticationMethod | undefined = {} as MicrosoftAuthenticatorAuthenticationMethod) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(microsoftAuthenticatorAuthenticationMethod),
        "createdDateTime": n => { microsoftAuthenticatorAuthenticationMethod.createdDateTime = n.getDateValue(); },
        "device": n => { microsoftAuthenticatorAuthenticationMethod.device = n.getObjectValue<Device>(createDeviceFromDiscriminatorValue); },
        "deviceTag": n => { microsoftAuthenticatorAuthenticationMethod.deviceTag = n.getStringValue(); },
        "displayName": n => { microsoftAuthenticatorAuthenticationMethod.displayName = n.getStringValue(); },
        "phoneAppVersion": n => { microsoftAuthenticatorAuthenticationMethod.phoneAppVersion = n.getStringValue(); },
    }
}
