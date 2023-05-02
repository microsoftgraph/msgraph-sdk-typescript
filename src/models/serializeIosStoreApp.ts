import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {IosStoreApp} from './iosStoreApp';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeIosMinimumOperatingSystem} from './serializeIosMinimumOperatingSystem';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosStoreApp(writer: SerializationWriter, iosStoreApp: IosStoreApp | undefined = {} as IosStoreApp) : void {
        serializeMobileApp(writer, iosStoreApp)
        writer.writeObjectValue<IosDeviceType>("applicableDeviceType", iosStoreApp.applicableDeviceType, serializeIosDeviceType);
        writer.writeStringValue("appStoreUrl", iosStoreApp.appStoreUrl);
        writer.writeStringValue("bundleId", iosStoreApp.bundleId);
        writer.writeObjectValue<IosMinimumOperatingSystem>("minimumSupportedOperatingSystem", iosStoreApp.minimumSupportedOperatingSystem, serializeIosMinimumOperatingSystem);
}
