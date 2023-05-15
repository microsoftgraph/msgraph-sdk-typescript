import {IosHomeScreenItem} from './iosHomeScreenItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenItem(iosHomeScreenItem: IosHomeScreenItem | undefined = {} as IosHomeScreenItem) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { iosHomeScreenItem.displayName = n.getStringValue(); },
        "@odata.type": n => { iosHomeScreenItem.odataType = n.getStringValue(); },
    }
}
