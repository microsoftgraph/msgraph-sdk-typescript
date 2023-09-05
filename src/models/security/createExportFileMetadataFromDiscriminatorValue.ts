import { deserializeIntoExportFileMetadata } from './deserializeIntoExportFileMetadata';
import { type ExportFileMetadata } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExportFileMetadataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExportFileMetadata;
}
