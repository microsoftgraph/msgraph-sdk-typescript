import { type AndroidMinimumOperatingSystem } from './androidMinimumOperatingSystem';
import { type ManagedAndroidStoreApp } from './managedAndroidStoreApp';
import { serializeAndroidMinimumOperatingSystem } from './serializeAndroidMinimumOperatingSystem';
import { serializeManagedApp } from './serializeManagedApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAndroidStoreApp(writer: SerializationWriter, managedAndroidStoreApp: ManagedAndroidStoreApp | undefined = {} as ManagedAndroidStoreApp) : void {
        serializeManagedApp(writer, managedAndroidStoreApp)
        writer.writeStringValue("appStoreUrl", managedAndroidStoreApp.appStoreUrl);
        writer.writeObjectValue<AndroidMinimumOperatingSystem>("minimumSupportedOperatingSystem", managedAndroidStoreApp.minimumSupportedOperatingSystem, serializeAndroidMinimumOperatingSystem);
        writer.writeStringValue("packageId", managedAndroidStoreApp.packageId);
}
