import {AttachmentItem} from '../../../../../../../../../../../../models/attachmentItem';

export interface CreateUploadSessionPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The AttachmentItem property */
    attachmentItem?:AttachmentItem | undefined;
}
