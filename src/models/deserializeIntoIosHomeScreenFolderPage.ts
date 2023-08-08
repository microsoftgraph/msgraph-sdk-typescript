import {createIosHomeScreenAppFromDiscriminatorValue} from './createIosHomeScreenAppFromDiscriminatorValue';
import type {IosHomeScreenApp} from './iosHomeScreenApp';
import type {IosHomeScreenFolderPage} from './iosHomeScreenFolderPage';
import {serializeIosHomeScreenApp} from './serializeIosHomeScreenApp';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenFolderPage(iosHomeScreenFolderPage: IosHomeScreenFolderPage | undefined = {} as IosHomeScreenFolderPage) : Record<string, (node: ParseNode) => void> {
    return {
        "apps": n => { iosHomeScreenFolderPage.apps = n.getCollectionOfObjectValues<IosHomeScreenApp>(createIosHomeScreenAppFromDiscriminatorValue); },
        "displayName": n => { iosHomeScreenFolderPage.displayName = n.getStringValue(); },
        "@odata.type": n => { iosHomeScreenFolderPage.odataType = n.getStringValue(); },
    }
}
