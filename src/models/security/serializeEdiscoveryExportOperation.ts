import {EdiscoveryExportOperation} from './ediscoveryExportOperation';
import {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {EdiscoveryReviewSetQuery} from './ediscoveryReviewSetQuery';
import {ExportFileMetadata} from './exportFileMetadata';
import {ExportFileStructure} from './exportFileStructure';
import {ExportOptions} from './exportOptions';
import {serializeCaseOperation} from './serializeCaseOperation';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {serializeEdiscoveryReviewSetQuery} from './serializeEdiscoveryReviewSetQuery';
import {serializeExportFileMetadata} from './serializeExportFileMetadata';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryExportOperation(writer: SerializationWriter, ediscoveryExportOperation: EdiscoveryExportOperation | undefined = {} as EdiscoveryExportOperation) : void {
        serializeCaseOperation(writer, ediscoveryExportOperation)
        writer.writeStringValue("description", ediscoveryExportOperation.description);
        writer.writeCollectionOfObjectValues<ExportFileMetadata>("exportFileMetadata", ediscoveryExportOperation.exportFileMetadata, serializeExportFileMetadata);
        writer.writeEnumValue<ExportOptions>("exportOptions", ediscoveryExportOperation.exportOptions);
        writer.writeEnumValue<ExportFileStructure>("exportStructure", ediscoveryExportOperation.exportStructure);
        writer.writeStringValue("outputName", ediscoveryExportOperation.outputName);
        writer.writeObjectValue<EdiscoveryReviewSet>("reviewSet", ediscoveryExportOperation.reviewSet, serializeEdiscoveryReviewSet);
        writer.writeObjectValue<EdiscoveryReviewSetQuery>("reviewSetQuery", ediscoveryExportOperation.reviewSetQuery, serializeEdiscoveryReviewSetQuery);
}
