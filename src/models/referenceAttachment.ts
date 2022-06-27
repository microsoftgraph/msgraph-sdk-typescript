import {Attachment} from './attachment';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ReferenceAttachment extends Partial<AdditionalDataHolder>, Attachment, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
