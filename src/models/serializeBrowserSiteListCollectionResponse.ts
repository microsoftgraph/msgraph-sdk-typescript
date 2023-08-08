import type {BrowserSiteList} from './browserSiteList';
import type {BrowserSiteListCollectionResponse} from './browserSiteListCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBrowserSiteList} from './serializeBrowserSiteList';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBrowserSiteListCollectionResponse(writer: SerializationWriter, browserSiteListCollectionResponse: BrowserSiteListCollectionResponse | undefined = {} as BrowserSiteListCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, browserSiteListCollectionResponse)
        writer.writeCollectionOfObjectValues<BrowserSiteList>("value", browserSiteListCollectionResponse.value, serializeBrowserSiteList);
}
