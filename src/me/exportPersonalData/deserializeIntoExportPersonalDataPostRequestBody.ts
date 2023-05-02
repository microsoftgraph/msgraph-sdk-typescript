import {ExportPersonalDataPostRequestBody} from './exportPersonalDataPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExportPersonalDataPostRequestBody(exportPersonalDataPostRequestBody: ExportPersonalDataPostRequestBody | undefined = {} as ExportPersonalDataPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "storageLocation": n => { exportPersonalDataPostRequestBody.storageLocation = n.getStringValue(); },
    }
}
