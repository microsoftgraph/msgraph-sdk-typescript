import { deserializeIntoBrowserSharedCookieCollectionResponse } from './deserializeIntoBrowserSharedCookieCollectionResponse';
import { type BrowserSharedCookieCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBrowserSharedCookieCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSharedCookieCollectionResponse;
}
