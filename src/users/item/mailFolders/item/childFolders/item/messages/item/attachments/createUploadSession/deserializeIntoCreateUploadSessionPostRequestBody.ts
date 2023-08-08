import type {AttachmentItem} from '../../../../../../../../../../models/attachmentItem';
import {createAttachmentItemFromDiscriminatorValue} from '../../../../../../../../../../models/createAttachmentItemFromDiscriminatorValue';
import {serializeAttachmentItem} from '../../../../../../../../../../models/serializeAttachmentItem';
import type {CreateUploadSessionPostRequestBody} from './createUploadSessionPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateUploadSessionPostRequestBody(createUploadSessionPostRequestBody: CreateUploadSessionPostRequestBody | undefined = {} as CreateUploadSessionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "attachmentItem": n => { createUploadSessionPostRequestBody.attachmentItem = n.getObjectValue<AttachmentItem>(createAttachmentItemFromDiscriminatorValue); },
    }
}
