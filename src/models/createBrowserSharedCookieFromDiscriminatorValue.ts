import {deserializeIntoBrowserSharedCookie} from './deserializeIntoBrowserSharedCookie';
import {BrowserSharedCookie} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSharedCookieFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSharedCookie;
}
