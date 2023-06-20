import {AttachmentItem} from '../../../../../../../models/attachmentItem';
import {serializeAttachmentItem} from '../../../../../../../models/serializeAttachmentItem';
import {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<AttachmentItem>("attachmentItem", createUploadSessionPostRequestBody.attachmentItem, serializeAttachmentItem);
        writer.writeAdditionalData(createUploadSessionPostRequestBody.additionalData);
}
