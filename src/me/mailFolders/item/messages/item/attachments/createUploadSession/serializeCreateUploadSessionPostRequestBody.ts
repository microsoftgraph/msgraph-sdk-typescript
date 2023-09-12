import { type AttachmentItem } from '../../../../../../../models/attachmentItem';
import { serializeAttachmentItem } from '../../../../../../../models/serializeAttachmentItem';
import { type CreateUploadSessionPostRequestBody } from './createUploadSessionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCreateUploadSessionPostRequestBody(writer: SerializationWriter, createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : void {
        writer.writeObjectValue<AttachmentItem>("attachmentItem", createUploadSessionPostRequestBody.attachmentItem, serializeAttachmentItem);
        writer.writeAdditionalData(createUploadSessionPostRequestBody.additionalData);
}
