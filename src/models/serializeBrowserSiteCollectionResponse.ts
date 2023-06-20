import {BrowserSite} from './browserSite';
import {BrowserSiteCollectionResponse} from './browserSiteCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBrowserSite} from './serializeBrowserSite';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBrowserSiteCollectionResponse(browserSiteCollectionResponse: BrowserSiteCollectionResponse | undefined = {} as BrowserSiteCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, browserSiteCollectionResponse)
        writer.writeCollectionOfObjectValues<BrowserSite>("value", browserSiteCollectionResponse.value, serializeBrowserSite);
}
