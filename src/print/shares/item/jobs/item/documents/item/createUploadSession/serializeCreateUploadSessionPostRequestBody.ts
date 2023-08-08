import type {PrintDocumentUploadProperties} from '../../../../../../../../models/printDocumentUploadProperties';
import {serializePrintDocumentUploadProperties} from '../../../../../../../../models/serializePrintDocumentUploadProperties';
import type {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateUploadSessionPostRequestBody(writer: SerializationWriter, createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : void {
        writer.writeObjectValue<PrintDocumentUploadProperties>("properties", createUploadSessionPostRequestBody.properties, serializePrintDocumentUploadProperties);
        writer.writeAdditionalData(createUploadSessionPostRequestBody.additionalData);
}
