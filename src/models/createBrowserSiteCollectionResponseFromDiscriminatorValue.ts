import {deserializeIntoBrowserSiteCollectionResponse} from './deserializeIntoBrowserSiteCollectionResponse';
import {BrowserSiteCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSiteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSiteCollectionResponse;
}
