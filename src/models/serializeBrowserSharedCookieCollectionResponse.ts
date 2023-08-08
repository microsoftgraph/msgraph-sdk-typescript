import type {BrowserSharedCookie} from './browserSharedCookie';
import type {BrowserSharedCookieCollectionResponse} from './browserSharedCookieCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBrowserSharedCookie} from './serializeBrowserSharedCookie';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBrowserSharedCookieCollectionResponse(writer: SerializationWriter, browserSharedCookieCollectionResponse: BrowserSharedCookieCollectionResponse | undefined = {} as BrowserSharedCookieCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, browserSharedCookieCollectionResponse)
        writer.writeCollectionOfObjectValues<BrowserSharedCookie>("value", browserSharedCookieCollectionResponse.value, serializeBrowserSharedCookie);
}
