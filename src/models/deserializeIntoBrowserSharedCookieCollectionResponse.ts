import {BrowserSharedCookie} from './browserSharedCookie';
import {BrowserSharedCookieCollectionResponse} from './browserSharedCookieCollectionResponse';
import {createBrowserSharedCookieFromDiscriminatorValue} from './createBrowserSharedCookieFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeBrowserSharedCookie} from './serializeBrowserSharedCookie';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBrowserSharedCookieCollectionResponse(browserSharedCookieCollectionResponse: BrowserSharedCookieCollectionResponse | undefined = {} as BrowserSharedCookieCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(browserSharedCookieCollectionResponse),
        "value": n => { browserSharedCookieCollectionResponse.value = n.getCollectionOfObjectValues<BrowserSharedCookie>(createBrowserSharedCookieFromDiscriminatorValue); },
    }
}
