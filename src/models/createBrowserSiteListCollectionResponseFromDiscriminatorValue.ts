import {BrowserSiteListCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSiteListCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BrowserSiteListCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BrowserSiteListCollectionResponse();
}
