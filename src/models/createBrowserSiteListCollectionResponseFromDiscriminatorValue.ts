import {deserializeIntoBrowserSiteListCollectionResponse} from './deserializeIntoBrowserSiteListCollectionResponse';
import {BrowserSiteListCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSiteListCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSiteListCollectionResponse;
}
