import { deserializeIntoBrowserSiteCollectionResponse } from './deserializeIntoBrowserSiteCollectionResponse';
import { type BrowserSiteCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBrowserSiteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSiteCollectionResponse;
}
