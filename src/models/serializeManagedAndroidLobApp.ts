import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {ManagedAndroidLobApp} from './managedAndroidLobApp';
import {serializeAndroidMinimumOperatingSystem} from './serializeAndroidMinimumOperatingSystem';
import {serializeManagedMobileLobApp} from './serializeManagedMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAndroidLobApp(writer: SerializationWriter, managedAndroidLobApp: ManagedAndroidLobApp | undefined = {} as ManagedAndroidLobApp) : void {
        serializeManagedMobileLobApp(writer, managedAndroidLobApp)
        writer.writeObjectValue<AndroidMinimumOperatingSystem>("minimumSupportedOperatingSystem", managedAndroidLobApp.minimumSupportedOperatingSystem, serializeAndroidMinimumOperatingSystem);
        writer.writeStringValue("packageId", managedAndroidLobApp.packageId);
        writer.writeStringValue("versionCode", managedAndroidLobApp.versionCode);
        writer.writeStringValue("versionName", managedAndroidLobApp.versionName);
}
