import {BrowserSharedCookie} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSharedCookieFromDiscriminatorValue(parseNode: ParseNode | undefined) : BrowserSharedCookie {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BrowserSharedCookie();
}
