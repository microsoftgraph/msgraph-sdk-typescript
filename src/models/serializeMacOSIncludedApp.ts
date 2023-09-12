import { type MacOSIncludedApp } from './macOSIncludedApp';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMacOSIncludedApp(writer: SerializationWriter, macOSIncludedApp: MacOSIncludedApp | undefined = {} as MacOSIncludedApp) : void {
        writer.writeStringValue("bundleId", macOSIncludedApp.bundleId);
        writer.writeStringValue("bundleVersion", macOSIncludedApp.bundleVersion);
        writer.writeStringValue("@odata.type", macOSIncludedApp.odataType);
        writer.writeAdditionalData(macOSIncludedApp.additionalData);
}
