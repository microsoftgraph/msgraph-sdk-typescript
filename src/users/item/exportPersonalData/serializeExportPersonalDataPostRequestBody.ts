import type {ExportPersonalDataPostRequestBody} from './exportPersonalDataPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExportPersonalDataPostRequestBody(writer: SerializationWriter, exportPersonalDataPostRequestBody: ExportPersonalDataPostRequestBody | undefined = {} as ExportPersonalDataPostRequestBody) : void {
        writer.writeStringValue("storageLocation", exportPersonalDataPostRequestBody.storageLocation);
        writer.writeAdditionalData(exportPersonalDataPostRequestBody.additionalData);
}
