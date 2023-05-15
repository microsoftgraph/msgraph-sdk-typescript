import {deserializeIntoBrowserSharedCookieHistory} from './deserializeIntoBrowserSharedCookieHistory';
import {BrowserSharedCookieHistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSharedCookieHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSharedCookieHistory;
}
