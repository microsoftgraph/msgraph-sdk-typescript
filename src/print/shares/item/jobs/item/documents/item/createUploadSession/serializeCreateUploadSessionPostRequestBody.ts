import {PrintDocumentUploadProperties} from '../../../../../../../../models/printDocumentUploadProperties';
import {serializePrintDocumentUploadProperties} from '../../../../../../../../models/serializePrintDocumentUploadProperties';
import {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateUploadSessionPostRequestBody(writer: SerializationWriter, createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : void {
        writer.writeObjectValue<PrintDocumentUploadProperties>("properties", createUploadSessionPostRequestBody.properties, serializePrintDocumentUploadProperties);
        writer.writeAdditionalData(createUploadSessionPostRequestBody.additionalData);
}
