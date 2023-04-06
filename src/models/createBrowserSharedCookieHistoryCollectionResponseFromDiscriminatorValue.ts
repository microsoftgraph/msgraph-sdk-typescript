import {BrowserSharedCookieHistoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSharedCookieHistoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BrowserSharedCookieHistoryCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BrowserSharedCookieHistoryCollectionResponse();
}
