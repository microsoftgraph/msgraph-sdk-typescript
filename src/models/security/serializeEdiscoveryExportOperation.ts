import { type EdiscoveryExportOperation } from './ediscoveryExportOperation';
import { type EdiscoveryReviewSet } from './ediscoveryReviewSet';
import { type EdiscoveryReviewSetQuery } from './ediscoveryReviewSetQuery';
import { type ExportFileMetadata } from './exportFileMetadata';
import { ExportFileStructure } from './exportFileStructure';
import { ExportOptions } from './exportOptions';
import { serializeCaseOperation } from './serializeCaseOperation';
import { serializeEdiscoveryReviewSet } from './serializeEdiscoveryReviewSet';
import { serializeEdiscoveryReviewSetQuery } from './serializeEdiscoveryReviewSetQuery';
import { serializeExportFileMetadata } from './serializeExportFileMetadata';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryExportOperation(writer: SerializationWriter, ediscoveryExportOperation: EdiscoveryExportOperation | undefined = {} as EdiscoveryExportOperation) : void {
        serializeCaseOperation(writer, ediscoveryExportOperation)
        writer.writeStringValue("description", ediscoveryExportOperation.description);
        writer.writeCollectionOfObjectValues<ExportFileMetadata>("exportFileMetadata", ediscoveryExportOperation.exportFileMetadata, serializeExportFileMetadata);
        writer.writeEnumValue<ExportOptions[]>("exportOptions", ediscoveryExportOperation.exportOptions);
        writer.writeEnumValue<ExportFileStructure>("exportStructure", ediscoveryExportOperation.exportStructure);
        writer.writeStringValue("outputName", ediscoveryExportOperation.outputName);
        writer.writeObjectValue<EdiscoveryReviewSet>("reviewSet", ediscoveryExportOperation.reviewSet, serializeEdiscoveryReviewSet);
        writer.writeObjectValue<EdiscoveryReviewSetQuery>("reviewSetQuery", ediscoveryExportOperation.reviewSetQuery, serializeEdiscoveryReviewSetQuery);
}
