import { type ExportPersonalDataPostRequestBody } from './exportPersonalDataPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExportPersonalDataPostRequestBody(writer: SerializationWriter, exportPersonalDataPostRequestBody: ExportPersonalDataPostRequestBody | undefined = {} as ExportPersonalDataPostRequestBody) : void {
        writer.writeStringValue("storageLocation", exportPersonalDataPostRequestBody.storageLocation);
        writer.writeAdditionalData(exportPersonalDataPostRequestBody.additionalData);
}
