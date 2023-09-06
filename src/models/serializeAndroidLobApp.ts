import { type AndroidLobApp } from './androidLobApp';
import { type AndroidMinimumOperatingSystem } from './androidMinimumOperatingSystem';
import { serializeAndroidMinimumOperatingSystem } from './serializeAndroidMinimumOperatingSystem';
import { serializeMobileLobApp } from './serializeMobileLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAndroidLobApp(writer: SerializationWriter, androidLobApp: AndroidLobApp | undefined = {} as AndroidLobApp) : void {
        serializeMobileLobApp(writer, androidLobApp)
        writer.writeObjectValue<AndroidMinimumOperatingSystem>("minimumSupportedOperatingSystem", androidLobApp.minimumSupportedOperatingSystem, serializeAndroidMinimumOperatingSystem);
        writer.writeStringValue("packageId", androidLobApp.packageId);
        writer.writeStringValue("versionCode", androidLobApp.versionCode);
        writer.writeStringValue("versionName", androidLobApp.versionName);
}
