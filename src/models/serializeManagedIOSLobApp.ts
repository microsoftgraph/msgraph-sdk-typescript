import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {ManagedIOSLobApp} from './managedIOSLobApp';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeIosMinimumOperatingSystem} from './serializeIosMinimumOperatingSystem';
import {serializeManagedMobileLobApp} from './serializeManagedMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedIOSLobApp(writer: SerializationWriter, managedIOSLobApp: ManagedIOSLobApp | undefined = {} as ManagedIOSLobApp) : void {
        serializeManagedMobileLobApp(writer, managedIOSLobApp)
        writer.writeObjectValue<IosDeviceType>("applicableDeviceType", managedIOSLobApp.applicableDeviceType, serializeIosDeviceType);
        writer.writeStringValue("buildNumber", managedIOSLobApp.buildNumber);
        writer.writeStringValue("bundleId", managedIOSLobApp.bundleId);
        writer.writeDateValue("expirationDateTime", managedIOSLobApp.expirationDateTime);
        writer.writeObjectValue<IosMinimumOperatingSystem>("minimumSupportedOperatingSystem", managedIOSLobApp.minimumSupportedOperatingSystem, serializeIosMinimumOperatingSystem);
        writer.writeStringValue("versionNumber", managedIOSLobApp.versionNumber);
}
