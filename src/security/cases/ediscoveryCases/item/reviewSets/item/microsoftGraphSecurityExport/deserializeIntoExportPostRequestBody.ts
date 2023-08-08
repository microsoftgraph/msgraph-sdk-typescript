import {ExportFileStructure} from '../../../../../../../models/security/exportFileStructure';
import {ExportOptions} from '../../../../../../../models/security/exportOptions';
import type {ExportPostRequestBody} from './exportPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExportPostRequestBody(exportPostRequestBody: ExportPostRequestBody | undefined = {} as ExportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { exportPostRequestBody.description = n.getStringValue(); },
        "exportOptions": n => { exportPostRequestBody.exportOptions = n.getEnumValue<ExportOptions>(ExportOptions); },
        "exportStructure": n => { exportPostRequestBody.exportStructure = n.getEnumValue<ExportFileStructure>(ExportFileStructure); },
        "outputName": n => { exportPostRequestBody.outputName = n.getStringValue(); },
    }
}
