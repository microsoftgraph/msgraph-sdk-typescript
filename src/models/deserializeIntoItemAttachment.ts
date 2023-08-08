import {createOutlookItemFromDiscriminatorValue} from './createOutlookItemFromDiscriminatorValue';
import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import type {ItemAttachment} from './itemAttachment';
import type {OutlookItem} from './outlookItem';
import {serializeOutlookItem} from './serializeOutlookItem';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemAttachment(itemAttachment: ItemAttachment | undefined = {} as ItemAttachment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachment(itemAttachment),
        "item": n => { itemAttachment.item = n.getObjectValue<OutlookItem>(createOutlookItemFromDiscriminatorValue); },
    }
}
