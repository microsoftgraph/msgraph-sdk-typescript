import {BrowserSharedCookieHistory} from './browserSharedCookieHistory';
import {BrowserSharedCookieSourceEnvironment} from './browserSharedCookieSourceEnvironment';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBrowserSharedCookieHistory(writer: SerializationWriter, browserSharedCookieHistory: BrowserSharedCookieHistory | undefined = {} as BrowserSharedCookieHistory) : void {
        writer.writeStringValue("comment", browserSharedCookieHistory.comment);
        writer.writeStringValue("displayName", browserSharedCookieHistory.displayName);
        writer.writeBooleanValue("hostOnly", browserSharedCookieHistory.hostOnly);
        writer.writeStringValue("hostOrDomain", browserSharedCookieHistory.hostOrDomain);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", browserSharedCookieHistory.lastModifiedBy, serializeIdentitySet);
        writer.writeStringValue("@odata.type", browserSharedCookieHistory.odataType);
        writer.writeStringValue("path", browserSharedCookieHistory.path);
        writer.writeDateValue("publishedDateTime", browserSharedCookieHistory.publishedDateTime);
        writer.writeEnumValue<BrowserSharedCookieSourceEnvironment>("sourceEnvironment", browserSharedCookieHistory.sourceEnvironment);
        writer.writeAdditionalData(browserSharedCookieHistory.additionalData);
}
