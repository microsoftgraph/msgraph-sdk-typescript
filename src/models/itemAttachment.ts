import {Attachment} from './attachment';
import {OutlookItem} from './outlookItem';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemAttachment extends Attachment, Partial<Parsable> {
    /** The attached contact, message or event. Navigation property. */
    item?: OutlookItem | undefined;
}
