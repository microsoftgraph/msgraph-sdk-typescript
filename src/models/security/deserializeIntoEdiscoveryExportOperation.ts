import {createEdiscoveryReviewSetFromDiscriminatorValue} from './createEdiscoveryReviewSetFromDiscriminatorValue';
import {createEdiscoveryReviewSetQueryFromDiscriminatorValue} from './createEdiscoveryReviewSetQueryFromDiscriminatorValue';
import {createExportFileMetadataFromDiscriminatorValue} from './createExportFileMetadataFromDiscriminatorValue';
import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {EdiscoveryExportOperation} from './ediscoveryExportOperation';
import {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import {ExportFileMetadata} from './exportFileMetadata';
import {ExportFileStructure} from './exportFileStructure';
import {ExportOptions} from './exportOptions';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {serializeEdiscoveryReviewSetQuery} from './serializeEdiscoveryReviewSetQuery';
import {serializeExportFileMetadata} from './serializeExportFileMetadata';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryExportOperation(ediscoveryExportOperation: EdiscoveryExportOperation | undefined = {} as EdiscoveryExportOperation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseOperation(ediscoveryExportOperation),
        "description": n => { ediscoveryExportOperation.description = n.getStringValue(); },
        "exportFileMetadata": n => { ediscoveryExportOperation.exportFileMetadata = n.getCollectionOfObjectValues<ExportFileMetadata>(createExportFileMetadataFromDiscriminatorValue); },
        "exportOptions": n => { ediscoveryExportOperation.exportOptions = n.getEnumValue<ExportOptions>(ExportOptions); },
        "exportStructure": n => { ediscoveryExportOperation.exportStructure = n.getEnumValue<ExportFileStructure>(ExportFileStructure); },
        "outputName": n => { ediscoveryExportOperation.outputName = n.getStringValue(); },
        "reviewSet": n => { ediscoveryExportOperation.reviewSet = n.getObjectValue<EdiscoveryReviewSet>(createEdiscoveryReviewSetFromDiscriminatorValue); },
        "reviewSetQuery": n => { ediscoveryExportOperation.reviewSetQuery = n.getObjectValue<EdiscoveryReviewSetQuery>(createEdiscoveryReviewSetQueryFromDiscriminatorValue); },
    }
}
