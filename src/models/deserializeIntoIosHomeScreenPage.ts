import {createIosHomeScreenItemFromDiscriminatorValue} from './createIosHomeScreenItemFromDiscriminatorValue';
import {IosHomeScreenItem} from './iosHomeScreenItem';
import {IosHomeScreenPage} from './iosHomeScreenPage';
import {serializeIosHomeScreenItem} from './serializeIosHomeScreenItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenPage(iosHomeScreenPage: IosHomeScreenPage | undefined = {} as IosHomeScreenPage) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { iosHomeScreenPage.displayName = n.getStringValue(); },
        "icons": n => { iosHomeScreenPage.icons = n.getCollectionOfObjectValues<IosHomeScreenItem>(createIosHomeScreenItemFromDiscriminatorValue); },
        "@odata.type": n => { iosHomeScreenPage.odataType = n.getStringValue(); },
    }
}
