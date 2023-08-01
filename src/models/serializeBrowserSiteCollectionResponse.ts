import type {BrowserSite} from './browserSite';
import type {BrowserSiteCollectionResponse} from './browserSiteCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBrowserSite} from './serializeBrowserSite';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBrowserSiteCollectionResponse(writer: SerializationWriter, browserSiteCollectionResponse: BrowserSiteCollectionResponse | undefined = {} as BrowserSiteCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, browserSiteCollectionResponse)
        writer.writeCollectionOfObjectValues<BrowserSite>("value", browserSiteCollectionResponse.value, serializeBrowserSite);
}
