import {BrowserSiteList} from './browserSiteList';
import {BrowserSiteListCollectionResponse} from './browserSiteListCollectionResponse';
import {createBrowserSiteListFromDiscriminatorValue} from './createBrowserSiteListFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeBrowserSiteList} from './serializeBrowserSiteList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBrowserSiteListCollectionResponse(browserSiteListCollectionResponse: BrowserSiteListCollectionResponse | undefined = {} as BrowserSiteListCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(browserSiteListCollectionResponse),
        "value": n => { browserSiteListCollectionResponse.value = n.getCollectionOfObjectValues<BrowserSiteList>(createBrowserSiteListFromDiscriminatorValue); },
    }
}
