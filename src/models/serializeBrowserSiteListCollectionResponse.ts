import {BrowserSiteList} from './browserSiteList';
import {BrowserSiteListCollectionResponse} from './browserSiteListCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBrowserSiteList} from './serializeBrowserSiteList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBrowserSiteListCollectionResponse(browserSiteListCollectionResponse: BrowserSiteListCollectionResponse | undefined = {} as BrowserSiteListCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, browserSiteListCollectionResponse)
        writer.writeCollectionOfObjectValues<BrowserSiteList>("value", browserSiteListCollectionResponse.value, serializeBrowserSiteList);
}
