import { type AndroidMinimumOperatingSystem } from './androidMinimumOperatingSystem';
import { type AndroidStoreApp } from './androidStoreApp';
import { serializeAndroidMinimumOperatingSystem } from './serializeAndroidMinimumOperatingSystem';
import { serializeMobileApp } from './serializeMobileApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAndroidStoreApp(writer: SerializationWriter, androidStoreApp: AndroidStoreApp | undefined = {} as AndroidStoreApp) : void {
        serializeMobileApp(writer, androidStoreApp)
        writer.writeStringValue("appStoreUrl", androidStoreApp.appStoreUrl);
        writer.writeObjectValue<AndroidMinimumOperatingSystem>("minimumSupportedOperatingSystem", androidStoreApp.minimumSupportedOperatingSystem, serializeAndroidMinimumOperatingSystem);
        writer.writeStringValue("packageId", androidStoreApp.packageId);
}
