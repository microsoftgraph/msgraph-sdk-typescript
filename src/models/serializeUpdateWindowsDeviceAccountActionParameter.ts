import {serializeWindowsDeviceAccount} from './serializeWindowsDeviceAccount';
import type {UpdateWindowsDeviceAccountActionParameter} from './updateWindowsDeviceAccountActionParameter';
import type {WindowsDeviceAccount} from './windowsDeviceAccount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateWindowsDeviceAccountActionParameter(writer: SerializationWriter, updateWindowsDeviceAccountActionParameter: UpdateWindowsDeviceAccountActionParameter | undefined = {} as UpdateWindowsDeviceAccountActionParameter) : void {
        writer.writeBooleanValue("calendarSyncEnabled", updateWindowsDeviceAccountActionParameter.calendarSyncEnabled);
        writer.writeObjectValue<WindowsDeviceAccount>("deviceAccount", updateWindowsDeviceAccountActionParameter.deviceAccount, serializeWindowsDeviceAccount);
        writer.writeStringValue("deviceAccountEmail", updateWindowsDeviceAccountActionParameter.deviceAccountEmail);
        writer.writeStringValue("exchangeServer", updateWindowsDeviceAccountActionParameter.exchangeServer);
        writer.writeStringValue("@odata.type", updateWindowsDeviceAccountActionParameter.odataType);
        writer.writeBooleanValue("passwordRotationEnabled", updateWindowsDeviceAccountActionParameter.passwordRotationEnabled);
        writer.writeStringValue("sessionInitiationProtocalAddress", updateWindowsDeviceAccountActionParameter.sessionInitiationProtocalAddress);
        writer.writeAdditionalData(updateWindowsDeviceAccountActionParameter.additionalData);
}
