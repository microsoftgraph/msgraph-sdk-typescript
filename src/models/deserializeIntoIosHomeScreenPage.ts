import { createIosHomeScreenItemFromDiscriminatorValue } from './createIosHomeScreenItemFromDiscriminatorValue';
import { type IosHomeScreenItem } from './iosHomeScreenItem';
import { type IosHomeScreenPage } from './iosHomeScreenPage';
import { serializeIosHomeScreenItem } from './serializeIosHomeScreenItem';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenPage(iosHomeScreenPage: IosHomeScreenPage | undefined = {} as IosHomeScreenPage) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { iosHomeScreenPage.displayName = n.getStringValue(); },
        "icons": n => { iosHomeScreenPage.icons = n.getCollectionOfObjectValues<IosHomeScreenItem>(createIosHomeScreenItemFromDiscriminatorValue); },
        "@odata.type": n => { iosHomeScreenPage.odataType = n.getStringValue(); },
    }
}
