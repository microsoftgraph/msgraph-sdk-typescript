import {BrowserSiteList} from './browserSiteList';
import {createBrowserSiteListFromDiscriminatorValue} from './createBrowserSiteListFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {InternetExplorerMode} from './internetExplorerMode';
import {serializeBrowserSiteList} from './serializeBrowserSiteList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInternetExplorerMode(internetExplorerMode: InternetExplorerMode | undefined = {} as InternetExplorerMode) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(internetExplorerMode),
        "siteLists": n => { internetExplorerMode.siteLists = n.getCollectionOfObjectValues<BrowserSiteList>(createBrowserSiteListFromDiscriminatorValue); },
    }
}
