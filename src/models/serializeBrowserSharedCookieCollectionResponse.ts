import {BrowserSharedCookie} from './browserSharedCookie';
import {BrowserSharedCookieCollectionResponse} from './browserSharedCookieCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeBrowserSharedCookie} from './serializeBrowserSharedCookie';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBrowserSharedCookieCollectionResponse(writer: SerializationWriter, browserSharedCookieCollectionResponse: BrowserSharedCookieCollectionResponse | undefined = {} as BrowserSharedCookieCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, browserSharedCookieCollectionResponse)
        writer.writeCollectionOfObjectValues<BrowserSharedCookie>("value", browserSharedCookieCollectionResponse.value, serializeBrowserSharedCookie);
}
