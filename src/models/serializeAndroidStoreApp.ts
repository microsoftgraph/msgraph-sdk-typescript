import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {AndroidStoreApp} from './androidStoreApp';
import {serializeAndroidMinimumOperatingSystem} from './serializeAndroidMinimumOperatingSystem';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidStoreApp(androidStoreApp: AndroidStoreApp | undefined = {} as AndroidStoreApp, writer: SerializationWriter) : void {
        serializeMobileApp(writer, androidStoreApp)
        writer.writeStringValue("appStoreUrl", androidStoreApp.appStoreUrl);
        writer.writeObjectValue<AndroidMinimumOperatingSystem>("minimumSupportedOperatingSystem", androidStoreApp.minimumSupportedOperatingSystem, serializeAndroidMinimumOperatingSystem);
        writer.writeStringValue("packageId", androidStoreApp.packageId);
}
