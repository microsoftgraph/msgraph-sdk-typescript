import {BrowserSiteHistoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSiteHistoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BrowserSiteHistoryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BrowserSiteHistoryCollectionResponse();
}
