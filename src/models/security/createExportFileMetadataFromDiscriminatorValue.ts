import {deserializeIntoExportFileMetadata} from './deserializeIntoExportFileMetadata';
import {ExportFileMetadata} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExportFileMetadataFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExportFileMetadata;
}
