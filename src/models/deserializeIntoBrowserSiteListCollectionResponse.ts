import { type BrowserSiteList } from './browserSiteList';
import { type BrowserSiteListCollectionResponse } from './browserSiteListCollectionResponse';
import { createBrowserSiteListFromDiscriminatorValue } from './createBrowserSiteListFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeBrowserSiteList } from './serializeBrowserSiteList';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBrowserSiteListCollectionResponse(browserSiteListCollectionResponse: BrowserSiteListCollectionResponse | undefined = {} as BrowserSiteListCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(browserSiteListCollectionResponse),
        "value": n => { browserSiteListCollectionResponse.value = n.getCollectionOfObjectValues<BrowserSiteList>(createBrowserSiteListFromDiscriminatorValue); },
    }
}
