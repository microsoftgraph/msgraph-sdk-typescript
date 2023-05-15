import {serializeMobileLobApp} from './serializeMobileLobApp';
import {serializeWindowsMinimumOperatingSystem} from './serializeWindowsMinimumOperatingSystem';
import {WindowsAppX} from './windowsAppX';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsMinimumOperatingSystem} from './windowsMinimumOperatingSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsAppX(writer: SerializationWriter, windowsAppX: WindowsAppX | undefined = {} as WindowsAppX) : void {
        serializeMobileLobApp(writer, windowsAppX)
        writer.writeEnumValue<WindowsArchitecture>("applicableArchitectures", windowsAppX.applicableArchitectures);
        writer.writeStringValue("identityName", windowsAppX.identityName);
        writer.writeStringValue("identityPublisherHash", windowsAppX.identityPublisherHash);
        writer.writeStringValue("identityResourceIdentifier", windowsAppX.identityResourceIdentifier);
        writer.writeStringValue("identityVersion", windowsAppX.identityVersion);
        writer.writeBooleanValue("isBundle", windowsAppX.isBundle);
        writer.writeObjectValue<WindowsMinimumOperatingSystem>("minimumSupportedOperatingSystem", windowsAppX.minimumSupportedOperatingSystem, serializeWindowsMinimumOperatingSystem);
}
