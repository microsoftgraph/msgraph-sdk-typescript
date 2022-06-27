import {Attachment} from './attachment';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FileAttachment extends Partial<AdditionalDataHolder>, Attachment, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The base64-encoded contents of the file. */
    contentBytes?: string | undefined;
    /** The ID of the attachment in the Exchange store. */
    contentId?: string | undefined;
    /** Do not use this property as it is not supported. */
    contentLocation?: string | undefined;
}
