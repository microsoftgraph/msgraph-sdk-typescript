import {deserializeIntoBrowserSharedCookieCollectionResponse} from './deserializeIntoBrowserSharedCookieCollectionResponse';
import {BrowserSharedCookieCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBrowserSharedCookieCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBrowserSharedCookieCollectionResponse;
}
