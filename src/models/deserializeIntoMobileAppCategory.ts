import {deserializeIntoEntity} from './deserializeIntoEntity';
import {MobileAppCategory} from './mobileAppCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppCategory(mobileAppCategory: MobileAppCategory | undefined = {} as MobileAppCategory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppCategory),
        "displayName": n => { mobileAppCategory.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { mobileAppCategory.lastModifiedDateTime = n.getDateValue(); },
    }
}
