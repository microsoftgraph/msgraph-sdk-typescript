import type {Attachment} from './attachment';
import type {OutlookItem} from './outlookItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemAttachment extends Attachment, Parsable {
    /**
     * The attached message or event. Navigation property.
     */
    item?: OutlookItem | undefined;
}
