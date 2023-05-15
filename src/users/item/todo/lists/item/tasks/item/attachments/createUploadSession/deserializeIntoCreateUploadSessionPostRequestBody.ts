import {AttachmentInfo} from '../../../../../../../../../models/attachmentInfo';
import {createAttachmentInfoFromDiscriminatorValue} from '../../../../../../../../../models/createAttachmentInfoFromDiscriminatorValue';
import {serializeAttachmentInfo} from '../../../../../../../../../models/serializeAttachmentInfo';
import {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "attachmentInfo": n => { createUploadSessionPostRequestBody.attachmentInfo = n.getObjectValue<AttachmentInfo>(createAttachmentInfoFromDiscriminatorValue); },
    }
}
