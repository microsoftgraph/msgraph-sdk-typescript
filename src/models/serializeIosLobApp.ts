import {IosDeviceType} from './iosDeviceType';
import {IosLobApp} from './iosLobApp';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {serializeIosDeviceType} from './serializeIosDeviceType';
import {serializeIosMinimumOperatingSystem} from './serializeIosMinimumOperatingSystem';
import {serializeMobileLobApp} from './serializeMobileLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosLobApp(writer: SerializationWriter, iosLobApp: IosLobApp | undefined = {} as IosLobApp) : void {
        serializeMobileLobApp(writer, iosLobApp)
        writer.writeObjectValue<IosDeviceType>("applicableDeviceType", iosLobApp.applicableDeviceType, serializeIosDeviceType);
        writer.writeStringValue("buildNumber", iosLobApp.buildNumber);
        writer.writeStringValue("bundleId", iosLobApp.bundleId);
        writer.writeDateValue("expirationDateTime", iosLobApp.expirationDateTime);
        writer.writeObjectValue<IosMinimumOperatingSystem>("minimumSupportedOperatingSystem", iosLobApp.minimumSupportedOperatingSystem, serializeIosMinimumOperatingSystem);
        writer.writeStringValue("versionNumber", iosLobApp.versionNumber);
}
