import { type ItemAttachment } from './itemAttachment';
import { type OutlookItem } from './outlookItem';
import { serializeAttachment } from './serializeAttachment';
import { serializeOutlookItem } from './serializeOutlookItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeItemAttachment(writer: SerializationWriter, itemAttachment: ItemAttachment | undefined = {} as ItemAttachment) : void {
        serializeAttachment(writer, itemAttachment)
        writer.writeObjectValue<OutlookItem>("item", itemAttachment.item, serializeOutlookItem);
}
