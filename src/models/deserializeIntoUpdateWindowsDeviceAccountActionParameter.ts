import {createWindowsDeviceAccountFromDiscriminatorValue} from './createWindowsDeviceAccountFromDiscriminatorValue';
import {serializeWindowsDeviceAccount} from './serializeWindowsDeviceAccount';
import type {UpdateWindowsDeviceAccountActionParameter} from './updateWindowsDeviceAccountActionParameter';
import type {WindowsDeviceAccount} from './windowsDeviceAccount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateWindowsDeviceAccountActionParameter(updateWindowsDeviceAccountActionParameter: UpdateWindowsDeviceAccountActionParameter | undefined = {} as UpdateWindowsDeviceAccountActionParameter) : Record<string, (node: ParseNode) => void> {
    return {
        "calendarSyncEnabled": n => { updateWindowsDeviceAccountActionParameter.calendarSyncEnabled = n.getBooleanValue(); },
        "deviceAccount": n => { updateWindowsDeviceAccountActionParameter.deviceAccount = n.getObjectValue<WindowsDeviceAccount>(createWindowsDeviceAccountFromDiscriminatorValue); },
        "deviceAccountEmail": n => { updateWindowsDeviceAccountActionParameter.deviceAccountEmail = n.getStringValue(); },
        "exchangeServer": n => { updateWindowsDeviceAccountActionParameter.exchangeServer = n.getStringValue(); },
        "@odata.type": n => { updateWindowsDeviceAccountActionParameter.odataType = n.getStringValue(); },
        "passwordRotationEnabled": n => { updateWindowsDeviceAccountActionParameter.passwordRotationEnabled = n.getBooleanValue(); },
        "sessionInitiationProtocalAddress": n => { updateWindowsDeviceAccountActionParameter.sessionInitiationProtocalAddress = n.getStringValue(); },
    }
}
