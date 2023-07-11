import {ExportFileStructure} from '../../../../../../../../../models/security/exportFileStructure';
import {ExportOptions} from '../../../../../../../../../models/security/exportOptions';
import {ExportPostRequestBody} from './exportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExportPostRequestBody(writer: SerializationWriter, exportPostRequestBody: ExportPostRequestBody | undefined = {} as ExportPostRequestBody) : void {
        writer.writeStringValue("description", exportPostRequestBody.description);
        writer.writeEnumValue<ExportOptions>("exportOptions", exportPostRequestBody.exportOptions);
        writer.writeEnumValue<ExportFileStructure>("exportStructure", exportPostRequestBody.exportStructure);
        writer.writeStringValue("outputName", exportPostRequestBody.outputName);
        writer.writeAdditionalData(exportPostRequestBody.additionalData);
}
