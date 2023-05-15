import {WindowsMinimumOperatingSystem} from './windowsMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsMinimumOperatingSystem(writer: SerializationWriter, windowsMinimumOperatingSystem: WindowsMinimumOperatingSystem | undefined = {} as WindowsMinimumOperatingSystem) : void {
        writer.writeStringValue("@odata.type", windowsMinimumOperatingSystem.odataType);
        writer.writeBooleanValue("v10_0", windowsMinimumOperatingSystem.v10_0);
        writer.writeBooleanValue("v8_0", windowsMinimumOperatingSystem.v8_0);
        writer.writeBooleanValue("v8_1", windowsMinimumOperatingSystem.v8_1);
        writer.writeAdditionalData(windowsMinimumOperatingSystem.additionalData);
}
