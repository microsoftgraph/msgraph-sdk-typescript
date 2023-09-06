import { deserializeIntoBrowserSiteListCollectionResponse } from './deserializeIntoBrowserSiteListCollectionResponse';
import { type BrowserSiteListCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBrowserSiteListCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSiteListCollectionResponse;
}
