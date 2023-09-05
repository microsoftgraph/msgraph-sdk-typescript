import { type ExportPersonalDataPostRequestBody } from './exportPersonalDataPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExportPersonalDataPostRequestBody(exportPersonalDataPostRequestBody: ExportPersonalDataPostRequestBody | undefined = {} as ExportPersonalDataPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "storageLocation": n => { exportPersonalDataPostRequestBody.storageLocation = n.getStringValue(); },
    }
}
