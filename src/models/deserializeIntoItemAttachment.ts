import {createOutlookItemFromDiscriminatorValue} from './createOutlookItemFromDiscriminatorValue';
import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {ItemAttachment} from './itemAttachment';
import {OutlookItem} from './outlookItem';
import {serializeOutlookItem} from './serializeOutlookItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemAttachment(itemAttachment: ItemAttachment | undefined = {} as ItemAttachment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachment(itemAttachment),
        "item": n => { itemAttachment.item = n.getObjectValue<OutlookItem>(createOutlookItemFromDiscriminatorValue); },
    }
}
