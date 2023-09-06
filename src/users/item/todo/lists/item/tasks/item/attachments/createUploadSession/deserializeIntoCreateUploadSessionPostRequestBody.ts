import { type AttachmentInfo } from '../../../../../../../../../models/attachmentInfo';
import { createAttachmentInfoFromDiscriminatorValue } from '../../../../../../../../../models/createAttachmentInfoFromDiscriminatorValue';
import { serializeAttachmentInfo } from '../../../../../../../../../models/serializeAttachmentInfo';
import { type CreateUploadSessionPostRequestBody } from './createUploadSessionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "attachmentInfo": n => { createUploadSessionPostRequestBody.attachmentInfo = n.getObjectValue<AttachmentInfo>(createAttachmentInfoFromDiscriminatorValue); },
    }
}
