import { createEdiscoveryReviewSetFromDiscriminatorValue } from './createEdiscoveryReviewSetFromDiscriminatorValue';
import { createEdiscoveryReviewSetQueryFromDiscriminatorValue } from './createEdiscoveryReviewSetQueryFromDiscriminatorValue';
import { createExportFileMetadataFromDiscriminatorValue } from './createExportFileMetadataFromDiscriminatorValue';
import { deserializeIntoCaseOperation } from './deserializeIntoCaseOperation';
import { type EdiscoveryExportOperation } from './ediscoveryExportOperation';
import { type EdiscoveryReviewSet } from './ediscoveryReviewSet';
import { type EdiscoveryReviewSetQuery } from './ediscoveryReviewSetQuery';
import { type ExportFileMetadata } from './exportFileMetadata';
import { ExportFileStructure } from './exportFileStructure';
import { ExportOptions } from './exportOptions';
import { serializeEdiscoveryReviewSet } from './serializeEdiscoveryReviewSet';
import { serializeEdiscoveryReviewSetQuery } from './serializeEdiscoveryReviewSetQuery';
import { serializeExportFileMetadata } from './serializeExportFileMetadata';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryExportOperation(ediscoveryExportOperation: EdiscoveryExportOperation | undefined = {} as EdiscoveryExportOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryExportOperation),
        "description": n => { ediscoveryExportOperation.description = n.getStringValue(); },
        "exportFileMetadata": n => { ediscoveryExportOperation.exportFileMetadata = n.getCollectionOfObjectValues<ExportFileMetadata>(createExportFileMetadataFromDiscriminatorValue); },
        "exportOptions": n => { ediscoveryExportOperation.exportOptions = n.getCollectionOfEnumValues<ExportOptions>(ExportOptions); },
        "exportStructure": n => { ediscoveryExportOperation.exportStructure = n.getEnumValue<ExportFileStructure>(ExportFileStructure); },
        "outputName": n => { ediscoveryExportOperation.outputName = n.getStringValue(); },
        "reviewSet": n => { ediscoveryExportOperation.reviewSet = n.getObjectValue<EdiscoveryReviewSet>(createEdiscoveryReviewSetFromDiscriminatorValue); },
        "reviewSetQuery": n => { ediscoveryExportOperation.reviewSetQuery = n.getObjectValue<EdiscoveryReviewSetQuery>(createEdiscoveryReviewSetQueryFromDiscriminatorValue); },
    }
}
