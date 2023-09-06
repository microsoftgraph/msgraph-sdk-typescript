import { type MacOSLobApp } from './macOSLobApp';
import { type MacOSLobChildApp } from './macOSLobChildApp';
import { type MacOSMinimumOperatingSystem } from './macOSMinimumOperatingSystem';
import { serializeMacOSLobChildApp } from './serializeMacOSLobChildApp';
import { serializeMacOSMinimumOperatingSystem } from './serializeMacOSMinimumOperatingSystem';
import { serializeMobileLobApp } from './serializeMobileLobApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMacOSLobApp(writer: SerializationWriter, macOSLobApp: MacOSLobApp | undefined = {} as MacOSLobApp) : void {
        serializeMobileLobApp(writer, macOSLobApp)
        writer.writeStringValue("buildNumber", macOSLobApp.buildNumber);
        writer.writeStringValue("bundleId", macOSLobApp.bundleId);
        writer.writeCollectionOfObjectValues<MacOSLobChildApp>("childApps", macOSLobApp.childApps, serializeMacOSLobChildApp);
        writer.writeBooleanValue("ignoreVersionDetection", macOSLobApp.ignoreVersionDetection);
        writer.writeBooleanValue("installAsManaged", macOSLobApp.installAsManaged);
        writer.writeCollectionOfPrimitiveValues<string>("md5Hash", macOSLobApp.md5Hash);
        writer.writeNumberValue("md5HashChunkSize", macOSLobApp.md5HashChunkSize);
        writer.writeObjectValue<MacOSMinimumOperatingSystem>("minimumSupportedOperatingSystem", macOSLobApp.minimumSupportedOperatingSystem, serializeMacOSMinimumOperatingSystem);
        writer.writeStringValue("versionNumber", macOSLobApp.versionNumber);
}
