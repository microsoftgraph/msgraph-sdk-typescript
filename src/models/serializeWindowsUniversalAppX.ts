import {MobileContainedApp} from './mobileContainedApp';
import {serializeMobileContainedApp} from './serializeMobileContainedApp';
import {serializeMobileLobApp} from './serializeMobileLobApp';
import {serializeWindowsMinimumOperatingSystem} from './serializeWindowsMinimumOperatingSystem';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsDeviceType} from './windowsDeviceType';
import {WindowsMinimumOperatingSystem} from './windowsMinimumOperatingSystem';
import {WindowsUniversalAppX} from './windowsUniversalAppX';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsUniversalAppX(writer: SerializationWriter, windowsUniversalAppX: WindowsUniversalAppX | undefined = {} as WindowsUniversalAppX) : void {
        serializeMobileLobApp(writer, windowsUniversalAppX)
        writer.writeEnumValue<WindowsArchitecture>("applicableArchitectures", windowsUniversalAppX.applicableArchitectures);
        writer.writeEnumValue<WindowsDeviceType>("applicableDeviceTypes", windowsUniversalAppX.applicableDeviceTypes);
        writer.writeCollectionOfObjectValues<MobileContainedApp>("committedContainedApps", windowsUniversalAppX.committedContainedApps, serializeMobileContainedApp);
        writer.writeStringValue("identityName", windowsUniversalAppX.identityName);
        writer.writeStringValue("identityPublisherHash", windowsUniversalAppX.identityPublisherHash);
        writer.writeStringValue("identityResourceIdentifier", windowsUniversalAppX.identityResourceIdentifier);
        writer.writeStringValue("identityVersion", windowsUniversalAppX.identityVersion);
        writer.writeBooleanValue("isBundle", windowsUniversalAppX.isBundle);
        writer.writeObjectValue<WindowsMinimumOperatingSystem>("minimumSupportedOperatingSystem", windowsUniversalAppX.minimumSupportedOperatingSystem, serializeWindowsMinimumOperatingSystem);
}
