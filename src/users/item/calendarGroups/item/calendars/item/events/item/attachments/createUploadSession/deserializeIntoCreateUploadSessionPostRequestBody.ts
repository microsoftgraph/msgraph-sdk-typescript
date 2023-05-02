import {AttachmentItem} from '../../../../../../../../../../models/attachmentItem';
import {createAttachmentItemFromDiscriminatorValue} from '../../../../../../../../../../models/createAttachmentItemFromDiscriminatorValue';
import {serializeAttachmentItem} from '../../../../../../../../../../models/serializeAttachmentItem';
import {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "attachmentItem": n => { createUploadSessionPostRequestBody.attachmentItem = n.getObjectValue<AttachmentItem>(createAttachmentItemFromDiscriminatorValue); },
    }
}
