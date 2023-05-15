import {AttachmentInfo} from '../../../../../../../../../models/attachmentInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CreateUploadSessionPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The attachmentInfo property */
    attachmentInfo?: AttachmentInfo | undefined;
}
