import {BrowserSharedCookie} from './browserSharedCookie';
import {BrowserSharedCookieHistory} from './browserSharedCookieHistory';
import {BrowserSharedCookieSourceEnvironment} from './browserSharedCookieSourceEnvironment';
import {BrowserSharedCookieStatus} from './browserSharedCookieStatus';
import {IdentitySet} from './identitySet';
import {serializeBrowserSharedCookieHistory} from './serializeBrowserSharedCookieHistory';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBrowserSharedCookie(writer: SerializationWriter, browserSharedCookie: BrowserSharedCookie | undefined = {} as BrowserSharedCookie) : void {
        serializeEntity(writer, browserSharedCookie)
        writer.writeStringValue("comment", browserSharedCookie.comment);
        writer.writeDateValue("createdDateTime", browserSharedCookie.createdDateTime);
        writer.writeDateValue("deletedDateTime", browserSharedCookie.deletedDateTime);
        writer.writeStringValue("displayName", browserSharedCookie.displayName);
        writer.writeCollectionOfObjectValues<BrowserSharedCookieHistory>("history", browserSharedCookie.history, serializeBrowserSharedCookieHistory);
        writer.writeBooleanValue("hostOnly", browserSharedCookie.hostOnly);
        writer.writeStringValue("hostOrDomain", browserSharedCookie.hostOrDomain);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", browserSharedCookie.lastModifiedBy, serializeIdentitySet);
        writer.writeDateValue("lastModifiedDateTime", browserSharedCookie.lastModifiedDateTime);
        writer.writeStringValue("path", browserSharedCookie.path);
        writer.writeEnumValue<BrowserSharedCookieSourceEnvironment>("sourceEnvironment", browserSharedCookie.sourceEnvironment);
        writer.writeEnumValue<BrowserSharedCookieStatus>("status", browserSharedCookie.status);
}
