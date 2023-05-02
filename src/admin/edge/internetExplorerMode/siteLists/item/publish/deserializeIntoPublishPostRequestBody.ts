import {BrowserSharedCookie} from '../../../../../../models/browserSharedCookie';
import {BrowserSite} from '../../../../../../models/browserSite';
import {createBrowserSharedCookieFromDiscriminatorValue} from '../../../../../../models/createBrowserSharedCookieFromDiscriminatorValue';
import {createBrowserSiteFromDiscriminatorValue} from '../../../../../../models/createBrowserSiteFromDiscriminatorValue';
import {serializeBrowserSharedCookie} from '../../../../../../models/serializeBrowserSharedCookie';
import {serializeBrowserSite} from '../../../../../../models/serializeBrowserSite';
import {PublishPostRequestBody} from './publishPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublishPostRequestBody(publishPostRequestBody: PublishPostRequestBody | undefined = {} as PublishPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "revision": n => { publishPostRequestBody.revision = n.getStringValue(); },
        "sharedCookies": n => { publishPostRequestBody.sharedCookies = n.getCollectionOfObjectValues<BrowserSharedCookie>(createBrowserSharedCookieFromDiscriminatorValue); },
        "sites": n => { publishPostRequestBody.sites = n.getCollectionOfObjectValues<BrowserSite>(createBrowserSiteFromDiscriminatorValue); },
    }
}
