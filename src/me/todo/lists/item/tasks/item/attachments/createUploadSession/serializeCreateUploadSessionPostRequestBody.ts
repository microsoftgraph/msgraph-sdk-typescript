import type {AttachmentInfo} from '../../../../../../../../models/attachmentInfo';
import {serializeAttachmentInfo} from '../../../../../../../../models/serializeAttachmentInfo';
import type {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateUploadSessionPostRequestBody(writer: SerializationWriter, createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : void {
        writer.writeObjectValue<AttachmentInfo>("attachmentInfo", createUploadSessionPostRequestBody.attachmentInfo, serializeAttachmentInfo);
        writer.writeAdditionalData(createUploadSessionPostRequestBody.additionalData);
}
