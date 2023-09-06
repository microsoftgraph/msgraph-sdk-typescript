import { type IosHomeScreenItem } from './iosHomeScreenItem';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenItem(iosHomeScreenItem: IosHomeScreenItem | undefined = {} as IosHomeScreenItem) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { iosHomeScreenItem.displayName = n.getStringValue(); },
        "@odata.type": n => { iosHomeScreenItem.odataType = n.getStringValue(); },
    }
}
