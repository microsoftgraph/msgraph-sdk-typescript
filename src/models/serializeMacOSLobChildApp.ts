import {MacOSLobChildApp} from './macOSLobChildApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSLobChildApp(writer: SerializationWriter, macOSLobChildApp: MacOSLobChildApp | undefined = {} as MacOSLobChildApp) : void {
        writer.writeStringValue("buildNumber", macOSLobChildApp.buildNumber);
        writer.writeStringValue("bundleId", macOSLobChildApp.bundleId);
        writer.writeStringValue("@odata.type", macOSLobChildApp.odataType);
        writer.writeStringValue("versionNumber", macOSLobChildApp.versionNumber);
        writer.writeAdditionalData(macOSLobChildApp.additionalData);
}
