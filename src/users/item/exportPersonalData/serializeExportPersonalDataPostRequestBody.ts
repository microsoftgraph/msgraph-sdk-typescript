import {ExportPersonalDataPostRequestBody} from './exportPersonalDataPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExportPersonalDataPostRequestBody(exportPersonalDataPostRequestBody: ExportPersonalDataPostRequestBody | undefined = {} as ExportPersonalDataPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("storageLocation", exportPersonalDataPostRequestBody.storageLocation);
        writer.writeAdditionalData(exportPersonalDataPostRequestBody.additionalData);
}
