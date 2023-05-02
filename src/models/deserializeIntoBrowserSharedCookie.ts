import {BrowserSharedCookie} from './browserSharedCookie';
import {BrowserSharedCookieHistory} from './browserSharedCookieHistory';
import {BrowserSharedCookieSourceEnvironment} from './browserSharedCookieSourceEnvironment';
import {BrowserSharedCookieStatus} from './browserSharedCookieStatus';
import {createBrowserSharedCookieHistoryFromDiscriminatorValue} from './createBrowserSharedCookieHistoryFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentitySet} from './identitySet';
import {serializeBrowserSharedCookieHistory} from './serializeBrowserSharedCookieHistory';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBrowserSharedCookie(browserSharedCookie: BrowserSharedCookie | undefined = {} as BrowserSharedCookie) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(browserSharedCookie),
        "comment": n => { browserSharedCookie.comment = n.getStringValue(); },
        "createdDateTime": n => { browserSharedCookie.createdDateTime = n.getDateValue(); },
        "deletedDateTime": n => { browserSharedCookie.deletedDateTime = n.getDateValue(); },
        "displayName": n => { browserSharedCookie.displayName = n.getStringValue(); },
        "history": n => { browserSharedCookie.history = n.getCollectionOfObjectValues<BrowserSharedCookieHistory>(createBrowserSharedCookieHistoryFromDiscriminatorValue); },
        "hostOnly": n => { browserSharedCookie.hostOnly = n.getBooleanValue(); },
        "hostOrDomain": n => { browserSharedCookie.hostOrDomain = n.getStringValue(); },
        "lastModifiedBy": n => { browserSharedCookie.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { browserSharedCookie.lastModifiedDateTime = n.getDateValue(); },
        "path": n => { browserSharedCookie.path = n.getStringValue(); },
        "sourceEnvironment": n => { browserSharedCookie.sourceEnvironment = n.getEnumValue<BrowserSharedCookieSourceEnvironment>(BrowserSharedCookieSourceEnvironment); },
        "status": n => { browserSharedCookie.status = n.getEnumValue<BrowserSharedCookieStatus>(BrowserSharedCookieStatus); },
    }
}
