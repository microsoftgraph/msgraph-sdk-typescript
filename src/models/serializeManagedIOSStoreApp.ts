import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {ManagedIOSStoreApp} from './managedIOSStoreApp';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeIosMinimumOperatingSystem} from './serializeIosMinimumOperatingSystem';
import {serializeManagedApp} from './serializeManagedApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedIOSStoreApp(writer: SerializationWriter, managedIOSStoreApp: ManagedIOSStoreApp | undefined = {} as ManagedIOSStoreApp) : void {
        serializeManagedApp(writer, managedIOSStoreApp)
        writer.writeObjectValue<IosDeviceType>("applicableDeviceType", managedIOSStoreApp.applicableDeviceType, serializeIosDeviceType);
        writer.writeStringValue("appStoreUrl", managedIOSStoreApp.appStoreUrl);
        writer.writeStringValue("bundleId", managedIOSStoreApp.bundleId);
        writer.writeObjectValue<IosMinimumOperatingSystem>("minimumSupportedOperatingSystem", managedIOSStoreApp.minimumSupportedOperatingSystem, serializeIosMinimumOperatingSystem);
}
