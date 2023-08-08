import {CategoryColor} from './categoryColor';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {OutlookCategory} from './outlookCategory';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookCategory(outlookCategory: OutlookCategory | undefined = {} as OutlookCategory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(outlookCategory),
        "color": n => { outlookCategory.color = n.getEnumValue<CategoryColor>(CategoryColor); },
        "displayName": n => { outlookCategory.displayName = n.getStringValue(); },
    }
}
