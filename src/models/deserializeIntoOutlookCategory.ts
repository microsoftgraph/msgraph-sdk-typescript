import {CategoryColor} from './categoryColor';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OutlookCategory} from './outlookCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookCategory(outlookCategory: OutlookCategory | undefined = {} as OutlookCategory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(outlookCategory),
        "color": n => { outlookCategory.color = n.getEnumValue<CategoryColor>(CategoryColor); },
        "displayName": n => { outlookCategory.displayName = n.getStringValue(); },
    }
}
