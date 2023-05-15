import {BrowserSharedCookieHistory} from './browserSharedCookieHistory';
import {BrowserSharedCookieSourceEnvironment} from './browserSharedCookieSourceEnvironment';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBrowserSharedCookieHistory(browserSharedCookieHistory: BrowserSharedCookieHistory | undefined = {} as BrowserSharedCookieHistory) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { browserSharedCookieHistory.comment = n.getStringValue(); },
        "displayName": n => { browserSharedCookieHistory.displayName = n.getStringValue(); },
        "hostOnly": n => { browserSharedCookieHistory.hostOnly = n.getBooleanValue(); },
        "hostOrDomain": n => { browserSharedCookieHistory.hostOrDomain = n.getStringValue(); },
        "lastModifiedBy": n => { browserSharedCookieHistory.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "@odata.type": n => { browserSharedCookieHistory.odataType = n.getStringValue(); },
        "path": n => { browserSharedCookieHistory.path = n.getStringValue(); },
        "publishedDateTime": n => { browserSharedCookieHistory.publishedDateTime = n.getDateValue(); },
        "sourceEnvironment": n => { browserSharedCookieHistory.sourceEnvironment = n.getEnumValue<BrowserSharedCookieSourceEnvironment>(BrowserSharedCookieSourceEnvironment); },
    }
}
