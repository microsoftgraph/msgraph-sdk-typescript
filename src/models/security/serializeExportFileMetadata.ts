import { type ExportFileMetadata } from './exportFileMetadata';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExportFileMetadata(writer: SerializationWriter, exportFileMetadata: ExportFileMetadata | undefined = {} as ExportFileMetadata) : void {
        writer.writeStringValue("downloadUrl", exportFileMetadata.downloadUrl);
        writer.writeStringValue("fileName", exportFileMetadata.fileName);
        writer.writeStringValue("@odata.type", exportFileMetadata.odataType);
        writer.writeNumberValue("size", exportFileMetadata.size);
        writer.writeAdditionalData(exportFileMetadata.additionalData);
}
