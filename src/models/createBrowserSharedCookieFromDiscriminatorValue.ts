import { deserializeIntoBrowserSharedCookie } from './deserializeIntoBrowserSharedCookie';
import { type BrowserSharedCookie } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBrowserSharedCookieFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSharedCookie;
}
