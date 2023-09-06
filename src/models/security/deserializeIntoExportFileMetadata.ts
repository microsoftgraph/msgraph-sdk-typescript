import { type ExportFileMetadata } from './exportFileMetadata';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExportFileMetadata(exportFileMetadata: ExportFileMetadata | undefined = {} as ExportFileMetadata) : Record<string, (node: ParseNode) => void> {
    return {
        "downloadUrl": n => { exportFileMetadata.downloadUrl = n.getStringValue(); },
        "fileName": n => { exportFileMetadata.fileName = n.getStringValue(); },
        "@odata.type": n => { exportFileMetadata.odataType = n.getStringValue(); },
        "size": n => { exportFileMetadata.size = n.getNumberValue(); },
    }
}
