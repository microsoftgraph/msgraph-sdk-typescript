import {ItemAttachment} from './itemAttachment';
import {OutlookItem} from './outlookItem';
import {serializeAttachment} from './serializeAttachment';
import {serializeOutlookItem} from './serializeOutlookItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemAttachment(itemAttachment: ItemAttachment | undefined = {} as ItemAttachment, writer: SerializationWriter) : void {
        serializeAttachment(writer, itemAttachment)
        writer.writeObjectValue<OutlookItem>("item", itemAttachment.item, serializeOutlookItem);
}
