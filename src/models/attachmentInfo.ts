import {AttachmentType} from './attachmentType';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AttachmentInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The type of the attachment. The possible values are: file, item, reference. Required.
     */
    attachmentType?: AttachmentType | undefined;
    /**
     * The nature of the data in the attachment. Optional.
     */
    contentType?: string | undefined;
    /**
     * The display name of the attachment. This can be a descriptive string and does not have to be the actual file name. Required.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The length of the attachment in bytes. Required.
     */
    size?: number | undefined;
}
