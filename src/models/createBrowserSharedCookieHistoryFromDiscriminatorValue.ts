import {BrowserSharedCookieHistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSharedCookieHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : BrowserSharedCookieHistory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BrowserSharedCookieHistory();
}
