import { type AndroidMinimumOperatingSystem } from './androidMinimumOperatingSystem';
import { type ManagedAndroidLobApp } from './managedAndroidLobApp';
import { serializeAndroidMinimumOperatingSystem } from './serializeAndroidMinimumOperatingSystem';
import { serializeManagedMobileLobApp } from './serializeManagedMobileLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAndroidLobApp(writer: SerializationWriter, managedAndroidLobApp: ManagedAndroidLobApp | undefined = {} as ManagedAndroidLobApp) : void {
        serializeManagedMobileLobApp(writer, managedAndroidLobApp)
        writer.writeObjectValue<AndroidMinimumOperatingSystem>("minimumSupportedOperatingSystem", managedAndroidLobApp.minimumSupportedOperatingSystem, serializeAndroidMinimumOperatingSystem);
        writer.writeStringValue("packageId", managedAndroidLobApp.packageId);
        writer.writeStringValue("versionCode", managedAndroidLobApp.versionCode);
        writer.writeStringValue("versionName", managedAndroidLobApp.versionName);
}
