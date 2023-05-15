import {BrowserSite} from './browserSite';
import {BrowserSiteCollectionResponse} from './browserSiteCollectionResponse';
import {createBrowserSiteFromDiscriminatorValue} from './createBrowserSiteFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeBrowserSite} from './serializeBrowserSite';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBrowserSiteCollectionResponse(browserSiteCollectionResponse: BrowserSiteCollectionResponse | undefined = {} as BrowserSiteCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(browserSiteCollectionResponse),
        "value": n => { browserSiteCollectionResponse.value = n.getCollectionOfObjectValues<BrowserSite>(createBrowserSiteFromDiscriminatorValue); },
    }
}
