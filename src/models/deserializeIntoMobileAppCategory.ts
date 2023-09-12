import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type MobileAppCategory } from './mobileAppCategory';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppCategory(mobileAppCategory: MobileAppCategory | undefined = {} as MobileAppCategory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mobileAppCategory),
        "displayName": n => { mobileAppCategory.displayName = n.getStringValue(); },
        "lastModifiedDateTime": n => { mobileAppCategory.lastModifiedDateTime = n.getDateValue(); },
    }
}
