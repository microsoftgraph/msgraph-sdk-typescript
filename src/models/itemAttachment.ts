import {Attachment} from './attachment';
import {OutlookItem} from './outlookItem';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ItemAttachment extends Partial<AdditionalDataHolder>, Attachment, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The attached contact, message or event. Navigation property. */
    item?: OutlookItem | undefined;
}
